import { motion } from "framer-motion";
import { Leaf, Recycle, Droplets } from "lucide-react";

const SustainabilitySection = () => {
  return (
    <section id="sustainability" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-sans font-semibold uppercase tracking-widest text-accent mb-3">Better For The Planet</p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Fashion That Doesn't Cost the Earth</h2>
            <p className="font-sans text-foreground/60 max-w-2xl mx-auto mb-12">
              Kids outgrow clothes in months, not years. By renting instead of buying, you're reducing textile waste and giving each garment a longer, more loved life.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, stat: "85%", label: "Less clothing waste" },
              { icon: Droplets, stat: "2,700L", label: "Water saved per garment" },
              { icon: Recycle, stat: "10x", label: "Average garment reuse" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-sky/20 rounded-2xl p-8"
              >
                <item.icon className="w-8 h-8 text-sky-foreground mx-auto mb-4" />
                <p className="font-serif text-4xl text-foreground mb-1">{item.stat}</p>
                <p className="font-sans text-sm text-foreground/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
