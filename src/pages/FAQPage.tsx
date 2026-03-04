import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaitlistCTA from "@/components/WaitlistCTA";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What ages and sizes do you support?",
    a: "We currently focus on toddler and kid sizes, roughly 2T through 8Y. We're starting here and will expand based on what our pilot families need.",
  },
  {
    q: "How does renting work?",
    a: "It works like Rent the Runway, but for kids. You pick your plan, choose items from our curated collection, wear them, and send them back when you're ready to refresh. Returns are always included—no extra fees.",
  },
  {
    q: "Do I get credit for returning rentals?",
    a: "No—returning rented items is simply part of your membership. Trade-in credit is a separate program for clothes you already own that your child has outgrown. Think of it as: rentals come back to us, trade-ins earn you credit.",
  },
  {
    q: "How does trade-in credit work?",
    a: "Send us clean, gently used clothes your child has outgrown. We grade them for quality and give you credit based on brand and condition. Credit can be applied toward your membership or occasion add-ons.",
  },
  {
    q: "What if something gets stained or damaged?",
    a: "We're designing a predictable, transparent approach—no surprise bills. Normal wear and tear is expected with kids' clothing. We'll share clear guidelines so you always know what to expect before you rent.",
  },
  {
    q: "How do you clean items?",
    a: "Every item is professionally laundered using gentle, baby-safe detergents. We inspect each piece for cleanliness, wear, and quality before it goes out to the next family.",
  },
  {
    q: "How often do I refresh my wardrobe?",
    a: "Our expected cadence is roughly every 8–12 weeks, designed to match how quickly kids grow. You'll always know when your next refresh is coming.",
  },
  {
    q: "Can I request specific brands or styles?",
    a: "Yes! During your intake, you can share style preferences and favorite brands. We do our best to match your requests from our available inventory.",
  },
  {
    q: "What areas do you serve for the pilot?",
    a: "We're starting with the Boston area for our initial pilot. If you're outside Boston but interested, join the waitlist—we'd love to know where to expand next.",
  },
  {
    q: "When are you launching?",
    a: "We're actively preparing for our pilot launch. Join the waitlist to be among the first families invited, and we'll keep you posted on timing.",
  },
];

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm font-sans font-semibold uppercase tracking-widest text-accent mb-3">FAQ</p>
              <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Frequently Asked Questions</h1>
              <p className="font-sans text-foreground/60 max-w-xl mx-auto">Everything you need to know about renting, trade-ins, and how Little Lenders works.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-2xl px-6">
                  <AccordionTrigger className="font-sans font-semibold text-foreground text-left hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-foreground/60 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <WaitlistCTA />
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
