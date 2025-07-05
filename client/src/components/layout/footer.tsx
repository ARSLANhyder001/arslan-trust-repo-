import { motion } from "framer-motion";
import { Link } from "wouter";
import { Twitter, MessageCircle, Linkedin } from "lucide-react";
import GlowingButton from "@/components/common/glowing-button";

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/education", label: "Education" },
    { href: "/faq", label: "FAQs" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", color: "from-neon-cyan to-electric-violet" },
    { icon: MessageCircle, href: "#", color: "from-electric-violet to-light-mint" },
    { icon: Linkedin, href: "#", color: "from-light-mint to-neon-cyan" },
  ];

  return (
    <footer className="bg-gradient-to-t from-navy to-transparent py-16 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              className="flex items-center space-x-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-neon-cyan to-electric-violet rounded-lg flex items-center justify-center">
                <span className="font-orbitron font-bold text-white text-xl">S</span>
              </div>
              <span className="font-orbitron font-bold text-2xl glow-text">SAIR REIT</span>
            </motion.div>
            
            <motion.p
              className="text-gray-300 mb-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Leading the future of halal real estate investment through innovative technology and transparent practices.
            </motion.p>

            {/* Newsletter Signup */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="glass-card px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:border-neon-cyan focus:outline-none focus:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 flex-grow"
              />
              <GlowingButton size="md">Subscribe</GlowingButton>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-orbitron font-bold text-lg mb-6 text-neon-cyan">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-orbitron font-bold text-lg mb-6 text-electric-violet">Connect</h4>
            <div className="space-y-4">
              <p className="text-gray-300">hello@sairreit.com</p>
              <p className="text-gray-300">+1 (555) 123-4567</p>
              <div className="flex space-x-4 pt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center transition-all duration-300`}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)",
                    }}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-800 pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-gray-400">
            © 2024 SAIR REIT. All rights reserved. | Regulated by Financial Authority
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
