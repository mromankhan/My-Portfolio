import ContactContent from "@/components/pagesContent/ContactContent"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Muhammad Roman. Share your project details and let's build something great together.",
};

const Contact = () => {
  return <ContactContent />;
}

export default Contact