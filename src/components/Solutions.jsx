// import React, { useState } from 'react';
// import { Search, Lightbulb, Check, Minus, MoveRight, PhoneCall, ArrowRight, ChevronRight } from 'lucide-react';
// import { 
//   IconAdjustmentsBolt, 
//   IconCloud, 
//   IconCurrencyDollar, 
//   IconEaseInOut, 
//   IconHeart, 
//   IconHelp, 
//   IconRouteAltLeft, 
//   IconTerminal2 
// } from '@tabler/icons-react';

// // Solutions Section with Hero Theme
// export const SolutionsSection = () => {
//   const solution = {
//     id: 1,
//     problem: {
//       title: "Pitch in the right way, The Winning Way!",
//       description: "First time founders find it difficult to make the right pitch to the right people."
//     },
//     solution: {
//       title: "PitchMaster",
//       description: "Our very own PitchMasterAI will help and guide you from creating the perfect winner pitch -- to getting funded."
//     }
//   };

//   return (
//     <div id="solution" className="bg-gradient-to-br from-amber-50 via-stone-100 to-amber-50 transition-colors duration-300" style={{backgroundColor: '#F5F2E8'}}>
//       <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-16 pb-16 md:pt-20 md:pb-20 max-w-7xl">
//         {/* Header */}
//         <div className="text-center mb-12 md:mb-20">
//           <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-white/80 border border-purple-200 shadow-md shadow-purple-200/50 text-purple-600">
//             <div className="w-2 h-2 rounded-full mr-3 bg-purple-500"></div>
//             Founderoo
//           </div>
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center text-gray-800">
//             Solution To The Problem
//           </h1>
//         </div>

//         {/* Single Solution Row */}
//         <div className="grid lg:grid-cols-2 gap-y-12 lg:gap-x-16 items-center">
//           {/* Left Side - Problem */}
//           <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
//             <div className="rounded-3xl p-6 sm:p-8 w-full max-w-xs mx-auto md:w-64 flex-shrink-0 bg-white/70 border border-purple-200 shadow-lg shadow-purple-200/30 backdrop-blur-sm order-1 md:order-2 hover:shadow-purple-200/50 transition-all duration-300">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="p-3 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 border border-purple-300">
//                   <Search className="h-6 w-6 text-purple-600" />
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="text-md font-medium mb-2 text-gray-700">
//                   Problem
//                 </div>
//                 <div className="text-3xl font-light text-purple-600">
//                   01
//                 </div>
//               </div>
//             </div>
//             <div className="flex-1 text-center md:text-left order-2 md:order-1">
//               <h3 className="text-xl sm:text-2xl font-light mb-4 text-gray-800">
//                 {solution.problem.title}
//               </h3>
//               <p className="text-base leading-relaxed text-gray-600">
//                 {solution.problem.description}
//               </p>
//             </div>
//           </div>

//           {/* Right Side - Solution */}
//           <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
//             <div className="rounded-3xl p-6 sm:p-8 w-full max-w-xs mx-auto md:w-64 flex-shrink-0 bg-gradient-to-br from-yellow-400 to-yellow-500 border border-yellow-500/50 shadow-lg shadow-yellow-500/30 order-1 md:order-1 hover:shadow-yellow-500/50 transition-all duration-300">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="p-3 rounded-full bg-white/90 border border-yellow-300">
//                   <Lightbulb className="h-6 w-6 text-yellow-600" />
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="text-md font-medium mb-2 text-gray-800">
//                   Solution
//                 </div>
//                 <div className="text-3xl font-light text-gray-800">
//                   01
//                 </div>
//               </div>
//             </div>
//             <div className="flex-1 text-center md:text-left order-2 md:order-2">
//               <h3 className="text-xl sm:text-2xl font-light mb-4 text-gray-800">
//                 {solution.solution.title}
//               </h3>
//               <p className="text-base leading-relaxed text-gray-600">
//                 {solution.solution.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


import React from 'react';
import { Search, Lightbulb } from 'lucide-react';

