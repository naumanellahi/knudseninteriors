import residential from "@/assets/service-residential.jpg";
import styling from "@/assets/service-styling.jpg";
import space from "@/assets/service-space.jpg";
import furniture from "@/assets/service-furniture.jpg";
import kitchen from "@/assets/service-kitchen.jpg";
import living from "@/assets/service-living.jpg";
import bedroom from "@/assets/service-bedroom.jpg";
import fullhome from "@/assets/service-fullhome.jpg";

export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  benefits: string[];
  process: { step: string; detail: string }[];
}

export const services: Service[] = [
  {
    slug: "luxury-residential",
    title: "Luxury Residential Interior Design",
    short:
      "Elegant homes with carefully selected layouts, materials, colours and furniture for sophisticated living.",
    description:
      "We create elegant homes through carefully considered layouts, refined material palettes, harmonious colours, and curated furniture. Every residential project is approached as a singular composition — a sophisticated living environment that feels effortless, timeless, and entirely personal.",
    image: residential,
    benefits: [
      "Bespoke layouts tailored to how you live",
      "Refined material and colour palettes",
      "Curated furniture and styling throughout",
      "A cohesive, timeless design language",
    ],
    process: [
      { step: "Discovery", detail: "We understand your lifestyle, taste and aspirations for the space." },
      { step: "Concept", detail: "We develop refined concepts, mood, materials and spatial direction." },
      { step: "Design", detail: "Detailed layouts, finishes, furniture and lighting are finalised." },
      { step: "Delivery", detail: "We coordinate styling and finishing to a flawless conclusion." },
    ],
  },
  {
    slug: "modern-styling",
    title: "Modern Interior Styling",
    short:
      "Professional styling that creates balanced, beautiful and visually refined interiors.",
    description:
      "Our styling solutions bring balance, beauty and visual refinement to every room. We layer texture, form, light and accessory with precision — elevating a space from simply furnished to genuinely curated, editorial, and complete.",
    image: styling,
    benefits: [
      "Balanced, gallery-worthy compositions",
      "Layered textures and tactile materials",
      "Considered accessories and finishing details",
      "Photography-ready, magazine-quality interiors",
    ],
    process: [
      { step: "Assessment", detail: "We evaluate the existing space, light and architecture." },
      { step: "Curation", detail: "We source objects, textiles and accents with intent." },
      { step: "Composition", detail: "Each surface is styled into a refined arrangement." },
      { step: "Reveal", detail: "Your space is presented fully styled and ready to enjoy." },
    ],
  },
  {
    slug: "space-planning",
    title: "Space Planning & Layout Design",
    short:
      "Transform spaces through intelligent planning, functional layouts and aesthetic improvements.",
    description:
      "Great interiors begin with great planning. We transform spaces through intelligent layout design — improving flow, function and proportion while elevating the aesthetic. The result is architecture that works beautifully for the way you live.",
    image: space,
    benefits: [
      "Optimised flow and functional zoning",
      "Maximised natural light and proportion",
      "Future-considered, flexible layouts",
      "Seamless balance of beauty and function",
    ],
    process: [
      { step: "Survey", detail: "We map the space, light and movement patterns." },
      { step: "Strategy", detail: "We plan zones, circulation and functional priorities." },
      { step: "Layout", detail: "Detailed plans define every spatial relationship." },
      { step: "Refine", detail: "We finalise proportions and finishing decisions." },
    ],
  },
  {
    slug: "furniture-selection",
    title: "Furniture Selection & Styling",
    short:
      "Curated furniture, textures, colours and decorative elements for a complete luxury atmosphere.",
    description:
      "We curate furniture, textures, colours and decorative elements into a complete and cohesive luxury atmosphere. From statement pieces to refined accents, every selection is chosen to elevate comfort, character and craftsmanship.",
    image: furniture,
    benefits: [
      "Curated statement and signature pieces",
      "Premium fabrics, textures and finishes",
      "Cohesive, layered material storytelling",
      "Sourcing from refined and designer collections",
    ],
    process: [
      { step: "Brief", detail: "We define style, comfort and functional needs." },
      { step: "Source", detail: "We curate pieces across premium collections." },
      { step: "Compose", detail: "Selections are arranged into a unified scheme." },
      { step: "Install", detail: "Pieces are placed and styled to perfection." },
    ],
  },
  {
    slug: "kitchen-design",
    title: "Kitchen Interior Design",
    short:
      "Modern kitchens combining functionality, elegance, premium materials and beautiful concepts.",
    description:
      "We design modern kitchens that combine functionality, elegance and premium materials. Each concept balances daily practicality with striking beauty — a refined heart of the home that elevates both cooking and gathering.",
    image: kitchen,
    benefits: [
      "Ergonomic, considered working layouts",
      "Premium cabinetry, stone and fixtures",
      "Integrated lighting and storage solutions",
      "Elegant, hospitality-grade aesthetics",
    ],
    process: [
      { step: "Discovery", detail: "We learn how you cook, host and use the space." },
      { step: "Concept", detail: "We design layout, materials and lighting direction." },
      { step: "Detailing", detail: "Cabinetry, stone and fixtures are specified." },
      { step: "Delivery", detail: "We oversee finishing and styling to completion." },
    ],
  },
  {
    slug: "living-room-design",
    title: "Living Room Design",
    short:
      "Comfortable, stylish living areas with premium layouts, lighting, furniture and finishing.",
    description:
      "We design comfortable yet striking living rooms with premium layouts, layered lighting, refined furniture and considered finishing details. The result is a sophisticated space for relaxation, conversation and entertaining.",
    image: living,
    benefits: [
      "Inviting, sociable seating arrangements",
      "Layered, atmospheric lighting design",
      "Premium furniture and textile layering",
      "Refined focal points and finishing details",
    ],
    process: [
      { step: "Discovery", detail: "We understand how the room will be lived in." },
      { step: "Concept", detail: "We develop mood, layout and material direction." },
      { step: "Design", detail: "Furniture, lighting and finishes are specified." },
      { step: "Styling", detail: "The room is finished and styled beautifully." },
    ],
  },
  {
    slug: "bedroom-design",
    title: "Bedroom Interior Design",
    short:
      "Peaceful luxury bedrooms with carefully planned colours, materials, lighting and furniture.",
    description:
      "We create peaceful, luxurious bedrooms through carefully planned colours, soft materials, atmospheric lighting and refined furniture. Each space is designed as a serene retreat — calm, indulgent and beautifully restful.",
    image: bedroom,
    benefits: [
      "Serene, calming colour and material palettes",
      "Soft, layered textiles and bedding",
      "Atmospheric, dimmable lighting design",
      "Bespoke storage and refined furniture",
    ],
    process: [
      { step: "Discovery", detail: "We explore the mood and comfort you desire." },
      { step: "Concept", detail: "We craft palette, lighting and material direction." },
      { step: "Design", detail: "Furniture, textiles and finishes are specified." },
      { step: "Styling", detail: "The retreat is finished to a flawless standard." },
    ],
  },
  {
    slug: "full-home-transformation",
    title: "Full Home Interior Transformation",
    short:
      "Complete interior design covering entire properties with one consistent luxury vision.",
    description:
      "Our most comprehensive service delivers a complete interior transformation across an entire property — guided by a single, consistent luxury vision. From architecture to the final accessory, every space flows together in refined harmony.",
    image: fullhome,
    benefits: [
      "One cohesive vision across the whole home",
      "Seamless flow between every space",
      "Full coordination of trades and finishes",
      "A turnkey, fully realised transformation",
    ],
    process: [
      { step: "Vision", detail: "We define the overarching design narrative." },
      { step: "Masterplan", detail: "We plan every room within one cohesive scheme." },
      { step: "Design", detail: "Detailed schemes are developed room by room." },
      { step: "Delivery", detail: "We deliver and style the complete transformation." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const galleryImages = [
  { src: fullhome, label: "Grand Reception Suite" },
  { src: living, label: "Marble Living Lounge" },
  { src: kitchen, label: "Designer Culinary Space" },
  { src: residential, label: "Open-Plan Residence" },
  { src: bedroom, label: "Serene Master Retreat" },
  { src: space, label: "Light-Filled Apartment" },
];

export const business = {
  name: "Knudsen Interiors",
  phone: "02036339965",
  phoneDisplay: "020 3633 9965",
  address: ["10 Nikkis House", "8 Bonnersfield Lane", "Harrow Middx", "HA1 2AP"],
};
