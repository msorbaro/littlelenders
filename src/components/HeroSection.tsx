import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";
import heroBaby from "@/assets/hero-baby.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleOpenChange = (val: boolean) => {
    setOpen(val);
    if (!val) setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0">
        <img src={heroBaby} alt="Trendy toddler clothes flat lay" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-sans font-semibold uppercase tracking-widest text-accent mb-4"
          >
            Kids' Fashion, Borrowed
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-foreground leading-tight mb-6"
          >
            Little clothes,{" "}
            <span className="italic">big savings</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg font-sans text-foreground/70 mb-8 max-w-md"
          >
            Rent stylish, high-quality toddler and kids' clothes for a fraction of the cost. They grow fast — your wardrobe keeps up.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-4"
          >
            <Button variant="hero" size="lg" onClick={() => setOpen(true)}>Join the Pilot</Button>
            <Button variant="outline" size="lg" className="rounded-full" asChild>
              <Link to="/how-it-works">See How It Works</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-md">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-foreground" />
              </div>
              <DialogHeader>
                <DialogTitle className="text-center">You're on the list!</DialogTitle>
                <DialogDescription className="text-center">
                  Thanks for signing up. We'll be in touch soon with details about the pilot.
                </DialogDescription>
              </DialogHeader>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>Join the Pilot</DialogTitle>
                <DialogDescription>
                  Sign up to be one of the first families to try Little Lenders.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" required placeholder="Jane" maxLength={50} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" required placeholder="Smith" maxLength={50} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="heroEmail">Email *</Label>
                  <Input id="heroEmail" type="email" required placeholder="you@example.com" maxLength={255} />
                </div>
                <Button type="submit" variant="hero" className="w-full">
                  Sign Up
                </Button>
                <p className="font-sans text-xs text-foreground/40 text-center">We'll never share your information.</p>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
