"use client";
import React, { RefObject } from "react";
import { SetTheme } from "./SetTheme";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Navbar({
  Position,
  data,
}: {
  Position: boolean;
  data?: any;
}) {
  const [active, setActive] = React.useState<number>(0);

  function ScrollTo(ref: RefObject<HTMLDivElement>) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  const Data = [
    {
      name: "Home",
      ref: data?.Home,
    },
    {
      name: "About",
      ref: data?.About,
    },
    {
      name: "Resume",
      ref: data?.Resume,
    },
    {
      name: "Project",
      ref: data?.Project,
    },
    {
      name: "Contact",
      ref: data?.Contact,
    },
  ];

  React.useEffect(() => {
    const handdleScroll = () => {
      if (typeof window != "undefined") {
        if (window.scrollY >= data.About.current.offsetTop - 100) {
          active !== 1 && setActive(1);
        }
        if (window.scrollY >= data.Resume.current.offsetTop - 100) {
          active !== 2 && setActive(2);
        }
        if (window.scrollY >= data.Project.current.offsetTop - 100) {
          active !== 3 && setActive(3);
        }
        if (window.scrollY >= data.Contact.current.offsetTop - 100) {
          active !== 4 && setActive(4);
        }
        if (window.scrollY <= data.About.current.offsetTop - 200) {
          setActive(0);
        }
      }
    };
    window.addEventListener("scroll", handdleScroll);
    return () => {
      window.removeEventListener("scroll", handdleScroll);
    };
  }, [data]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={`${
        Position
          ? "bg-white text-black dark:text-white dark:bg-slate-800 shadow-lg duration-500 ease-in"
          : "text-white duration-700 ease-out"
      } fixed w-full h-auto py-4 px-4 sm:px-12 flex z-[10]`}
    >
      <div className="flex-1 sm:col-span-4 flex justify-start items-center">
        <span className="sm:text-base lg:text-2xl font-black">PORTFOLIO</span>
      </div>
      <div className="flex-1 hidden sm:flex justify-center items-center">
        <div
          className={`flex justify-center items-center ${
            Position
              ? "bg-transparent duration-700 ease-in"
              : "bg-white dark:bg-slate-800 duration-500 ease-out"
          } py-2 px-2 rounded-full`}
        >
          {Data.map((item, index) => {
            return (
              <Button
                onClick={() => {
                  ScrollTo(item.ref);
                  active !== index && setActive(index);
                }}
                key={index}
                variant="ghost"
                className={`focus-visible:outline-none grid hover:bg-transparent sm:text-xs lg:text-sm ${
                  Position
                    ? "text-black hover:text-black/70 dark:text-white dark:hover:text-white/70"
                    : "text-blue-800 hover:text-blue-600 dark:text-white dark:hover:text-white/70"
                }`}
              >
                {item.name}
                <div
                  className={`${
                    active === index
                      ? "w-full duration-1000 animate-in"
                      : "w-0 duration-1000 animate-out"
                  }  h-[2px] rounded-full bg-blue-500`}
                ></div>
              </Button>
            );
          })}
        </div>
      </div>
      <div className="flex-1 sm:col-span-4 flex justify-end items-center">
        <SetTheme />
      </div>
    </motion.div>
  );
}
