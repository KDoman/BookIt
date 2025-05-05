import { useState } from "react";
import { useModal } from "../../hooks/useModal";
import { PencilIcon } from "../../icons";
import Badge from "../ui/badge/Badge";
import Button from "../ui/button/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { WorkersTabModal } from "./WorkersTabModal";
import { AddWorkerModal } from "./AddWorkerModal";

export interface Worker {
  id: number;
  name: string;
  schedule: any;
  isActive: boolean;
  reviewNumber: number;
  reviewAverage: number;
}

// Define the table data using the interface
const tableData: Worker[] = [
  {
    id: 1,
    name: "Patryk",
    schedule: {},
    isActive: true,
    reviewNumber: 10,
    reviewAverage: 12,
  },
  {
    id: 2,
    name: "Daria",
    schedule: {},
    isActive: true,
    reviewNumber: 10,
    reviewAverage: 12,
  },
  {
    id: 3,
    name: "Olek",
    schedule: {},
    isActive: false,
    reviewNumber: 5,
    reviewAverage: 3,
  },
  {
    id: 4,
    name: "Kacper",
    schedule: {},
    isActive: true,
    reviewNumber: 10,
    reviewAverage: 12,
  },
];

export default function WorkersTab() {
  const {
    isOpen: addWorkerModalisOpen,
    closeModal: addWorkerModalcloseModal,
    openModal: addWorkerModalopenModal,
  } = useModal();
  const { isOpen, closeModal, openModal } = useModal();
  const [editedWorker, setEditedWorker] = useState<Worker>(tableData[0]);
  const [workersArray, setWorkersArray] = useState<Worker[]>(tableData);
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
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
                Imię
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Grafik
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Ilość ocen
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Średnia ocen
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
            {workersArray.map((worker: Worker) => (
              <TableRow key={worker.id}>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  <Badge
                    size="sm"
                    color={worker.isActive ? "success" : "error"}
                  >
                    {worker.isActive ? "Akatywny" : "Niekatywny"}
                  </Badge>
                </TableCell>
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="flex items-center gap-3">
                    <p className="text-theme-sm font-medium">{worker.name}</p>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  <Button className="hover:bg-brand-500" variant="outline">
                    Ustaw grafik
                  </Button>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {worker.reviewNumber}
                </TableCell>

                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {worker.reviewAverage}
                </TableCell>
                <TableCell className="px-4 py-3  text-start text-theme-sm dark:text-white/90 items-center flex">
                  <button className="border-1 p-1 rounded-lg overflow-hidden hover:bg-zinc-200 transition-colors">
                    <PencilIcon
                      className="w-6 h-6"
                      onClick={() => {
                        openModal();
                        setEditedWorker(worker);
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
        <Button variant="outline" onClick={addWorkerModalopenModal}>
          Dodaj
        </Button>
        <AddWorkerModal
          isOpen={addWorkerModalisOpen}
          closeModal={addWorkerModalcloseModal}
        />
        <WorkersTabModal
          isOpen={isOpen}
          closeModal={closeModal}
          editedWorker={editedWorker}
          setEditedWorker={setEditedWorker}
          setWorkersArray={setWorkersArray}
          workersArray={workersArray}
        />
      </div>
    </div>
  );
}
