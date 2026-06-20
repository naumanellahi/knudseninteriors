import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalContent";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy | Knudsen Interiors" },
      { name: "description", content: "Knudsen Interiors' policy on refunds for design services and consultations." },
    ],
  }),
  component: () => (
    <LegalPage
      title="Refund Policy"
      intro="This policy outlines the circumstances under which refunds may apply to our services."
      sections={[
        {
          heading: "Consultations & Design Fees",
          body: [
            "Consultation and design fees are typically agreed in advance and reflect the time and expertise invested in your project. Any refund terms specific to your engagement will be set out in your service agreement.",
          ],
        },
        {
          heading: "Cancellations",
          body: [
            "If you wish to cancel a service, please notify us as early as possible. Refunds for work not yet commenced may be considered, less any costs already incurred.",
          ],
        },
        {
          heading: "Non-Refundable Items",
          body: [
            "Bespoke design work, custom orders and third-party purchases made on your behalf are generally non-refundable once commissioned or placed.",
          ],
        },
        {
          heading: "Requesting a Refund",
          body: ["To request a refund, please contact us on 020 3633 9965 and we will review your request promptly."],
        },
      ]}
    />
  ),
});
