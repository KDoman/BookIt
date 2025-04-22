import { Accordion, AccordionItem, Button } from "@heroui/react";

import { accountFakeData } from "../data/accountFakeData";
import { ReviewMessageModal } from "./ReviewMessageModal";

export const HistoryInfoDiv = () => {
  return (
    <div className="mt-6 divide-y divide-gray-200 border-t border-b border-gray-200">
      <div className="flex items-center justify-between">
        <Accordion className="p-0 m-0 ">
          {accountFakeData[0].history.map((visit) => {
            return (
              <AccordionItem
                key={visit.id}
                subtitle={`${visit.serviceType}, ${visit.date}`}
                title={visit.serviceName}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p>
                      <span className="font-semibold mr-3">Nazwa:</span>
                      {visit.serviceName}
                    </p>
                    <p>
                      <span className="font-semibold mr-3">Typ usługi:</span>
                      {visit.serviceType}
                    </p>
                    <p>
                      <span className="font-semibold mr-3">Data:</span>
                      {visit.date}
                    </p>
                    <p>
                      <span className="font-semibold mr-3">Cena:</span>
                      {visit.price + "zł"}
                    </p>
                  </div>
                  {!visit.rating.message ? (
                    <Button>Oceń usługę</Button>
                  ) : (
                    <ReviewMessageModal
                      message={visit.rating.message}
                      rate={visit.rating.rate}
                    />
                  )}
                </div>
                <Button className="w-full my-6">Umów wizytę ponowie</Button>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};