export const SolutionsSection = () => {
  const solutions = [
    {
      id: 1,
      color: 'yellow',
      problem: {
        title: 'Master the Perfect Pitch',
        description:
          'First-time founders struggle to craft strong pitches and often miss funding due to unclear messaging.',
      },
      solution: {
        title: 'PitchMaster',
        description:
          'Our PitchMasterAI helps craft powerful pitches — from refining messaging to targeting investors.',
      },
    },
    {
      id: 2,
      color: 'purple',
      problem: {
        title: 'Isolated Founders Network',
        description:
          'Founders stay isolated from tools, insights, and real advice. Peer learning and networking feel hard to access.',
      },
      solution: {
        title: 'Founderoo Community',
        description:
          'Founderoo connects founders with an active network — real-time insights, peer collaboration, and expert access.',
      },
    },
    {
      id: 3,
      color: 'blue',
      problem: {
        title: 'Limited Funding Knowledge',
        description:
          "Founders often don't know where to look for trustworthy funding tools or clear steps to raise capital.",
      },
      solution: {
        title: 'Funding Toolkit',
        description:
          'A curated toolkit packed with the best funding resources — including templates, lists, and roadmap.',
      },
    },
    {
      id: 4,
      color: 'teal',
      problem: {
        title: 'Founders Need Quick Answers',
        description:
          "Founders face blockers and can't find fast, relevant, and contextual advice when they need it.",
      },
      solution: {
        title: 'CoPilot',
        description:
          'Our in-house AI CoPilot solves your queries in real-time — from strategy help to tactical support.',
      },
    },
  ];

//   const colorClasses = {
//     purple: {
//       border: "border-purple-200",
//       shadow: "shadow-purple-200/30 hover:shadow-purple-200/50",
//       bgIcon: "from-purple-100 to-purple-200 border border-purple-300",
//       iconColor: "text-purple-600",
//       bgSolution: "from-purple-200 to-purple-400 border border-purple-300 shadow-purple-300/40 hover:shadow-purple-400/60"
//     },
//     blue: {
//   border: "border-[#ccbbdb]",
//   shadow: "shadow-[#ccbbdb]/30 hover:shadow-[#ccbbdb]/50",
//   bgIcon: "from-[#e7e1ee] to-[#d8cde4] border border-[#ccbbdb]",
//   iconColor: "text-[#8b78a5]",
//   bgSolution: "from-[#ccbbdb] to-[#bda6d1] border border-[#ccbbdb] shadow-[#ccbbdb]/40 hover:shadow-[#bda6d1]/60"
// },


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
const colorClasses = {
  purple: {
    border: "border-purple-200",
    shadow: "shadow-purple-200/30 hover:shadow-purple-200/50",
    bgIcon: "from-purple-100 to-purple-200 border border-purple-300",
    iconColor: "text-purple-600",
    bgSolution: "from-purple-200 to-purple-400 border border-purple-300 shadow-purple-300/40 hover:shadow-purple-400/60"
  },
  blue: {
    border: "border-[#ccbbdb]",
    shadow: "shadow-[#ccbbdb]/30 hover:shadow-[#ccbbdb]/50",
    bgIcon: "from-[#e7e1ee] to-[#d8cde4] border border-[#ccbbdb]",
    iconColor: "text-[#8b78a5]",
    bgSolution: "from-[#ccbbdb] to-[#bda6d1] border border-[#ccbbdb] shadow-[#ccbbdb]/40 hover:shadow-[#bda6d1]/60"
  },
  teal: {
    border: "border-[#EBE5D9]",
    shadow: "shadow-[#EBE5D9]/30 hover:shadow-[#EBE5D9]/50",
    bgIcon: "from-[#F4F1EC] to-[#E7DFD3] border border-[#EBE5D9]",
    iconColor: "text-[#9B8C78]",
    bgSolution: "from-[#EBE5D9] to-[#D8CFC2] border border-[#EBE5D9] shadow-[#EBE5D9]/40 hover:shadow-[#D8CFC2]/60"
  },
  mint: {
    border: "border-[#A4E9B1]",
    shadow: "shadow-[#A4E9B1]/30 hover:shadow-[#A4E9B1]/50",
    bgIcon: "from-[#D1F7D6] to-[#B5EEC9] border border-[#A4E9B1]",
    iconColor: "text-[#7CC99A]",
    bgSolution: "from-[#D1F7D6] to-[#A4E9B1] border border-[#A4E9B1] shadow-[#A4E9B1]/40 hover:shadow-[#A4E9B1]/60"
  },
  yellow: {
    border: "border-yellow-300",
    shadow: "shadow-yellow-300/30 hover:shadow-yellow-400/50",
    bgIcon: "from-yellow-100 to-yellow-200 border border-yellow-300",
    iconColor: "text-yellow-600",
    bgSolution: "from-yellow-400 to-yellow-500 border border-yellow-500/50 shadow-yellow-500/30 hover:shadow-yellow-500/50"
  }
};

  const renderSolutionBlock = (solution, index) => {
    const c = colorClasses[solution.color] || colorClasses.yellow;

    return (
      <div key={solution.id} className="relative">
        {/* Desktop layout */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start">
          <div className="col-span-4 text-right pr-8">
            <h3 className="text-2xl md:text-3xl font-light mb-4 mt-1 text-gray-800">
              {solution.problem.title}
            </h3>
            <p className="text-base leading-relaxed text-gray-600">
              {solution.problem.description}
            </p>
          </div>

          <div className="col-span-4 flex items-start justify-center gap-4">
            {/* Problem Box */}
            <div className={`rounded-3xl p-8 w-56 flex-shrink-0 bg-white/70 ${c.border} ${c.shadow} border shadow-lg backdrop-blur-sm transition-all duration-300`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-full bg-gradient-to-br ${c.bgIcon}`}>
                  <Search className={`h-6 w-6 ${c.iconColor}`} />
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium mb-1 text-gray-700">Problem</div>
                <div className={`text-2xl font-light ${c.iconColor}`}>{String(index + 1).padStart(2, '0')}</div>
              </div>
            </div>

            {/* Solution Box */}
            <div className={`rounded-3xl p-8 w-56 flex-shrink-0 bg-gradient-to-br ${c.bgSolution} shadow-lg backdrop-blur-sm transition-all duration-300`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-full bg-white/90 border ${c.border}`}>
                  <Lightbulb className={`h-6 w-6 ${c.iconColor}`} />
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium mb-1 text-gray-800">Solution</div>
                <div className="text-2xl font-light text-gray-800">{String(index + 1).padStart(2, '0')}</div>
              </div>
            </div>
          </div>

          <div className="col-span-4 text-left pl-8">
            <h3 className="text-2xl md:text-3xl font-light mb-4 mt-1 text-gray-800">
              {solution.solution.title}
            </h3>
            <p className="text-base leading-relaxed text-gray-600">
              {solution.solution.description}
            </p>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden">
          <div className="flex items-center justify-center gap-4 mb-8">
            {/* Problem Box */}
            <div className={`rounded-3xl p-8 w-56 flex-shrink-0 bg-white/70 ${c.border} ${c.shadow} border shadow-lg backdrop-blur-sm transition-all duration-300`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-full bg-gradient-to-br ${c.bgIcon}`}>
                  <Search className={`h-6 w-6 ${c.iconColor}`} />
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium mb-1 text-gray-700">Problem</div>
                <div className={`text-2xl font-light ${c.iconColor}`}>{String(index + 1).padStart(2, '0')}</div>
              </div>
            </div>

            {/* Solution Box */}
            <div className={`rounded-3xl p-8 w-56 flex-shrink-0 bg-gradient-to-br ${c.bgSolution} shadow-lg backdrop-blur-sm transition-all duration-300`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-full bg-white/90 border ${c.border}`}>
                  <Lightbulb className={`h-6 w-6 ${c.iconColor}`} />
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium mb-1 text-gray-800">Solution</div>
                <div className="text-2xl font-light text-gray-800">{String(index + 1).padStart(2, '0')}</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-light mb-4 mt-1 text-gray-800">
                {solution.problem.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-600">
                {solution.problem.description}
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-light mb-4 mt-1 text-gray-800">
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
    <div
      id="solution"
      className="bg-gradient-to-br from-amber-50 via-stone-100 to-amber-50 transition-colors duration-300"
      style={{ backgroundColor: '#F5F2E8', paddingTop: '6rem' }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-4 pb-16 md:pb-20 max-w-7xl">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-white/80 border border-purple-200 shadow-md shadow-purple-200/50 text-purple-600">
            <div className="w-2 h-2 rounded-full mr-3 bg-purple-500"></div>
            Founderoo
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center text-gray-800">
            Solution To The Problem
          </h1>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2"></div>

          {/* DESKTOP BLOCKS */}
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-32">
            {solutions.map((s, i) => renderSolutionBlock(s, i))}
          </div>

          {/* MOBILE BLOCKS */}
          <div className="lg:hidden space-y-32">
            {solutions.map((s, i) => renderSolutionBlock(s, i))}
          </div>
        </div>
      </div>
    </div>
  );
};
