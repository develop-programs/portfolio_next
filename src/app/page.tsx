"use client";

import About from "@/components/Pages/About";
import Contact from "@/components/Pages/Contact";
import HomeComponent from "@/components/Pages/Home";
import Project from "@/components/Pages/Project";
import Resume from "@/components/Pages/Resume";
import Navbar from "@/components/custom/Navbar";
import Reveal from "@/components/custom/Reveal";
import React from "react";

export default function Home() {
  const [Position, setPosition] = React.useState<boolean>(false);

  const HomeRef = React.useRef<HTMLDivElement>(null);
  const AboutRef = React.useRef<HTMLDivElement>(null);
  const ResumeRef = React.useRef<HTMLDivElement>(null);
  const ProjectRef = React.useRef<HTMLDivElement>(null);
  const ContactRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handdleScroll = () => {
      if (typeof window != "undefined") {
        window.onscroll = () => {
          if (window.scrollY >= 40) {
            setPosition(true);
          } else {
            setPosition(false);
          }
        };
      }
    };
    window.addEventListener("scroll", handdleScroll);
    return () => {
      window.removeEventListener("scroll", handdleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen scroll-smooth">
      <Navbar
        Position={Position}
        data={{
          Home: HomeRef,
          About: AboutRef,
          Resume: ResumeRef,
          Project: ProjectRef,
          Contact: ContactRef,
        }}
      />
      <Reveal>
        <div className="max-h-screen" ref={HomeRef}>
          <HomeComponent />
        </div>
      </Reveal>
      <Reveal>
        <div className="min-h-screen border-t-2" ref={AboutRef}>
          <About />
        </div>
      </Reveal>
      <Reveal>
        <div className="min-h-screen border-t-2" ref={ResumeRef}>
          <Resume />
        </div>
      </Reveal>
      <Reveal>
        <div className="min-h-screen border-t-2" ref={ProjectRef}>
          <Project />
        </div>
      </Reveal>
      <Reveal>
        <div className="min-h-screen border-t-2" ref={ContactRef}>
          <Contact />
        </div>
      </Reveal>
    </main>
  );
}
