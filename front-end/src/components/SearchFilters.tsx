import { CustomDataInput } from "./CustomDataInput";
import { CustomInput } from "./CustomInput";

export const SearchFilters = () => {
  return (
    <div className="flex flex-col  sm:flex-row gap-4 overflow-x-auto pb-2">
      <CustomInput label="Miasto" type="string" />
      <CustomInput label="Miasto" type="string" />
      <CustomDataInput label="Data" />
      <CustomInput label="Typ usługi" type="select" />
    </div>
  );
};
