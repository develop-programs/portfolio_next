import { SetTheme } from "@/components/custom/SetTheme";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import React from "react";

export default function page({ params }: { params: { info: string } }) {
  return (
    <div className="w-full h-screen">
      <div className="px-12 py-4 flex justify-between items-center">
        <Link href="/">
          <Button
            variant="ghost"
            className="hover:bg-transparent focus-visible:outline-none"
          >
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
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            Back
          </Button>
        </Link>
        <SetTheme />
      </div>
      <div className="container max-w-8xl pt-12 space-y-12">
        <div className="w-full flex gap-12">
          <div className="flex-1">
            <div className="w-full h-96 bg-slate-500 rounded-md"></div>
          </div>
          <div className="flex-1 space-y-6">
            <span className="text-4xl font-black">Site Name</span>
            <div className="space-y-4">
              <span className="text-xl font-bold">Technologies</span>
              <ul className="list-disc space-y-2">
                <li>React</li>
                <li>Tailwind</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="space-x-4">
              <Button variant="outline" size="lg">
                Live Demo
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base font-black">GitHub Repo :</span>
              <Link href="/">
                <Button
                  variant="link"
                  size="sm"
                  className="flex gap-2 items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                    />
                  </svg>
                  https://github.com/develop-programs/weather_final.git
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full space-y-6">
          <span className="text-3xl font-black">About</span>
          <p className="text-muted-foreground text-base font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            optio quia quibusdam, aliquam illo dolor perferendis pariatur modi
            excepturi eaque, nulla eum! Ad magnam officiis assumenda provident
            veritatis dolorem officia amet distinctio blanditiis, illum eos
            atque labore saepe unde nobis quam, cupiditate hic cum! Labore hic
            asperiores tempora ipsam autem praesentium laboriosam suscipit
            possimus incidunt exercitationem atque, quod explicabo at architecto
            sit nostrum libero iure animi inventore obcaecati quidem a. Numquam
            eum labore dolore deserunt dolores voluptatem aspernatur rem
            voluptatum harum voluptates, laboriosam odit error maiores
            accusantium ratione enim eligendi ducimus necessitatibus tempore?
            Dolorem impedit nobis soluta odio laborum consectetur?
          </p>
        </div>
      </div>
    </div>
  );
}
