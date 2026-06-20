import { createFileRoute, Link } from "@tanstack/react-router";
import { Gem, Sparkles, Compass, ShieldCheck } from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import philosophyImg from "@/assets/philosophy.jpg";
import { PageHeader, ConsultationCTA } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Knudsen Interiors — Luxury Interior Design Studio" },
      {
        name: "description",
        content:
          "Discover Knudsen Interiors — a premium interior design studio driven by vision, creativity, refined philosophy and uncompromising quality standards.",
      },
      { property: "og:title", content: "About | Knudsen Interiors" },
      {
        property: "og:description",
        content: "A premium interior design studio driven by vision and refined craftsmanship.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Sparkles, title: "Design Vision", text: "We see beyond the room — envisioning spaces as refined, living works of art." },
  { icon: Compass, title: "Creative Approach", text: "Every project begins with curiosity, exploration and a bold creative direction." },
  { icon: Gem, title: "Interior Philosophy", text: "We believe true luxury is found in restraint, proportion and exquisite detail." },
  { icon: ShieldCheck, title: "Quality Standards", text: "Only the finest materials, finishes and craftsmanship meet our exacting standards." },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About The Studio"
        title="Knudsen Interiors"
        subtitle="A premium interior design studio crafting sophisticated, timeless and beautifully considered spaces."
        image={aboutImg}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-gold opacity-25 blur-2xl" />
            <img
              src={aboutImg}
              alt="Elegant interior styled by Knudsen Interiors"
              width={1280}
              height={1280}
              loading="lazy"
              className="relative rounded-3xl object-cover shadow-luxe"
            />
          </Reveal>
          <div>
            <Reveal>
              <span className="text-xs uppercase tracking-[0.4em] text-gold-foreground">
                Who We Are
              </span>
              <h2 className="mt-5 text-4xl text-primary md:text-5xl">A modern luxury design house</h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Knudsen Interiors is a premium interior design studio dedicated to transforming
                spaces into refined, elegant and deeply personal environments. We approach every
                project with artistry, precision and a passion for timeless beauty.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Our work blends contemporary aesthetics with enduring sophistication — creating
                interiors that feel curated, intentional and quietly opulent. From a single room to
                an entire residence, we design spaces that elevate everyday living.
              </p>
            </Reveal>
            <Reveal delay={350}>
              <Link
                to="/services"
                className="mt-8 inline-block rounded-full bg-gradient-primary px-7 py-3 text-sm font-medium uppercase tracking-[0.14em] text-primary-foreground shadow-soft transition-transform hover:scale-[1.04]"
              >
                Explore Our Services
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-gradient-sage py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-gold-foreground">
              Our Principles
            </span>
            <h2 className="mt-5 text-4xl text-primary md:text-5xl">What defines our work</h2>
          </Reveal>
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="glass h-full rounded-3xl p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-gold text-gold-foreground">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl text-primary">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div className="lg:order-2">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.4em] text-gold-foreground">
                Our Promise
              </span>
              <h2 className="mt-5 text-4xl text-primary md:text-5xl">Considered, always</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We design with intention and deliver with care. Every material is chosen, every
                proportion refined, and every detail considered — so that the finished space feels
                effortless, harmonious and unmistakably luxurious.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Our studio exists to make beautiful design accessible, personal and enduring,
                bringing a sense of calm sophistication to every home we touch.
              </p>
            </Reveal>
          </div>
          <Reveal className="relative lg:order-1">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-gold opacity-25 blur-2xl" />
            <img
              src={philosophyImg}
              alt="Refined luxury interior detail"
              width={1280}
              height={1280}
              loading="lazy"
              className="relative rounded-3xl object-cover shadow-luxe"
            />
          </Reveal>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
