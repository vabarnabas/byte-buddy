import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Spinner() {
  return (
    <div className="flex flex-1 w-full h-full items-center justify-center">
      <AiOutlineLoading3Quarters className="animate-spin text-4xl" />
    </div>
  );
}
