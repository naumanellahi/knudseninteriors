import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";
import { getService, services, business } from "@/lib/site-data";
import { ConsultationCTA } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} | Knudsen Interiors` },
          { name: "description", content: loaderData.service.short },
          { property: "og:title", content: `${loaderData.service.title} | Knudsen Interiors` },
          { property: "og:description", content: loaderData.service.short },
          { property: "og:image", content: loaderData.service.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-gradient-sage px-4 text-center">
      <div>
        <h1 className="font-serif text-4xl text-primary">Service not found</h1>
        <Link
          to="/services"
          className="mt-6 inline-block rounded-full bg-gradient-primary px-6 py-3 text-sm uppercase tracking-[0.14em] text-primary-foreground"
        >
          View all services
        </Link>
      </div>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          width={1280}
          height={1024}
          className="absolute inset-0 h-full w-full animate-kenburns object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-40 lg:px-8">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.4em] text-primary-foreground/80">
              Luxury Service
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl text-primary-foreground md:text-6xl">
              {service.title}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-3 lg:px-8">
          <Reveal className="lg:col-span-2">
            <span className="text-xs uppercase tracking-[0.4em] text-gold-foreground">Overview</span>
            <p className="mt-5 text-xl leading-relaxed text-foreground/90">{service.description}</p>

            <h2 className="mt-12 text-3xl text-primary">The Benefits</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 rounded-2xl bg-card p-5 shadow-soft">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-gold-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <div className="glass sticky top-28 rounded-3xl p-7">
              <h3 className="text-2xl text-primary">Start your project</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Arrange a private consultation to discuss your space and vision with our design team.
              </p>
              <Link
                to="/contact"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium uppercase tracking-[0.14em] text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
              >
                Book Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${business.phone}`}
                className="mt-3 flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium uppercase tracking-[0.14em] text-primary transition-colors hover:bg-secondary"
              >
                <Phone className="h-4 w-4" /> {business.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gradient-sage py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-gold-foreground">
              Our Process
            </span>
            <h2 className="mt-5 text-4xl text-primary">A considered journey</h2>
          </Reveal>
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <Reveal key={p.step} delay={i * 80}>
                <div className="h-full rounded-3xl bg-card p-7 shadow-soft">
                  <span className="font-serif text-4xl text-gradient">0{i + 1}</span>
                  <h3 className="mt-4 text-xl text-primary">{p.step}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <h2 className="text-3xl text-primary md:text-4xl">Related Services</h2>
          </Reveal>
          <div className="mt-10 grid gap-7 sm:grid-cols-3">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group block overflow-hidden rounded-3xl bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-luxe"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      width={1280}
                      height={1024}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg text-primary">{s.title}</h3>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-gold-foreground">
                      Discover <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
