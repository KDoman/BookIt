import React from "react";

export const LayoutBox = ({
  children,
  className,
}: {
  children: React.ReactElement;
  className?: string;
}) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="max-w-[970px] w-full ">{children}</div>
    </div>
  );
};
