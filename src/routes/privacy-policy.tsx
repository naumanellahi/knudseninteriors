import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalContent";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Knudsen Interiors" },
      { name: "description", content: "How Knudsen Interiors collects, uses and protects your personal information." },
    ],
  }),
  component: () => (
    <LegalPage
      title="Privacy Policy"
      intro="Your privacy matters to us. This policy explains how Knudsen Interiors handles your personal information."
      sections={[
        {
          heading: "Information We Collect",
          body: [
            "We collect information you provide directly to us, such as your name, email address, phone number and project details when you contact us or request a consultation.",
            "We may also collect limited technical information automatically, such as browser type and pages visited, to help us improve our website.",
          ],
        },
        {
          heading: "How We Use Your Information",
          body: [
            "We use your information to respond to enquiries, arrange consultations, deliver our design services and communicate with you about your project.",
            "We do not sell your personal information to third parties.",
          ],
        },
        {
          heading: "Data Security",
          body: [
            "We take reasonable measures to protect your information from unauthorised access, loss or misuse. However, no method of transmission over the internet is completely secure.",
          ],
        },
        {
          heading: "Your Rights",
          body: [
            "You may request access to, correction of, or deletion of your personal information at any time by contacting us using the details on our contact page.",
          ],
        },
        {
          heading: "Contact Us",
          body: ["For any privacy questions, please contact Knudsen Interiors on 020 3633 9965."],
        },
      ]}
    />
  ),
});
