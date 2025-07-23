
"use client";
import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";

const footerLinks = [
  {
    label: "Product",
    links: [
      { title: "Features", href: "#features" },
      { title: "Pricing", href: "#pricing" },
      { title: "Testimonials", href: "/testimonials", isRoute: true },
      { title: "Integrations", href: "/integrations", isRoute: true }, // ✅ Fixed here
    ],
  },
  {
    label: "Company",
    links: [
      { title: "FAQs", href: "#faq", scrollTo: "faq" },
      { title: "About Us", href: "/about", isRoute: true },
      { title: "Privacy Policy", href: "/privacy", isRoute: true },
      { title: "Terms of Service", href: "/terms", isRoute: true },
    ],
  },
  {
    label: "Resources",
    links: [
      { title: "Blog", href: "/blog", isRoute: true },
      { title: "Changelog", href: "/changelog", isRoute: true },
      { title: "Brand", href: "/brand", isRoute: true },
      { title: "Help", href: "/help", isRoute: true },
    ],
  },
  {
    label: "Social Links",
    links: [
      { title: "Facebook", href: "#", icon: FacebookIcon },
      { title: "Instagram", href: "#", icon: InstagramIcon },
      { title: "Youtube", href: "#", icon: YoutubeIcon },
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/company/founderoo-circle/posts/?feedView=all",
        icon: LinkedinIcon,
      },
    ],
  },
];

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigate = (href) => {
    if (location.pathname !== href) {
      navigate(href);
    }
  };

  return (
    <footer className="w-full bg-[#FAF8F2] border-t">
      <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl px-6 py-12 lg:py-16">
        <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

        <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
          <AnimatedContainer className="space-y-4">
            <h3 className="text-2xl font-semibold">PitchOS</h3>
            <p className="text-muted-foreground mt-8 text-sm md:mt-0">
              © {new Date().getFullYear()} PitchOS. All rights reserved.
            </p>
          </AnimatedContainer>

          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
            {footerLinks.map((section, index) => (
              <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                <div className="mb-10 md:mb-0">
                  <h3 className="text-xs text-purple-700 font-semibold">{section.label}</h3>
                  <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                    {section.links.map((link) => (
                      <li key={link.title}>
                        {link.scrollTo ? (
                          <button
                            onClick={() => handleScrollToSection(link.scrollTo)}
                            className="hover:text-yellow-600 hover:underline inline-flex items-center transition-all duration-300 bg-transparent border-none p-0 cursor-pointer"
                          >
                            {link.icon && <link.icon className="me-1 size-4 text-purple-700" />}
                            {link.title}
                          </button>
                        ) : link.isRoute ? (
                          <button
                            onClick={() => handleNavigate(link.href)}
                            className="hover:text-yellow-600 hover:underline inline-flex items-center transition-all duration-300 bg-transparent border-none p-0 cursor-pointer"
                          >
                            {link.icon && <link.icon className="me-1 size-4 text-purple-700" />}
                            {link.title}
                          </button>
                        ) : (
                          <a
                            href={link.href}
                            className="hover:text-yellow-600 hover:underline inline-flex items-center transition-all duration-300"
                          >
                            {link.icon && <link.icon className="me-1 size-4 text-purple-700" />}
                            {link.title}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function AnimatedContainer({ className, delay = 0.1, children }) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
