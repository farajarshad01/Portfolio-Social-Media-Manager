import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { AvatarRing, FacebookIcon, InstagramIcon, Reveal, SectionHead, spotlight, TikTokIcon, useTilt } from "./ui";
import { portfolioData } from "../data/portfolioData";

function ClientCard({ client, index }) {
  const tilt = useTilt({ max: 6 });

  return (
    <Reveal delay={index * 0.08}>
      <motion.div
        style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformPerspective: 1000 }}
        onPointerMove={(e) => {
          tilt.onPointerMove(e);
          spotlight(e);
        }}
        onPointerEnter={tilt.onPointerEnter}
        onPointerLeave={tilt.onPointerLeave}
        className="glass spot relative flex h-full flex-col gap-5 rounded-[28px] p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <AvatarRing initials={client.initials} image={client.image} size={56} />
            <div>
              <h3 className="font-display text-xl font-semibold">{client.name}</h3>
              <p className="text-sm text-muted">{client.niche}</p>
            </div>
          </div>
          {client.status && (
            <span className="shrink-0 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-muted">{client.status}</span>
          )}
        </div>

        <p className="text-[0.95rem] leading-relaxed text-muted">{client.summary}</p>

        {client.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {client.tags.map((t) => (
              <span key={t} className="rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-ink/70">
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-2.5 pt-2">
          {client.links?.instagram && (
            <a href={client.links.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ig btn-sm">
              <InstagramIcon className="h-4 w-4" />
              {client.handle || "Instagram"}
              <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </a>
          )}
          {client.links?.facebook && (
            <a href={client.links.facebook} target="_blank" rel="noopener noreferrer" className="btn btn-fb btn-sm">
              <FacebookIcon className="h-4 w-4" />
              Facebook
              <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </a>
          )}
          {client.links?.tiktok && (
            <a href={client.links.tiktok} target="_blank" rel="noopener noreferrer" className="btn btn-fb btn-sm">
              <TikTokIcon className="h-4 w-4" />
              TikTok
              <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </a>
          )}
          {!client.links?.instagram && !client.links?.facebook && !client.links?.tiktok && (
            <span className="text-sm italic text-muted">Link coming soon</span>
          )}
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function Clients() {
  const { clients } = portfolioData;
  if (!clients?.length) return null;

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHead title="Pages I run">Real accounts, real posting schedules — here's what I currently manage.</SectionHead>
      <div className="grid gap-6 sm:grid-cols-2">
        {clients.map((c, i) => (
          <ClientCard key={c.id} client={c} index={i} />
        ))}
      </div>
    </section>
  );
}
