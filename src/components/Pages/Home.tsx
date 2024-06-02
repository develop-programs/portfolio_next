import React from "react";
import TypewriterComponent from "typewriter-effect";
import data from "@/lib/data/information.json";
import { MyParticlesComponent } from "../particle/Particle";
import { motion } from "framer-motion";

export default function HomeComponent() {
  return (
    <div className="w-full h-screen flex justify-center items-center select-none">
      <MyParticlesComponent />
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "linear", delay: 2 }}
        className="absolute w-auto h-auto p-4 grid text-center leading-loose text-white"
      >
        <span className="text-xl font-bold">{data.home.title}</span>
        <span className="text-6xl sm:text-5xl font-black dark:text-blue-600">
          {data.home.name}
        </span>
        <div className="grid sm:flex items-baseline gap-4 justify-center">
          <span className="text-xl font-bold">I am</span>
          <span className="text-4xl font-black dark:text-blue-600">
            <TypewriterComponent
              options={{
                strings: data.home.role,
                autoStart: true,
                loop: true,
                delay: 150,
                deleteSpeed: 150,
              }}
            />
          </span>
        </div>
      </motion.div>
    </div>
  );
}
