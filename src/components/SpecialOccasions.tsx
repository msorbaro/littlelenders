import { motion } from "framer-motion";
import occasionTux1 from "@/assets/occasion-tux-1.jpg";
import occasionFlowergirl1 from "@/assets/occasion-flowergirl-1.jpg";
import occasionTux2 from "@/assets/occasion-tux-2.jpg";
import occasionFlowergirl2 from "@/assets/occasion-flowergirl-2.jpg";

const items = [
  { image: occasionTux1, name: "Classic Black Tuxedo", brand: "Janie & Jack", size: "2-8Y", retail: "$120" },
  { image: occasionFlowergirl1, name: "Ivory Tulle Flower Girl Dress", brand: "David's Bridal Kids", size: "2-6Y", retail: "$95" },
  { image: occasionTux2, name: "Navy Vest & Tie Set", brand: "Appaman", size: "3-7Y", retail: "$110" },
  { image: occasionFlowergirl2, name: "Blush Lace Flower Girl Dress", brand: "Monsoon Kids", size: "2-8Y", retail: "$88" },
];

const SpecialOccasions = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-accent mb-3">Weddings & Events</p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">Special Occasions</h2>
          <p className="font-sans text-foreground/60 mt-4 max-w-lg mx-auto">
            Why buy a tux or flower girl dress they'll wear once? Rent designer formalwear for a fraction of the price.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-muted">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-sans font-semibold text-foreground text-sm">{item.name}</h3>
              <p className="font-sans text-xs text-foreground/50 mt-1">{item.brand} · {item.size}</p>
              <p className="font-sans text-xs text-accent mt-1">Retail {item.retail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOccasions;
