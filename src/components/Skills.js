
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import {
  SiJavascript, SiReact, SiAngular, SiMongodb, SiCplusplus, SiC,
  SiCsharp, SiDotnet, SiJava, SiMicrosoftazure, SiAmazonaws, SiDocker,
  SiGithub, SiGithubactions, SiVuedotjs, SiVuex, SiTypescript, SiJest,
  SiRedux, SiExpress, SiNetlify, SiPaypal
} from "react-icons/si";

import { FaDatabase, FaCloud, FaLock } from "react-icons/fa"; // generic icons


export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Discover my diverse skill set and proficiency in various technologies, gained through a combination of academic studies and personal projects.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill.name} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <skill.icon className="text-white w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-white">
                   {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}