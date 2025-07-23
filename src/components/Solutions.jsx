<<<<<<< HEAD
// "use client";

=======
<<<<<<< HEAD


// import React from 'react';
// import { Search, Lightbulb } from 'lucide-react';

// export const SolutionsSection = () => {
//   const solutions = [
//     {
//       id: 1,
//       color: 'yellow',
//       problem: {
//         title: 'Master the Perfect Pitch',
//         description:
//           'First-time founders struggle to craft strong pitches and often miss funding due to unclear messaging.',
//       },
//       solution: {
//         title: 'PitchMaster',
//         description:
//           'Our PitchMasterAI helps craft powerful pitches — from refining messaging to targeting investors.',
=======
// "use client";

>>>>>>> 4b4fe73
// import React from "react";
// import { Search, Lightbulb } from "lucide-react";

// export default function SolutionsSection() {
//   const solutions = [
//     {
//       id: 1,
//       color: "yellow",
//       problem: {
//         title: "Master the Perfect Pitch",
//         description:
//           "First-time founders struggle to craft strong pitches and often miss funding due to unclear messaging.",
//       },
//       solution: {
//         title: "PitchMaster",
//         description:
//           "Our PitchMasterAI helps craft powerful pitches — from refining messaging to targeting investors.",
<<<<<<< HEAD
=======
>>>>>>> ae1b615 (Initial commit)
>>>>>>> 4b4fe73
//       },
//     },
//     {
//       id: 2,
<<<<<<< HEAD
=======
<<<<<<< HEAD
//       color: 'purple',
//       problem: {
//         title: 'Isolated Founders Network',
//         description:
//           'Founders stay isolated from tools, insights, and real advice. Peer learning and networking feel hard to access.',
//       },
//       solution: {
//         title: 'Founderoo Community',
//         description:
//           'Founderoo connects founders with an active network — real-time insights, peer collaboration, and expert access.',
//       },
//     },
//     {
//       id: 3,
//       color: 'blue',
//       problem: {
//         title: 'Limited Funding Knowledge',
//         description:
//           "Founders often don't know where to look for trustworthy funding tools or clear steps to raise capital.",
//       },
//       solution: {
//         title: 'Funding Toolkit',
//         description:
//           'A curated toolkit packed with the best funding resources — including templates, lists, and roadmap.',
//       },
//     },
//     {
//       id: 4,
//       color: 'teal',
//       problem: {
//         title: 'Founders Need Quick Answers',
//         description:
//           "Founders face blockers and can't find fast, relevant, and contextual advice when they need it.",
//       },
//       solution: {
//         title: 'CoPilot',
//         description:
//           'Our in-house AI CoPilot solves your queries in real-time — from strategy help to tactical support.',
=======
>>>>>>> 4b4fe73
//       color: "purple",
//       problem: {
//         title: "Isolated Founders Network",
//         description:
//           "Founders stay isolated from tools, insights, and real advice. Peer learning and networking feel hard to access.",
//       },
//       solution: {
//         title: "Founderoo Community",
//         description:
//           "Founderoo connects founders with an active network — real-time insights, peer collaboration, and expert access.",
<<<<<<< HEAD
=======
>>>>>>> ae1b615 (Initial commit)
>>>>>>> 4b4fe73
//       },
//     },
//   ];

