import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site-data";
import servicesHero from "@/assets/service-fullhome.jpg";
import { PageHeader, ConsultationCTA } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Luxury Interior Design Services | Knudsen Interiors" },
      {
        name: "description",
        content:
          "Explore Knudsen Interiors' luxury services — residential design, styling, space planning, kitchens, bedrooms, living rooms and full home transformations.",
      },
      { property: "og:title", content: "Luxury Interior Design Services | Knudsen Interiors" },
      {
        property: "og:description",
        content: "A complete suite of high-end interior design services.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Luxury Interior Design Services"
        subtitle="A refined collection of high-end design solutions, each crafted to transform your space into a timeless, sophisticated environment."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl space-y-20 px-5 lg:px-8">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-gold opacity-20 blur-2xl" />
                  <img
                    src={s.image}
                    alt={s.title}
                    width={1280}
                    height={1024}
                    loading="lazy"
                    className="relative aspect-[5/4] w-full rounded-3xl object-cover shadow-luxe"
                  />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.34em] text-gold-foreground">
                    0{i + 1}
                  </span>
                  <h2 className="mt-3 text-3xl text-primary md:text-4xl">{s.title}</h2>
                  <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{s.short}</p>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3 text-sm font-medium uppercase tracking-[0.14em] text-primary-foreground shadow-soft transition-transform hover:scale-[1.04]"
                  >
                    Explore Service <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
