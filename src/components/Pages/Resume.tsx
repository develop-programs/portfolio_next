"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Education from "@/components/custom/Education";
import Skills from "../custom/Skills";
import Certification from "../custom/Certification";
import Reveal from "../custom/Reveal";

export default function Resume() {
  const [active, setActive] = React.useState<number>(0);
  const EduRef = React.useRef<HTMLDivElement>(null);
  const SkillRef = React.useRef<HTMLDivElement>(null);
  const ExpRef = React.useRef<HTMLDivElement>(null);
  const CertRef = React.useRef<HTMLDivElement>(null);

  const Data = [
    {
      name: "Education",
      ref: EduRef,
      href: "#Education",
    },
    {
      name: "Experience",
      ref: ExpRef,
      href: "#Experience",
    },
    {
      name: "Skills",
      ref: SkillRef,
      href: "#Skills",
    },
    {
      name: "Certificates",
      ref: CertRef,
      href: "#Certificates",
    },
  ];
  return (
    <div className="w-full h-full flex justify-center">
      <div className="container max-w-[100rem] h-screen grid grid-flow-row grid-cols-6">
        <div className="col-span-1 h-full space-y-6 pt-52 hidden lg:block">
          {Data.map((items: any, idk: any) => (
            <div key={idk}>
              <div></div>
              <Button
                variant="ghost"
                className="hover:bg-transparent flex gap-4 items-center font-black text-base"
                onClick={() => {
                  items.ref.current?.scrollIntoView({ behavior: "smooth" });
                  active !== idk && setActive(idk);
                }}
              >
                <div
                  className={`${
                    active === idk && "bg-indigo-600 duration-700 ease-linear"
                  } w-6 h-[4px] rounded-full`}
                ></div>
                {items.name}
              </Button>
            </div>
          ))}
        </div>
        <div className="col-span-6  lg:col-span-5 w-full h-full overflow-y-auto">
          <Reveal>
            <div className="w-full h-auto" ref={EduRef} id="Education">
              <Education />
            </div>
          </Reveal>
          <Reveal>
            <div
              className="w-full h-screen grid place-content-center"
              ref={ExpRef}
              id="Experience"
            >
              <span className="font-bold text-2xl">N/A</span>
            </div>
          </Reveal>

          <Reveal>
            <div className="w-full h-auto" ref={SkillRef} id="Skills">
              <Skills />
            </div>
          </Reveal>
          <Reveal>
            <div className="w-full h-screen" ref={CertRef} id="Certificates">
              <Certification />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
