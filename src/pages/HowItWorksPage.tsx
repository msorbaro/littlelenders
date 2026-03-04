import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaitlistCTA from "@/components/WaitlistCTA";
import { motion } from "framer-motion";
import {
  BunnyWithClipboard, FoxShopping, DuckInBox, BearSwapping,
  DeerWithBox, OwlInspecting, CatWithCredit, GiraffeRecycling,
  BunnyIcon, FoxIcon, BearIcon, DuckIcon
} from "@/components/AnimalIllustrations";

const rentalSteps = [
  { Animal: BunnyWithClipboard, title: "Tell Us About Your Child", description: "Share your child's size, age, and style preferences through a simple intake form." },
  { Animal: FoxShopping, title: "Choose Your Items", description: "Browse curated selections from top brands. Mix everyday wardrobe pieces with optional occasion add-ons." },
  { Animal: DuckInBox, title: "Receive, Wear, Return", description: "Your box arrives clean and ready to wear. When you're done, send it back with our prepaid return label." },
  { Animal: BearSwapping, title: "Refresh Your Wardrobe", description: "On a predictable cadence (roughly every 8–12 weeks), swap out for the next size or style." },
];

const tradeInSteps = [
  { Animal: DeerWithBox, title: "Send In Hand-Me-Downs", description: "Ship us clean, gently used clothes your child has outgrown." },
  { Animal: OwlInspecting, title: "We Grade for Quality", description: "Our team inspects every item against our condition standards." },
  { Animal: CatWithCredit, title: "Receive Credit", description: "Earn credit toward your membership or occasion add-ons." },
  { Animal: GiraffeRecycling, title: "Items Are Re-Circulated", description: "High-quality items join our rental inventory. Others are responsibly donated or recycled." },
];

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 bg-card relative overflow-hidden">
          {/* Floating decorative animals */}
          <motion.div
            className="absolute top-8 left-8 opacity-15 hidden lg:block"
            animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <BunnyIcon size={80} />
          </motion.div>
          <motion.div
            className="absolute top-12 right-12 opacity-15 hidden lg:block"
            animate={{ y: [0, -6, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <FoxIcon size={70} />
          </motion.div>
          <motion.div
            className="absolute bottom-8 left-1/4 opacity-10 hidden lg:block"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <DuckIcon size={60} />
          </motion.div>
          <motion.div
            className="absolute bottom-6 right-1/4 opacity-10 hidden lg:block"
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <BearIcon size={65} />
          </motion.div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm font-sans font-semibold uppercase tracking-widest text-accent mb-3">How It Works</p>
              <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Simple, Sustainable, Stress-Free</h1>
              <p className="font-sans text-foreground/60 max-w-2xl mx-auto">Renting kids' clothes shouldn't be complicated. Here's exactly how Little Lenders works.</p>
            </motion.div>
          </div>
        </section>

        {/* Rental Membership */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-foreground text-center mb-4">Rental Membership</h2>
            <p className="font-sans text-foreground/60 text-center mb-14 max-w-xl mx-auto">Your child always has something great to wear—without the clutter or waste.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {rentalSteps.map((step, i) => (
                <motion.div key={step.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                  <motion.div
                    className="mx-auto mb-5 flex items-center justify-center"
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.Animal size={110} />
                  </motion.div>
                  <div className="font-sans text-xs font-bold text-accent mb-2">Step {i + 1}</div>
                  <h3 className="font-serif text-xl text-foreground mb-2">{step.title}</h3>
                  <p className="font-sans text-sm text-foreground/60 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trade-In Credit */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-foreground text-center mb-4">Trade-In Credit</h2>
            <p className="font-sans text-foreground/60 text-center mb-14 max-w-xl mx-auto">Already have great clothes your child has outgrown? Turn them into credit.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tradeInSteps.map((step, i) => (
                <motion.div key={step.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                  <motion.div
                    className="mx-auto mb-5 flex items-center justify-center"
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.Animal size={110} />
                  </motion.div>
                  <div className="font-sans text-xs font-bold text-accent mb-2">Step {i + 1}</div>
                  <h3 className="font-serif text-xl text-foreground mb-2">{step.title}</h3>
                  <p className="font-sans text-sm text-foreground/60 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust & Care */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-serif text-foreground text-center mb-12">Trust &amp; Care</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Cleaning Standards", description: "Every item is professionally laundered using gentle, baby-safe detergents. We inspect for cleanliness before every shipment.", Animal: BunnyIcon },
                { title: "Quality Standards", description: "Items are checked for wear, stains, and structural integrity. Only pieces that meet our standards go out.", Animal: FoxIcon },
                { title: "Damage Policy", description: "We're designing a predictable approach—no surprise bills. Normal wear and tear is expected. We'll share clear guidelines so you always know what to expect.", Animal: BearIcon },
              ].map((item) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-3xl p-8 border border-border text-center">
                  <motion.div className="mx-auto mb-4 flex items-center justify-center" whileHover={{ scale: 1.1 }}>
                    <item.Animal size={64} />
                  </motion.div>
                  <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="font-sans text-sm text-foreground/60 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <WaitlistCTA />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
