import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { Reveal, SectionHead } from "./ui";
import { portfolioData } from "../data/portfolioData";

const CATEGORIES = [
  { key: "post", label: "Posts", aspect: "aspect-[4/5]" },
  { key: "reel-cover", label: "Reel covers", aspect: "aspect-[2/3]" },
  { key: "story", label: "Stories", aspect: "aspect-[9/16]" },
];

const PREVIEW_COUNT = 6;

// Lightweight card — no backdrop-blur per tile, since a category can show
// dozens of these at once inside the modal grid. The frosted-glass look is
// reserved for the modal panel itself.
function Thumb({ item, aspect, clickable, onClick }) {
  const [broken, setBroken] = useState(!item.image);
  const [a, b] = item.tint || ["#e2e8f0", "#f1f5f9"];

  return (
    <motion.div
      onClick={onClick}
      whileHover={clickable ? { y: -4, scale: 1.03 } : undefined}
      whileTap={clickable ? { scale: 0.98 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={clickable ? (e) => e.key === "Enter" && onClick() : undefined}
      className={`group relative shrink-0 overflow-hidden rounded-2xl border border-white/80 bg-white/70 p-1 shadow-sm ${
        clickable ? "w-[120px] cursor-pointer sm:w-[136px]" : "w-full"
      }`}
    >
      <div className={`relative ${aspect} overflow-hidden rounded-xl`}>
        {broken ? (
          <div
            className="flex h-full w-full items-center justify-center px-2 text-center"
            style={{ background: `linear-gradient(150deg, ${a}, ${b})` }}
          >
            <span className="font-display text-[0.65rem] font-medium text-ink/50">{item.title}</span>
          </div>
        ) : (
          <img
            src={item.image}
            alt={item.title}
            onError={() => setBroken(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent p-2 pt-6">
          <p className="truncate text-[0.7rem] font-medium text-white">{item.title}</p>
        </div>
      </div>
    </motion.div>
  );
}

function CategoryModal({ category, items, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 8 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
        className="glass flex h-[80vh] w-full max-w-5xl flex-col rounded-[28px] p-5 sm:h-[60vh] sm:p-7"
      >
        <div className="mb-4 flex shrink-0 items-center justify-between">
          <h3 className="font-display text-xl font-semibold">
            {category.label} <span className="text-base font-normal text-muted">({items.length})</span>
          </h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="grid h-9 w-9 place-items-center rounded-full bg-white/70 transition-colors hover:bg-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="grid auto-rows-min grid-cols-3 gap-3 overflow-y-auto pr-1 sm:grid-cols-4 md:grid-cols-5">
          {items.map((item) => (
            <Thumb key={item.id} item={item} aspect={category.aspect} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function CategoryRow({ category, items }) {
  const [open, setOpen] = useState(false);
  const preview = items.slice(0, PREVIEW_COUNT);

  if (!items.length) return null;

  return (
    <Reveal className="mb-10 last:mb-0">
      <div className="mb-3 flex items-end justify-between">
        <h3 className="font-display text-lg font-semibold">
          {category.label} <span className="text-sm font-normal text-muted">({items.length})</span>
        </h3>
        <button
          onClick={() => setOpen(true)}
          className="flex shrink-0 items-center gap-1 text-sm font-medium text-fb transition-opacity hover:opacity-70"
        >
          View all <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {preview.map((item) => (
          <Thumb key={item.id} item={item} aspect={category.aspect} clickable onClick={() => setOpen(true)} />
        ))}
      </div>

      <AnimatePresence>
        {open && <CategoryModal category={category} items={items} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </Reveal>
  );
}

export default function Showcase() {
  const { posts } = portfolioData;
  if (!posts?.length) return null;

  return (
    <section id="showcase" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHead title="Post design">Feed posts, stories and reel covers, pulled straight from client work.</SectionHead>
      {CATEGORIES.map((cat) => (
        <CategoryRow key={cat.key} category={cat} items={posts.filter((p) => p.type === cat.key)} />
      ))}
    </section>
  );
}
