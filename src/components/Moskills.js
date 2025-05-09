import React from "react";
import { Tab } from "@headlessui/react";
import { skillColumns } from "../modata";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";

const categories = {
  Frontend: [
    "JavaScript",
    "React",
    "Vue",
    "TypeScript",
    "Redux Toolkit",
    "Angular",
  ],
  Backend: [
    "Express.js",
    "Node.js",
    "MongoDB",
    "SQL",
    "ASP.NET",
    "Java",
    "C#",
    "REST API",
  ],
  DevOps: ["AWS", "Azure", "Docker", "Render", "Netlify", "GitHub Actions"],
  Testing: ["Jest", "Hurl"],
  Other: ["Unreal Blueprints", "C", "C++", "GitHub"],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Moskills() {
  return (
    <section id="skills" className="scroll-mt-28 pt-28 pb-28">
    <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Discover my diverse skill set and proficiency in various technologies, gained through a combination of academic studies and personal projects.
          </p>
    </div>    
        
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skillColumns.map((category, idx) => (
          <div key={idx} className="space-y-4 text-center">
            <h3 className="text-white font-bold text-lg">
              {category.title}
            </h3>
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-gray-800 p-3 rounded-lg flex items-center gap-3"
              >
                <skill.icon className="w-6 h-6 text-green-400" />
                <span className="text-white font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div></section>
  );
}
