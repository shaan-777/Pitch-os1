import React, { useState } from 'react';
import { Search, Lightbulb, Check, Minus, MoveRight, PhoneCall, ArrowRight, ChevronRight } from 'lucide-react';
import { 
  IconAdjustmentsBolt, 
  IconCloud, 
  IconCurrencyDollar, 
  IconEaseInOut, 
  IconHeart, 
  IconHelp, 
  IconRouteAltLeft, 
  IconTerminal2 
} from '@tabler/icons-react';

// Solutions Section with Hero Theme
export const SolutionsSection = () => {
  const solution = {
    id: 1,
    problem: {
      title: "Pitch in the right way, The Winning Way!",
      description: "First time founders find it difficult to make the right pitch to the right people."
    },
    solution: {
      title: "PitchMaster",
      description: "Our very own PitchMasterAI will help and guide you from creating the perfect winner pitch -- to getting funded."
    }
  };

  return (
    <div id="solution" className="bg-gradient-to-br from-amber-50 via-stone-100 to-amber-50 transition-colors duration-300" style={{backgroundColor: '#F5F2E8'}}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-16 pb-16 md:pt-20 md:pb-20 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-white/80 border border-purple-200 shadow-md shadow-purple-200/50 text-purple-600">
            <div className="w-2 h-2 rounded-full mr-3 bg-purple-500"></div>
            Founderoo
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center text-gray-800">
            Solution To The Problem
          </h1>
        </div>

        {/* Single Solution Row */}
        <div className="grid lg:grid-cols-2 gap-y-12 lg:gap-x-16 items-center">
          {/* Left Side - Problem */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
            <div className="rounded-3xl p-6 sm:p-8 w-full max-w-xs mx-auto md:w-64 flex-shrink-0 bg-white/70 border border-purple-200 shadow-lg shadow-purple-200/30 backdrop-blur-sm order-1 md:order-2 hover:shadow-purple-200/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 border border-purple-300">
                  <Search className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-md font-medium mb-2 text-gray-700">
                  Problem
                </div>
                <div className="text-3xl font-light text-purple-600">
                  01
                </div>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left order-2 md:order-1">
              <h3 className="text-xl sm:text-2xl font-light mb-4 text-gray-800">
                {solution.problem.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-600">
                {solution.problem.description}
              </p>
            </div>
          </div>

          {/* Right Side - Solution */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
            <div className="rounded-3xl p-6 sm:p-8 w-full max-w-xs mx-auto md:w-64 flex-shrink-0 bg-gradient-to-br from-yellow-400 to-yellow-500 border border-yellow-500/50 shadow-lg shadow-yellow-500/30 order-1 md:order-1 hover:shadow-yellow-500/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-full bg-white/90 border border-yellow-300">
                  <Lightbulb className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-md font-medium mb-2 text-gray-800">
                  Solution
                </div>
                <div className="text-3xl font-light text-gray-800">
                  01
                </div>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left order-2 md:order-2">
              <h3 className="text-xl sm:text-2xl font-light mb-4 text-gray-800">
                {solution.solution.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-600">
                {solution.solution.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};