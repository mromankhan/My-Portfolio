"use client";
import { Loader2, Send, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "contact@mromankhan.com",
    href: "mailto:contact@mromankhan.com",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Karachi, Pakistan",
    href: null,
  },
  {
    icon: <Clock size={18} />,
    label: "Availability",
    value: "Open for opportunities",
    href: null,
  },
];

const socialLinks = [
  { href: "https://github.com/mromankhan", icon: <FiGithub size={18} />, label: "GitHub" },
  { href: "https://x.com/RomanKhan00555", icon: <FaXTwitter size={16} />, label: "X" },
  { href: "https://www.linkedin.com/in/mromankhan", icon: <FiLinkedin size={18} />, label: "LinkedIn" },
];

const ContactContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error();
      toast.success("Message sent! I'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      toast.error("Failed to send. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen bg-[#020817] flex items-center justify-center py-20 sm:py-28 px-4 overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60" fill="#3b82f6" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(59,130,246,0.08),transparent)]" />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Work{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Together
            </span>
          </h1>
          <p className="text-slate-400 max-w-lg mx-auto">
            Have a project in mind? Tell me the workflow, who uses it and the
            systems involved. I&apos;ll come back with the technical approach,
            scope and a realistic timeline.
          </p>
          <p className="text-slate-500 text-sm max-w-lg mx-auto mt-3">
            Currently a Forward Deployed Engineer at MP Pvt Ltd in Karachi,
            deploying and integrating systems inside client environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 space-y-6"
          >
            {/* Info cards */}
            <div className="space-y-4">
              {contactInfo.map(({ icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 p-4 rounded-2xl border border-white/8 bg-white/[0.02]"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-slate-300 text-sm hover:text-blue-400 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-slate-300 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="p-5 rounded-2xl border border-white/8 bg-white/[0.02]">
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-4">
                Connect With Me
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-200"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="p-5 rounded-2xl border border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-green-400 text-sm font-medium">
                  Available for freelance projects and contracts
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-3"
          >
            <div className="p-5 sm:p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-300"
                  >
                    Your Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.04] text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/60 focus:bg-white/[0.06] transition-all duration-200 text-sm"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-300"
                  >
                    Email Address <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.04] text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/60 focus:bg-white/[0.06] transition-all duration-200 text-sm"
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-300"
                  >
                    Message <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.04] text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/60 focus:bg-white/[0.06] transition-all duration-200 resize-none text-sm"
                    required
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                >
                  {loading ? (
                    <Loader2 className="size-5 animate-spin" />
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <ToastContainer theme="dark" position="bottom-center" />
    </div>
  );
};

export default ContactContent;
