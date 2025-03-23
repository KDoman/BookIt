import { LayoutBox } from "../components/LayoutBox";
import { AutocompleteInput } from "../components/AutocompleteInput";
import { Input } from "@heroui/react";

export const SearchResults = () => {
  return (
    <LayoutBox>
      <div className="flex flex-col  md:flex-row justify-center w-full">
        <AutocompleteInput />
        <Input labelPlacement="outside" label="Miasto" variant="faded" />
      </div>
    </LayoutBox>
  );
};
