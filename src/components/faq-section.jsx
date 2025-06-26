"use client";;
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

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md p-1 text-muted-foreground",
      className
    )}
    {...props} />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border data-[state=active]:text-foreground",
      className
    )}
    {...props} />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props} />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

const FAQ_SECTIONS = {
  general: {
    category: "General",
    items: [
      {
        id: "What is PitchOS?",
        question: "What is PitchOS?",
        answer:
          "PitchOS is an all-in-one platform that acts as an operating system for founders, helping them manage their fundraising journey efficiently.",
      },
      {
        id: "Why should I use PitchOS for my startup?",
        question: "Why should I use PitchOS for my startup?",
        answer:
          "PitchOS streamlines the funding process, connects you with relevant investors, and provides tools to improve your pitch and track your progress.

",
      },
      {
        id: "what does it offer",
        question: "What features does PitchOS offer to founders?",
        answer:
          "Pitch OS provides various features which includes AI powered pitch deck genrator , console , pitch master , curated profile , mentorship and guidance .",
      },
      {
        id: "Is PitchOS suitable for all funding stages?",
        question: "Is PitchOS suitable for all funding stages?",
        answer:
          "Yes, PitchOS supports founders at every stage, from pre-seed and seed to Series A and beyond.",
      },
      {
        id: "design needs",
        question: "Is my data secure on PitchOS?",
        answer:
          "Absolutely. PitchOS uses industry-standard encryption to keep your documents and personal information safe.
      },
      {
        id: "Is PitchOS mobile-friendly?",
        question: "Is PitchOS mobile-friendly?",
        answer:
          "Yes, you can access and use PitchOS on your phone or tablet, making it easy to manage your fundraising on the go.",
      },
      
      // {
      //   id: "open-source or paid",
      //   question: "Is this library open-source or paid?",
      //   answer: "The library is open-source.",
      // },
      // {
      //   id: "request new features",
      //   question:
      //     "How can I contribute to or request new features for the library?",
      //   answer:
      //     "Contributions are welcome! You can open issues or pull requests on our GitHub repository.",
      // },
    ],
  },
  icons: {
    category: "Icons",
    items: [
      {
        id: "icon-formats",
        question: "What icon formats are supported?",
        answer:
          "Our icons are available in multiple formats including SVG, PDF, and AI files.",
      },
    ],
  },
  library: {
    category: "Library",
    items: [
      {
        id: "library-access",
        question: "How do I access the library?",
        answer:
          "The library is available through our web platform after logging in to your account.",
      },
    ],
  },
};

const FAQAccordion = ({ category, items }) => (
  <div className="">
    <Badge variant={"outline"} className="py-2 px-6 rounded-md">
      {category}
    </Badge>
    <Accordion type="single" collapsible className="w-full">
      {items.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id}>
          <AccordionTrigger className="text-left hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export const Component = () => {
  const [activeView, setActiveView] = useState("general");

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <header className="text-center mb-12">
        <p className="text-sm font-medium text-primary mb-2">FAQs</p>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Frequently asked questions
        </h1>
        <p className="text-xl text-muted-foreground">
          Need help with something? Here are our most frequently asked
          questions.
        </p>
      </header>
      <div className="flex justify-center sticky top-2">
        <Tabs
          defaultValue="general"
          onValueChange={(value) => setActiveView(value)}
          className="mb-8 max-w-xl border rounded-xl bg-background">
          <TabsList className="w-full justify-start h-12 p-1">
            <TabsTrigger value="general">General FAQs</TabsTrigger>
            <TabsTrigger value="icons">UI Icons</TabsTrigger>
            <TabsTrigger value="library">Library</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <FAQAccordion
        category={FAQ_SECTIONS[activeView].category}
        items={FAQ_SECTIONS[activeView].items} />
    </div>
  );
};
