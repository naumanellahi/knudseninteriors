import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalContent";

export const Route = createFileRoute("/terms-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Knudsen Interiors" },
      { name: "description", content: "The terms and conditions governing the use of Knudsen Interiors' website and services." },
    ],
  }),
  component: () => (
    <LegalPage
      title="Terms & Conditions"
      intro="These terms govern your use of the Knudsen Interiors website and our design services."
      sections={[
        {
          heading: "Use of Our Website",
          body: [
            "By accessing this website, you agree to use it lawfully and not in any way that may damage, disable or impair the site or interfere with others' use of it.",
          ],
        },
        {
          heading: "Our Services",
          body: [
            "All interior design services are provided subject to a separate agreement detailing scope, fees and timelines. Information on this website is for general guidance and does not constitute a binding offer.",
          ],
        },
        {
          heading: "Intellectual Property",
          body: [
            "All content on this website, including text, imagery and design concepts, is the property of Knudsen Interiors and may not be reproduced without permission.",
          ],
        },
        {
          heading: "Limitation of Liability",
          body: [
            "Knudsen Interiors shall not be liable for any indirect or consequential loss arising from the use of this website, to the fullest extent permitted by law.",
          ],
        },
        {
          heading: "Governing Law",
          body: ["These terms are governed by the laws of England and Wales."],
        },
      ]}
    />
  ),
});
