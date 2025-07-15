// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { auth } from '../firebase'
// import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { AnimatedGroup } from '@/components/ui/animated-group'
// import { cn } from '@/lib/utils'
// import { motion } from "framer-motion";
// import { useState, useMemo, useEffect } from 'react'
// import dashboard from  '../assets/dashboard.jpg'
// import dark from '../assets/dark.png'
// const transitionVariants = {
//     item: {
//         hidden: {
//             opacity: 0,
//             filter: 'blur(12px)',
//             y: 12,
//         },
//         visible: {
//             opacity: 1,
//             filter: 'blur(0px)',
//             y: 0,
//             transition: {
//                 type: 'spring',
//                 bounce: 0.3,
//                 duration: 1.5,
//             },
//         },
//     },
// }


// export function HeroSection() {
//     const navigate = useNavigate();
//     const [titleNumber, setTitleNumber] = useState(0);
// const titles = useMemo(
//     () => ["vision", "showcase", "effortlessly", "get funded", "grow"],
//     []
// );

// useEffect(() => {
//     const timeoutId = setTimeout(() => {
//         if (titleNumber === titles.length - 1) {
//             setTitleNumber(0);
//         } else {
//             setTitleNumber(titleNumber + 1);
//         }
//     }, 2000);
//     return () => clearTimeout(timeoutId);
// }, [titleNumber, titles]);

//     return (
//         <>
            
//             <main className="overflow-hidden bg-gradient-to-br from-amber-50 via-stone-100 to-amber-50" style={{backgroundColor: '#F5F2E8'}}>
//                 <div
//                     aria-hidden
//                     className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
//                     <div
//                         className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(276,50%,70%,.08)_0,hsla(276,50%,60%,.02)_50%,hsla(276,50%,50%,0)_80%)]" />
//                     <div
//                         className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(276,50%,70%,.06)_0,hsla(276,50%,60%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
//                     <div
//                         className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(276,50%,70%,.04)_0,hsla(276,50%,60%,.02)_80%,transparent_100%)]" />
//                 </div>
//                 <section>
//                     <div className="relative pt-24 md:pt-36">
//                         <AnimatedGroup
//                             variants={{
//                                 container: {
//                                     visible: {
//                                         transition: {
//                                             delayChildren: 1,
//                                         },
//                                     },
//                                 },
//                                 item: {
//                                     hidden: {
//                                         opacity: 0,
//                                         y: 20,
//                                     },
//                                     visible: {
//                                         opacity: 1,
//                                         y: 0,
//                                         transition: {
//                                             type: 'spring',
//                                             bounce: 0.3,
//                                             duration: 2,
//                                         },
//                                     },
//                                 },
//                             }}
//                             className="absolute inset-0 -z-20">
//                         </AnimatedGroup>
//                         <div
//                             aria-hidden
//                             className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,#F5F2E8_75%)]" />
//                         <div className="mx-auto max-w-7xl px-6">
//                             <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
//                                 <AnimatedGroup variants={transitionVariants}>
//                                     <Link
//                                         href="#link"
//                                         className="hover:bg-purple-100 hover:border-yellow-500/80 hover:shadow-yellow-500/20 bg-white/80 group mx-auto flex w-fit items-center gap-4 rounded-full border border-purple-200 p-1 pl-4 shadow-md shadow-purple-200/50 transition-all duration-300 backdrop-blur-sm">
//                                         <span className="text-gray-700 text-sm">Try out PitchMaster now!</span>
//                                         <span
//                                             className="block h-4 w-0.5 border-l border-purple-300 bg-purple-300"></span>

//                                         <div
//                                             className="bg-purple-200 group-hover:bg-yellow-400 group-hover:border-yellow-500 border border-purple-300 size-6 overflow-hidden rounded-full duration-500 transition-all">
//                                             <div
//                                                 className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
//                                                 <span className="flex size-6">
//                                                     <ArrowRight className="m-auto size-3 text-purple-600 group-hover:text-white transition-colors" />
//                                                 </span>
//                                                 <span className="flex size-6">
//                                                     <ArrowRight className="m-auto size-3 text-purple-600 group-hover:text-white transition-colors" />
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </Link>
//                                    <div className="mx-auto mt-8 max-w-2xl text-balance text-lg">

//                                     <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">

//                                         <span className="text-gray-700">Craft Pitches That Win Investors</span>

//                                         <span className="relative flex w-full justify-center overflow-hidden text-center h-16 md:h-24 pb-6 md:pb-6 pt-2 md:pt-2">

//                                             &nbsp;

//                                             {titles.map((title, index) => (

//                                                 <motion.span

//                                                     key={index}

//                                                     className="absolute font-semibold text-purple-600 hover:text-purple-700 transition-colors"

