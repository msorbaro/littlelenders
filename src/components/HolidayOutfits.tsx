import { motion } from "framer-motion";
import holidayChristmas1 from "@/assets/holiday-christmas-1.jpg";
import holidayChristmas2 from "@/assets/holiday-christmas-2.jpg";
import holidayValentines1 from "@/assets/holiday-valentines-1.jpg";
import holidayValentines2 from "@/assets/holiday-valentines-2.jpg";

const items = [
  { image: holidayChristmas1, name: "Red Velvet Holiday Dress", brand: "Janie & Jack", size: "2-6Y", retail: "$78", tag: "Christmas" },
  { image: holidayChristmas2, name: "Plaid & Suspenders Set", brand: "Carter's", size: "2-5T", retail: "$52", tag: "Christmas" },
  { image: holidayValentines1, name: "Heart Print Dress & Cardigan", brand: "Tea Collection", size: "2-6Y", retail: "$64", tag: "Valentine's" },
  { image: holidayValentines2, name: "Bow Tie Gentleman Set", brand: "H&M Kids", size: "2-4T", retail: "$45", tag: "Valentine's" },
];

const HolidayOutfits = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-accent mb-3">Seasonal Favorites</p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">Holiday Outfits</h2>
          <p className="font-sans text-foreground/60 mt-4 max-w-lg mx-auto">
            Festive looks for every celebration — rent the perfect holiday outfit without the commitment.
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
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-muted relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-peach text-peach-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {item.tag}
                </span>
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

export default HolidayOutfits;
