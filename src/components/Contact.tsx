"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiMail,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate send (replace with EmailJS or API route)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "nahombekele24@gmail.com",
      href: "mailto:nahombekele24@gmail.com",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "0987121141",
      href: "tel:0987121141",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Addis-Ababa / Dire-Dawa",
      href: null,
    },
  ];

  const socials = [
    { icon: FiGithub, href: "https://github.com/NahomDevX", label: "GitHub" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/nahombekele116", label: "LinkedIn" },
    { icon: FiTwitter, href: "https://x.com/nahom_116", label: "Twitter" },
  ];

  return (
    <section id="contact" className="relative section-padding">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-3">
            Let&apos;s Connect
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-3">
                Let&apos;s work{" "}
                <span className="text-primary-light">together</span>
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                Have a project in mind or want to chat? Feel free to reach out.
                I&apos;m always open to new opportunities and collaborations.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-5 group"
                >
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary-light group-hover:glow-purple transition-all">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-foreground/40 text-xs uppercase tracking-wider">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground/90 text-sm font-medium hover:text-primary-light transition-colors cursor-hover"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground/90 text-sm font-medium">
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-foreground/40 text-sm mb-4">Follow me on</p>
              <div className="flex gap-3">
                {socials.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 rounded-xl glass text-foreground/60 hover:text-primary-light transition-all cursor-hover"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 20px rgba(139,92,246,0.3)",
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-8 md:p-10 lg:p-12 glow-purple flex flex-col gap-6"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="flex items-center gap-2 text-sm font-medium text-foreground/70 mb-3"
                >
                  <FiUser size={14} />
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full px-5 py-4 rounded-2xl bg-white/5 border text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 transition-all ${
                    errors.name
                      ? "border-red-500/50 focus:ring-red-500/30"
                      : "border-border focus:ring-primary/30 focus:border-primary/40"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="flex items-center gap-2 text-sm font-medium text-foreground/70 mb-3"
                >
                  <FiMail size={14} />
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full px-5 py-4 rounded-2xl bg-white/5 border text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 transition-all ${
                    errors.email
                      ? "border-red-500/50 focus:ring-red-500/30"
                      : "border-border focus:ring-primary/30 focus:border-primary/40"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="flex items-center gap-2 text-sm font-medium text-foreground/70 mb-3"
                >
                  <FiMessageSquare size={14} />
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className={`w-full px-5 py-4 rounded-2xl bg-white/5 border text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message
                      ? "border-red-500/50 focus:ring-red-500/30"
                      : "border-border focus:ring-primary/30 focus:border-primary/40"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1.5">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg cursor-hover disabled:opacity-60 disabled:cursor-not-allowed"
                whileHover={
                  !isSubmitting
                    ? {
                        scale: 1.02,
                        boxShadow: "0 0 30px rgba(109,40,217,0.4)",
                      }
                    : {}
                }
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Success message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm text-center"
                >
                  ✓ Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
