import type { ComponentType } from "react";

export type Skill = {
  name: string;
  icon: ComponentType<{ size?: number; color?: string }>;
  color: string;
};
