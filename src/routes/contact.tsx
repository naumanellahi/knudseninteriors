import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Check, Mail } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { business } from "@/lib/site-data";
import contactHero from "@/assets/service-living.jpg";
import { PageHeader } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Consultation | Knudsen Interiors" },
      {
        name: "description",
        content:
          "Book a private interior design consultation with Knudsen Interiors. Call us or send a message to begin your luxury transformation.",
      },
      { property: "og:title", content: "Contact & Consultation | Knudsen Interiors" },
      {
        property: "og:description",
        content: "Book a private luxury interior design consultation.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("Thank you — we'll be in touch shortly to arrange your consultation.");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <Toaster position="top-center" richColors />
      <PageHeader
        eyebrow="Get In Touch"
        title="Book Your Consultation"
        subtitle="Let's discuss your space and vision. Arrange a private consultation with our design studio today."
        image={contactHero}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-5 lg:px-8">
          {/* FORM */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl bg-card p-8 shadow-luxe lg:p-10">
              <h2 className="text-3xl text-primary">Send us a message</h2>
              <p className="mt-3 text-muted-foreground">
                Complete the form below and our team will respond promptly.
              </p>
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" name="name" type="text" required />
                  <Field label="Email Address" name="email" type="email" required />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Phone Number" name="phone" type="tel" />
                  <Field label="Service of Interest" name="service" type="text" />
                </div>
                <div>
                  <label className="mb-2 block text-sm uppercase tracking-[0.14em] text-primary">
                    Tell us about your project
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <button
                  type="submit"
                  className="shimmer flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-medium uppercase tracking-[0.14em] text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
                >
                  {sent ? (
                    <>
                      <Check className="h-4 w-4" /> Message Sent
                    </>
                  ) : (
                    "Book Consultation"
                  )}
                </button>
              </form>
            </div>
          </Reveal>

          {/* DETAILS */}
          <Reveal delay={150} className="lg:col-span-2">
            <div className="space-y-5">
              <a
                href={`tel:${business.phone}`}
                className="glass flex items-start gap-4 rounded-3xl p-6 transition-transform hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-gold text-gold-foreground">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-gold-foreground">
                    Call Us
                  </span>
                  <span className="mt-1 block text-lg text-primary">{business.phoneDisplay}</span>
                </span>
              </a>

              <a
                href={`mailto:${business.email}`}
                className="glass flex items-start gap-4 rounded-3xl p-6 transition-transform hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-gold text-gold-foreground">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-gold-foreground">
                    Email Us
                  </span>
                  <span className="mt-1 block text-lg text-primary">{business.email}</span>
                </span>
              </a>


              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-start gap-4 rounded-3xl p-6 transition-transform hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-gold text-gold-foreground">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-gold-foreground">
                    Visit Our Studio
                  </span>
                  <span className="mt-1 block leading-relaxed text-muted-foreground">
                    {business.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </span>
              </a>

              <div className="glass flex items-start gap-4 rounded-3xl p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-gold text-gold-foreground">
                  <Clock className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-gold-foreground">
                    Studio Hours
                  </span>
                  <span className="mt-1 block text-muted-foreground">
                    Monday – Saturday, 9am – 6pm
                  </span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm uppercase tracking-[0.14em] text-primary">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
      />
    </div>
  );
}
