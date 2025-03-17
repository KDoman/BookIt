import { Autocomplete, AutocompleteItem } from "@heroui/react";

const services = [
  {
    label: "SPA",
    key: "spa",
  },
  {
    label: "Barber",
    key: "barber",
  },
  {
    label: "Fryzjer męski",
    key: "fryzjer meski",
  },
  {
    label: "Fryzjer damski",
    key: "fryzjer damski",
  },
  { label: "Brwi", key: "brwi" },
  { label: "Rzęsy", key: "rzesy" },
  { label: "Masaż", key: "masaz" },
  {
    label: "Treningi personalne",
    key: "treningi personalne",
  },
  {
    label: "Fizjoterapia",
    key: "fizjoterapia",
  },
  {
    label: "Przychodnia weterynaryjna",
    key: "przychodnia weterynaryjna",
  },
  {
    label: "Salon pielęgnacji psów",
    key: "salon pielęgnacji psów",
  },
];

export const AutocompleteInput = () => {
  return (
    <div>
      <Autocomplete
        className="max-w-[200px] sm:max-w-[400px] mx-auto block "
        variant="faded"
        labelPlacement="outside"
        label="Wybierz usługę"
        defaultItems={services}
      >
        {(service) => (
          <AutocompleteItem key={service.key}>{service.label}</AutocompleteItem>
        )}
      </Autocomplete>
    </div>
  );
};
