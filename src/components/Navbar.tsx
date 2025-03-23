"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "@/components/Button";
import { BsFillPersonFill } from "react-icons/bs";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { FaHome, FaProjectDiagram } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home", icon: <FaHome /> },
  { href: "/about", label: "About", icon: <BsFillPersonFill /> },
  { href: "/projects", label: "Projects", icon: <FaProjectDiagram /> },
  { href: "/contact", label: "Contact", icon: <TbMessageChatbotFilled /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current route /black80

  return (
    <nav className="fixed w-full bg-[#020817]/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-blue-500 text-3xl font-bold">
            Roman Khan
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-2 text-lg transition-colors ${isActive ? "text-blue-500 font-semibold" : "text-gray-300 hover:text-blue-500"
                    }`}
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`transition-colors ${isActive ? "text-blue-500 font-semibold" : "text-gray-300 hover:text-blue-500"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="flex justify-start items-center">
                      <span className="pr-2">{link.icon}</span>
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
