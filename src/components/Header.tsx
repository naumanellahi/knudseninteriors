import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, Mail } from "lucide-react";
import { business } from "@/lib/site-data";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-card transition-all duration-500 ${
        scrolled ? "shadow-soft py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="group flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-serif text-2xl tracking-tight text-primary">Knudsen</span>
          <span className="text-[0.62rem] uppercase tracking-[0.42em] text-gold-foreground">
            Interiors
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative text-sm uppercase tracking-[0.16em] text-foreground/80 transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full data-[status=active]:text-primary data-[status=active]:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`mailto:${business.email}`}
            className="flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4" />
            {business.email}
          </a>
          <a
            href={`tel:${business.phone}`}
            className="flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            {business.phoneDisplay}
          </a>
          <Link
            to="/contact"
            className="shimmer rounded-full bg-gradient-primary px-6 py-2.5 text-sm font-medium uppercase tracking-[0.12em] text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
          >
            Book Consultation
          </Link>
        </div>

        <button
          className="rounded-full p-2 text-primary lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="mx-4 mt-3 rounded-2xl border border-border/60 bg-card p-6 shadow-soft lg:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-base uppercase tracking-[0.16em] text-foreground/80 data-[status=active]:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${business.phone}`} className="flex items-center gap-2 text-foreground/80">
              <Phone className="h-4 w-4" /> {business.phoneDisplay}
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-primary px-6 py-3 text-center text-sm font-medium uppercase tracking-[0.12em] text-primary-foreground"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
