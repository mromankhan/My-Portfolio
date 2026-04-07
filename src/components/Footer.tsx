import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { href: "https://github.com/mromankhan", icon: <FiGithub size={16} />, label: "GitHub" },
  { href: "https://x.com/RomanKhan00555", icon: <FaXTwitter size={15} />, label: "X" },
  { href: "https://www.linkedin.com/in/mromankhan", icon: <FiLinkedin size={16} />, label: "LinkedIn" },
  { href: "mailto:mromankhan005@gmail.com", icon: <FiMail size={16} />, label: "Email" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#020817]">
      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
          {/* Brand */}
          <span className="text-white font-bold text-lg">
            Roman<span className="text-blue-400">.</span>
          </span>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-slate-500 hover:text-blue-400 text-sm transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/8 bg-white/[0.03] text-slate-500 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-5 text-center">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Muhammad Roman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
