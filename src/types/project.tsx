export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  accent: "pink" | "blue" | "green";
  codeUrl: string;
};
