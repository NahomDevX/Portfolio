"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from "react-icons/fi";

const socials = [
  { icon: FiGithub, href: "https://github.com/NahomDevX", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/nahombekele116", label: "LinkedIn" },
  { icon: FiTwitter, href: "https://x.com/nahom_116", label: "Twitter" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo / Name */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="text-xl font-bold cursor-hover"
            whileHover={{ scale: 1.05 }}
          >
            <span className="gradient-text">N</span>
            <span className="text-foreground">ahom</span>
            <span className="gradient-text">.</span>
          </motion.a>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            {["Home", "About", "Projects", "Skills", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(`#${link.toLowerCase()}`)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-sm text-foreground/50 hover:text-primary-light transition-colors cursor-hover"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-lg text-foreground/40 hover:text-primary-light hover:bg-primary/10 transition-all cursor-hover"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-border" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground/30 text-sm">
            © {new Date().getFullYear()} Nahom Bekele. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full glass text-primary-light z-40 cursor-hover"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 25px rgba(139,92,246,0.4)",
        }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <FiArrowUp size={20} />
      </motion.button>
    </footer>
  );
}
