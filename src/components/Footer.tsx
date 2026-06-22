import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail } from "lucide-react";
import { business, services } from "@/lib/site-data";

const legal = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-conditions", label: "Terms & Conditions" },
  { to: "/cookie-policy", label: "Cookie Policy" },
  { to: "/refund-policy", label: "Refund Policy" },
  { to: "/return-policy", label: "Return Policy" },
];

const pages = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-sage pt-20">
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-primary-glow/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-3xl text-primary">Knudsen</span>
            <span className="text-[0.65rem] uppercase tracking-[0.42em] text-gold-foreground">
              Interiors
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            A premium interior design studio transforming spaces into timeless, beautifully curated
            luxury environments.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm uppercase tracking-[0.2em] text-primary">Explore</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {pages.map((p) => (
              <li key={p.to}>
                <Link to={p.to} className="transition-colors hover:text-primary">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm uppercase tracking-[0.2em] text-primary">Services</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="transition-colors hover:text-primary"
                >
                  {s.title.replace(" Interior Design", "").replace(" Design", "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm uppercase tracking-[0.2em] text-primary">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 transition-colors hover:text-primary"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-foreground" />
                <span>{business.addressLine}</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${business.phone}`}
                className="flex items-center gap-2.5 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 text-gold-foreground" />
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 text-gold-foreground" />
                {business.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto mt-14 max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-border/60 py-6 text-xs text-muted-foreground">
          {legal.map((l) => (
            <Link key={l.to} to={l.to} className="transition-colors hover:text-primary">
              {l.label}
            </Link>
          ))}
        </div>
        <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
          © 2026 Knudsen Interiors. All Rights Reserved. | Designed &amp; Developed by{" "}
          <a
            href="https://naumanellahi.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            Nauman Ellahi
          </a>
        </div>
      </div>
    </footer>
  );
}
