export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Roman",
    url: "https://mromankhan.vercel.app",
    image: "https://mromankhan.vercel.app/og-image.png",
    jobTitle: "Full Stack Developer & Agentic AI Engineer",
    description:
      "Full Stack Developer & Agentic AI Engineer from Karachi, Pakistan. Building intelligent AI systems, scalable web apps, and cloud-native solutions.",
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
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "Agentic AI",
      "Firebase",
      "Kubernetes",
      "Cloud Native",
      "Full Stack Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
