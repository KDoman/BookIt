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
    key: "fryzjer_meski",
  },
  {
    label: "Fryzjer damski",
    key: "fryzjer_damski",
  },
  { label: "Brwi", key: "brwi" },
  { label: "Rzęsy", key: "rzesy" },
  { label: "Masaż", key: "masaz" },
  {
    label: "Treningi personalne",
    key: "treningi_personalne",
  },
  {
    label: "Fizjoterapia",
    key: "fizjoterapia",
  },
  {
    label: "Przychodnia weterynaryjna",
    key: "przychodnia_weterynaryjna",
  },
  {
    label: "Salon pielęgnacji psów",
    key: "salon_pielęgnacji_psów",
  },
];

export const AutocompleteInput = ({
  setService,
}: {
  setService: (arg0: string) => void;
}) => {
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
          <AutocompleteItem
            onPress={() => setService(service.key)}
            key={service.key}
          >
            {service.label}
          </AutocompleteItem>
        )}
      </Autocomplete>
    </div>
  );
};
