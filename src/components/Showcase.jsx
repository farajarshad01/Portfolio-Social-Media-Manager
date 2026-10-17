import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { AvatarRing, Reveal, SectionHead, spotlight } from "./ui";
import { portfolioData } from "../data/portfolioData";

const PREVIEW_COUNT = 4;
const DEFAULT_RATIO = 0.8;
const TYPE_LABEL = { post: "Post", story: "Story", "reel-cover": "Reel cover", print: "Pamphlet" };

const initialsOf = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

/* The image itself, with a soft gradient stand-in if the file is missing.
   `ratio` in the data file avoids layout jumps; without it, the real ratio is read once the image loads. */
function Picture({ item, className = "", fallbackClassName = "h-full w-full", onRatio }) {
  const [broken, setBroken] = useState(!item.image);
  const [a, b] = item.tint || ["#e2e8f0", "#f1f5f9"];

  if (broken) {
    return (
      <div
        className={`flex items-center justify-center px-3 text-center ${fallbackClassName}`}
        style={{ background: `linear-gradient(150deg, ${a}, ${b})` }}
      >
        <span className="font-display text-xs font-medium text-ink/50">{item.title}</span>
      </div>
    );
  }

  return (
    <img
      src={item.image}
      alt={item.title}
      draggable={false}
      onLoad={(e) => onRatio?.(e.currentTarget.naturalWidth / e.currentTarget.naturalHeight)}
      onError={() => setBroken(true)}
      className={className}
    />
  );
}

function Caption({ title }) {
  return (
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent p-2 pt-6 text-left">
      <p className="truncate text-[0.7rem] font-medium text-white">{title}</p>
    </div>
  );
}

function useRatio(item) {
  const [ratio, setRatio] = useState(item.ratio || DEFAULT_RATIO);
  return [ratio, item.ratio ? undefined : setRatio];
}

/* Small picture inside a client card. Widths follow each design's own shape, so the row always fills the card
   edge to edge with no cropping. */
function PreviewThumb({ item }) {
  const [ratio, onRatio] = useRatio(item);
  return (
    <div
      style={{ flex: `${ratio} 1 0%`, aspectRatio: ratio }}
      className="min-w-0 overflow-hidden rounded-xl border border-white/80 bg-white/70 shadow-sm"
    >
      <Picture
        item={item}
        onRatio={onRatio}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
}

function ClientCard({ client, items, onOpen }) {
  const featured = items.filter((i) => i.featured);
  const picks = (featured.length ? featured : items).slice(0, PREVIEW_COUNT);

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label={`Open ${client.name} designs`}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      onPointerMove={spotlight}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="glass spot group flex cursor-pointer flex-col gap-5 rounded-[28px] p-5 sm:p-6"
    >
      <div className="flex items-center gap-3.5">
        <AvatarRing initials={initialsOf(client.name)} image={client.logo} size={48} />
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-display text-lg font-semibold">{client.name}</h3>
          <p className="text-sm text-muted">
            {items.length} {items.length === 1 ? "design" : "designs"}
          </p>
        </div>
        <span className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-fb">
          <span className="hidden sm:inline">View all</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>

      <div className="flex items-start gap-2">
        {picks.map((item) => (
          <PreviewThumb key={item.id} item={item} />
        ))}
      </div>
    </motion.div>
  );
}

/* Card inside the popup. Rows are "justified": every card in a row shares a height and stretches to fill the width. */
function GridThumb({ item, onOpen }) {
  const [ratio, onRatio] = useRatio(item);
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      aria-label={`View ${item.title} full size`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      style={{ height: "var(--row-h)", flexGrow: ratio * 100, flexBasis: `calc(var(--row-h) * ${ratio})` }}
      className="group relative min-w-0 overflow-hidden rounded-xl border border-white/80 bg-white/70 shadow-sm"
    >
      <Picture
        item={item}
        onRatio={onRatio}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <Caption title={item.title} />
    </motion.button>
  );
}

function IconButton({ label, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full bg-white/70 transition-colors hover:bg-white"
    >
      {children}
    </button>
  );
}

