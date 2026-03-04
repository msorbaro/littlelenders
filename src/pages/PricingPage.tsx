import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaitlistCTA from "@/components/WaitlistCTA";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "$39",
    features: ["4 items per swap", "Free shipping both ways", "Refresh cadence (~8–12 weeks)", "Sizes 2T–5T", "Freshly cleaned & pressed"],
    accent: false,
  },
  {
    name: "Standard",
    price: "$69",
    features: ["8 items per swap", "Free shipping both ways", "Refresh cadence (~8–12 weeks)", "Sizes 2T–8Y", "Freshly cleaned & pressed", "Priority new arrivals"],
    accent: true,
  },
  {
    name: "Plus",
    price: "$99",
    features: ["12 items per swap", "Free shipping both ways", "Refresh cadence (~8–12 weeks)", "Sizes 2T–8Y", "Freshly cleaned & pressed", "Priority new arrivals", "Occasion bundles included"],
    accent: false,
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm font-sans font-semibold uppercase tracking-widest text-accent mb-3">Pricing</p>
              <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Simple Membership Pricing</h1>
              <p className="font-sans text-foreground/60 max-w-xl mx-auto">Pilot pricing coming soon. Here's what to expect.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, i) => (
                <motion.div key={plan.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`rounded-3xl p-8 ${plan.accent ? "bg-secondary border-2 border-secondary" : "bg-card border border-border"}`}>
                  <h3 className="font-serif text-2xl text-foreground mb-1">{plan.name}</h3>
                  <div className="mb-6 mt-4">
                    <span className="font-serif text-5xl text-foreground">{plan.price}</span>
                    <span className="font-sans text-sm text-foreground/50"> / swap</span>
                  </div>
                  <Button variant={plan.accent ? "hero" : "outline"} className="w-full rounded-full mb-8" asChild>
                    <Link to="/join">Join Waitlist</Link>
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

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 max-w-2xl mx-auto text-center">
              <div className="bg-warm/50 rounded-2xl p-6 flex items-center gap-3 justify-center">
                <Sparkles className="w-5 h-5 text-accent shrink-0" />
                <p className="font-sans text-sm text-foreground/70"><strong className="text-foreground">Occasion bundles available</strong> — Add tuxes, flower girl dresses, and holiday outfits as needed.</p>
              </div>
              <p className="font-sans text-xs text-foreground/40 mt-6">Pricing will be finalized with pilot learnings.</p>
            </motion.div>
          </div>
        </section>

        <WaitlistCTA />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
