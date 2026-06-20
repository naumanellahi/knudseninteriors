import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalContent";

export const Route = createFileRoute("/return-policy")({
  head: () => ({
    meta: [
      { title: "Return Policy | Knudsen Interiors" },
      { name: "description", content: "Knudsen Interiors' policy on returns for furniture and decorative items supplied as part of a project." },
    ],
  }),
  component: () => (
    <LegalPage
      title="Return Policy"
      intro="This policy explains how returns are handled for items supplied as part of our design services."
      sections={[
        {
          heading: "Furniture & Decorative Items",
          body: [
            "Where furniture or decorative items are supplied through Knudsen Interiors, returns are subject to the terms of the original supplier and the agreement made for your project.",
          ],
        },
        {
          heading: "Bespoke & Made-to-Order",
          body: [
            "Bespoke and made-to-order items are produced specifically for you and cannot be returned unless they arrive faulty or damaged.",
          ],
        },
        {
          heading: "Damaged or Faulty Goods",
          body: [
            "If an item arrives damaged or faulty, please notify us within a reasonable period so we can arrange a replacement or resolution with the supplier.",
          ],
        },
        {
          heading: "How to Arrange a Return",
          body: ["To arrange a return, please contact us on 020 3633 9965 with details of the item and the issue."],
        },
      ]}
    />
  ),
});
