import { motion } from "framer-motion";
import { Package, RefreshCw, Heart, Truck } from "lucide-react";

const steps = [
  {
    icon: Heart,
    title: "Pick Your Plan",
    description: "Choose how many pieces you'd like per month — starting at just 4 items for ages 2–8.",
    color: "bg-warm",
  },
  {
    icon: Package,
    title: "Fill Your Box",
    description: "Browse hundreds of styles from top kids' brands and select your favorites.",
    color: "bg-secondary",
  },
  {
    icon: Truck,
    title: "Wear & Enjoy",
    description: "Clothes arrive clean, pressed, and ready to wear. Free shipping both ways.",
    color: "bg-peach/40",
  },
  {
    icon: RefreshCw,
    title: "Swap Anytime",
    description: "When they outgrow it (or you want something new), send it back and swap.",
    color: "bg-sky/40",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-accent mb-3">Simple & Sustainable</p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">How It Works</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                <step.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">{step.title}</h3>
              <p className="font-sans text-sm text-foreground/60 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
