"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BsFillPersonFill } from "react-icons/bs";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { FaHome, FaProjectDiagram } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home", icon: <FaHome /> },
  { href: "/about", label: "About", icon: <BsFillPersonFill /> },
  { href: "/experience", label: "Experience", icon: <MdWork /> },
  { href: "/projects", label: "Projects", icon: <FaProjectDiagram /> },
  { href: "/contact", label: "Contact", icon: <TbMessageChatbotFilled /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="fixed w-full z-50 top-0"
      aria-label="Main navigation"
    >
      {/* Glass bar */}
      <div className="mx-4 mt-3 rounded-2xl border border-white/10 bg-[#020817]/70 backdrop-blur-xl shadow-lg shadow-black/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent tracking-tight"
            >
              Roman.
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    <span className="text-sm">{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

          {/* Mobile Nav */}
          {isOpen && (
            <div className="md:hidden pb-4 pt-1 border-t border-white/5">
              <div className="flex flex-col gap-1 mt-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                        isActive
                          ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      )}
                    >
                      <span>{link.icon}</span>
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
