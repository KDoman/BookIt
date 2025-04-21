import { Accordion, AccordionItem } from "@heroui/react";

export const HistoryInfoDiv = () => {
  return (
    <div className="mt-6 divide-y divide-gray-200 border-t border-b border-gray-200">
      <div className="flex items-center justify-between">
        <Accordion className="p-0 m-0">
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            subtitle="Press to expand"
            title="Accordion 1"
          >
            test1
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            subtitle={
              <span>
                Press to expand <strong>key 2</strong>
              </span>
            }
            title="Accordion 2"
          >
            test2
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            subtitle="Press to expand"
            title="Accordion 3"
          >
            test3
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
