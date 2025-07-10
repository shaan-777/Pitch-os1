"use client";
import * as React from "react";
import { useState } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

// Shadcn/ui Tabs components with hero theme styling
const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-12 items-center justify-center rounded-xl p-1 text-gray-600 bg-white/50 backdrop-blur-sm border border-purple-200 shadow-md shadow-purple-200/30",
      className
    )}
    {...props} />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-400 data-[state=active]:to-yellow-500 data-[state=active]:text-gray-800 data-[state=active]:font-semibold data-[state=active]:shadow-lg data-[state=active]:shadow-yellow-500/25 hover:bg-purple-50 hover:text-purple-700",
      className
    )}
    {...props} />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2",
      className
    )}
    {...props} />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

// FAQ Data
const FAQ_SECTIONS = {
  technical: {
    category: "Technical",
    items: [
      {
        id: "tech-requirements",
        question: "What kind of technical requirements does PitchOS have? Do I need special software?",
        answer:
          "PitchOS is a cloud-based platform, so you won't need to install any special software. You can access it directly through your web browser on any modern device (desktop, laptop, tablet, or smartphone). A stable internet connection is all you need to get the most out of our service.",
      },
      {
        id: "data-security-privacy",
        question: "How does PitchOS ensure the security and privacy of my pitch data?",
        answer:
          "We prioritize the security and confidentiality of your sensitive pitch data. PitchOS employs industry-standard encryption protocols for data in transit and at rest. Access to your account is secured through robust authentication methods, and we adhere to strict privacy policies to ensure your intellectual property remains yours.",
      },
      {
        id: "technical-support",
        question: "What kind of technical support can I expect if I encounter an issue?",
        answer:
          "Our team is here to help! If you encounter any technical difficulties, you can reach out to our support team through our dedicated help desk or email. We offer assistance with platform navigation, troubleshooting common issues, and general guidance to ensure a smooth experience with PitchOS.",
      },
      {
        id: "feature-updates",
        question: "How often does PitchOS get updated with new features or improvements?",
        answer:
          "We're continuously working to enhance PitchOS with new features, AI model improvements, and performance optimizations. Updates are rolled out regularly to ensure you always have access to the latest tools and a cutting-edge experience. We strive for a seamless update process that won't disrupt your workflow.",
      },
      {
        id: "api-integrations",
        question: "Is there an API or any integration capabilities for PitchOS down the line?",
        answer:
          "While not fully launched yet, we are actively exploring and planning API access and various integration possibilities for PitchOS. Our goal is to enable seamless connections with other tools and workflows in the future, providing more flexibility and automation for our users. Stay tuned for updates on our development roadmap!",
      },
    ],
  },
};

// Custom styled Accordion for FAQ with hero theme
const FAQAccordion = ({ category, items }) => (
  <div className="space-y-6">
    <div className="flex justify-center">
      <div className="bg-white/80 group mx-auto flex w-fit items-center gap-2 rounded-full border border-purple-200 px-4 py-2 shadow-md shadow-purple-200/50 backdrop-blur-sm">
        <span className="text-purple-600 text-sm font-medium">{category}</span>
      </div>
    </div>
    
    <div className="bg-white/50 backdrop-blur-sm border border-purple-200 rounded-2xl shadow-lg shadow-purple-200/30 overflow-hidden">
      <Accordion type="single" collapsible className="w-full">
        {items.map((faq, index) => (
          <AccordionItem 
            key={faq.id} 
            value={faq.id}
            className={`border-b border-purple-200/50 last:border-b-0 ${index % 2 === 0 ? 'bg-white/30' : 'bg-transparent'}`}
          >
            <AccordionTrigger className="text-left hover:no-underline px-6 py-4 text-gray-700 hover:text-purple-700 transition-colors duration-300 font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
);

// Main FAQ Component
export const Component = () => {
  const [activeView, setActiveView] = useState("technical");

  return (
    <div 
      id="faq" 
      className="w-full py-20 lg:py-40 bg-gradient-to-br from-amber-50 via-stone-100 to-amber-50" 
      style={{backgroundColor: '#F5F2E8'}}
    >
      {/* Background decorative elements matching hero */}
      <div
        aria-hidden
        className="z-[1] absolute inset-0 pointer-events-none isolate opacity-30 contain-strict hidden lg:block">
        <div
          className="w-[30rem] h-[70rem] -translate-y-[300px] absolute left-1/4 top-0 -rotate-12 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(276,50%,70%,.06)_0,hsla(276,50%,60%,.02)_50%,hsla(276,50%,50%,0)_80%)]" />
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-[2]">
        <header className="text-center mb-12">
          <div className="bg-white/80 group mx-auto flex w-fit items-center gap-2 rounded-full border border-purple-200 px-4 py-2 shadow-md shadow-purple-200/50 backdrop-blur-sm mb-6">
            <span className="text-purple-600 text-sm font-medium">FAQs</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-700">
            Frequently asked questions
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Need help with something? Here are our most frequently asked questions.
          </p>
        </header>
        
        <div className="flex justify-center sticky top-2 mb-8 z-[3]">
          <Tabs
            defaultValue="technical"
            onValueChange={(value) => setActiveView(value)}
            className="max-w-xl"
          >
            <TabsList className="w-full justify-center">
              <TabsTrigger value="technical">Technical FAQs</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        {activeView && FAQ_SECTIONS[activeView] ? (
          <FAQAccordion
            category={FAQ_SECTIONS[activeView].category}
            items={FAQ_SECTIONS[activeView].items}
          />
        ) : (
          <div className="text-center bg-white/50 backdrop-blur-sm border border-purple-200 rounded-2xl shadow-lg shadow-purple-200/30 p-8">
            <p className="text-gray-600">No FAQs found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};