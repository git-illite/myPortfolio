import {
  SiJavascript, SiReact, SiAngular, SiMongodb, SiCplusplus, SiC, SiDotnet,
  SiDocker, SiGithub, SiGithubactions, SiVuedotjs, SiTypescript, SiJest,
  SiRedux, SiExpress, SiNetlify, SiPaypal, SiUnrealengine, SiRender
} from "react-icons/si";

import {
  FaDatabase, FaJava, FaMicrosoft, FaAws, FaCloud, FaVuejs, FaLock
} from "react-icons/fa";

import { TbBrandCSharp, TbApi } from "react-icons/tb";

export const skillColumns = [
  {
    title: "Frontend",
    skills: [
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiReact, name: "React" },
      { icon: SiVuedotjs, name: "Vue" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiRedux, name: "Redux Toolkit" },
      { icon: SiAngular, name: "Angular" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: SiExpress, name: "Express.js" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: FaDatabase, name: "SQL" },
      { icon: SiDotnet, name: "ASP.NET" },
      { icon: FaJava, name: "Java" },
      { icon: TbBrandCSharp, name: "C#" },
      { icon: TbApi, name: "REST API" },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { icon: FaAws, name: "AWS" },
      { icon: FaMicrosoft, name: "Azure" },
      { icon: SiDocker, name: "Docker" },
      { icon: SiRender, name: "Render" },
      { icon: SiNetlify, name: "Netlify" },
      { icon: SiGithubactions, name: "GitHub Actions" },
    ],
  },
  {
    title: "Testing",
    skills: [
      { icon: SiJest, name: "Jest" },
      { icon: FaCloud, name: "Hurl" },
    ],
  },
  {
    title: "Other",
    skills: [
      { icon: SiUnrealengine, name: "Unreal Blueprints" },
      { icon: SiC, name: "C" },
      { icon: SiCplusplus, name: "C++" },
      { icon: SiGithub, name: "GitHub" },
      { icon: SiPaypal, name: "PayPal Integration" },
      { icon: FaLock, name: "JWT Authentication" },
    ],
  },
];
