import { PencilIcon } from "../../icons";
import Badge from "../ui/badge/Badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Service } from "./ServicesTab";

export const ServiceMainTable = ({
  serviceArray,
  openModal,
  setEditedService,
}: {
  serviceArray: Service[];
  openModal: () => void;
  setEditedService: (arg: Service) => void;
}) => {
  return (
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
        {serviceArray.map((order: Service) => (
          <TableRow key={order.id}>
            <TableCell className="px-5 py-4 sm:px-6 text-start">
              <Badge size="sm" color={order.isActive ? "success" : "error"}>
                {order.isActive ? "Włączone" : "Wyłączone"}
              </Badge>
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
              <div className="flex -space-x-2">{order.service.price} zł</div>
            </TableCell>
            <TableCell className="px-4 py-3  text-start text-theme-sm dark:text-white/90">
              <div className="flex -space-x-2">{order.service.time} min</div>
            </TableCell>
            <TableCell className="px-4 py-3  text-start text-theme-sm dark:text-white/90 items-center flex">
              <button className="border-1 p-1 rounded-lg overflow-hidden hover:bg-zinc-200 transition-colors">
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
  );
};
