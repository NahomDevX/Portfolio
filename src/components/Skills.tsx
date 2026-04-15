"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiFigma,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiBootstrap,
  SiExpress,
  SiPostman,
  SiVite,
  
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandVscode, TbVideo, TbPhoto, TbPaletteFilled } from "react-icons/tb";

const skillRows = [
  // Row 1
  [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "MySQL", icon: SiMysql, color: "#3776AB" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss, color: "#1572B6" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Express", icon: SiExpress, color: "#339933" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
  ],
  // Row 2
  [
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#2496ED" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
    { name: "Premiere Pro", icon: TbVideo, color: "#9999FF" },
    { name: "Photoshop", icon: TbPhoto, color: "#31A8FF" },
    { name: "Illustrator", icon: TbPaletteFilled, color: "#FF9A00" },
    { name: "Postman", icon: SiPostman, color: "#FF9A00" },
  ],
];

function SkillCard({
  skill,
  index,
}: {
  skill: (typeof skillRows)[0][0];
  index: number;
}) {
  return (
    <motion.div
      className="flex-shrink-0 group cursor-hover"
      whileHover={{ y: -8, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <div className="glass rounded-2xl p-5 w-32 h-32 flex flex-col items-center justify-center gap-3 group-hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
        {/* Glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"
          style={{
            background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)`,
          }}
        />
        <skill.icon
          size={36}
          style={{ color: skill.color }}
          className="relative z-10 drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
        />
        <span className="text-xs font-medium text-foreground/70 group-hover:text-foreground transition-colors relative z-10">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative section-padding bg-grid overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-3">
            What I Use
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        {/* Scrolling rows */}
        <div className="space-y-6">
          {skillRows.map((row, rowIndex) => (
            <div key={rowIndex} className="relative">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

              <div className="overflow-hidden">
                <motion.div
                  className="flex gap-4"
                  animate={{
                    x: rowIndex === 0 ? [0, -50 * row.length] : [-50 * row.length, 0],
                  }}
                  transition={{
                    x: {
                      duration: 30 + rowIndex * 5,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                >
                  {/* Duplicate for seamless loop */}
                  {[...row, ...row, ...row].map((skill, i) => (
                    <SkillCard key={`${rowIndex}-${i}`} skill={skill} index={i} />
                  ))}
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* Category labels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-14"
        >
          {[
            { label: "Languages", color: "from-yellow-500 to-orange-500" },
            { label: "Frameworks", color: "from-blue-500 to-cyan-500" },
            { label: "Tools & Design", color: "from-purple-500 to-pink-500" },
          ].map((cat) => (
            <div key={cat.label} className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${cat.color}`}
              />
              <span className="text-sm text-foreground/50">{cat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
