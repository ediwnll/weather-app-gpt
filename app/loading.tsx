import React from "react";
import { SunIcon } from "@heroicons/react/solid";

function Loading() {
  return (
    <div className="bg-gradient-to-br from-[#655560] to-[#444242] min-h-screen flex flex-col items-center justify-center text-slate-400">
      <SunIcon
        className="h-24 w-24 animate-spin text-yellow-500"
        color="yellow"
      />
      <h1 className=" text-6xl font-bold text-center mb-10 animate-pulse">
        Loading Weather Data
      </h1>
      <h2 className="text-xl font-bold text-center mb-10 animate-pulse">
        Hold on! We are making it neat for you!
      </h2>
    </div>
  );
}

export default Loading;
