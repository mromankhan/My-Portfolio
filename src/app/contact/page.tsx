import ContactContent from "@/components/pagesContent/ContactContent"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Muhammad Roman, Forward Deployed Engineer and Full Stack & Agentic AI Engineer in Karachi. Available for freelance projects, contracts and full-time opportunities.",
  alternates: { canonical: "https://www.mromankhan.com/contact" },
  openGraph: {
    title: "Contact | Muhammad Roman",
    description:
      "Forward Deployed Engineer and Full Stack & Agentic AI Engineer. Available for freelance projects, contracts and full-time opportunities.",
    url: "https://www.mromankhan.com/contact",
  },
};

const Contact = () => {
  return <ContactContent />;
}

export default Contact