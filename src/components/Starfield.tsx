import { useRef } from "react";
import { useStarfield } from "@/hooks/useStarfield";

function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useStarfield(canvasRef);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-0 transition-opacity duration-700 dark:opacity-100"
    />
  );
}

export default Starfield;
