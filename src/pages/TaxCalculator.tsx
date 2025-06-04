import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState, type FormEvent } from "react";

const TaxCalculator = () => {
  const [salary, setSalary] = useState<string>("");
  const [year, setYear] = useState<string>("2024");

  const [monthlyTax, setMonthlyTax] = useState<string>("0.00");
  const [monthlySalaryAfterTax, setMonthlySalaryAfterTax] =
    useState<string>("0.00");
  const [yearlySalary, setYearlySalary] = useState<string>("0.00");
  const [yearlyTax, setYearlyTax] = useState<string>("0.00");
  const [yearlySalaryAfterTax, setYearlySalaryAfterTax] =
    useState<string>("0.00");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const parsedSalary = parseFloat(salary);
    if (isNaN(parsedSalary)) {
      alert("Please enter a valid salary");
      return;
    }

    const yearlySalary = parsedSalary * 12;
    let yearlyTax = 0;

    if (yearlySalary <= 600000) {
      yearlyTax = 0;
    } else if (yearlySalary <= 1200000) {
      yearlyTax = (yearlySalary - 600000) * 0.05;
    } else if (yearlySalary <= 2200000) {
      yearlyTax = 30000 + (yearlySalary - 1200000) * 0.15;
    } else if (yearlySalary <= 3200000) {
      yearlyTax = 180000 + (yearlySalary - 2200000) * 0.25;
    } else if (yearlySalary <= 4100000) {
      yearlyTax = 430000 + (yearlySalary - 3200000) * 0.3;
    } else {
      yearlyTax = 700000 + (yearlySalary - 4100000) * 0.35;
    }

    const monthlyTax = yearlyTax / 12;
    const monthlySalaryAfterTax = parsedSalary - monthlyTax;
    const yearlySalaryAfterTax = yearlySalary - yearlyTax;

    setMonthlyTax(monthlyTax.toFixed(2));
    setMonthlySalaryAfterTax(monthlySalaryAfterTax.toFixed(2));
    setYearlySalary(yearlySalary.toFixed(2));
    setYearlyTax(yearlyTax.toFixed(2));
    setYearlySalaryAfterTax(yearlySalaryAfterTax.toFixed(2));
  };

  const handleReset = () => {
    setSalary("");
    setYear("2024");
    setMonthlyTax("0.00");
    setMonthlySalaryAfterTax("0.00");
    setYearlySalary("0.00");
    setYearlyTax("0.00");
    setYearlySalaryAfterTax("0.00");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-[10rem] pb-[4rem] lg:py-[10rem]">
      <div className="container w-full p-6 md:p-14">
        <form
          onSubmit={handleSubmit}
          className="mb-6 flex w-full flex-col items-end gap-4 lg:flex-row lg:justify-between"
        >
          <div className="flex w-full flex-1 flex-col lg:w-1/2">
            <label className="mb-[.5rem] inline-block text-[1.6rem] leading-[2.4rem]">
              Select Salary Tax Year
            </label>

            <Select value={year} onValueChange={(value) => setYear(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024-2025</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex w-full flex-1 flex-col lg:w-1/2">
            <label className="mb-[.5rem] inline-block text-[1.6rem] leading-[2.4rem]">
              Enter Your Monthly Salary (PKR)
            </label>

            <Input
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="h-[3.5rem]"
              placeholder="Enter Your Salary eg(3200)"
            />
          </div>

          <div className="mt-6 flex w-full flex-col gap-4 sm:w-fit sm:flex-row">
            <Button type="submit">Submit Now</Button>
            <Button type="button" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </form>

        <div className="flex flex-wrap justify-between rounded-md bg-gray-100 p-6 shadow-md">
          {[
            {
              label: "Monthly Salary",
              value: parseFloat(salary || "0").toFixed(2),
            },
            { label: "Monthly Tax", value: monthlyTax },
            { label: "Salary After Tax", value: monthlySalaryAfterTax },
            { label: "Yearly Salary", value: yearlySalary },
            { label: "Yearly Tax", value: yearlyTax },
            { label: "Salary After Tax", value: yearlySalaryAfterTax },
          ].map((item, index) => (
            <div
              key={index}
              className="mb-6 w-full text-center sm:w-1/2 md:w-1/3 lg:w-1/6"
            >
              <p>{item.label}</p>
              <p className="mt-2 text-2xl font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaxCalculator;
