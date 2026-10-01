import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { AvatarRing, FacebookIcon, InstagramIcon, Magnetic, Reveal, spotlight } from "./ui";
import { portfolioData } from "../data/portfolioData";

const SOCIAL_ICON = { instagram: InstagramIcon, facebook: FacebookIcon };

export default function Contact() {
  const { profile, contact } = portfolioData;

  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-28">
      <Reveal>
        <div onPointerMove={spotlight} className="glass spot relative overflow-hidden rounded-[32px] p-10 text-center sm:p-14">
          <AvatarRing initials={profile.name.split(" ").map((n) => n[0]).join("")} image={profile.avatar} size={64} />
          <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Let's run your page next.</h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted">
            Tell me about your business and I'll put together a plan for your Instagram and Facebook.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Magnetic>
              <a href={`mailto:${contact.email}`} className="btn btn-fb">
                <Mail className="h-4 w-4" />
                {contact.email}
              </a>
            </Magnetic>
            {contact.phone && (
              <Magnetic>
                <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="btn btn-glass">
                  <Phone className="h-4 w-4" />
                  {contact.phone}
                </a>
              </Magnetic>
            )}
            {contact.socials?.map((s) => {
              const Icon = SOCIAL_ICON[s.type] || ArrowUpRight;
              return (
                <Magnetic key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="btn btn-glass">
                    <Icon className="h-4 w-4" />
                    {s.label}
                  </a>
                </Magnetic>
              );
            })}
          </div>

          {profile.location && <p className="mt-6 text-sm text-muted">Based in {profile.location}</p>}
        </div>
      </Reveal>
    </section>
  );
}