//   const colorClasses = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b4fe73
//     yellow: {
//       border: "border-yellow-400",
//       shadow: "shadow-yellow-300/30 hover:shadow-yellow-400/50",
//       bgIcon: "from-yellow-100 to-yellow-200 border border-yellow-300",
//       iconColor: "text-yellow-600",
//       bgSolution: "from-yellow-400 to-yellow-500 border border-yellow-500/50 shadow-yellow-500/30 hover:shadow-yellow-500/50"
//     },
<<<<<<< HEAD
=======
>>>>>>> ae1b615 (Initial commit)
>>>>>>> 4b4fe73
//     purple: {
//       border: "border-purple-200",
//       shadow: "shadow-purple-200/30 hover:shadow-purple-200/50",
//       bgIcon: "from-purple-100 to-purple-200 border border-purple-300",
//       iconColor: "text-purple-600",
//       bgSolution: "from-purple-200 to-purple-400 border border-purple-300 shadow-purple-300/40 hover:shadow-purple-400/60"
//     },
<<<<<<< HEAD
=======
<<<<<<< HEAD
//     blue: {
//       border: "border-[#ccbbdb]",
//       shadow: "shadow-[#ccbbdb]/30 hover:shadow-[#ccbbdb]/50",
//       bgIcon: "from-[#e7e1ee] to-[#d8cde4] border border-[#ccbbdb]",
//       iconColor: "text-[#8b78a5]",
//       bgSolution: "from-[#ccbbdb] to-[#bda6d1] border border-[#ccbbdb] shadow-[#ccbbdb]/40 hover:shadow-[#bda6d1]/60"
//     },
//     teal: {
//       border: "border-[#EBE5D9]",
//       shadow: "shadow-[#EBE5D9]/30 hover:shadow-[#EBE5D9]/50",
//       bgIcon: "from-[#F4F1EC] to-[#E7DFD3] border border-[#EBE5D9]",
//       iconColor: "text-[#9B8C78]",
//       bgSolution: "from-[#EBE5D9] to-[#D8CFC2] border border-[#EBE5D9] shadow-[#EBE5D9]/40 hover:shadow-[#D8CFC2]/60"
//     },
//     mint: {
//       border: "border-[#A4E9B1]",
//       shadow: "shadow-[#A4E9B1]/30 hover:shadow-[#A4E9B1]/50",
//       bgIcon: "from-[#D1F7D6] to-[#B5EEC9] border border-[#A4E9B1]",
//       iconColor: "text-[#7CC99A]",
//       bgSolution: "from-[#D1F7D6] to-[#A4E9B1] border border-[#A4E9B1] shadow-[#A4E9B1]/40 hover:shadow-[#A4E9B1]/60"
//     },
//     yellow: {
//       border: "border-yellow-300",
//       shadow: "shadow-yellow-300/30 hover:shadow-yellow-400/50",
//       bgIcon: "from-yellow-100 to-yellow-200 border border-yellow-300",
//       iconColor: "text-yellow-600",
//       bgSolution: "from-yellow-400 to-yellow-500 border border-yellow-500/50 shadow-yellow-500/30 hover:shadow-yellow-500/50"
//     }
//   };

//   const renderSolutionBlock = (solution, index) => {
//     const c = colorClasses[solution.color] || colorClasses.yellow;

//     return (
//       <div key={solution.id} className="relative">
//         {/* Desktop layout */}
//         <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start">
//           <div className="col-span-4 text-right pr-8">
=======
>>>>>>> 4b4fe73
//   };

//   const renderSolutionBlock = (solution, index) => {
//     const c = colorClasses[solution.color];

//     return (
//       <div key={solution.id} className="relative">
//         {/* Desktop layout: horizontal/side by side */}
//         <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start">
//           {/* Problem Text */}
//           <div className="col-span-4 text-right pr-8 flex flex-col justify-center">
<<<<<<< HEAD
=======
>>>>>>> ae1b615 (Initial commit)
>>>>>>> 4b4fe73
//             <h3 className="text-2xl md:text-3xl font-light mb-4 mt-1 text-gray-800">
//               {solution.problem.title}
//             </h3>
//             <p className="text-base leading-relaxed text-gray-600">
//               {solution.problem.description}
//             </p>
//           </div>
<<<<<<< HEAD
//           {/* Problem & Solution Boxes side by side */}
//           <div className="col-span-4 flex items-center justify-center gap-4">
=======
<<<<<<< HEAD

//           <div className="col-span-4 flex items-start justify-center gap-4">
=======
//           {/* Problem & Solution Boxes side by side */}
//           <div className="col-span-4 flex items-center justify-center gap-4">
>>>>>>> ae1b615 (Initial commit)
>>>>>>> 4b4fe73
//             {/* Problem Box */}
//             <div className={`rounded-3xl p-8 w-56 flex-shrink-0 bg-white/70 ${c.border} ${c.shadow} border shadow-lg backdrop-blur-sm transition-all duration-300`}>
//               <div className="flex items-center justify-between mb-4">
//                 <div className={`p-3 rounded-full bg-gradient-to-br ${c.bgIcon}`}>
//                   <Search className={`h-6 w-6 ${c.iconColor}`} />
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="text-sm font-medium mb-1 text-gray-700">Problem</div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
//                 <div className={`text-2xl font-light ${c.iconColor}`}>{String(index + 1).padStart(2, '0')}</div>
//               </div>
//             </div>

