import { createFileRoute } from "@tanstack/react-router";
import { galleryImages, services } from "@/lib/site-data";
import portfolioHero from "@/assets/portfolio-dining.jpg";
import { PageHeader, ConsultationCTA } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Design Inspirations | Knudsen Interiors" },
      {
        name: "description",
        content:
          "Explore Knudsen Interiors' design inspirations and interior concepts — luxury concept interiors, modern design examples and curated style collections.",
      },
      { property: "og:title", content: "Design Inspirations | Knudsen Interiors" },
      {
        property: "og:description",
        content: "Luxury concept interiors and curated style collections.",
      },
    ],
  }),
  component: PortfolioPage,
});

const concepts = [
  { title: "Sage & Cream Living", text: "A soft luxury palette balancing calm greens with warm neutral tones." },
  { title: "Marble & Brass Statements", text: "Refined material pairings for an elevated, editorial finish." },
  { title: "Open-Plan Elegance", text: "Flowing, light-filled layouts designed for modern living." },
  { title: "Serene Bedroom Retreats", text: "Restful, indulgent spaces layered in soft textures." },
];

function PortfolioPage() {
  const inspirations = [...galleryImages, ...services.slice(0, 4).map((s) => ({ src: s.image, label: s.title }))];

  return (
    <>
      <PageHeader
        eyebrow="Design Inspirations"
        title="Interior Concepts"
        subtitle="A curated collection of luxury concept interiors, modern design examples and refined style directions that capture the spirit of our work."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {inspirations.map((img, i) => (
              <Reveal key={`${img.label}-${i}`} delay={(i % 3) * 80}>
                <div className="group relative overflow-hidden rounded-3xl shadow-soft">
                  <img
                    src={img.src}
                    alt={img.label}
                    width={1280}
                    height={1024}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6">
                    <span className="text-sm uppercase tracking-[0.2em] text-primary-foreground [text-shadow:0_1px_8px_oklch(0.2_0.05_150/0.85)]">
                      {img.label}
                    </span>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-sage py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-gold-foreground">
              Style Collections
            </span>
            <h2 className="mt-5 text-4xl text-primary md:text-5xl">Signature design directions</h2>
          </Reveal>
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {concepts.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="glass h-full rounded-3xl p-7">
                  <span className="font-serif text-4xl text-gradient">0{i + 1}</span>
                  <h3 className="mt-4 text-xl text-primary">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
