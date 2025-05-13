import { FC, useState } from "react";

interface CustomInputProps {
  label: string;
  type: string;
}

export const CustomInput: FC<CustomInputProps> = ({ label, type }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div className=" bg-zinc-100 min-w-full sm:min-w-[200px]">
      <input
        placeholder={label}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type={type}
        className={`w-full p-2 text-sm bg-inherit  outline-none border-b-2 transition-colors duration-200 relative
        ${isFocused ? "border-black" : "border-gray-300"}`}
      />
    </div>
  );
};
