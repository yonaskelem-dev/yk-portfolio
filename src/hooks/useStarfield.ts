import { useEffect, type RefObject } from "react";

type Star = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
  speed: number;
  sparkle: boolean;
  color: string;
};

type Meteor = { x: number; y: number; vx: number; vy: number };

const COLORS = ["100,220,240", "155,185,255", "195,135,255"];
const METEORS_PER_BURST = 3;

const rand = (min: number, max: number) => min + Math.random() * (max - min);

export function useStarfield(canvasRef: RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let meteors: Meteor[] = [];
    let nextMeteor = 1000;
    let last = 0;
    let frameId = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        200,
        Math.max(100, Math.round((width * height) / 8000)),
      );

      stars = Array.from({ length: count }, () => {
        const x = rand(0, width);

        return {
          x,
          y: rand(0, height),
          vx: rand(-0.08, 0.08),
          vy: rand(-0.08, 0.08),
          r: rand(0.6, 1.5),
          phase: rand(0, 6.28),
          speed: rand(0.5, 1.5),
          sparkle: Math.random() < 0.05,
          color:
            x < width * 0.42 ? COLORS[0]
            : x > width * 0.58 ? COLORS[2]
            : COLORS[1],
        };
      });
    };

    const draw = (time: number) => {
      frameId = requestAnimationFrame(draw);

      if (
        !document.documentElement.classList.contains("dark") ||
        document.hidden
      ) {
        return;
      }

      const step = last ? Math.min(40, time - last) / 16 : 1;
      last = time;

      ctx.clearRect(0, 0, width, height);

      // Dark background
      ctx.fillStyle = "#030712";
      ctx.fillRect(0, 0, width, height);

      // Cyan glow on the left
      const cyanGlow = ctx.createRadialGradient(
        width * 0.2,
        height * 0.4,
        0,
        width * 0.2,
        height * 0.4,
        width * 0.4,
      );
      cyanGlow.addColorStop(0, "rgba(0, 115, 130, 0.20)");
      cyanGlow.addColorStop(1, "rgba(0, 115, 130, 0)");

      ctx.fillStyle = cyanGlow;
      ctx.fillRect(0, 0, width, height);

      // Purple glow on the right
      const purpleGlow = ctx.createRadialGradient(
        width * 0.82,
        height * 0.55,
        0,
        width * 0.82,
        height * 0.55,
        width * 0.42,
      );
      purpleGlow.addColorStop(0, "rgba(100, 25, 130, 0.20)");
      purpleGlow.addColorStop(1, "rgba(100, 25, 130, 0)");

      ctx.fillStyle = purpleGlow;
      ctx.fillRect(0, 0, width, height);

      // Move stars
      if (!still) {
        for (const s of stars) {
          s.x += s.vx * step;
          s.y += s.vy * step;

          if (s.x < -20) s.x = width + 20;
          if (s.x > width + 20) s.x = -20;
          if (s.y < -20) s.y = height + 20;
          if (s.y > height + 20) s.y = -20;
        }
      }

      // Connect nearby stars
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const a = stars[i];
          const b = stars[j];

          const d = Math.hypot(a.x - b.x, a.y - b.y);

          if (d < 135) {
            ctx.strokeStyle = `rgba(150, 180, 255, ${(1 - d / 135) * 0.25})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw glowing stars
      for (const s of stars) {
        const pulse =
          still ? 0.8 : (
            0.55 + 0.45 * Math.sin((time / 1000) * s.speed + s.phase)
          );

        ctx.fillStyle = `rgba(${s.color}, ${pulse * 0.12})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(${s.color}, ${pulse})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();

        // Large four-point sparkles
        if (s.sparkle) {
          const length = s.r * 9;

          ctx.save();
          ctx.translate(s.x, s.y);
          ctx.globalCompositeOperation = "lighter";

          const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, length);
          glow.addColorStop(0, "rgba(255,255,255,0.9)");
          glow.addColorStop(0.2, `rgba(${s.color},0.45)`);
          glow.addColorStop(1, `rgba(${s.color},0)`);

          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(0, 0, length, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = `rgba(255,255,255,${pulse * 0.9})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(-length, 0);
          ctx.lineTo(length, 0);
          ctx.moveTo(0, -length);
          ctx.lineTo(0, length);
          ctx.moveTo(-length * 0.5, -length * 0.5);
          ctx.lineTo(length * 0.5, length * 0.5);
          ctx.moveTo(-length * 0.5, length * 0.5);
          ctx.lineTo(length * 0.5, -length * 0.5);
          ctx.stroke();

          ctx.restore();
        }
      }

      // Meteors
      if (still) return;

      nextMeteor -= step * 16;

      if (nextMeteor <= 0) {
        nextMeteor = rand(3000, 6000);

        for (let i = 0; i < METEORS_PER_BURST; i++) {
          meteors.push({
            x: rand(width * 0.3, width * 1.1),
            y: rand(-20, height * 0.3),
            vx: -rand(9, 13),
            vy: rand(4, 6),
          });
        }
      }

      for (const m of meteors) {
        m.x += m.vx * step;
        m.y += m.vy * step;

        const tailX = m.x - m.vx * 22;
        const tailY = m.y - m.vy * 22;

        const gradient = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        gradient.addColorStop(0, "rgba(255,255,255,0.9)");
        gradient.addColorStop(1, "rgba(150,180,255,0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
      }

      meteors = meteors.filter((m) => m.x > -200 && m.y < height + 50);
    };

    resize();
    window.addEventListener("resize", resize);
    frameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, [canvasRef]);
}
