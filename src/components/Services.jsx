import { motion } from "framer-motion";
import { Clapperboard, LayoutGrid, Megaphone, MessageCircle, Palette, TrendingUp } from "lucide-react";
import { Reveal, SectionHead } from "./ui";
import { portfolioData } from "../data/portfolioData";

const ICONS = { palette: Palette, layout: LayoutGrid, message: MessageCircle, megaphone: Megaphone, film: Clapperboard, trend: TrendingUp };

export default function Services() {
  const { services } = portfolioData;
  if (!services?.length) return null;

  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHead title="What I do">From the first post idea to the ad that turns it into a client.</SectionHead>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = ICONS[s.icon] || Palette;
          return (
            <Reveal key={s.title} delay={(i % 3) * 0.07}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="glass h-full rounded-[24px] p-6"
              >
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-fb text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
