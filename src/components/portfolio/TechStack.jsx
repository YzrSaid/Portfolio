import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiUnity,
  SiFirebase
} from "react-icons/si";
import { Code2 } from "lucide-react";
import { FaFlutter } from "react-icons/fa6";

const technologies = [
  {
    icon: SiUnity,
    name: "Unity",
    color: "text-black-400",
    bg: "border-gray-300",
  },
  {
    icon: FaFlutter,
    name: "Flutter",
    color: "text-black-400",
    bg: "border-gray-300",
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    color: "text-black-400",
    bg: "border-gray-300",
  },
  {
    icon: IoLogoJavascript,
    name: "JavaScript",
    color: "text-black-400",
    bg: "border-gray-300",
  },
  {
    icon: SiFirebase,
    name: "Firebase",
    color: "text-black-500",
    bg: "border-gray-300",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind",
    color: "text-black-400",
    bg: "border-gray-300",
  },
  {
    icon: FaGitAlt,
    name: "Git",
    color: "text-black-500",
    bg: "border-gray-300",
  },
  {
    icon: FaGithub,
    name: "GitHub",
    color: "text-foreground",
    bg: "border-gray-300",
  },
  {
    icon: FaHtml5,
    name: "HTML5",
    color: "text-black-600",
    bg: "border-gray-300",
  },
  {
    icon: FaCss3,
    name: "CSS3",
    color: "text-black-500",
    bg: "border-gray-300",
  },
];

const TechStack = () => {
  return (
    <div className="rounded-2xl glass-card p-6 h-full flex flex-col justify-center">
      <div className="flex items-center gap-3 mb-5">
        <div className="rounded-lg bg-primary/5 p-2 ring-1 ring-primary/10">
          <Code2 className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-heading font-bold text-foreground">
          Tech Stack
        </h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-300 hover:scale-105 cursor-default ${tech.bg}`}
          >
            <tech.icon
              className={`w-5 h-5 !fill-current ${tech.color}`}
            />
            <span className="text-sm font-medium text-foreground/80">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TechStack;
