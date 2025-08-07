// taxUtils.ts
export type TaxSlab = {
  min: number;
  max: number;
  base: number;
  rate: number;
};

export const taxSlabs: Record<string, TaxSlab[]> = {
  "2024": [
    { min: 0, max: 600000, base: 0, rate: 0 },
    { min: 600001, max: 1200000, base: 0, rate: 0.05 },
    { min: 1200001, max: 2200000, base: 30000, rate: 0.15 },
    { min: 2200001, max: 3200000, base: 180000, rate: 0.25 },
    { min: 3200001, max: 4100000, base: 430000, rate: 0.3 },
    { min: 4100001, max: Infinity, base: 700000, rate: 0.35 },
  ],
  "2025": [
    { min: 0, max: 600000, base: 0, rate: 0 },
    { min: 600001, max: 1200000, base: 0, rate: 0.01 },
    { min: 1200001, max: 2200000, base: 6000, rate: 0.11 },
    { min: 2200001, max: 3200000, base: 116000, rate: 0.23 },
    { min: 3200001, max: 4100000, base: 346000, rate: 0.3 },
    { min: 4100001, max: Infinity, base: 616000, rate: 0.35 },
  ],
};

export const calculateYearlyTax = (
  annualSalary: number,
  year: string,
): number => {
  const slabs = taxSlabs[year];
  const slab = slabs.find(
    (s) => annualSalary >= s.min && annualSalary <= s.max,
  );
  if (!slab) return 0;
  return slab.base + (annualSalary - slab.min) * slab.rate;
};
