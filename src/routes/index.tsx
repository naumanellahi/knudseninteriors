import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Compass, Gem, HeartHandshake } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import aboutImg from "@/assets/about.jpg";
import philosophyImg from "@/assets/philosophy.jpg";
import { services, galleryImages } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { ConsultationCTA } from "@/components/PageShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Knudsen Interiors | Luxury Interior Design Studio in London" },
      {
        name: "description",
        content:
          "Knudsen Interiors transforms spaces into timeless luxury interiors with elegant concepts, modern aesthetics and beautifully curated design.",
      },
      { property: "og:title", content: "Knudsen Interiors | Luxury Interior Design Studio" },
      {
        property: "og:description",
        content: "Timeless luxury interiors with refined concepts and modern aesthetics.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

const philosophyPoints = [
  { icon: Gem, title: "Attention to Detail", text: "Every finish, texture and proportion is refined to perfection." },
  { icon: Sparkles, title: "Modern Aesthetics", text: "Contemporary elegance balanced with enduring timelessness." },
  { icon: Compass, title: "Functional Beauty", text: "Spaces that are as intuitive to live in as they are to admire." },
  { icon: HeartHandshake, title: "Personalised Interiors", text: "Designs shaped entirely around you, your taste and your life." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster={heroImg}
        >
          <source src={heroVideo.url} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 animate-kenburns bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute left-12 top-1/3 hidden h-24 w-24 animate-float-slow rounded-full bg-gold/40 blur-2xl lg:block" />
        <div className="absolute bottom-24 right-16 hidden h-32 w-32 animate-float-slower rounded-full bg-primary-glow/40 blur-3xl lg:block" />

        <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <div className="anim-up" style={{ animationDelay: "0ms" }}>
              <span className="inline-block rounded-full border border-primary-foreground/30 px-4 py-1.5 text-xs uppercase tracking-[0.34em] text-primary-foreground/90">
                Premium Interior Design Studio
              </span>
            </div>
            <div className="anim-up" style={{ animationDelay: "150ms" }}>
              <h1 className="mt-6 text-4xl leading-[1.05] text-primary-foreground [text-shadow:0_2px_30px_oklch(0.2_0.05_150/0.45)] sm:text-5xl lg:text-7xl">
                Transforming Spaces Into Timeless Luxury Interiors
              </h1>
            </div>
            <div className="anim-up" style={{ animationDelay: "300ms" }}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-primary-foreground/90">
                Knudsen Interiors creates refined interior design solutions with elegant concepts,
                modern aesthetics, and beautifully curated spaces.
              </p>
            </div>
            <div className="anim-up mt-10 flex flex-wrap gap-4" style={{ animationDelay: "450ms" }}>
              <Link
                to="/services"
                className="shimmer flex items-center gap-2 rounded-full bg-card px-8 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-primary shadow-luxe transition-transform hover:scale-[1.04]"
              >
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-primary-foreground/50 px-8 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/10"
              >
                Book Consultation
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* BRAND INTRO */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal className="relative">
            <div className="absolute -left-6 -top-6 h-full w-full rounded-3xl bg-gradient-gold opacity-30 blur-xl" />
            <img
              src={aboutImg}
              alt="Refined sage and cream living space by Knudsen Interiors"
              width={1280}
              height={1280}
              loading="lazy"
              className="relative rounded-3xl object-cover shadow-luxe"
            />
          </Reveal>
          <div>
            <Reveal>
              <span className="text-xs uppercase tracking-[0.4em] text-gold-foreground">
                The Studio
              </span>
              <h2 className="mt-5 text-4xl text-primary md:text-5xl">
                A premium interior design house
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Knudsen Interiors is a luxury design studio devoted to crafting sophisticated,
                high-end interiors. We blend artistry with precision, creating elegant environments
                where every material, colour and detail is intentional.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Our approach is editorial, considered and entirely bespoke — designed to feel as
                refined as the world's most celebrated residences.
              </p>
            </Reveal>
            <Reveal delay={350}>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-primary transition-colors hover:text-gold-foreground"
              >
                Discover our vision <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES SHOWCASE */}
      <section className="relative overflow-hidden bg-gradient-sage py-24 lg:py-32">
        <div className="absolute -right-20 top-10 h-80 w-80 animate-float-slower rounded-full bg-gold/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-gold-foreground">
              What We Create
            </span>
            <h2 className="mt-5 text-4xl text-primary md:text-5xl">Our Luxury Services</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              A complete suite of high-end interior design solutions, tailored to elevate every
              space within your home.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group block h-full overflow-hidden rounded-3xl bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-luxe"
                >
                  <div className="relative h-52 overflow-hidden">
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
                    <h3 className="text-xl text-primary">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-gold-foreground">
                      Discover <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-gold-foreground">Gallery</span>
            <h2 className="mt-5 text-4xl text-primary md:text-5xl">A Portfolio of Luxury</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Curated interiors that capture the elegance, atmosphere and craftsmanship at the heart
              of our design philosophy.
            </p>
          </Reveal>

          <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-5 lg:grid-cols-4">
            {galleryImages.map((img, i) => (
              <Reveal
                key={img.label}
                delay={i * 60}
                className={`group relative overflow-hidden rounded-3xl shadow-soft ${
                  i === 0 ? "col-span-2 row-span-2" : i === 3 ? "lg:col-span-2" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  width={1280}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end p-6">
                  <span className="text-sm uppercase tracking-[0.2em] text-primary-foreground [text-shadow:0_1px_8px_oklch(0.2_0.05_150/0.85)]">
                    {img.label}
                  </span>
                </div>

              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-primary-foreground shadow-soft transition-transform hover:scale-[1.04]"
            >
              View Full Portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative overflow-hidden bg-gradient-sage py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <Reveal>
              <span className="text-xs uppercase tracking-[0.4em] text-gold-foreground">
                Our Philosophy
              </span>
              <h2 className="mt-5 text-4xl text-primary md:text-5xl">Designed with intention</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We believe luxury lives in the details. Our design philosophy is built on precision,
                modern beauty and a deep understanding of how spaces should feel.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {philosophyPoints.map((p, i) => (
                <Reveal key={p.title} delay={i * 90}>
                  <div className="glass h-full rounded-2xl p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-gold text-gold-foreground">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg text-primary">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="relative">
            <div className="absolute -right-6 -top-6 h-full w-full rounded-3xl bg-gradient-gold opacity-30 blur-xl" />
            <img
              src={philosophyImg}
              alt="Refined luxury interior detailing"
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
