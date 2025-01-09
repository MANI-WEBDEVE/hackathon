import React from "react";

const Loader = () => {
  return (
    <>
      <div className="flex h-[300px] w-full items-center justify-center bg-gray-50">
        <div className="relative h-24 w-24">
          <div className="absolute h-full w-full animate-spin rounded-full border-4 border-gray-200 border-r-primary border-t-primary"></div>
          <div className="animate-spin-reverse absolute h-full w-full rounded-full border-4 border-b-primary border-l-primary border-r-transparent border-t-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-medium text-primary">Loading...</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
