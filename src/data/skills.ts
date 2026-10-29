import { Brain } from "lucide-react";
import {
  SiCss,
  SiExpress,
  SiFastapi,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiReact,
} from "react-icons/si";
import type { Skill } from "@/types/skill";

export const skills: Skill[] = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Express", icon: SiExpress, color: "currentColor" },
  { name: "Git and GitHub", icon: SiGit, color: "#F05032" },
  { name: "Machine learning", icon: Brain, color: "#F05F57" },
];