=======
>>>>>>> 4b4fe73
//                 <div className={`text-2xl font-light ${c.iconColor}`}>
//                   {String(index + 1).padStart(2, "0")}
//                 </div>
//               </div>
//             </div>
<<<<<<< HEAD
=======
>>>>>>> ae1b615 (Initial commit)
>>>>>>> 4b4fe73
//             {/* Solution Box */}
//             <div className={`rounded-3xl p-8 w-56 flex-shrink-0 bg-gradient-to-br ${c.bgSolution} shadow-lg backdrop-blur-sm transition-all duration-300`}>
//               <div className="flex items-center justify-between mb-4">
//                 <div className={`p-3 rounded-full bg-white/90 border ${c.border}`}>
//                   <Lightbulb className={`h-6 w-6 ${c.iconColor}`} />
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="text-sm font-medium mb-1 text-gray-800">Solution</div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
//                 <div className="text-2xl font-light text-gray-800">{String(index + 1).padStart(2, '0')}</div>
//               </div>
//             </div>
//           </div>

//           <div className="col-span-4 text-left pl-8">
=======
>>>>>>> 4b4fe73
//                 <div className="text-2xl font-light text-gray-800">
//                   {String(index + 1).padStart(2, "0")}
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Solution Text */}
//           <div className="col-span-4 text-left pl-8 flex flex-col justify-center">
<<<<<<< HEAD
=======
>>>>>>> ae1b615 (Initial commit)
>>>>>>> 4b4fe73
//             <h3 className="text-2xl md:text-3xl font-light mb-4 mt-1 text-gray-800">
//               {solution.solution.title}
//             </h3>
//             <p className="text-base leading-relaxed text-gray-600">
//               {solution.solution.description}
//             </p>
//           </div>
//         </div>
<<<<<<< HEAD
//         {/* Mobile layout: vertical */}
//         <div className="lg:hidden space-y-8">
=======
<<<<<<< HEAD

//         {/* Mobile layout - modified */}
//         <div className="lg:hidden space-y-8">
//           {/* Problem Section */}
=======
//         {/* Mobile layout: vertical */}
//         <div className="lg:hidden space-y-8">
>>>>>>> ae1b615 (Initial commit)
>>>>>>> 4b4fe73
//           <div className="flex flex-col items-center">
//             {/* Problem Box */}
//             <div className={`rounded-3xl p-8 w-56 flex-shrink-0 bg-white/70 ${c.border} ${c.shadow} border shadow-lg backdrop-blur-sm transition-all duration-300 mb-6`}>
//               <div className="flex items-center justify-between mb-4">
//                 <div className={`p-3 rounded-full bg-gradient-to-br ${c.bgIcon}`}>
//                   <Search className={`h-6 w-6 ${c.iconColor}`} />
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="text-sm font-medium mb-1 text-gray-700">Problem</div>
<<<<<<< HEAD
//                 <div className={`text-2xl font-light ${c.iconColor}`}>{String(index + 1).padStart(2, "0")}</div>
//               </div>
//             </div>
=======
<<<<<<< HEAD
//                 <div className={`text-2xl font-light ${c.iconColor}`}>{String(index + 1).padStart(2, '0')}</div>
//               </div>
//             </div>
            
=======
//                 <div className={`text-2xl font-light ${c.iconColor}`}>{String(index + 1).padStart(2, "0")}</div>
//               </div>
//             </div>
>>>>>>> ae1b615 (Initial commit)
>>>>>>> 4b4fe73
//             {/* Problem Text */}
//             <div className="w-full text-center px-4">
//               <h3 className="text-2xl font-light mb-4 mt-1 text-gray-800">
//                 {solution.problem.title}
//               </h3>
//               <p className="text-base leading-relaxed text-gray-600">
//                 {solution.problem.description}
//               </p>
//             </div>
//           </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD

//           {/* Solution Section */}
=======
>>>>>>> ae1b615 (Initial commit)
>>>>>>> 4b4fe73
//           <div className="flex flex-col items-center mt-8">
//             {/* Solution Box */}
//             <div className={`rounded-3xl p-8 w-56 flex-shrink-0 bg-gradient-to-br ${c.bgSolution} shadow-lg backdrop-blur-sm transition-all duration-300 mb-6`}>
//               <div className="flex items-center justify-between mb-4">
//                 <div className={`p-3 rounded-full bg-white/90 border ${c.border}`}>
//                   <Lightbulb className={`h-6 w-6 ${c.iconColor}`} />
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="text-sm font-medium mb-1 text-gray-800">Solution</div>
<<<<<<< HEAD
//                 <div className="text-2xl font-light text-gray-800">{String(index + 1).padStart(2, "0")}</div>
//               </div>
//             </div>
=======
<<<<<<< HEAD
//                 <div className="text-2xl font-light text-gray-800">{String(index + 1).padStart(2, '0')}</div>
//               </div>
//             </div>
            
