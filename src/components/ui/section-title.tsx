import React from "react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-start px-4 md:px-0">
      <h1 className="uppercase font-bold text-2xl ">{children}</h1>
      <span className="w-24 h-1 bg-red-600" />
    </div>
  );
};

export default SectionTitle;
