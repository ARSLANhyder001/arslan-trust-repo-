import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import GlowingButton from "@/components/common/glowing-button";

export default function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/education", label: "Education" },
    { href: "/faq", label: "FAQs" },
    { href: "/investor-ai-tools", label: "AI Tools" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <motion.nav
      className="sticky top-0 left-0 right-0 z-50 px-6 py-4 bg-gradient-to-r from-neon-cyan via-electric-violet to-light-mint bg-opacity-90 shadow-2xl backdrop-blur-lg border-b-2 border-neon-cyan animate-pulse"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span className="font-orbitron font-bold text-xl glow-text cursor-pointer">SAIR REIT</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 mr-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <motion.span
                className={`transition-colors duration-300 cursor-pointer ${
                  isActive(item.href) ? "text-neon-cyan" : "hover:text-neon-cyan"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block ml-8">
          <GlowingButton className="bg-gradient-to-r from-electric-violet via-neon-cyan to-light-mint text-white font-bold px-6 py-2 rounded-full shadow-lg hover:from-neon-cyan hover:to-electric-violet transition-all border-2 border-neon-cyan">Join Us Now</GlowingButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden mt-4 glass-card rounded-lg mx-6 p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={`block py-2 transition-colors duration-300 ${
                    isActive(item.href) ? "text-neon-cyan" : "hover:text-neon-cyan"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <div className="pt-2">
              <GlowingButton className="w-full">Start Investing</GlowingButton>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