//                                                     initial={{ opacity: 0, y: "-50" }}

//                                                     transition={{ type: "spring", stiffness: 50 }}

//                                                     animate={

//                                                         titleNumber === index

//                                                             ? {

//                                                                 y: 0,

//                                                                 opacity: 1,

//                                                             }

//                                                             : {

//                                                                 y: titleNumber > index ? -100 : 100,

//                                                                 opacity: 0,

//                                                             }

//                                                     }

//                                                 >

//                                                     {title}

//                                                 </motion.span>

//                                             ))}

//                                         </span>

//                                     </h1>
//                                     </div>

//                                     <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-gray-600">
//                                  Transform your ideas into compelling pitches in minutes with our powerful AI-driven platform. Take charge of your journey from concept to funding and bring your vision to life with confidence!
//                                     </p>
//                                 </AnimatedGroup>

//                                 <AnimatedGroup
//                                     variants={{
//                                         container: {
//                                             visible: {
//                                                 transition: {
//                                                     staggerChildren: 0.05,
//                                                     delayChildren: 0.75,
//                                                 },
//                                             },
//                                         },
//                                         ...transitionVariants,
//                                     }}
//                                     className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
//                                     <div key={1} className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 hover:from-yellow-400/30 hover:to-yellow-500/30 rounded-[14px] border border-yellow-500/50 hover:border-yellow-400 p-0.5 transition-all duration-300">
//                                         <Button
//                                             size="lg"
//                                             className="rounded-xl px-5 text-base bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-gray-800 font-semibold transition-all duration-300 shadow-lg hover:shadow-yellow-500/25"
//                                             onClick={() => {
//                                                 const user = auth.currentUser;
//                                                 if (user) {
//                                                     navigate('/dashboard');
//                                                 } else {
//                                                     navigate('/login');
//                                                 }
//                                             }}
//                                         >
//                                             <span className="text-nowrap">Start Now</span>
//                                         </Button>
//                                     </div>
//                                     {/* <Button
//                                         key={2}
//                                         asChild
//                                         size="lg"
//                                         variant="ghost"
//                                         className="h-10.5 rounded-xl px-5">
//                                         <Link href="#link">
//                                             <span className="text-nowrap">Request a demo</span>
//                                         </Link>
//                                     </Button> */}
//                                 </AnimatedGroup>
//                             </div>
//                         </div>

