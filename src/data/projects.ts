import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Driving school system",
    description:
      "A web app for managing students, instructors, lessons and schedules for a driving school.",
    tags: ["JavaScript", "React", "Node.js"],
    accent: "pink",
    codeUrl: "https://github.com/ShumShufer/back-end",
    image: "/projects/driving-school.png",
  },
  {
    id: 2,
    title: "Electronic health record system",
    description: "A system for storing and managing patient health records.",
    tags: ["Java"],
    accent: "blue",
    codeUrl: "https://github.com/yonaskelem-dev/Eletronic_Health_Record_System",
  },
  {
    id: 3,
    title: "Breast cancer predictor",
    description:
      "A tool that predicts breast cancer results using machine learning.",
    tags: ["Python", "ML"],
    accent: "green",
    codeUrl: "https://github.com/yonaskelem-dev/breast-cancer-predictor",
  },
];