function Popup({ client, items, onClose, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${client.name} designs`}
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
        <div className="mb-4 flex shrink-0 items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <AvatarRing initials={initialsOf(client.name)} image={client.logo} size={40} />
            <h3 className="truncate font-display text-xl font-semibold">
              {client.name} <span className="text-base font-normal text-muted">({items.length})</span>
            </h3>
          </div>
          <IconButton label="Close" onClick={onClose}>
            <X className="h-4 w-4" />
          </IconButton>
        </div>

        <div className="flex min-h-0 flex-1 flex-wrap content-start gap-3 overflow-y-auto pr-1 [--row-h:112px] sm:[--row-h:148px]">
          {items.map((item, i) => (
            <GridThumb key={item.id} item={item} onOpen={() => onOpen(i)} />
          ))}
          {/* keeps the last row from stretching across the whole width */}
          <span aria-hidden="true" className="grow-[1000] basis-0" />
        </div>
      </motion.div>
    </motion.div>
  );
}

function FullView({ item, index, total, onClose, onStep }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/50 p-3 backdrop-blur-md sm:p-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 8 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
        className="glass flex max-h-full w-full max-w-3xl flex-col rounded-[28px] p-3 sm:p-4"
      >
        <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-2xl bg-white/60">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="flex items-center justify-center"
            >
              <Picture
                item={item}
                className="max-h-[72vh] w-auto max-w-full object-contain"
                fallbackClassName="aspect-[4/5] h-[60vh]"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3 px-1 sm:px-2">
          <div className="min-w-0">
            <p className="truncate font-display text-lg font-semibold">{item.title}</p>
            <span className="mt-1 inline-block rounded-full bg-white/70 px-2.5 py-0.5 text-xs font-medium text-muted">
              {TYPE_LABEL[item.type] || "Design"}
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <span className="mr-1 hidden text-sm text-muted sm:inline">
              {index + 1} / {total}
            </span>
            <IconButton label="Previous design" onClick={() => onStep(-1)}>
              <ChevronLeft className="h-4 w-4" />
            </IconButton>
            <IconButton label="Next design" onClick={() => onStep(1)}>
              <ChevronRight className="h-4 w-4" />
            </IconButton>
            <IconButton label="Close" onClick={onClose}>
              <X className="h-4 w-4" />
            </IconButton>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Showcase() {
  const { posts = [], designClients = [] } = portfolioData;
  const groups = designClients
    .map((client) => ({ client, items: posts.filter((p) => p.client === client.id) }))
    .filter((g) => g.items.length > 0);

  const [openId, setOpenId] = useState(null);
  const [full, setFull] = useState(null);

  const active = groups.find((g) => g.client.id === openId);
  const items = active ? active.items : [];

  const step = useCallback(
    (d) => setFull((i) => (i === null || !items.length ? i : (i + d + items.length) % items.length)),
    [items.length]
  );

  // Esc closes the top-most layer, arrows flip through the full view, and the page behind stops scrolling.
  useEffect(() => {
    if (openId === null && full === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") {
        if (full !== null) setFull(null);
        else setOpenId(null);
      } else if (full !== null && e.key === "ArrowRight") step(1);
      else if (full !== null && e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [openId, full, step]);

  if (!groups.length) return null;

  return (
    <section id="showcase" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHead title="Post design">
        Pick a client to browse the posts, stories and covers I designed for them.
      </SectionHead>

      <div className="grid gap-6 lg:grid-cols-2">
        {groups.map((g, i) => (
          <Reveal key={g.client.id} delay={(i % 2) * 0.08}>
            <ClientCard client={g.client} items={g.items} onOpen={() => setOpenId(g.client.id)} />
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <Popup
            key={active.client.id}
            client={active.client}
            items={active.items}
            onClose={() => setOpenId(null)}
            onOpen={(i) => setFull(i)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {full !== null && items[full] && (
          <FullView
            key="full-view"
            item={items[full]}
            index={full}
            total={items.length}
            onClose={() => setFull(null)}
            onStep={step}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