=======
//                 <div className="text-2xl font-light text-gray-800">{String(index + 1).padStart(2, "0")}</div>
//               </div>
//             </div>
>>>>>>> ae1b615 (Initial commit)
>>>>>>> 4b4fe73
//             {/* Solution Text */}
//             <div className="w-full text-center px-4">
//               <h3 className="text-2xl font-light mb-4 mt-1 text-gray-800">
//                 {solution.solution.title}
//               </h3>
//               <p className="text-base leading-relaxed text-gray-600">
//                 {solution.solution.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div
//       id="solution"
//       className="bg-gradient-to-br from-amber-50 via-stone-100 to-amber-50 transition-colors duration-300"
<<<<<<< HEAD
//       style={{ backgroundColor: "#F5F2E8", paddingTop: "6rem" }}
=======
<<<<<<< HEAD
//       style={{ backgroundColor: '#F5F2E8', paddingTop: '6rem' }}
=======
//       style={{ backgroundColor: "#F5F2E8", paddingTop: "6rem" }}
>>>>>>> ae1b615 (Initial commit)
>>>>>>> 4b4fe73
//     >
//       <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-4 pb-16 md:pb-20 max-w-7xl">
//         <div className="text-center mb-12 md:mb-20">
//           <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-white/80 border border-purple-200 shadow-md shadow-purple-200/50 text-purple-600">
//             <div className="w-2 h-2 rounded-full mr-3 bg-purple-500"></div>
//             Founderoo
//           </div>
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center text-gray-800">
//             Solution To The Problem
//           </h1>
//         </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD

//         <div className="relative">
//           <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2"></div>

//           {/* DESKTOP BLOCKS */}
//           <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-32">
//             {solutions.map((s, i) => renderSolutionBlock(s, i))}
//           </div>

//           {/* MOBILE BLOCKS */}
=======
>>>>>>> 4b4fe73
//         <div className="relative">
//           <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2"></div>
//           {/* For each block */}
//           <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-32">
//             {solutions.map((s, i) => renderSolutionBlock(s, i))}
//           </div>
<<<<<<< HEAD
=======
>>>>>>> ae1b615 (Initial commit)
>>>>>>> 4b4fe73
//           <div className="lg:hidden space-y-32">
//             {solutions.map((s, i) => renderSolutionBlock(s, i))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
<<<<<<< HEAD
// }
=======
<<<<<<< HEAD
// };
=======
// }
>>>>>>> ae1b615 (Initial commit)
>>>>>>> 4b4fe73

"use client";

import React from "react";
import { Search, Lightbulb } from "lucide-react";

