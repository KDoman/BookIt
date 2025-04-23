import { Accordion, AccordionItem, Button } from "@heroui/react";

import { accountFakeData } from "../data/accountFakeData";

export const VisitInfoDiv = () => {
  return (
    <div className="mt-6 divide-y divide-gray-200 border-t border-b border-gray-200">
      <div className="flex items-center justify-between">
        <Accordion className="p-0 m-0 ">
          {accountFakeData[0].futureVisits.map((visit) => {
            return (
              <AccordionItem
                key={visit.id}
                subtitle={`${visit.serviceType}, ${visit.date}`}
                title={visit.serviceName}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p>
                      <span className="font-semibold mr-3 block sm:inline">
                        Nazwa:
                      </span>
                      {visit.serviceName}
                    </p>
                    <p>
                      <span className="font-semibold mr-3 block sm:inline">
                        Typ usługi:
                      </span>
                      {visit.serviceType}
                    </p>
                    <p>
                      <span className="font-semibold mr-3 block sm:inline">
                        Data:
                      </span>
                      {visit.date}
                    </p>
                    <p>
                      <span className="font-semibold mr-3 block sm:inline">
                        Miejsce:
                      </span>
                      {visit.address.city}, {visit.address.street}
                    </p>
                    <p>
                      <span className="font-semibold mr-3 block sm:inline">
                        Cena:
                      </span>
                      {visit.price + "zł"}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Button>Edytuj wizytę</Button>
                    <Button color="danger">Anuluj wizytę</Button>
                  </div>
                </div>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};
