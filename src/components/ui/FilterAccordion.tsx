import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

type Tab = {
  label: string;
  value: string;
};

type AccordionItemData = {
  title: string;
  content: string;
};

interface FilterAccordionProps {
  tabs: Tab[];
  accordionData: Record<string, AccordionItemData[]>;
}

const FilterAccordion: React.FC<FilterAccordionProps> = ({
  tabs,
  accordionData,
}) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.value || "");

  return (
    <div className="mx-auto max-w-[84rem]">
      {/* Tabs */}
      <ul className="flex items-center justify-center gap-[2rem] border-b border-solid border-[#C9C9C9]">
        {tabs.map((item) => (
          <li key={item.value}>
            <button
              onClick={() => setActiveTab(item.value)}
              className={`${
                activeTab === item.value
                  ? "border-b-[4px] border-[var(--primary-color)]"
                  : "border-b-[4px] border-transparent"
              } inline-flex px-[2.4rem] py-[1.6rem] text-[1.6rem] leading-[2.4rem] font-normal tracking-[-0.08px]`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Accordion */}
      <Accordion defaultValue="item-0" type="single" collapsible>
        {accordionData[activeTab]?.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="!border-b border-solid border-[#C9C9C9] pt-[2.8rem] pb-[3.2rem]"
          >
            <AccordionTrigger className="rounded-none border-[var(--primary-color)] text-[1.8rem] leading-[2.4rem] text-[var(--primary-color)] !no-underline hover:text-(--base-color-01) data-[state=open]:border-l-[4px] data-[state=open]:pl-[1rem]">
              <span>{item.title}</span>
              <Plus className="size-[2rem] transition-transform duration-300" />
            </AccordionTrigger>
            <AccordionContent className="pt-[1.5rem] text-[1.4rem] font-light">
              <p>{item.content}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FilterAccordion;
