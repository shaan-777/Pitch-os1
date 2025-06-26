import { Check, Minus, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// --- Unified Data for Pricing Plans and Features (India Data) ---
const pricingPlans = [
  {
    name: "Basic",
    price: "₹0",
    frequency: "/ month",
    description: "Perfect for individual founders getting started with their first pitch.",
    buttonText: "Start a Basic Plan",
    buttonVariant: "outline",
    icon: MoveRight,
  },
  {
    name: "Regular",
    price: "₹499",
    frequency: "/ month",
    description: "For growing startups ready to refine and scale their pitching efforts.",
    buttonText: "Start Regular Plan",
    buttonVariant: "default",
    icon: MoveRight,
  },
  {
    name: "Pro",
    price: "₹999",
    frequency: "/ month",
    description: "Intricate solutions for accelerators, large teams, and specific organizational needs.",
    buttonText: "Get Pro",
    buttonVariant: "outline",
    icon: MoveRight,
  },
];

const features = [
  { name: "Console", basic: true, regular: true, pro: true },
  { name: "PitchMaster Deck", basic: true, regular: true, pro: true },
  { name: "Enhanced PitchMasterAI feedback", basic: false, regular: true, pro: true },
  { name: "Evaluate", basic: false, regular: true, pro: true },
  { name: "Mentorship & Guidance", basic: false, regular: false, pro: true },
  { name: "Founders Copilot", basic: false, regular: false, pro: true },
  
];

function Pricing() {
  return (
    <div id="pricing" className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>Pricing</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Prices that make sense!
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Tailored plans to help every type of founder to achieve their funding goals.
            </p>
          </div>

          {/* --- Desktop Pricing Grid (visible only on lg and larger screens) --- */}
          {/* This section now dynamically uses the 'pricingPlans' and 'features' data */}
          <div className="hidden lg:grid text-left w-full grid-cols-4 divide-x divide-y pt-10 md:pt-20 border rounded-lg overflow-hidden">
            {/* Empty column for alignment on large screens */}
            <div className="col-span-1 px-3 py-4"></div>

            {/* Pricing Plan Headers */}
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`px-3 py-6 md:px-6 md:py-8 gap-2 flex flex-col items-center text-center ${
                  plan.name === "Pro"
                    ? "bg-gray-50 dark:bg-neutral-900 border-x border-gray-100 dark:border-neutral-800"
                    : ""
                }`}
              >
                <p className="text-2xl font-semibold">{plan.name}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
                <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                  <span className="text-4xl">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    {plan.frequency}
                  </span>
                </p>
                <Button variant={plan.buttonVariant} className="gap-4 mt-8 w-full">
                  {plan.buttonText} <plan.icon className="w-4 h-4" />
                </Button>
              </div>
            ))}

            {/* Feature Header */}
            <div className="col-span-1 px-3 lg:px-6 py-4 border-t text-left bg-gray-50 dark:bg-neutral-900">
              <b>Features</b>
            </div>
            {/* These empty divs ensure the feature column aligns with the pricing columns visually. */}
            {/* These are needed to fill the grid row for the "Features" header row on desktop */}
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>

            {/* Feature Rows */}
            {features.map((feature) => (
              <>
                <div key={feature.name} className="col-span-1 px-3 lg:px-6 py-4 border-t text-left">
                  {feature.name}
                </div>
                {/* Render feature availability for each plan */}
                {pricingPlans.map((plan) => {
                  const featureValue = feature[plan.name.toLowerCase()]; // Get feature value for the current plan
                  return (
                    <div key={`${plan.name}-${feature.name}-desktop`} className="px-3 py-4 flex justify-center border-t">
                      {typeof featureValue === "boolean" ? (
                        featureValue ? (
                          <Check className="w-4 h-4 text-primary" />
                        ) : (
                          <Minus className="w-4 h-4 text-muted-foreground" />
                        )
                      ) : (
                        <p className="text-muted-foreground text-sm">{featureValue}</p>
                      )}
                    </div>
                  );
                })}
              </>
            ))}
          </div>


          {/* --- Pricing Cards for Smaller Screens (visible only on screens smaller than lg) --- */}
          <div className="lg:hidden w-full flex flex-col gap-8 pt-10 md:pt-20">
            {pricingPlans.map((plan) => (
              <div
                key={`mobile-${plan.name}`}
                className={`border rounded-lg p-6 flex flex-col items-center text-center ${
                  plan.name === "Pro"
                    ? "bg-gray-50 dark:bg-neutral-900 border-gray-100 dark:border-neutral-800"
                    : ""
                }`}
              >
                <p className="text-2xl font-semibold">{plan.name}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
                <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                  <span className="text-4xl">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    {plan.frequency}
                  </span>
                </p>
                <Button variant={plan.buttonVariant} className="gap-4 mt-8 w-full">
                  {plan.buttonText} <plan.icon className="w-4 h-4" />
                </Button>

                <div className="mt-8 pt-8 border-t w-full text-left">
                  <p className="font-bold mb-4">Features included:</p>
                  <ul className="space-y-3">
                    {features.map((feature) => {
                      const featureValue = feature[plan.name.toLowerCase()]; // Get feature value for the current plan

                      // Determine if the feature should be explicitly listed on mobile
                      const shouldShowFeature = typeof featureValue === "boolean"
                        ? featureValue // If boolean, show if true
                        : !!featureValue; // If string, show if it has a value

                      if (shouldShowFeature) {
                        return (
                          <li key={`${plan.name}-${feature.name}-mobile`} className="flex items-center gap-2">
                            {typeof featureValue === "boolean" ? (
                              featureValue ? (
                                <Check className="w-4 h-4 text-primary" />
                              ) : (
                                <Minus className="w-4 h-4 text-muted-foreground" />
                              )
                            ) : (
                              <Check className="w-4 h-4 text-primary" /> // Assume string values mean included
                            )}
                            {feature.name} {typeof featureValue === "string" && <span className="text-muted-foreground">({featureValue})</span>}
                          </li>
                        );
                      }
                      return null; // Don't render if not included and no specific detail for mobile
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing };