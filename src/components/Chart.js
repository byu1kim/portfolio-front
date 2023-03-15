import React from "react";
import { chartData } from "../data/temp";

// 12 14 16 20
// 24 28 32 40 44 48 52 56 60 64 72 80 96

export default function Chart() {
  return (
    <div className="flex w-full p-5">
      <div className="grid grid-flow-col auto-cols-fr gap-1 items-end justify-evenly w-full m-auto">
        {chartData.map((data) => (
          <div className="flex flex-col items-center ">
            <div className={`w-10 h-${data.value} bg-blue-500 dark:bg-white`}></div>
            <div className="pt-1">{data.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
