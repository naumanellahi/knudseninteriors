import { PageHeader } from "./PageShell";
import { Reveal } from "./Reveal";
import legalHero from "@/assets/philosophy.jpg";

export interface LegalSection {
  heading: string;
  body: string[];
}

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title} subtitle={intro} image={legalHero} />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl space-y-10 px-5 lg:px-8">
          <Reveal>
            <p className="text-sm text-muted-foreground">Last updated: 20 June 2026</p>
          </Reveal>
          {sections.map((s, i) => (
            <Reveal key={s.heading} delay={i * 40}>
              <div>
                <h2 className="text-2xl text-primary">{s.heading}</h2>
                {s.body.map((p, j) => (
                  <p key={j} className="mt-4 leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
