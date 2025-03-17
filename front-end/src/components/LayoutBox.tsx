import React from "react";

export const LayoutBox = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="flex justify-center ">
      <div className="max-w-[970px] w-full ">{children}</div>
    </div>
  );
};
