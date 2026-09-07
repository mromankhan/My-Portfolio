import { services, faqs, positioning } from "@/data/services";
import { projects } from "@/data/projects";

const SITE = "https://www.mromankhan.com";

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE}/#person`,
  name: "Muhammad Roman",
  alternateName: "mromankhan",
  url: SITE,
  image: `${SITE}/og-image.png`,
  jobTitle: [
    "Forward Deployed Engineer",
    "Full Stack Developer",
    "Agentic AI Engineer",
  ],
  worksFor: {
    "@type": "Organization",
    name: "MP Pvt Ltd",
  },
  description: positioning,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  sameAs: [
    "https://github.com/mromankhan",
    "https://www.linkedin.com/in/mromankhan",
    "https://x.com/RomanKhan00555",
  ],
  knowsAbout: [
    "Forward Deployed Engineering",
    "Client Solution Design",
    "System Integration",
    "Next.js",
    "React",
    "React Native",
    "TypeScript",
    "Node.js",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Supabase",
    "Firebase",
    "Rust",
    "Tauri",
    "Agentic AI",
    "MCP Servers",
    "Retrieval-Augmented Generation",
    "Voice AI",
    "LiveKit",
    "Docker",
    "Kubernetes",
    "Multi-tenant SaaS Architecture",
  ],
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: s.title,
      description: s.summary,
      serviceType: s.title,
      provider: { "@id": `${SITE}/#person` },
      areaServed: "Worldwide",
    },
  })),
};

const professionalService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE}/#service`,
  name: "Muhammad Roman, Full Stack & Agentic AI Engineering",
  url: `${SITE}/services`,
  image: `${SITE}/og-image.png`,
  description: positioning,
  founder: { "@id": `${SITE}/#person` },
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Development Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.summary,
      },
    })),
  },
};

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE}/#faq`,
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const portfolioList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE}/#portfolio`,
  name: "Featured case studies",
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${SITE}/projects/${p.slug}`,
    name: p.title,
    description: p.tagline,
  })),
};

export default function JsonLd() {
  const graph = [person, professionalService, faqPage, portfolioList];

  return (
    <>
      {graph.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
