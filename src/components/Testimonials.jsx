import { Quote } from "lucide-react";
import { SectionHead } from "./ui";
import { portfolioData } from "../data/portfolioData";

export default function Testimonials() {
  const { testimonials } = portfolioData;
  if (!testimonials?.length) return null;
  const loop = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead title="What clients say" />
      </div>
      <div className="marquee no-scrollbar overflow-hidden">
        <div className="marquee-track">
          {loop.map((t, i) => (
            <figure key={i} className="glass flex w-[320px] shrink-0 flex-col justify-center rounded-[24px] p-6">
              <Quote className="h-5 w-5 text-fb/70" />
              <blockquote className="mt-3 text-[0.95rem] leading-relaxed text-ink/85">{t.quote}</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
