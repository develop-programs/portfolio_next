import React from "react";
import data from "@/lib/data/information.json";

export default function Education() {
  return (
    <div className="w-full h-auto pt-32 space-y-4">
      <div className="text-start space-y-2">
        <span className="text-2xl font-black">
          {data.resume.educations.title}
        </span>
        <div className="w-full lg:w-32 h-[4px] rounded-full bg-gradient-to-r from-blue-500 to-pink-500"></div>
      </div>
      <div className="grid space-y-4 divide-y-2">
        {data.resume.educations.higherEdu.map((items, idk) => (
          <div key={idk} className="flex gap-4">
            <div>
              <svg
                width="44"
                height="44"
                viewBox="0 0 143 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.00001 20.5C102.5 -7 42.5 -5 140 21C143.2 22.6 141 24.6667 139.5 25.5C52.5 51.5 92 54.5 3.00001 25C1.50001 24.3333 -0.599986 22.5 3.00001 20.5Z"
                  fill="black"
                />
                <path
                  d="M114 39.5L77.5 51.5C75.5 52.3333 70.5 53 65.5 51.5C60 50 39.1667 42.6667 29 39.5L28.5 67C28.6667 68.1667 29.8 71 33 73C37.264 75.665 44.5 81 71.5 83C97 82 108.5 74.5 114 68V39.5Z"
                  fill="black"
                />
                <path
                  d="M127.5 35L133.5 33V53C136.5 59.5 142 67.5 130.5 75C120 69.5 123 62 127.5 53V35Z"
                  fill="black"
                />
                <path
                  d="M3.00001 20.5C102.5 -7 42.5 -5 140 21C143.2 22.6 141 24.6667 139.5 25.5C52.5 51.5 92 54.5 3.00001 25C1.50001 24.3333 -0.599986 22.5 3.00001 20.5Z"
                  stroke="black"
                />
                <path
                  d="M114 39.5L77.5 51.5C75.5 52.3333 70.5 53 65.5 51.5C60 50 39.1667 42.6667 29 39.5L28.5 67C28.6667 68.1667 29.8 71 33 73C37.264 75.665 44.5 81 71.5 83C97 82 108.5 74.5 114 68V39.5Z"
                  stroke="black"
                />
                <path
                  d="M127.5 35L133.5 33V53C136.5 59.5 142 67.5 130.5 75C120 69.5 123 62 127.5 53V35Z"
                  stroke="black"
                />
              </svg>
            </div>
            <div className="flex-1 grid space-y-2 py-2">
              <span className="text-base font-bold">{items.duration}</span>
              <span className="text-2xl font-black">{items.title}</span>
              <span className="text-xl font-semibold">{items.from}</span>
              <span className="text-base text-muted-foreground font-bold">
                {items.desc}
              </span>
            </div>
          </div>
        ))}
        {data.resume.educations.underGrad.map((items, idk) => (
          <div key={idk} className="flex gap-4">
            <div>
              <svg
                width="44"
                height="44"
                viewBox="0 0 143 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.00001 20.5C102.5 -7 42.5 -5 140 21C143.2 22.6 141 24.6667 139.5 25.5C52.5 51.5 92 54.5 3.00001 25C1.50001 24.3333 -0.599986 22.5 3.00001 20.5Z"
                  fill="black"
                />
                <path
                  d="M114 39.5L77.5 51.5C75.5 52.3333 70.5 53 65.5 51.5C60 50 39.1667 42.6667 29 39.5L28.5 67C28.6667 68.1667 29.8 71 33 73C37.264 75.665 44.5 81 71.5 83C97 82 108.5 74.5 114 68V39.5Z"
                  fill="black"
                />
                <path
                  d="M127.5 35L133.5 33V53C136.5 59.5 142 67.5 130.5 75C120 69.5 123 62 127.5 53V35Z"
                  fill="black"
                />
                <path
                  d="M3.00001 20.5C102.5 -7 42.5 -5 140 21C143.2 22.6 141 24.6667 139.5 25.5C52.5 51.5 92 54.5 3.00001 25C1.50001 24.3333 -0.599986 22.5 3.00001 20.5Z"
                  stroke="black"
                />
                <path
                  d="M114 39.5L77.5 51.5C75.5 52.3333 70.5 53 65.5 51.5C60 50 39.1667 42.6667 29 39.5L28.5 67C28.6667 68.1667 29.8 71 33 73C37.264 75.665 44.5 81 71.5 83C97 82 108.5 74.5 114 68V39.5Z"
                  stroke="black"
                />
                <path
                  d="M127.5 35L133.5 33V53C136.5 59.5 142 67.5 130.5 75C120 69.5 123 62 127.5 53V35Z"
                  stroke="black"
                />
              </svg>
            </div>
            <div className="flex-1 grid space-y-2 py-2">
              <span className="text-base font-bold">{items.duration}</span>
              <span className="text-2xl font-black">{items.title}</span>
              <span className="text-xl font-semibold">{items.from}</span>
              <span className="text-base text-muted-foreground font-bold">
                {items.desc}
              </span>
            </div>
          </div>
        ))}
        {data.resume.educations.Extras.map((items, idk) => (
          <div key={idk} className="flex gap-4">
            <div>
              <svg
                width="44"
                height="44"
                viewBox="0 0 143 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.00001 20.5C102.5 -7 42.5 -5 140 21C143.2 22.6 141 24.6667 139.5 25.5C52.5 51.5 92 54.5 3.00001 25C1.50001 24.3333 -0.599986 22.5 3.00001 20.5Z"
                  fill="black"
                />
                <path
                  d="M114 39.5L77.5 51.5C75.5 52.3333 70.5 53 65.5 51.5C60 50 39.1667 42.6667 29 39.5L28.5 67C28.6667 68.1667 29.8 71 33 73C37.264 75.665 44.5 81 71.5 83C97 82 108.5 74.5 114 68V39.5Z"
                  fill="black"
                />
                <path
                  d="M127.5 35L133.5 33V53C136.5 59.5 142 67.5 130.5 75C120 69.5 123 62 127.5 53V35Z"
                  fill="black"
                />
                <path
                  d="M3.00001 20.5C102.5 -7 42.5 -5 140 21C143.2 22.6 141 24.6667 139.5 25.5C52.5 51.5 92 54.5 3.00001 25C1.50001 24.3333 -0.599986 22.5 3.00001 20.5Z"
                  stroke="black"
                />
                <path
                  d="M114 39.5L77.5 51.5C75.5 52.3333 70.5 53 65.5 51.5C60 50 39.1667 42.6667 29 39.5L28.5 67C28.6667 68.1667 29.8 71 33 73C37.264 75.665 44.5 81 71.5 83C97 82 108.5 74.5 114 68V39.5Z"
                  stroke="black"
                />
                <path
                  d="M127.5 35L133.5 33V53C136.5 59.5 142 67.5 130.5 75C120 69.5 123 62 127.5 53V35Z"
                  stroke="black"
                />
              </svg>
            </div>
            <div className="flex-1 grid space-y-2 py-2">
              <span className="text-base font-bold">{items.duration}</span>
              <span className="text-2xl font-black">{items.title}</span>
              <span className="text-xl font-semibold">{items.from}</span>
              <span className="text-base text-muted-foreground font-bold">
                {items.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
