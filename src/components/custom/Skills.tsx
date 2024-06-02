import React from "react";
import data from "@/lib/data/information.json";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Progress } from "@/components/ui/progress";

export default function Skills() {
  return (
    <div className="w-full h-auto pt-28">
      <div className="text-start space-y-2">
        <span className="text-2xl font-black">{data.resume.skills.title}</span>
        <div className="w-full lg:w-32 h-[4px] rounded-full bg-gradient-to-r from-blue-500 to-pink-500"></div>
      </div>
      <div className="w-full grid grid-flow-row grid-cols-3 gap-6 sm:px-24 pt-6">
        {data.resume.skills.top.map((items, idk) => (
          <div
            key={idk}
            className="w-full flex flex-col items-center col-span-3 sm:col-span-1 text-sm gap-4 p-2 sm:p-6 border-2 rounded-md shadow-lg dark:shadow-slate-500"
          >
            <span className="text-lg font-bold underline underline-offset-4">
              {items.title}
            </span>
            <CircularProgressbar
              value={items.value}
              text={`${items.value}%`}
              className="size-28 font-bold"
              strokeWidth={7}
              styles={buildStyles({
                pathColor: "#2563eb",
                textColor: "#0f172a",
              })}
            />
          </div>
        ))}
      </div>
      <div className="w-full grid grid-flow-row grid-cols-2 pt-6">
        {data.resume.skills.data.map((items, idk) => (
          <div
            className="w-full col-span-2 sm:col-span-1 px-12 py-6 space-y-3"
            key={idk}
          >
            <div className="w-full flex justify-between">
              <span className="text-sm font-bold">{items.title}</span>
              <span>{items.value}%</span>
            </div>
            <Progress value={items.value} />
          </div>
        ))}
      </div>
    </div>
  );
}
