import { useState } from "react";
import Checkbox from "./form/input/Checkbox";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "./ui/table";
import { PencilIcon } from "../icons";
import Button from "./ui/button/Button";
import { Modal } from "./ui/modal";
import { useModal } from "../hooks/useModal";

interface Service {
  id: string;
  service: {
    name: string;
    price: number;
    time: number;
  };
  isActive: boolean;
}

// Define the table data using the interface

export default function ServicesTable() {
  const { isOpen, openModal, closeModal } = useModal();
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
  const [editedService, setEditedService] = useState<Service | undefined>(
    undefined
  );

  const updateServiceArray = (id: string) => {
    setServiceArray(
      serviceArray.map((service) => {
        if (service.id === id) {
          return { ...service, isChecked: !service.isActive };
        } else {
          return service;
        }
      })
    );
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto ">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Status
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Nazwa usługi
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Cena
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Czas usługi
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Edytuj
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {serviceArray.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <Checkbox
                    checked={order.isActive}
                    onChange={() => {
                      updateServiceArray(order.id);
                    }}
                  />
                </TableCell>
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="flex items-center gap-3">
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {order.service.name}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3  text-start text-theme-sm dark:text-white/90">
                  <div className="flex -space-x-2">
                    {order.service.price} zł
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3  text-start text-theme-sm dark:text-white/90">
                  <div className="flex -space-x-2">
                    {order.service.time} min
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3  text-start text-theme-sm dark:text-white/90 items-center flex">
                  <button className="border-1 p-1 rounded-lg overflow-hidden hover:bg-zinc-200 transition-colors">
                    {/* 
                    // 
                    
                    
                    TUTAJ ODPALANIE MODALU
                    
                    
                    
                    
                    */}
                    <PencilIcon
                      className="w-6 h-6"
                      onClick={() => {
                        openModal();
                        setEditedService(order);
                      }}
                    />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button size="sm" className="w-[200px] mx-5 my-4">
          Zapisz
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          className="max-w-[700px] p-6 lg:p-10"
        >
          <div className="flex flex-col px-2 overflow-y-auto custom-scrollbar">
            <div>
              <h5 className="mb-8 font-semibold text-gray-800 modal-title text-theme-xl dark:text-white/90 lg:text-2xl">
                {editedService?.service.name}
              </h5>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Nazwa usługi
                </label>
                <input
                  id="event-title"
                  type="text"
                  defaultValue={editedService?.service.name}
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Cena usługi
                </label>
                <input
                  id="event-title"
                  type="number"
                  defaultValue={editedService?.service.price}
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Czas usługi (minuty)
                </label>
                <input
                  id="event-title"
                  type="number"
                  defaultValue={editedService?.service.time}
                  onChange={(e) =>
                    editedService &&
                    setEditedService({
                      ...editedService,
                      service: {
                        ...editedService?.service,
                        time: Number(e.target.value),
                      },
                    })
                  }
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6 modal-footer sm:justify-end">
              <button
                onClick={closeModal}
                type="button"
                className="flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] sm:w-auto"
              >
                Zamknij
              </button>
              <button
                type="button"
                className="btn btn-success btn-update-event flex w-full justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 sm:w-auto"
                onClick={() => {
                  if (editedService)
                    setServiceArray(
                      serviceArray.map((service) => {
                        if (service.id === editedService.id) {
                          return editedService;
                        } else {
                          return service;
                        }
                      })
                    );
                  closeModal();
                }}
              >
                Zapisz
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
