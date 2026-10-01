import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Reveal, SectionHead } from "./ui";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.4"] });
  const height = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), { stiffness: 90, damping: 20 });

  if (!experience?.length) return null;

  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-28">
      <SectionHead title="Experience" />
      <div ref={ref} className="relative pl-10">
        <div className="absolute bottom-1 left-[7px] top-1 w-px bg-ink/10" />
        <motion.div className="absolute left-[7px] top-1 w-px bg-fb" style={{ height }} />

        <ul className="space-y-10">
          {experience.map((e, i) => (
            <Reveal key={`${e.role}-${e.org}`} delay={i * 0.06} y={16}>
              <li className="relative">
                <span className="absolute -left-[38px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-fb" />
                <p className="text-xs font-medium uppercase tracking-wide text-muted">{e.period}</p>
                <h3 className="mt-1 font-display text-xl font-semibold">
                  {e.role} · {e.org}
                </h3>
                {e.points?.length > 0 && (
                  <ul className="mt-2 space-y-1 text-sm leading-relaxed text-muted">
                    {e.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>
                )}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
