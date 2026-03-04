import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaitlistCTA from "@/components/WaitlistCTA";
import { motion } from "framer-motion";
import { BunnyWithHeart, OwlWithLightbulb, AnimalFamily, BunnyIcon, BearIcon, FoxIcon } from "@/components/AnimalIllustrations";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-card relative overflow-hidden">
          <motion.div
            className="absolute top-6 left-8 opacity-12 hidden lg:block"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <BunnyIcon size={70} />
          </motion.div>
          <motion.div
            className="absolute top-10 right-10 opacity-12 hidden lg:block"
            animate={{ y: [0, -5, 0], rotate: [0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <BearIcon size={65} />
          </motion.div>
          <motion.div
            className="absolute bottom-8 left-1/4 opacity-10 hidden lg:block"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <FoxIcon size={55} />
          </motion.div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm font-sans font-semibold uppercase tracking-widest text-accent mb-3">About</p>
              <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Why We Started Little Lenders</h1>
            </motion.div>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <BunnyWithHeart size={90} />
                </motion.div>
                <h2 className="text-2xl font-serif text-foreground">Our Story</h2>
              </div>
              <div className="font-sans text-foreground/70 leading-relaxed space-y-4">
                <p>It started with a visit to my cousin's house. Her toddler had outgrown an entire drawer of clothes in what felt like weeks—beautiful pieces barely worn, now too small. She was stuck between donating everything, stuffing it into storage bins, or spending another small fortune on the next size up.</p>
                <p>That moment stuck with me. Kids grow fast. Clothes pile up. Parents spend hundreds on outfits that last a few months at best. And most of it ends up in landfills. It felt like there had to be a better way.</p>
                <p>So we started Little Lenders—a rental membership that gives your child a refreshed wardrobe as they grow, without the waste or the constant spending. We're building this with real families, learning as we go, and designing every detail to make parents' lives a little easier.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What We Believe */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <OwlWithLightbulb size={100} />
                </motion.div>
                <h2 className="text-2xl font-serif text-foreground">What We Believe</h2>
              </div>
              <div className="font-sans text-foreground/70 leading-relaxed space-y-4">
                <p>Parents shouldn't have to choose between dressing their kids well, managing costs, and caring about the planet. Those things should work together, not against each other.</p>
                <p>We believe kids' clothing is a perfect fit for a circular model—high turnover, emotional attachment to quality, and a natural community of families who can share. We're here to make that sharing seamless.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How We're Building */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <AnimalFamily size={110} />
                </motion.div>
                <h2 className="text-2xl font-serif text-foreground">How We're Building</h2>
              </div>
              <div className="font-sans text-foreground/70 leading-relaxed space-y-4">
                <p>We're not building in a vacuum. Every decision—from pricing to packaging to cadence—is informed by real conversations with real parents. Our pilot is designed to learn, iterate, and get it right.</p>
                <p>If you're a parent who's tired of the buy-outgrow-repeat cycle, we'd love to hear from you. Join our pilot and help us shape something better.</p>
              </div>
            </motion.div>
          </div>
        </section>

        <WaitlistCTA headline="Help us build something better" subtext="Join the pilot and share your perspective. We're building Little Lenders with families like yours." />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
