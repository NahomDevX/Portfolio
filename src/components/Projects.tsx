"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const categories = ["All", "Web App", "Design", "Mobile","Console App"];

const projects = [
  {
    title: "Jackpot",
    description:
      "A fully interactive slot machine game built in Node.js with betting mechanics, randomized reels, and payout system based on symbol combinations.",
    category: "Web App",
    tags: ["Node.js", "Html", "CSS", "JavaScript"],
    image: null,
    liveUrl: "#",
    githubUrl: "https://github.com/NahomDevX/NodeJackpot",
  },
  {
    title: "Gym Website",
    description:
      "A fully responsive fitness website showcasing gym services, training programs, and membership plans with a strong visual design.",
    category: "Web App",
    tags: ["Html", "CSS", "JavaScript","Node.js","Express","Xampp"],
    image: null,
    liveUrl: "#",
    githubUrl: "https://github.com/NahomDevX/DDUGYM",
  },
  {
    title: "Rock, Paper, Scissors",
    description:
      "A command-line Rock, Paper, Scissors game built with Node.js, allowing users to play against the computer while tracking game statistics across sessions.",
    category: "Console App",
    tags: ["Node.js", "JavaScript"],
    image: null,
    liveUrl: "#",
    githubUrl: "https://github.com/NahomDevX/Rock-Paper-Scissors-Node.js",
  },
  {
    title: "PridRoom",
    description:
      "An interactive 3D campus digital twin with live classroom simulation, predictive modeling, and a booking system with simulated payments.",
    category: "Web App",
    tags: ["React","Three.js", "Node.js", "MongoDB"],
    image: null,
    liveUrl: "#",
    githubUrl: "https://github.com/NahomDevX/PridRoom",
  },
  {
    title: "Campus Navigator",
    description:
      "A full-featured Android campus navigation system built with Java, integrating Google Maps, Firebase, offline caching, indoor navigation simulation, and MVVM architecture.",
    category: "Mobile",
    tags: ["Java", "Android", "Firebase", "Google Maps"],
    image: null,
    liveUrl: "#",
    githubUrl: "https://github.com/NahomDevX/Campus-Navigator",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative section-padding">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-3">
            My Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-12 flex-wrap"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-hover ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20"
                  : "glass text-foreground/60 hover:text-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              {/* Image area */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 via-surface to-accent/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors">
                    {project.title.charAt(0)}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4 gap-3">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full glass text-foreground hover:text-accent transition-colors cursor-hover"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiExternalLink size={18} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full glass text-foreground hover:text-primary-light transition-colors cursor-hover"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiGithub size={18} />
                  </motion.a>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <p className="text-accent text-xs font-medium uppercase tracking-wider mb-2">
                  {project.category}
                </p>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/50 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary-light border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
