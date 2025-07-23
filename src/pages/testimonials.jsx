// import React from "react";

// const TESTIMONIALS = [
//   {
//     name: "Aarav Singh",
//     role: "Startup Founder",
//     quote:
//       "PitchOS made our pitch deck journey seamless and professional. The AI suggestions were spot-on and saved us days of work.",
//     avatar: "🧑‍💻",
//   },
//   {
//     name: "Prisha Mehta",
//     role: "Product Manager",
//     quote:
//       "We loved how quickly we could put together a stunning deck. Investors specifically complimented our clarity and flow!",
//     avatar: "👩‍💼",
//   },
//   {
//     name: "Rahul Sharma",
//     role: "Marketing Lead",
//     quote:
//       "The templates, guidance, and real-time feedback in PitchOS boosted our team's confidence. Highly recommend it to every startup.",
//     avatar: "🧑‍🔬",
//   },
// ];

// const Testimonials = () => (
//   // <div className="max-w-3xl mx-auto py-16 px-6">
//   <div className="max-w-3xl mx-auto pt-24 pb-16 px-6">

//     <h1 className="text-4xl md:text-5xl font-bold mb-10 text-purple-800 text-center">
//       What Our Users Say
//     </h1>
//     <div className="flex flex-col gap-8">
//       {TESTIMONIALS.map((t, idx) => (
//         <div
//           key={idx}
//           className="bg-white shadow-lg border border-purple-100 rounded-xl p-6 flex flex-col md:flex-row items-center gap-4"
//         >
//           <div className="text-6xl mb-3 md:mb-0">{t.avatar}</div>
//           <div>
//             <p className="text-lg text-gray-800 mb-2 italic">"{t.quote}"</p>
//             <div className="flex flex-col">
//               <span className="font-semibold text-purple-700">{t.name}</span>
//               <span className="text-sm text-gray-500">{t.role}</span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// // ✅ This line is mandatory!
// export default Testimonials;

// Testimonials.jsx


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import raviImg from "../assets/ravi.jpg";
import krishImg from "../assets/krish.png";
import NarendraNarayanImg from "../assets/Narendra-Narayan.jpg";

// LinkedIn Icon SVG
const LinkedinIcon = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 25 25">
    <rect width="25" height="25" rx="6" fill="#0077b5"/>
    <path d="M7.7 9.3H10.3V17H7.7V9.3ZM9 8.1C8.2 8.1 7.5 7.4 7.5 6.6C7.5 5.8 8.2 5.1 9 5.1C9.8 5.1 10.5 5.8 10.5 6.6C10.5 7.4 9.8 8.1 9 8.1ZM11.7 9.3H14.2V10.2H14.3C14.6 9.7 15.3 9.1 16.3 9.1C18.1 9.1 18.7 10.2 18.7 11.8V17H16V12.1C16 11.2 15.8 10.4 14.8 10.4C13.8 10.4 13.6 11.1 13.6 12V17H11.7V9.3Z" fill="#fff"/>
  </svg>
);

// Black quote/inverted comma icon
const QuoteIcon = () => (
  <svg width="56" height="44" fill="none" viewBox="0 0 54 44">
    <path d="M12 42h8L28 16V2h-12v14h6l-8 26zm24 0h8L52 16V2H40v14h6l-8 26z"
      fill="#111"/>
  </svg>
);

const TESTIMONIALS = [
  {
    name: "Narendra Narayan",
    role: "Co-founder",
    quote:
      "PITCH-OS consistently delivers clean, intuitive designs that strike the perfect balance between aesthetic and usability. Whether it’s for a complex workflow or lightweight self-service, the user experience always feels effortless and refined.",
    image: raviImg,
    company: "PITCHOS",
    linkedin: "#",
  },
  {
    name: "Prisha Mehta",
    role: "Product Manager",
    quote:
      "PitchOS made it possible to bring our concept to life—and fast! The AI-driven deck builder made sense of our messy first draft and gave us messages and clarity investors loved. The feedback feature helped us polish the weak points and boost our team's confidence.",
    image: krishImg,
    company: "PITCHOS",
    linkedin: "#"
  },
  {
    name: "Rahul Sharma",
    role: "Marketing Lead",
    quote:
      "Honestly, I doubted any tool could save us time pitching. But PitchOS surprised our whole team—it streamlined our flow, offered meaningful suggestions, and let us focus on storytelling. Our investor meetings got easier and more effective. Highly recommended for every startup!",
    image: NarendraNarayanImg,
    company: "PITCHOS",
    linkedin: "#"
  },
];

// Animation variants for smooth slide+fade
const animationVariants = {
  enter: { opacity: 0, x: 50, scale: 0.98 },
  center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, type: "spring" } },
  exit: { opacity: 0, x: -50, scale: 0.98, transition: { duration: 0.4 } }
};

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % TESTIMONIALS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const { name, role, quote, image, company, linkedin } = TESTIMONIALS[index];

  return (
    <section className="min-h-screen bg-gray-100 flex flex-col items-center py-24 px-5 transition-colors">
      {/* Section Header */}
      <div className="mb-16 text-center">
        <span className="text-xs tracking-widest text-green-400 mb-2 block">TESTIMONIALS</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
          TRUSTED BY FOUNDERS<br />BACKED BY RESULTS
        </h1>
        <p className="text-gray-400 text-xs md:text-sm">
          Results that speak through founder voices.
        </p>
      </div>

      <div className="relative w-full max-w-3xl flex justify-center items-start">
        {/* 3-dot progress, now inside card top-right */}
        <div className="absolute top-0 right-0 pt-7 pr-8 flex gap-2 select-none z-20">
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className={
                "w-3 h-3 rounded-full " +
                (index === i ? "bg-green-500 scale-110 shadow" : "bg-gray-300")
              }
              style={{ transition: "all 0.4s" }}
            />
          ))}
        </div>
        {/* Use AnimatePresence for animated transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={animationVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="bg-white border rounded-2xl shadow-xl w-full px-0 pt-12 flex flex-col items-stretch relative"
            style={{ minHeight: 420 }}
          >
            {/* Envelope handle: centered, now truly inside */}
            <div className="flex justify-center">
              <div className="w-20 h-3 bg-gray-300 rounded shadow mt-7 mb-3"></div>
            </div>
            {/* Black quote icon, top-left */}
            <div className="pl-10 pt-1 pb-1">
              <QuoteIcon />
            </div>
            {/* Company name left-aligned */}
            <span className="block text-base font-semibold text-gray-500 mb-2 pl-10">{company}</span>
            {/* Quote, soft gray, left-aligned */}
            <p className="text-gray-600 text-xl font-normal text-left mb-9 leading-relaxed pl-10 pr-10">
              “{quote}”
            </p>
            {/* Profile section: photo left, info stack, LinkedIn right */}
            <div className="flex items-center justify-between pl-10 pr-10 pb-8">
              <div className="flex items-center">
                <img
                  src={image}
                  alt={name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gray-300"
                />
                <div className="flex flex-col ml-4">
                  <span className="font-semibold text-gray-800 text-lg">{name}</span>
                  <span className="text-sm text-gray-500">{role}</span>
                </div>
              </div>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-5 hover:scale-110 transition"
                aria-label="View LinkedIn Profile"
              >
                <LinkedinIcon />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;