//                         <AnimatedGroup
//                             variants={{
//                                 container: {
//                                     visible: {
//                                         transition: {
//                                             staggerChildren: 0.05,
//                                             delayChildren: 0.75,
//                                         },
//                                     },
//                                 },
//                                 ...transitionVariants,
//                             }}>
//                             <div
//                                 className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
//                                 <div
//                                     aria-hidden
//                                     className="bg-gradient-to-b from-transparent from-35% to-stone-100 absolute inset-0 z-10" />
//                                 <div
//                                     className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-purple-200 hover:border-yellow-500/50 p-4 shadow-lg shadow-purple-200/30 ring-1 ring-purple-100 hover:ring-yellow-500/30 transition-all duration-500 bg-white/50 backdrop-blur-sm hover:shadow-yellow-500/10">
//                                     <img
//                                         className="aspect-15/8 relative hidden rounded-2xl dark:block transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20"
//                                         src= {dark}
//                                         alt="app screen"
//                                         width="2700"
//                                         height="1440" />
//                                     <img
//                                         className="z-2 aspect-15/8 relative rounded-2xl border border-purple-200 hover:border-yellow-500/30 dark:hidden transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20"
//                                         src= {dashboard}
//                                         alt="app screen"
//                                         width="2700"
//                                         height="1440" />
//                                 </div>
//                             </div>
//                         </AnimatedGroup>
//                     </div>
//                 </section>
//             </main>
//         </>
//     );
// }

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const handleApplyNow = () => {
    if (user) {
      navigate("/founder-form");
    } else {
      navigate("/register");
    }
  };

  return (
  <section className="relative flex items-center justify-center overflow-hidden bg-white dark:bg-background pt-16 mt-0 border-t-0">
    {/* Background Pattern */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-background/50 dark:to-background"></div>
    </div>

    <div className="relative w-full max-w-7xl mx-auto px-6 py-12 sm:py-20">
      <div className="text-center space-y-10 sm:space-y-14">
        {/* Heading */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto">
            <span className="text-gray-900 dark:text-white">The Operating System</span>
            <span className="block mt-2 text-[#5F2B8D] dark:text-[#9333EA]">for Founders</span>
          </h1>
          <div className="min-h-[8rem] sm:min-h-[6rem] flex justify-center items-center py-4">
            <TypewriterEffectSmooth
              words={[
                { text: "For The", className: "text-gray-600 dark:text-gray-300" },
                { text: "Founders", className: "text-[#5F2B8D] dark:text-[#9333EA]" },
                { text: "By The", className: "text-gray-600 dark:text-gray-300" },
                { text: "Founders", className: "text-[#5F2B8D] dark:text-[#9333EA]" },
              ]}
              cursorClassName="bg-[#5F2B8D] dark:bg-[#9333EA]"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleApplyNow}
            className="group relative overflow-hidden rounded-lg bg-[#5F2B8D] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl dark:bg-[#9333EA]"
          >
            <div className="absolute inset-0 bg-white/10 transition-transform duration-200 group-hover:translate-x-full"></div>
            <span className="relative flex items-center gap-2">
              Get Funded <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </button>
        </div>

        {/* 2-Column Layout for Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">
          {/* Left Side Features */}
          <div className="flex flex-col gap-10">
            {/* Pitch OS */}
            <div className="p-8 bg-white dark:bg-card rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#5F2B8D]/10 dark:bg-[#9333EA]/20 rounded-xl flex items-center justify-center group-hover:bg-[#5F2B8D]/20 dark:group-hover:bg-[#9333EA]/30 transition-colors">
                  <div className="grid grid-cols-2 gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-[#5F2B8D] dark:bg-[#9333EA] rounded-sm"></div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-[#5F2B8D] dark:group-hover:text-[#9333EA]">Pitch OS</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">Map out your Business model and Startup roadmap</p>
                </div>
              </div>
            </div>

            {/* Founder Docs */}
            <div className="p-8 bg-white dark:bg-card rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#5F2B8D]/10 dark:bg-[#9333EA]/20 rounded-xl flex items-center justify-center group-hover:bg-[#5F2B8D]/20 dark:group-hover:bg-[#9333EA]/30 transition-colors">
                  <div className="w-6 h-6 border-2 border-[#5F2B8D] dark:border-[#9333EA] rounded flex flex-col">
                    <div className="flex-1 border-b border-[#5F2B8D] dark:border-[#9333EA]"></div>
                    <div className="flex-1 border-b border-[#5F2B8D] dark:border-[#9333EA]"></div>
                    <div className="flex-1"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-[#5F2B8D] dark:group-hover:text-[#9333EA]">Founder Docs</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">Generate and manage your key Startup Documents</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Features */}
          <div className="flex flex-col gap-10">
            {/* Tasks */}
            <div className="p-8 bg-white dark:bg-card rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#5F2B8D]/10 dark:bg-[#9333EA]/20 rounded-xl flex items-center justify-center group-hover:bg-[#5F2B8D]/20 dark:group-hover:bg-[#9333EA]/30 transition-colors">
                  <div className="flex flex-col gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-[#5F2B8D] dark:bg-[#9333EA] rounded-full"></div>
                        <div className="w-4 h-1 bg-[#5F2B8D] dark:bg-[#9333EA] rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-[#5F2B8D] dark:group-hover:text-[#9333EA]">Tasks</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">Organize and track your to-dos and milestones</p>
                </div>
              </div>
            </div>

            {/* Ask Founderoo */}
            <div className="p-8 bg-white dark:bg-card rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#5F2B8D]/10 dark:bg-[#9333EA]/20 rounded-xl flex items-center justify-center group-hover:bg-[#5F2B8D]/20 dark:group-hover:bg-[#9333EA]/30 transition-colors">
                  <div className="w-6 h-6 bg-[#5F2B8D] dark:bg-[#9333EA] rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-[#5F2B8D] dark:group-hover:text-[#9333EA]">Ask Founderoo</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">Get answers and advice from our AI assistant</p>
                </div>
              </div>
            </div>
          </div>
        </div>

{/* Bottom Text */}
<div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 pt-24">
  <div className="relative p-6 sm:p-8 bg-white dark:bg-card rounded-2xl shadow-sm">
    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
      <span className="inline-block px-4 py-2 bg-[#5F2B8D] dark:bg-[#9333EA] text-white text-sm font-medium rounded-full shadow-sm mb-4">
        Did you know?
      </span>
    </div>
    <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 font-semibold text-center leading-relaxed mt-6">
      <span className="text-[#5F2B8D] dark:text-[#9333EA] font-bold">90%</span> of Startups fail — not because of bad ideas, but because of bad Execution.
      <span className="block mt-4 text-[#5F2B8D] dark:text-[#9333EA] font-bold">
        Founderoo helps First-time Founders avoid that trap.
      </span>
    </p>
  </div>
</div>



      </div> {/* text-center container */}
    </div> {/* max-w-7xl container */}
  </section>
);
}



