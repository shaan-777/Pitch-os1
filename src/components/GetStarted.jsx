import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

// Demo data
const defaultFeatures = [
  {
    step: "Step 1",
    title: "Sign Up & Create Your Profile",
    content: "Create your account in just 30 seconds with your email address. No credit card required to get started.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
  },
  {
    step: "Step 2", 
    title: "Create winning pitches",
    content: "Our PitchMaster will help you to generate and craft precise winning pitches for your idea to become reality.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
  },
  {
    step: "Step 3",
    title: "Fine Tune Pitch to stand out more!", 
    content: "PitchMasterAI will even give you further feedback and improvement scope and help monitor the strength of your pitch.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
  },
  {
    step: "Step 4",
    title: "Get your Vision Funded",
    content: "With such highly calibrated pitches win and get your funding",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
  }
]

export function FeatureSteps({
  features = defaultFeatures,
  className,
  title = "How to get Started",
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]"
}) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  // Early return if no features provided
  if (!features || features.length === 0) {
    return (
      <div className={cn("p-8 md:p-12 bg-gradient-to-br from-amber-50 via-stone-100 to-amber-50", className)} style={{backgroundColor: '#F5F2E8'}}>
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center text-gray-700">
            {title}
          </h2>
          <p className="text-center text-gray-600">No features to display</p>
        </div>
      </div>
    )
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval])

  return (
    <div className={cn("p-8 md:p-8 bg-gradient-to-br from-amber-50 via-stone-100 to-amber-50", className)} style={{backgroundColor: '#F5F2E8'}}>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center text-gray-700">
          {title}
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="order-2 md:order-1 space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 md:gap-8 group cursor-pointer hover:bg-white/50 p-4 rounded-lg transition-all duration-300"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
                onClick={() => setCurrentFeature(index)}>
                <motion.div
                  className={cn(
                    "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                    index === currentFeature
                      ? "bg-purple-500 border-purple-500 text-white scale-110 group-hover:bg-yellow-500 group-hover:border-yellow-500"
                      : "bg-white border-purple-300 text-purple-600 group-hover:border-yellow-400 group-hover:text-yellow-600"
                  )}>
                  {index <= currentFeature ? (
                    <span className="text-lg font-bold">✓</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-700 group-hover:text-purple-700 transition-colors duration-300">
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-sm md:text-lg text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={cn(
              "order-1 md:order-2 relative h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-lg border-2 border-purple-200 hover:border-yellow-400 transition-all duration-500 shadow-lg shadow-purple-200/30 hover:shadow-yellow-400/30"
            )}>
            <AnimatePresence mode="wait">
              {features.map((feature, index) =>
                index === currentFeature && (
                  <motion.div
                    key={index}
                    className="absolute inset-0 rounded-lg overflow-hidden"
                    initial={{ y: 100, opacity: 0, rotateX: -20 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -100, opacity: 0, rotateX: 20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}>
                    <img
                      src={feature.image}
                      alt={feature.step || feature.title}
                      className="w-full h-full object-cover transition-transform transform hover:scale-105 duration-700"
                      loading="lazy"
                    />
                    <div
                      className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-stone-100 via-stone-100/50 to-transparent" />
                  </motion.div>
                ))}
            </AnimatePresence>
            
            {/* Progress indicator */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex gap-2">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "h-1 rounded-full transition-all duration-300",
                      index === currentFeature ? "bg-yellow-500 flex-1" : "bg-purple-200 w-8"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}