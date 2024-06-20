import React from "react";

const TempPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-10 ">
      <div className="flex w-full h-full mt-10 py-10 text-3xl font-bold items-center justify-center">
        Temp page
      </div>
      <div className="text-2xl font-bold">
        This page's route layout do not has navbar, header etc..
      </div>
    </div>
  );
};

export default TempPage;
