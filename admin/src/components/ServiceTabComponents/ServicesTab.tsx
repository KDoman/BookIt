import { useState } from "react";
import Button from "../ui/button/Button";
import { useModal } from "../../hooks/useModal";
import { ServiceTabModal } from "./ServiceTabModal";
import { ServiceMainTable } from "./ServiceMainTable";

export interface Service {
  id: string;
  service: {
    name: string;
    price: number;
    time: number;
  };
  isActive: boolean;
}

// Define the table data using the interface

export default function ServiceTab() {
  const [serviceArray, setServiceArray] = useState<Service[]>([
    {
      id: "#1",
      service: {
        name: "Strzyżenie brzytwą",
        price: 70,
        time: 30,
      },
      isActive: false,
    },
    {
      id: "#2",
      service: {
        name: "Golenie brody",
        price: 80,
        time: 30,
      },
      isActive: false,
    },
    {
      id: "#3",
      service: {
        name: "Long trim",
        price: 150,
        time: 60,
      },
      isActive: false,
    },
    {
      id: "#4",
      service: {
        name: "Obcinanie nożyczkami",
        price: 110,
        time: 90,
      },
      isActive: false,
    },
  ]);
  const [editedService, setEditedService] = useState<Service | null>(null);
  const { isOpen, openModal, closeModal } = useModal();

  const deleteService = (id: string | undefined) => {
    setServiceArray([...serviceArray.filter((service) => service.id !== id)]);
    closeModal();
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto ">
        <ServiceMainTable
          serviceArray={serviceArray}
          openModal={openModal}
          setEditedService={setEditedService}
        />
        <Button
          size="sm"
          className="w-[200px] mx-5 my-4"
          onClick={() => {
            /*
            //
            // TUTAJ BĘDZIE ZAPISYWANIE ZMIAN NA BACK-ENDZIE (SERVICE ARRAY)
            //
            */
            console.log("WYSYŁANIE DO SERWERA LISTY ", serviceArray);
          }}
        >
          Zapisz
        </Button>
        <Button variant="outline">Dodaj</Button>
        <ServiceTabModal
          isOpen={isOpen}
          closeModal={closeModal}
          editedService={editedService}
          serviceArray={serviceArray}
          setEditedService={setEditedService}
          setServiceArray={setServiceArray}
          deleteService={() => deleteService(editedService?.id)}
        />
      </div>
    </div>
  );
}
