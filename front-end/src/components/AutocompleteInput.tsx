import { Autocomplete, AutocompleteItem } from "@heroui/react";
import { useDispatch } from "react-redux";
import { setValue } from "../redux/slices/inputValueSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store.js";

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
    key: "fryzjer męski",
  },
  {
    label: "Fryzjer damski",
    key: "fryzjer damski",
  },
  { label: "Brwi", key: "brwi" },
  { label: "Rzęsy", key: "rzęsy" },
  { label: "Masaż", key: "masaż" },
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
  const dispatch = useDispatch();

  const serviceValue: string | undefined = useSelector(
    (state: RootState) => state.inputValue.value
  );
  return (
    <div>
      <Autocomplete
        variant="faded"
        labelPlacement="outside"
        label="Wybierz usługę"
        defaultItems={services}
        defaultInputValue={serviceValue}
      >
        {(service) => (
          <AutocompleteItem
            onPress={() => dispatch(setValue(service.key))}
            key={service.key}
          >
            {service.label}
          </AutocompleteItem>
        )}
      </Autocomplete>
    </div>
  );
};
