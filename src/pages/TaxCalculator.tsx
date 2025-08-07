import HelmetSeo from "@/components/layout/HelmetSeo";
import ServiceSection from "@/components/sections/ServiceSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PageHero from "@/components/ui/PageHero";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { calculateYearlyTax } from "@/lib/taxUtils";

const TaxCalculator = () => {
  const [year, setYear] = useState("2025");
  const [monthlySalary, setMonthlySalary] = useState("");
  const [result, setResult] = useState({
    yearlySalary: 0,
    yearlyTax: 0,
    yearlyAfterTax: 0,
    monthlyTax: 0,
    monthlyAfterTax: 0,
  });

  const handleCalculate = () => {
    const monthly = parseFloat(monthlySalary);
    const yearlySalary = monthly * 12;
    const yearlyTax = calculateYearlyTax(yearlySalary, year);
    const yearlyAfterTax = yearlySalary - yearlyTax;
    const monthlyTax = yearlyTax / 12;
    const monthlyAfterTax = monthly - monthlyTax;

    setResult({
      yearlySalary,
      yearlyTax,
      yearlyAfterTax,
      monthlyTax,
      monthlyAfterTax,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <main>
      <HelmetSeo
        title="Salary Tax Calculator – Pakistan"
        description="Instantly calculate your salary after tax in Pakistan. Our free salary tax calculator uses the latest income tax rules for accurate payroll planning."
        url="https://nettax.org/tax-calculator"
      />

      <PageHero
        backgroundImageUrl="/images/page-hero-img-03.avif"
        heading="Estimate Smart, Plan Ahead, Save Legally"
        subheading="Quickly calculate your tax liabilities and optimize savings with compliant, strategic insights."
      />

      <div className="px-[2rem] pt-[10rem] pb-[4rem] lg:py-[10rem] xl:px-[0rem]">
        <div className="container flex flex-col gap-[4rem] lg:flex-row">
          <div className="lg:w-[35%]">
            <h3 className="text-[3rem] leading-[3.5rem] font-light text-(--primary-color) md:text-[4rem] md:leading-[4.8rem]">
              Salary Tax{" "}
              <strong className="font-bold text-(--base-color-01)">
                Calculator
              </strong>
            </h3>

            <p className="mt-[2rem] text-[2rem] leading-[3rem]">
              Use our free salary tax calculator to quickly estimate your
              monthly or annual take-home salary after tax in Pakistan.
              Regularly updated with the latest income tax slabs and payroll
              regulations, it ensures accurate, compliant, and up-to-date
              results for employees, HR teams, and financial planners.
            </p>
          </div>

          <div className="rounded-[.8rem] border border-[#e9e2da] p-[1rem] md:p-[2rem] lg:w-[65%]">
            <div className="flex flex-col gap-[2rem] md:flex-row">
              <div className="grid w-full grid-cols-1 gap-[2rem] md:grid-cols-2">
                <Select onValueChange={(val) => setYear(val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024-2025</SelectItem>
                    <SelectItem value="2025">2025-2026</SelectItem>
                  </SelectContent>
                </Select>

                <Input
                  className="h-[3.5rem]"
                  placeholder="Enter your monthly salary"
                  value={monthlySalary}
                  onChange={(e) => setMonthlySalary(e.target.value)}
                />
              </div>

              <Button
                onClick={handleCalculate}
                className="h-[3.5rem] cursor-pointer items-center"
              >
                Calculate
              </Button>
            </div>

            <fieldset className="mt-[4rem] grid grid-cols-3">
              {/* Monthly Tax Result */}
              <div className="flex flex-col border-r-[2px] border-(--base-color-01) p-[.5rem] md:p-[1rem]">
                <Label
                  htmlFor="monthly-salary"
                  className="text-[1.2rem] leading-[2rem] font-light md:text-[1.6rem] md:leading-[2.4rem]"
                >
                  Monthly Salary
                </Label>

                <Input
                  type="text"
                  name="monthly-salary"
                  readOnly
                  className="border-0 p-0 text-[1.8rem] leading-[2rem] font-medium md:text-[2.2rem] md:leading-[2.64rem]"
                  value={monthlySalary}
                />
              </div>

              <div className="flex flex-col border-r-[2px] border-(--base-color-01) p-[.5rem] md:p-[1rem]">
                <Label
                  htmlFor="monthly-tax"
                  className="text-[1.2rem] leading-[2rem] font-light md:text-[1.6rem] md:leading-[2.4rem]"
                >
                  Monthly Tax
                </Label>

                <Input
                  type="text"
                  name="monthly-tax"
                  readOnly
                  className="border-0 p-0 text-[1.8rem] leading-[2rem] font-medium md:text-[2.2rem] md:leading-[2.64rem]"
                  value={result.monthlyTax.toFixed(0)}
                />
              </div>

              <div className="flex flex-col p-[.5rem] md:p-[1rem]">
                <Label
                  htmlFor="salary-after-tax"
                  className="text-[1.2rem] leading-[2rem] font-light md:text-[1.6rem] md:leading-[2.4rem]"
                >
                  Salary After Tax
                </Label>

                <Input
                  type="text"
                  name="salary-after-tax"
                  readOnly
                  className="border-0 p-0 text-[1.8rem] leading-[2rem] font-medium md:text-[2.2rem] md:leading-[2.64rem]"
                  value={result.monthlyAfterTax.toFixed(0)}
                />
              </div>

              {/* Yearly Tax Result */}
              <div className="flex flex-col border-t-[2px] border-r-[2px] border-(--base-color-01) p-[.5rem] md:p-[1rem]">
                <Label
                  htmlFor="yearly-salary"
                  className="text-[1.2rem] leading-[2rem] font-light md:text-[1.6rem] md:leading-[2.4rem]"
                >
                  Yearly Salary
                </Label>

                <Input
                  type="text"
                  name="yearly-salary"
                  readOnly
                  className="border-0 p-0 text-[1.8rem] leading-[2rem] font-medium md:text-[2.2rem] md:leading-[2.64rem]"
                  value={result.yearlySalary.toFixed(0)}
                />
              </div>

              <div className="flex flex-col border-t-[2px] border-r-[2px] border-(--base-color-01) p-[.5rem] md:p-[1rem]">
                <Label
                  htmlFor="yearly-tax"
                  className="text-[1.2rem] leading-[2rem] font-light md:text-[1.6rem] md:leading-[2.4rem]"
                >
                  Yearly Tax
                </Label>

                <Input
                  type="text"
                  name="yearly-tax"
                  readOnly
                  className="border-0 p-0 text-[1.8rem] leading-[2rem] font-medium md:text-[2.2rem] md:leading-[2.64rem]"
                  value={result.yearlyTax.toFixed(0)}
                />
              </div>

              <div className="flex flex-col border-t-[2px] border-(--base-color-01) p-[.5rem] md:p-[1rem]">
                <Label
                  htmlFor="salary-after-tax"
                  className="text-[1.2rem] leading-[2rem] font-light md:text-[1.6rem] md:leading-[2.4rem]"
                >
                  Salary After Tax
                </Label>

                <Input
                  type="text"
                  name="salary-after-tax"
                  readOnly
                  className="border-0 p-0 text-[1.8rem] leading-[2rem] font-medium md:text-[2.2rem] md:leading-[2.64rem]"
                  value={result.yearlyAfterTax.toFixed(0)}
                />
              </div>
            </fieldset>
          </div>
        </div>

        <ServiceSection />
      </div>
    </main>
  );
};

export default TaxCalculator;