export default function SolutionsSection() {
  const solutions = [
    {
      id: 1,
      color: "yellow",
      problem: {
        title: "Master the Perfect Pitch",
        description:
          "First-time founders struggle to craft strong pitches and often miss funding due to unclear messaging.",
      },
      solution: {
        title: "PitchMaster",
        description:
          "Our PitchMasterAI helps craft powerful pitches — from refining messaging to targeting investors.",
      },
    },
    {
      id: 2,
      color: "purple",
      problem: {
        title: "Isolated Founders Network",
        description:
          "Founders stay isolated from tools, insights, and real advice. Peer learning and networking feel hard to access.",
      },
      solution: {
        title: "Founderoo Community",
        description:
          "Founderoo connects founders with an active network — real-time insights, peer collaboration, and expert access.",
      },
    },
  ];

  const colorClasses = {
    yellow: {
      border: "border-yellow-400",
      shadow: "shadow-yellow-300/30 hover:shadow-yellow-400/50",
      bgIcon: "from-yellow-100 to-yellow-200 border border-yellow-300",
      iconColor: "text-yellow-600",
      bgSolution:
        "from-yellow-400 to-yellow-500 border border-yellow-500/50 shadow-yellow-500/30 hover:shadow-yellow-500/50",
    },
    purple: {
      border: "border-purple-200",
      shadow: "shadow-purple-200/30 hover:shadow-purple-200/50",
      bgIcon: "from-purple-100 to-purple-200 border border-purple-300",
      iconColor: "text-purple-600",
      bgSolution:
        "from-purple-200 to-purple-400 border border-purple-300 shadow-purple-300/40 hover:shadow-purple-400/60",
    },
  };

  const renderSolutionBlock = (solution, index) => {
    const c = colorClasses[solution.color];

    return (
      <div key={solution.id} className="relative">
        {/* Desktop (Side-by-side) */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start">
          {/* Left (Problem Text) */}
          <div className="col-span-4 text-right pr-8 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-light mb-4 mt-1 text-gray-800">
              {solution.problem.title}
            </h3>
            <p className="text-base leading-relaxed text-gray-600">
              {solution.problem.description}
            </p>
          </div>
          {/* Center (Boxes) */}
          <div className="col-span-4 flex items-center justify-center gap-4">
            {/* Problem Box */}
            <div
              className={`rounded-3xl p-8 w-56 bg-white/70 ${c.border} ${c.shadow} backdrop-blur-sm shadow-lg transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`p-3 rounded-full bg-gradient-to-br ${c.bgIcon}`}
                >
                  <Search className={`h-6 w-6 ${c.iconColor}`} />
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium mb-1 text-gray-700">
                  Problem
                </div>
                <div className={`text-2xl font-light ${c.iconColor}`}>
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </div>
            {/* Solution Box */}
            <div
              className={`rounded-3xl p-8 w-56 bg-gradient-to-br ${c.bgSolution} backdrop-blur-sm shadow-lg transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-full bg-white/90 border ${c.border}`}>
                  <Lightbulb className={`h-6 w-6 ${c.iconColor}`} />
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium mb-1 text-gray-800">
                  Solution
                </div>
                <div className="text-2xl font-light text-gray-800">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>
          {/* Right (Solution Text) */}
          <div className="col-span-4 text-left pl-8 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-light mb-4 mt-1 text-gray-800">
              {solution.solution.title}
            </h3>
            <p className="text-base leading-relaxed text-gray-600">
              {solution.solution.description}
            </p>
          </div>
        </div>

        {/* Mobile (Vertical Layout) -- <lg screens */}
        <div className="lg:hidden flex flex-col space-y-8 md:space-y-12">
          <div className="flex flex-col items-center gap-2">
            {/* Problem Box */}
            <div
              className={`
                rounded-3xl p-4 sm:p-6 w-full max-w-xs sm:max-w-sm bg-white/70 
                ${c.border} ${c.shadow} backdrop-blur-sm shadow-lg transition-all duration-300 mb-2
              `}
            >
              <div className="flex items-center justify-center mb-2">
                <div className={`p-3 rounded-full bg-gradient-to-br ${c.bgIcon}`}>
                  <Search className={`h-6 w-6 ${c.iconColor}`} />
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium mb-1 text-gray-700">
                  Problem
                </div>
                <div className={`text-2xl font-light ${c.iconColor}`}>
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </div>
            {/* Problem Text */}
            <div className="w-full text-center px-1 sm:px-4">
              <h3 className="text-lg sm:text-xl font-light mb-2 mt-1 text-gray-800">
                {solution.problem.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-600">
                {solution.problem.description}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            {/* Solution Box */}
            <div
              className={`
                rounded-3xl p-4 sm:p-6 w-full max-w-xs sm:max-w-sm bg-gradient-to-br 
                ${c.bgSolution} backdrop-blur-sm shadow-lg transition-all duration-300 mb-2
              `}
            >
              <div className="flex items-center justify-center mb-2">
                <div className={`p-3 rounded-full bg-white/90 border ${c.border}`}>
                  <Lightbulb className={`h-6 w-6 ${c.iconColor}`} />
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium mb-1 text-gray-800">
                  Solution
                </div>
                <div className="text-2xl font-light text-gray-800">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </div>
            {/* Solution Text */}
            <div className="w-full text-center px-1 sm:px-4">
              <h3 className="text-lg sm:text-xl font-light mb-2 mt-1 text-gray-800">
                {solution.solution.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-600">
                {solution.solution.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="solution"
      className="bg-gradient-to-br from-amber-50 via-stone-100 to-amber-50 transition-colors duration-300"
      style={{ backgroundColor: "#F5F2E8" }}
    >
      <div className="container mx-auto px-2 sm:px-4 md:px-8 max-w-7xl pt-12 pb-12 md:pt-20 md:pb-20">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 bg-white/80 border border-purple-200 shadow-md text-purple-600">
            <div className="w-2 h-2 rounded-full mr-3 bg-purple-500" />
            Founderoo
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 text-gray-800">
            Solution To The Problem
          </h1>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2"></div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-20">
            {solutions.map((s, i) => renderSolutionBlock(s, i))}
          </div>
          <div className="lg:hidden flex flex-col gap-14 md:gap-20">
            {solutions.map((s, i) => renderSolutionBlock(s, i))}
          </div>
        </div>
      </div>
    </section>
  );
}

