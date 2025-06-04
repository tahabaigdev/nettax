import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./textarea";
import { Checkbox } from "./checkbox";
import { Button } from "./button";
import { useState } from "react";

interface FormDataType {
  fullname: string;
  email: string;
  query: string;
  topics: string[]; // new field
}

type ErrorType = {
  [K in keyof FormDataType]?: string;
};

type TouchedType = {
  [K in keyof FormDataType]?: boolean;
};

const helpTopics = [
  "NTN Registration",
  "Sales Tax Registration",
  "Income Tax Return",
  "Trademark Registration",
  "Sales Tax Return",
  "Other",
];

const ContactForm = () => {
  const [submitStatus, setSubmitStatus] = useState("");
  const [formData, setFormData] = useState<FormDataType>({
    fullname: "",
    email: "",
    query: "",
    topics: [],
  });

  const [errors, setErrors] = useState<ErrorType>({});
  const [touched, setTouched] = useState<TouchedType>({});

  const handleCheckboxChange = (id: string, checked: boolean) => {
    setFormData((prev) => {
      const updatedTopics = checked
        ? [...prev.topics, id]
        : prev.topics.filter((topic) => topic !== id);

      return { ...prev, topics: updatedTopics };
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    if (errors[name as keyof ErrorType]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    if (touched[name as keyof TouchedType]) {
      validateField(name as keyof FormDataType, value);
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const value = formData[name as keyof FormDataType];
    if (typeof value === "string") {
      validateField(name as keyof FormDataType, value);
    }
  };

  const validateField = (fieldName: keyof FormDataType, value: string) => {
    let error = "";

    if (!value.trim()) {
      error = "This field is required";
    } else if (
      fieldName === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ) {
      error = "Must be valid email. example@yourdomain.com";
    }

    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key as keyof FormDataType] = true;
      return acc;
    }, {} as TouchedType);
    setTouched(allTouched);

    // Validate all fields
    Object.entries(formData).forEach(([key, value]) => {
      if (typeof value === "string") {
        validateField(key as keyof FormDataType, value);
      }
    });

    // Check if there are any errors
    if (Object.values(errors).some((error) => error)) {
      return;
    }

    try {
      const response = await fetch("https://www.nettax.org/submit_form.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          ...formData,
          topics: formData.topics.join(", "), // Convert array to comma-separated string
        }).toString(),
      });

      if (response.ok) {
        setSubmitStatus(
          "Thank you for contacting Nettax. We will get in touch with you shortly.",
        );
        setFormData({
          fullname: "",
          email: "",
          query: "",
          topics: [],
        });
        setErrors({});
        setTouched({});
      } else {
        setSubmitStatus("Form submission failed.");
      }
    } catch {
      setSubmitStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="shadow-01 overflow-hidden rounded-tl-[1.2rem] rounded-tr-[1.2rem] bg-[#ffffff] px-[2rem] py-[3rem]">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-[1rem] gap-y-[2rem] md:grid-cols-2"
      >
        <div className="flex flex-col gap-[.5rem]">
          <Label htmlFor="fullname">Full Name</Label>

          <Input
            value={formData.fullname}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            name="fullname"
            placeholder="Your Full Name"
            className={`${errors.fullname ? "border-[#E50914]" : ""}`}
          />
          {errors.fullname && (
            <span className="text-[1rem] text-[#E50914]">
              {errors.fullname}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-[.5rem]">
          <Label htmlFor="email">Email</Label>

          <Input
            type="text"
            name="email"
            placeholder="Your Email Id"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${errors.email ? "border-[#E50914]" : ""}`}
          />
          {errors.email && (
            <span className="text-[1rem] text-[#E50914]">{errors.email}</span>
          )}
        </div>

        <div className="flex flex-col gap-[.5rem] md:col-span-2">
          <Label htmlFor="query">Tell us about your query</Label>

          <Textarea
            placeholder="Type your query here."
            name="query"
            value={formData.query}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${errors.query ? "border-[#E50914]" : ""}`}
          />
          {errors.query && (
            <span className="text-[1rem] text-[#E50914]">{errors.query}</span>
          )}
        </div>

        <div className="flex flex-col gap-[1rem] md:col-span-2">
          <Label htmlFor="email">How can we help?</Label>

          <div className="grid grid-cols-2 gap-y-[1rem] md:grid-cols-3">
            {helpTopics.map((topic) => {
              const id = topic.toLowerCase().replace(/\s+/g, "-");
              return (
                <div key={id} className="flex items-center gap-[.5rem]">
                  <Checkbox
                    id={id}
                    checked={formData.topics.includes(topic)}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange(topic, !!checked)
                    }
                  />
                  <Label
                    htmlFor={id}
                    className="text-[1.2rem] leading-[1.6rem] font-normal"
                  >
                    {topic}
                  </Label>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col md:col-span-2">
          <Button className="w-[100%]">Submit Now</Button>

          {submitStatus && (
            <p className="mt-4 text-center text-[1.4rem] text-[#000000] sm:col-span-2">
              {submitStatus}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
