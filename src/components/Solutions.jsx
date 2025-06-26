import React from 'react';
import { Search, Lightbulb } from 'lucide-react';

export const SolutionsSection = () => {
  const solution = {
    id: 1,
    problem: {
      title: "Pitch in the right way, The Winning Way !",
      description: "First time founders find it difficult to make the right pitch to the right people."
    },
    solution: {
      title: "PitchMaster",
      description: "Our very own PitchMasterAI will help and guid you from creating the perfect winner pitch -- to getting funded."
    }
  };

  return (
    <div id="solution" className="bg-background transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-16 pb-16 md:pt-20 md:pb-20 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300">
            <div className="w-2 h-2 rounded-full mr-3 bg-green-500"></div>
            Founderoo
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center text-gray-800 dark:text-white">
            Solution To The Problem
          </h1>
        </div>

        {/* Single Solution Row */}
        {/* Changed gap to vertical gap-y-12 for better stacking on mobile */}
        <div className="grid lg:grid-cols-2 gap-y-12 lg:gap-x-16 items-center">
          {/* Left Side - Problem */}
          {/* Main flex container for problem section:
              - flex-col for stacking on mobile (default)
              - md:flex-row for side-by-side on medium screens and up
              - items-start for aligning content at the top when stacked, or center if preferred
              - space-y-6 md:space-y-0 adds vertical gap when stacked, removes horizontal gap on larger screens
              - md:space-x-8 adds horizontal gap on medium screens and up
          */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
            {/* Problem Card:
                - order-1 on mobile (card first)
                - md:order-2 on medium screens (card second, aligned right)
                - w-full on mobile, ensures card takes full width
                - max-w-xs or max-w-sm to control maximum width on mobile if w-full is too wide
            */}
            <div className="rounded-3xl p-6 sm:p-8 w-full max-w-xs mx-auto md:w-64 flex-shrink-0 bg-muted border border-border order-1 md:order-2">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-full bg-background">
                  <Search className="h-6 w-6 text-foreground" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-md font-medium mb-2 text-gray-700 dark:text-neutral-300">
                  Problem
                </div>
                <div className="text-3xl font-light text-gray-900 dark:text-white">
                  01
                </div>
              </div>
            </div>
            {/* Problem Text:
                - order-2 on mobile (text second)
                - md:order-1 on medium screens (text first, aligned left)
                - text-center on mobile, md:text-left on larger screens
            */}
            <div className="flex-1 text-center md:text-left order-2 md:order-1">
              <h3 className="text-xl sm:text-2xl font-light mb-4 text-gray-800 dark:text-white">
                {solution.problem.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-600 dark:text-neutral-300">
                {solution.problem.description}
              </p>
            </div>
          </div>

          {/* Right Side - Solution */}
          {/* Main flex container for solution section:
              - flex-col for stacking on mobile (default)
              - md:flex-row for side-by-side on medium screens and up
              - items-start for aligning content at the top when stacked
              - space-y-6 md:space-y-0 adds vertical gap when stacked, removes horizontal gap on larger screens
              - md:space-x-8 adds horizontal gap on medium screens and up
          */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
            {/* Solution Card:
                - order-1 on mobile (card first)
                - md:order-1 on medium screens (card first, aligned left)
                - w-full on mobile, max-w-xs to control width
            */}
            <div className="rounded-3xl p-6 sm:p-8 w-full max-w-xs mx-auto md:w-64 flex-shrink-0 bg-primary text-primary-foreground border border-primary order-1 md:order-1">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-full bg-primary-foreground">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-md font-medium mb-2 text-white dark:text-black">
                  Solution
                </div>
                <div className="text-3xl font-light text-white dark:text-black">
                  01
                </div>
              </div>
            </div>
            {/* Solution Text:
                - order-2 on mobile (text second)
                - md:order-2 on medium screens (text second, aligned right)
                - text-center on mobile, md:text-left on larger screens
            */}
            <div className="flex-1 text-center md:text-left order-2 md:order-2">
              <h3 className="text-xl sm:text-2xl font-light mb-4 text-gray-800 dark:text-white">
                {solution.solution.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-600 dark:text-neutral-300">
                {solution.solution.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};