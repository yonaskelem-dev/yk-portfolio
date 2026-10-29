import type { ReactNode } from "react";

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-3xl font-bold text-heading md:text-4xl">
      {children}
    </h2>
  );
}

export default SectionTitle;
