import { useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export const spring = { type: "spring", stiffness: 100, damping: 15 };
const pointerSpring = { stiffness: 100, damping: 15, mass: 0.5 };

/* Brand icons are inline SVG so they never depend on the lucide version. */
const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const InstagramIcon = (props) => (
  <svg {...svgProps} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const FacebookIcon = (props) => (
  <svg {...svgProps} {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const TikTokIcon = (props) => (
  <svg {...svgProps} {...props}>
    <path d="M16.5 2v9.5a3.5 3.5 0 1 1-3.5-3.5" />
    <path d="M16.5 2c.3 2.5 2 4.5 4.5 5" strokeLinecap="round" />
  </svg>
);

/* Glass spotlight: put onPointerMove={spotlight} on a `.glass.spot` element. */
export function spotlight(e) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

/* Pointer-driven 3D tilt with a moving glare. `rest` is the angle it sits at when idle. */
export function useTilt({ max = 12, rest = { x: 0, y: 0 } } = {}) {
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const hover = useMotionValue(0);

  const rotateY = useSpring(useTransform(px, [0, 1], [rest.y - max, rest.y + max]), pointerSpring);
  const rotateX = useSpring(useTransform(py, [0, 1], [rest.x + max, rest.x - max]), pointerSpring);
  const glareOpacity = useSpring(hover, pointerSpring);
  const gx = useTransform(px, (v) => `${v * 100}%`);
  const gy = useTransform(py, (v) => `${v * 100}%`);
  const glare = useMotionTemplate`radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.45), transparent 60%)`;

  return {
    rotateX,
    rotateY,
    glare,
    glareOpacity,
    onPointerMove(e) {
      if (reduce) return;
      const r = e.currentTarget.getBoundingClientRect();
      px.set((e.clientX - r.left) / r.width);
      py.set((e.clientY - r.top) / r.height);
    },
    onPointerEnter() {
      if (!reduce) hover.set(1);
    },
    onPointerLeave() {
      px.set(0.5);
      py.set(0.5);
      hover.set(0);
    },
  };
}

/* Element drifts toward the cursor, springs back on leave. */
export function Magnetic({ children, strength = 0.3, className = "" }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, pointerSpring);
  const sy = useSpring(y, pointerSpring);

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
      onPointerMove={(e) => {
        if (reduce) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({ children, delay = 0, y = 24, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...spring, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({ title, children }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-lg leading-relaxed text-muted">{children}</p>}
    </Reveal>
  );
}

export function AvatarRing({ initials, image, size = 64 }) {
  return (
    <span className="ig-ring shrink-0">
      <span
        className="grid place-items-center overflow-hidden rounded-full border-[3px] border-white bg-white font-display font-semibold text-ink"
        style={{ width: size, height: size, fontSize: size * 0.32 }}
      >
        {image ? <img src={image} alt="" className="h-full w-full object-cover" /> : initials}
      </span>
    </span>
  );
}

/* Soft light that follows the cursor (mouse devices only). */
export function CursorGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.5 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const move = (e) => {
      x.set(e.clientX - 210);
      y.set(e.clientY - 210);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 -z-10 h-[420px] w-[420px] rounded-full"
      style={{
        x: sx,
        y: sy,
        background: "radial-gradient(circle, rgba(24,119,242,0.12), rgba(24,119,242,0.04) 45%, transparent 70%)",
      }}
    />
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, background: "var(--color-fb)" }}
      className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left"
    />
  );
}
