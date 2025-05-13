import { useState } from "react";
interface CustomInputProps {
  label: string;
}

export const CustomDataInput = ({ label }: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div className=" bg-zinc-100  min-w-full  sm:min-w-[200px]">
      <input
        placeholder={label}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type="date"
        className={`w-full p-1.5 text-sm bg-inherit  outline-none border-b-2 transition-colors duration-200 relative pb-2
        ${isFocused ? "border-black" : "border-gray-300"}`}
      />
    </div>
  );
};
