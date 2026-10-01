import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { AvatarRing, InstagramIcon, Magnetic, spotlight, spring } from "./ui";
import { portfolioData } from "../data/portfolioData";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } };
const line = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: spring } };

export default function Hero() {
  const { profile, clients } = portfolioData;
  const featured = clients[0];

  return (
    <section id="hero" className="relative flex min-h-[92vh] items-center pb-20 pt-28">
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          {profile.availability && (
            <motion.div variants={line} className="glass mb-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fb opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-fb" />
              </span>
              {profile.availability}
            </motion.div>
          )}

          <motion.h1
            variants={line}
            className="font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.25rem]"
          >
            {profile.headline}
          </motion.h1>

          <motion.p variants={line} className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            {profile.intro}
          </motion.p>

          <motion.div variants={line} className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a href="#showcase" className="btn btn-glass">
                See the work
              </a>
            </Magnetic>
            {featured?.links?.instagram && (
              <Magnetic>
                <a href={featured.links.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ig">
                  <InstagramIcon className="h-4 w-4" />
                  {featured.handle}
                </a>
              </Magnetic>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...spring, delay: 0.35 }}
          whileHover={{ scale: 1.02 }}
          onPointerMove={spotlight}
          className="glass spot relative mx-auto w-full max-w-sm rounded-[28px] p-6"
        >
          <div className="flex items-center gap-3">
            <AvatarRing
              initials={profile.name.split(" ").map((n) => n[0]).join("")}
              image={profile.avatar}
              size={56}
            />
            <div>
              <p className="font-display text-base font-semibold">{profile.name}</p>
              <p className="text-sm text-muted">{profile.role}</p>
            </div>
          </div>
          {featured && (
            <div className="mt-6 rounded-2xl bg-white/60 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-muted">Currently managing</p>
              <p className="mt-1 font-display text-lg font-semibold">{featured.name}</p>
              <p className="text-sm text-muted">{featured.niche}</p>
            </div>
          )}
        </motion.div>
      </div>

      <motion.a
        href="#work"
        aria-label="Scroll to work"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-5 w-5 text-muted" />
      </motion.a>
    </section>
  );
}
