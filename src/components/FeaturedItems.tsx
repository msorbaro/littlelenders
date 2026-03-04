import { motion } from "framer-motion";
import toddlerOutfit1 from "@/assets/toddler-outfit-1.jpg";
import toddlerOutfit2 from "@/assets/toddler-outfit-2.jpg";
import toddlerOutfit3 from "@/assets/toddler-outfit-3.jpg";
import toddlerOutfit4 from "@/assets/toddler-outfit-4.jpg";

const items = [
  { image: toddlerOutfit1, name: "Floral Dress & Cardigan", brand: "Tea Collection", size: "2-3T", retail: "$62" },
  { image: toddlerOutfit2, name: "Rainbow Stripe Set", brand: "Hanna Andersson", size: "3-4T", retail: "$48" },
  { image: toddlerOutfit3, name: "Yellow Raincoat & Boots", brand: "Petit Bateau", size: "4-5T", retail: "$85" },
  { image: toddlerOutfit4, name: "Cozy Sweater & Leggings", brand: "Primary", size: "2-3T", retail: "$54" },
];

const FeaturedItems = () => {
  return (
    <section id="browse" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-accent mb-3">New Arrivals</p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">Currently Trending</h2>
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

export default FeaturedItems;
