import Image from "next/image";
import React from "react";
import data from "@/lib/data/information.json";
import { Button } from "../ui/button";
import { Pdf_Download } from "@/function/Pdf_Download";

export default function About() {
  return (
    <div className="w-full h-screen">
      <div className="container max-w-8xl h-full flex flex-col lg:flex-row">
        <div className="flex-1 hidden lg:grid place-content-center">
          <Image
            src="/shrey.png"
            alt="not found"
            width={500}
            height={500}
            decoding="async"
            loading="lazy"
          />
        </div>
        <div className="flex-1 grid space-y-6 place-content-center">
          <span className="text-4xl font-black">{data.about.title}</span>
          <span className="text-base tracking-wide leading-6">
            {data.about.desc}
          </span>
          <div className="space-y-3">
            {data.about.details.map((items: any, idk: any) => (
              <div
                className="w-full flex flex-col sm:flex-row sm:gap-4"
                key={idk}
              >
                <div className="font-bold text-base">{items.title} :</div>
                <div className="flex-1 text-xs sm:text-base cursor-default">
                  {items.value.startsWith("https://") ? (
                    <a
                      href={items.value}
                      target="_blank"
                      className="hover:underline hover:underline-offset-4 cursor-pointer text-xs sm:text-sm"
                    >
                      {items.value}
                    </a>
                  ) : (
                    <>{items.value}</>
                  )}
                </div>
              </div>
            ))}
          </div>
          <Button className="w-2/5 py-6" onClick={Pdf_Download}>
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
}
