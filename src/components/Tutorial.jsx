import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Tutorial = ({ steps, isOpen, onClose, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen && steps[currentStep]) {
      updateTooltipPosition();
      window.addEventListener('resize', updateTooltipPosition);
      return () => window.removeEventListener('resize', updateTooltipPosition);
    }
  }, [isOpen, currentStep, steps]);

  const updateTooltipPosition = () => {
    const step = steps[currentStep];
    if (!step?.target) return;

    const targetElement = document.querySelector(step.target);
    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

      // Calculate position based on placement
      let top, left;
      const tooltipWidth = 320;
      const tooltipHeight = 200;

      switch (step.placement || 'bottom') {
        case 'top':
          top = rect.top + scrollTop - tooltipHeight - 20;
          left = rect.left + scrollLeft + (rect.width / 2) - (tooltipWidth / 2);
          break;
        case 'bottom':
          top = rect.bottom + scrollTop + 20;
          left = rect.left + scrollLeft + (rect.width / 2) - (tooltipWidth / 2);
          break;
        case 'left':
          top = rect.top + scrollTop + (rect.height / 2) - (tooltipHeight / 2);
          left = rect.left + scrollLeft - tooltipWidth - 20;
          break;
        case 'right':
          top = rect.top + scrollTop + (rect.height / 2) - (tooltipHeight / 2);
          left = rect.right + scrollLeft + 20;
          break;
        default:
          top = rect.bottom + scrollTop + 20;
          left = rect.left + scrollLeft + (rect.width / 2) - (tooltipWidth / 2);
      }

      // Keep tooltip within viewport bounds
      const padding = 20;
      left = Math.max(padding, Math.min(window.innerWidth - tooltipWidth - padding, left));
      top = Math.max(padding, top);

      setTooltipPosition({ top, left });

      // Highlight the target element
      targetElement.style.position = 'relative';
      targetElement.style.zIndex = '1001';
      targetElement.style.boxShadow = '0 0 0 4px rgba(59, 130, 246, 0.5), 0 0 0 2px white';
      targetElement.style.borderRadius = '8px';
    }
  };

  const clearHighlight = () => {
    const step = steps[currentStep];
    if (step?.target) {
      const targetElement = document.querySelector(step.target);
      if (targetElement) {
        targetElement.style.position = '';
        targetElement.style.zIndex = '';
        targetElement.style.boxShadow = '';
        targetElement.style.borderRadius = '';
      }
    }
  };

  const handleNext = () => {
    clearHighlight();
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    clearHighlight();
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    clearHighlight();
    setCurrentStep(0);
    onComplete();
  };

  const handleClose = () => {
    clearHighlight();
    setCurrentStep(0);
    onClose();
  };

  if (!isOpen || !steps[currentStep]) return null;

  const step = steps[currentStep];

  return (
    <>
      {/* Overlay */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 bg-black bg-opacity-50 z-[1000]"
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Tooltip */}
      <div
        className="fixed z-[1002] bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-6 max-w-sm"
        style={{
          top: `${tooltipPosition.top}px`,
          left: `${tooltipPosition.left}px`,
          width: '320px'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Step {currentStep + 1} of {steps.length}
            </span>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {step.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {step.content}
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
            <div 
              className="bg-blue-500 h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="text-gray-600 dark:text-gray-300"
            >
              Skip Tour
            </Button>
            <Button
              size="sm"
              onClick={handleNext}
              className="gap-1"
            >
              {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tutorial;