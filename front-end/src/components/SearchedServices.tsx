import { Button } from "@heroui/react";
import { servicesFakeData } from "../data/servicesFakeData";

export const SearchedServices = ({ items }: { items: servicesFakeData[] }) => {
  return items.map((item) => (
    <div className="flex flex-col gap-5 py-5 px-2">
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between">
          <p className="font-semibold">{item.name}</p>
          <p className="font-semibold">{item.rating}</p>
        </div>
        <p className="text-sm text-gray-400">
          {item.street}, {item.city}
        </p>
      </div>

      <div className="flex gap-2">
        <Button
          size="sm"
          variant="bordered"
          className="hover:bg-black hover:border-black hover:text-white rounded-sm"
        >
          Szczegóły
        </Button>
        <Button size="sm" className="rounded-sm">
          Umów wizytę
        </Button>
      </div>
    </div>
  ));
};
