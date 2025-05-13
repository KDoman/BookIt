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
      <div className="max-w-[1400px] w-full mx-2">{children}</div>
    </div>
  );
};
