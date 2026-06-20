import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-sage pb-16 pt-36 lg:pt-44">
      <div className="absolute -left-16 top-24 h-64 w-64 animate-float-slow rounded-full bg-gold/25 blur-3xl" />
      <div className="absolute right-0 top-10 h-72 w-72 animate-float-slower rounded-full bg-primary-glow/20 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.4em] text-gold-foreground">{eyebrow}</span>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-5 text-4xl text-primary md:text-6xl">{title}</h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={220}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function ConsultationCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-primary opacity-95" />
      <div className="absolute -left-10 top-0 h-72 w-72 animate-float-slow rounded-full bg-gold/30 blur-3xl" />
      <div className="absolute -right-10 bottom-0 h-80 w-80 animate-float-slower rounded-full bg-primary-glow/40 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.4em] text-primary-foreground/80">
            Begin Your Transformation
          </span>
          <h2 className="mt-5 text-4xl text-primary-foreground md:text-5xl">
            Let us craft your timeless luxury interior
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/85">
            Arrange a private consultation and discover how Knudsen Interiors can elevate your space
            into something truly refined.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="shimmer rounded-full bg-card px-8 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-primary shadow-luxe transition-transform hover:scale-[1.04]"
            >
              Book Consultation
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-primary-foreground/50 px-8 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Contact Us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <article className="prose-luxe mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
      {children}
    </article>
  );
}
