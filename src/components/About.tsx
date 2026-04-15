"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FiUser,
  FiCalendar,
  FiMapPin,
  FiMail,
  FiPhone,
  FiDownload,
} from "react-icons/fi";

const personalInfo = [
  { icon: FiUser, label: "Name", value: "Nahom Bekele" },
  { icon: FiCalendar, label: "Date of Birth", value: "July 01, 2004" },
  { icon: FiMapPin, label: "Address", value: "Addis-Ababa / Dire-Dawa" },
  { icon: FiMail, label: "Email", value: "nahombekele24@gmail.com" },
  { icon: FiPhone, label: "Phone", value: "0987121141" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative section-padding bg-grid">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-3">
            Get To Know Me
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-foreground/70 leading-relaxed text-base md:text-lg mb-6">           
              I work across web development, design, and video to create complete digital solutions.
            </p>

            <p className="text-foreground/70 leading-relaxed text-base md:text-lg mb-8">
              My focus is on clarity, functionality, and strong visual impact.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { number: "1+", label: "Years Experience" },
                { number: "5+", label: "Projects Completed" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="text-center p-6 rounded-2xl glass-light"
                >
                  <p className="text-2xl md:text-3xl font-bold gradient-text">
                    {stat.number}
                  </p>
                  <p className="text-foreground/50 text-xs mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Personal info card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass rounded-3xl p-8 md:p-10 lg:p-12 glow-purple"
          >
            <h3 className="text-xl font-semibold mb-6">
              Personal{" "}
              <span className="gradient-text">Information</span>
            </h3>

            <div className="space-y-5">
              {personalInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <info.icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-foreground/40 text-xs uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-foreground/90 text-sm font-medium truncate">
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download CV */}
            <motion.a
              href="/resume.pdf"
              download
              className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold cursor-hover"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 30px rgba(109,40,217,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <FiDownload size={18} />
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
