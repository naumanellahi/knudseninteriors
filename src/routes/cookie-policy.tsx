import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalContent";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | Knudsen Interiors" },
      { name: "description", content: "How Knudsen Interiors uses cookies and similar technologies on its website." },
    ],
  }),
  component: () => (
    <LegalPage
      title="Cookie Policy"
      intro="This policy explains how Knudsen Interiors uses cookies and similar technologies."
      sections={[
        {
          heading: "What Are Cookies",
          body: [
            "Cookies are small text files placed on your device when you visit a website. They help the site function and provide information to the site owners.",
          ],
        },
        {
          heading: "How We Use Cookies",
          body: [
            "We use essential cookies to ensure our website functions correctly, and optional analytics cookies to understand how visitors use our site so we can improve it.",
          ],
        },
        {
          heading: "Managing Cookies",
          body: [
            "You can control and delete cookies through your browser settings. Disabling certain cookies may affect the functionality of our website.",
          ],
        },
        {
          heading: "Contact Us",
          body: ["If you have questions about our use of cookies, please contact us on 020 3633 9965."],
        },
      ]}
    />
  ),
});
