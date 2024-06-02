"use client";
import React from "react";
import { Button } from "../ui/button";

export default function Project() {
  const [hover, setHover] = React.useState(-1);
  return (
    <div className="w-full h-auto lg:pt-44 py-4">
      <div className="container max-w-[100vw] grid grid-flow-row grid-cols-3 gap-4">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="relative col-span-3  lg:col-span-1 w-full h-80 bg-slate-500 rounded-md"
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(-1)}
          >
            <div
              className={`absolute inset-0 w-full h-full ${
                hover == i
                  ? "visible duration-700 ease-in"
                  : "hidden duration-700 ease-out"
              } bg-black/50 grid place-content-center rounded-md`}
            >
              <div className="space-x-4">
                <Button variant="secondary" size="lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                    />
                  </svg>
                  Visit
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <a href={`/${i}`} className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                      />
                    </svg>
                    info
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
