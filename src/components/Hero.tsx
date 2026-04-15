"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowDown } from "react-icons/fi";

/* ── Floating particles for the background ── */
function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background:
              p.id % 3 === 0
                ? "rgba(139,92,246,0.4)"
                : p.id % 3 === 1
                ? "rgba(6,182,212,0.3)"
                : "rgba(255,255,255,0.15)",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -10, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ── Rotating titles ── */
const titles = [
  "Full Stack Developer",
  "Graphic Designer",
  "Video Editor",
  "Creative Technologist",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050510] via-[#0a0520] to-[#050515]" />
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />

      <Particles />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-24">
        {/* Text side */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-accent font-medium mb-6 tracking-wider uppercase text-sm"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text glow-text">Nahom Bekele</span>
          </motion.h1>

          {/* Rotating title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="h-10 md:h-12 mb-6 overflow-hidden"
          >
            <motion.p
              key={titleIndex}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/80"
            >
              {titles[titleIndex]}
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-foreground/60 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-20 leading-relaxed"
          >
            I create modern digital experiences by blending technology, design, and storytelling. Let&apos;s transform your vision into something remarkable
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-16 py-6 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-xs uppercase tracking-[0.15em] hover:shadow-[0_0_30px_rgba(109,40,217,0.5)] transition-all cursor-hover"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(109,40,217,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-16 py-6 rounded-full border-2 border-primary/40 text-foreground font-bold text-xs uppercase tracking-[0.15em] hover:bg-primary/10 transition-colors cursor-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex items-center gap-5 mt-32 justify-center lg:justify-start"
          >
            {[
              { icon: FiGithub, href: "https://github.com/NahomDevX" },
              { icon: FiLinkedin, href: "https://www.linkedin.com/in/nahombekele116" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass text-foreground/60 hover:text-primary-light transition-colors cursor-hover"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(139,92,246,0.3)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={30} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Image placeholder / avatar ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Spinning gradient ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #6d28d9, #06b6d4, #8b5cf6, #6d28d9)",
                padding: "3px",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full bg-[#050510]" />
            </motion.div>

            {/* Profile image container */}
            <div className="absolute inset-3 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Image 
                src="/public/assets/Nahom.png" 
                alt="Nahom Bekele" 
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating decorative dots */}
            <motion.div
              className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-accent/60 blur-sm"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-2 -left-6 w-4 h-4 rounded-full bg-primary/60 blur-sm"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-hover"
      >
        <span className="text-xs text-foreground/40 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiArrowDown className="text-primary-light" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
