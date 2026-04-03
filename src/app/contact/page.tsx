import ContactContent from "@/components/pagesContent/ContactContent"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Muhammad Roman. Available for freelance projects, collaborations, and full-time opportunities in AI development and full-stack engineering.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Muhammad Roman",
    description:
      "Available for freelance, collaborations, and full-time opportunities in AI development and full-stack engineering.",
    url: "/contact",
  },
};

const Contact = () => {
  return <ContactContent />;
}

export default Contact