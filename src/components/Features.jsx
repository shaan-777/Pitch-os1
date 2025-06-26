import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "AI-powered pitch deck generator with guided prompts",
      description:
        "Generate decks with guided prompts, smart formatting, and investor-oriented language suggestions.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Console",
      description:
        "A dashboard that gives founder visibility over tasks , milestones , market status",
      icon: <IconEaseInOut />,
    },
    {
      title: "PitchMaster",
      description:
        "Practice the pitch with live AI feedback on tone , clarity , engagement ",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Founder's Copilot",
      description: "AI FAQ chatbot for instant answers to legal , funding , product stratergy",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Evaluate",
      description:
        "getting a score on how investment ready are you based upon numerous parameters",
      icon: <IconHelp />,
    },
    {
      title: "mentorship and guidence",
      description:
        "Access stratergic mentorship from experienced founders , operators and investors",
      icon: <IconAdjustmentsBolt />,
    },
  ];
  return (
    <section id="features" className="w-full py-12">
      <div className="container mx-auto px-4">
        {/* Added Features Heading and Description */}
        <div className="flex text-center justify-center items-center gap-4 flex-col pb-10 pt-20"> {/* Added pt-20 for more top padding */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
            Core Features
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
            Explore the powerful features designed to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 relative z-10">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col p-6 relative group/feature rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200",
        "hover:shadow-lg hover:-translate-y-1"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};