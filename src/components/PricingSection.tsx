import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "39",
    items: "4 items",
    features: ["Free shipping both ways", "Swap monthly", "Sizes 0-12M", "Freshly cleaned & pressed"],
    accent: false,
  },
  {
    name: "Classic",
    price: "69",
    items: "8 items",
    features: ["Free shipping both ways", "Swap anytime", "Sizes 0-24M", "Freshly cleaned & pressed", "Priority access to new drops"],
    accent: true,
  },
  {
    name: "Luxe",
    price: "99",
    items: "12 items",
    features: ["Free shipping both ways", "Unlimited swaps", "Sizes 0-3T", "Freshly cleaned & pressed", "Premium & designer brands", "Keep-what-you-love discounts"],
    accent: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-accent mb-3">Simple Pricing</p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">Plans That Grow With You</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl p-8 ${plan.accent ? "bg-secondary border-2 border-secondary" : "bg-background border border-border"}`}
            >
              <h3 className="font-serif text-2xl text-foreground mb-1">{plan.name}</h3>
              <p className="font-sans text-sm text-foreground/50 mb-6">{plan.items} / swap</p>
              <div className="mb-6">
                <span className="font-serif text-5xl text-foreground">${plan.price}</span>
                <span className="font-sans text-sm text-foreground/50">/swap</span>
              </div>
              <Button variant={plan.accent ? "hero" : "outline"} className="w-full rounded-full mb-8">
                Choose {plan.name}
              </Button>
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 font-sans text-sm text-foreground/70">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
