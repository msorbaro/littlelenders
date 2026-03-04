import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaitlistCTA from "@/components/WaitlistCTA";
import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import {
  BunnyTidying, FoxWithWallet, DeerWithGlobe,
  BearWithCheck, DuckGiving, OwlDonating,
  BunnyIcon, FoxIcon, DuckIcon
} from "@/components/AnimalIllustrations";

const whyReasons = [
  { Animal: BunnyTidying, title: "Reduce Clutter", description: "Free up drawer space by sending us what they've outgrown." },
  { Animal: FoxWithWallet, title: "Unlock Value", description: "Turn outgrown clothes into credit toward your membership or add-ons." },
  { Animal: DeerWithGlobe, title: "Close the Loop", description: "Great clothes get a second (or third) life instead of ending up in a landfill." },
];

const accepted = [
  { category: "Tops", examples: "T-shirts, long-sleeves, polos, blouses" },
  { category: "Dresses", examples: "Casual dresses, sundresses, formal dresses" },
  { category: "Pants & Shorts", examples: "Jeans, leggings, joggers, shorts" },
  { category: "Sweaters & Jackets", examples: "Cardigans, hoodies, puffer jackets, fleece" },
  { category: "Occasion Wear", examples: "Flower girl dresses, suits, holiday outfits" },
];

const notAccepted = ["Underwear & socks", "Swimwear", "Shoes", "Items with major stains, tears, or odors", "Items that have been recalled"];

const TradeInPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 bg-card relative overflow-hidden">
          <motion.div
            className="absolute top-14 left-10 opacity-12 hidden lg:block"
            animate={{ y: [0, -6, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <BunnyIcon size={70} />
          </motion.div>
          <motion.div
            className="absolute top-14 right-10 opacity-12 hidden lg:block"
            animate={{ y: [0, -5, 0], rotate: [0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <FoxIcon size={65} />
          </motion.div>
          <motion.div
            className="absolute bottom-6 right-1/3 opacity-10 hidden lg:block"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <DuckIcon size={55} />
          </motion.div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm font-sans font-semibold uppercase tracking-widest text-accent mb-3">Trade-In Credit</p>
              <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Turn Outgrown Clothes Into Credit</h1>
              <p className="font-sans text-foreground/60 max-w-2xl mx-auto">Send us the clothes your child has outgrown. We'll grade them and give you credit toward your membership or occasion add-ons.</p>
            </motion.div>
          </div>
        </section>

        {/* Why Trade-In */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-foreground text-center mb-12">Why Trade-In Exists</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {whyReasons.map((r) => (
                <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
                  <motion.div
                    className="mx-auto mb-5 flex items-center justify-center"
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <r.Animal size={110} />
                  </motion.div>
                  <h3 className="font-serif text-xl text-foreground mb-2">{r.title}</h3>
                  <p className="font-sans text-sm text-foreground/60 leading-relaxed">{r.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Accept */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex flex-col items-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} className="mb-4">
                <BearWithCheck size={90} />
              </motion.div>
              <h2 className="text-3xl font-serif text-foreground text-center">What We Accept</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {accepted.map((a) => (
                <div key={a.category} className="flex items-start gap-3 bg-background rounded-2xl p-5 border border-border">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-sans font-semibold text-foreground mb-1">{a.category}</h4>
                    <p className="font-sans text-sm text-foreground/60">{a.examples}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-background rounded-2xl p-6 border border-border">
              <h3 className="font-sans font-semibold text-foreground mb-3">We Don't Accept</h3>
              <ul className="space-y-2">
                {notAccepted.map((item) => (
                  <li key={item} className="flex items-center gap-2 font-sans text-sm text-foreground/60">
                    <X className="w-4 h-4 text-destructive shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Condition Standards */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl font-serif text-foreground mb-4">Condition Standards</h2>
            <p className="font-sans text-foreground/60 leading-relaxed mb-6">We accept gently used items in good condition. Minor pilling or fading is fine—think "would I feel good handing this to a friend?" No major stains, tears, or missing buttons.</p>
          </div>
        </section>

        {/* How Credit Works */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-serif text-foreground text-center mb-4">How Credit Works</h2>
            <div className="bg-background rounded-3xl p-8 border border-border mt-8 space-y-4 font-sans text-sm text-foreground/70 leading-relaxed">
              <p>Credit amounts depend on the brand and condition of each item. Higher-end brands and like-new condition earn more credit.</p>
              <p>Credit can be applied toward your monthly membership fee or used for occasion add-on bundles.</p>
              <p><strong className="text-foreground">Important:</strong> Trade-in credit is for clothes you already own. Returning rented items is simply part of your membership—no credit is given for rental returns.</p>
            </div>
          </div>
        </section>

        {/* What Happens to Items */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-serif text-foreground text-center mb-8">What Happens to Your Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-3xl p-8 border border-border text-center">
                <motion.div className="mx-auto mb-4 flex items-center justify-center" whileHover={{ scale: 1.05, y: -3 }}>
                  <DuckGiving size={100} />
                </motion.div>
                <h3 className="font-serif text-lg text-foreground mb-2">Re-Circulated</h3>
                <p className="font-sans text-sm text-foreground/60 leading-relaxed">Items that meet our quality standards are cleaned and added to our rental inventory for other families to enjoy.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-card rounded-3xl p-8 border border-border text-center">
                <motion.div className="mx-auto mb-4 flex items-center justify-center" whileHover={{ scale: 1.05, y: -3 }}>
                  <OwlDonating size={100} />
                </motion.div>
                <h3 className="font-serif text-lg text-foreground mb-2">Donated or Recycled</h3>
                <p className="font-sans text-sm text-foreground/60 leading-relaxed">Items that don't meet rental standards are responsibly donated to families in need or recycled through textile partners. (Details being finalized.)</p>
              </motion.div>
            </div>
          </div>
        </section>

        <WaitlistCTA headline="Ready to trade in?" subtext="Join the waitlist and be the first to send in your hand-me-downs for credit." buttonLabel="Start Trade-In (Waitlist)" />
      </main>
      <Footer />
    </div>
  );
};

export default TradeInPage;
