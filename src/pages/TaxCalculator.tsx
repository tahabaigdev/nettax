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
  const [year, setYear] = useState("2024");
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
        title="Salary Tax Calculator | FBR NTN Verification Tool"
        description="Use Nettax Dost to calculate your salary tax in Pakistan. Check FBR NTN, eFBR status & verify tax info easily. Fast, accurate & trusted by tax experts."
        url="https://nettax.org/tax-calculator"
      />

      <PageHero
        backgroundImageUrl="/images/page-hero-img-03.avif"
        heading="Estimate Smart, Plan Ahead, Save Legally"
        subheading="Quickly calculate your tax liabilities and optimize savings with compliant, strategic insights."
      />

      <div className="pt-[10rem] pb-[4rem] lg:py-[10rem]">
        <div className="container flex gap-[4rem]">
          <div className="w-[35%]">
            <h3 className="text-[4rem] leading-[4.8rem] font-light text-(--primary-color)">
              Salary Tax{" "}
              <strong className="font-bold text-(--base-color-01)">
                Calculator
              </strong>
            </h3>

            <p className="mt-[2rem] text-[2rem] leading-[3rem]">
              Our salary tax calculator is constantly updated with the latest
              regulations and tax rates in Pakistan.
            </p>
          </div>
          <div className="w-[65%] rounded-[.8rem] border border-[#e9e2da] p-[2rem]">
            <div className="flex gap-[2rem]">
              <div className="grid w-full grid-cols-2 gap-[2rem]">
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
              <div className="flex flex-col border-r-[2px] border-(--base-color-01) p-[1rem]">
                <Label
                  htmlFor="monthly-salary"
                  className="text-[1.6rem] leading-[2.4rem] font-light"
                >
                  Monthly Salary
                </Label>

                <Input
                  type="text"
                  name="monthly-salary"
                  readOnly
                  className="border-0 p-0 text-[2.2rem] leading-[2.64rem] font-medium"
                  value={monthlySalary}
                />
              </div>

              <div className="flex flex-col border-r-[2px] border-(--base-color-01) p-[1rem]">
                <Label
                  htmlFor="monthly-tax"
                  className="text-[1.6rem] leading-[2.4rem] font-light"
                >
                  Monthly Tax
                </Label>

                <Input
                  type="text"
                  name="monthly-tax"
                  readOnly
                  className="border-0 p-0 text-[2.2rem] leading-[2.64rem] font-medium"
                  value={result.monthlyTax.toFixed(0)}
                />
              </div>

              <div className="flex flex-col p-[1rem]">
                <Label
                  htmlFor="salary-after-tax"
                  className="text-[1.6rem] leading-[2.4rem] font-light"
                >
                  Salary After Tax
                </Label>

                <Input
                  type="text"
                  name="salary-after-tax"
                  readOnly
                  className="border-0 p-0 text-[2.2rem] leading-[2.64rem] font-medium"
                  value={result.monthlyAfterTax.toFixed(0)}
                />
              </div>

              {/* Yearly Tax Result */}
              <div className="flex flex-col border-t-[2px] border-r-[2px] border-(--base-color-01) p-[1rem]">
                <Label
                  htmlFor="yearly-salary"
                  className="text-[1.6rem] leading-[2.4rem] font-light"
                >
                  Yearly Salary
                </Label>

                <Input
                  type="text"
                  name="yearly-salary"
                  readOnly
                  className="border-0 p-0 text-[2.2rem] leading-[2.64rem] font-medium"
                  value={result.yearlySalary.toFixed(0)}
                />
              </div>

              <div className="flex flex-col border-t-[2px] border-r-[2px] border-(--base-color-01) p-[1rem]">
                <Label
                  htmlFor="yearly-tax"
                  className="text-[1.6rem] leading-[2.4rem] font-light"
                >
                  Yearly Tax
                </Label>

                <Input
                  type="text"
                  name="yearly-tax"
                  readOnly
                  className="border-0 p-0 text-[2.2rem] leading-[2.64rem] font-medium"
                  value={result.yearlyTax.toFixed(0)}
                />
              </div>

              <div className="flex flex-col border-t-[2px] border-(--base-color-01) p-[1rem]">
                <Label
                  htmlFor="salary-after-tax"
                  className="text-[1.6rem] leading-[2.4rem] font-light"
                >
                  Salary After Tax
                </Label>

                <Input
                  type="text"
                  name="salary-after-tax"
                  readOnly
                  className="border-0 p-0 text-[2.2rem] leading-[2.64rem] font-medium"
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
