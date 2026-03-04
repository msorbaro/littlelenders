import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

const painPoints = [
  "Kids outgrow clothes too fast",
  "Spending too much on clothes",
  "Closet clutter / storage",
  "Hard to find quality styles",
  "Waste / sustainability concerns",
];

const JoinPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedPains, setSelectedPains] = useState<string[]>([]);
  const [tradeIn, setTradeIn] = useState<string>("");
  const [occasionAddOns, setOccasionAddOns] = useState<string>("");

  const togglePain = (pain: string) => {
    setSelectedPains((prev) =>
      prev.includes(pain) ? prev.filter((p) => p !== pain) : [...prev, pain]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: would send to backend / Mailchimp / ConvertKit
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-16">
          <section className="py-32">
            <div className="container mx-auto px-4 text-center max-w-lg">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-foreground" />
                </div>
                <h1 className="text-3xl font-serif text-foreground mb-4">You're on the list!</h1>
                <p className="font-sans text-foreground/60 leading-relaxed">Thank you for your interest in Little Lenders. We'll follow up soon with next steps for the pilot. Keep an eye on your inbox!</p>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm font-sans font-semibold uppercase tracking-widest text-accent mb-3">Join the Pilot</p>
              <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Be One of the First Families</h1>
              <p className="font-sans text-foreground/60 max-w-xl mx-auto">We're launching in Boston and looking for families to help shape Little Lenders. Fill out the form below and we'll be in touch.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" required placeholder="Your full name" maxLength={100} />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" required placeholder="you@example.com" maxLength={255} />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" maxLength={20} />
              </div>

              {/* City/Zip */}
              <div className="space-y-2">
                <Label htmlFor="location">City or Zip Code *</Label>
                <Input id="location" required placeholder="Boston, MA or 02101" maxLength={100} />
              </div>

              {/* Child Ages */}
              <div className="space-y-2">
                <Label htmlFor="ages">Child Age(s) *</Label>
                <Input id="ages" required placeholder="e.g., 2 and 4 years old" maxLength={100} />
              </div>

              {/* Current Sizes */}
              <div className="space-y-2">
                <Label htmlFor="sizes">Current Sizes *</Label>
                <Input id="sizes" required placeholder="e.g., 3T and 5T" maxLength={100} />
              </div>

              {/* How often */}
              <div className="space-y-2">
                <Label>How often do you buy kids' clothes? *</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="every-2-3-months">Every 2–3 months</SelectItem>
                    <SelectItem value="seasonally">Seasonally</SelectItem>
                    <SelectItem value="as-needed">As needed</SelectItem>
                    <SelectItem value="rarely">Rarely</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Biggest Pain */}
              <div className="space-y-3">
                <Label>Biggest pain points (select all that apply)</Label>
                <div className="space-y-2">
                  {painPoints.map((pain) => (
                    <div key={pain} className="flex items-center gap-3">
                      <Checkbox
                        id={pain}
                        checked={selectedPains.includes(pain)}
                        onCheckedChange={() => togglePain(pain)}
                      />
                      <label htmlFor={pain} className="font-sans text-sm text-foreground/70 cursor-pointer">{pain}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trade-in */}
              <div className="space-y-3">
                <Label>Interested in trade-in credit?</Label>
                <RadioGroup value={tradeIn} onValueChange={setTradeIn}>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="yes" id="tradein-yes" />
                    <label htmlFor="tradein-yes" className="font-sans text-sm text-foreground/70 cursor-pointer">Yes</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="no" id="tradein-no" />
                    <label htmlFor="tradein-no" className="font-sans text-sm text-foreground/70 cursor-pointer">No</label>
                  </div>
                </RadioGroup>
              </div>

              {/* Occasion Add-ons */}
              <div className="space-y-3">
                <Label>Interested in occasion add-ons? (tuxes, flower girl dresses, holiday outfits)</Label>
                <RadioGroup value={occasionAddOns} onValueChange={setOccasionAddOns}>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="yes" id="occasion-yes" />
                    <label htmlFor="occasion-yes" className="font-sans text-sm text-foreground/70 cursor-pointer">Yes</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="no" id="occasion-no" />
                    <label htmlFor="occasion-no" className="font-sans text-sm text-foreground/70 cursor-pointer">No</label>
                  </div>
                </RadioGroup>
              </div>

              {/* Anything else */}
              <div className="space-y-2">
                <Label htmlFor="notes">Anything else you'd like us to know?</Label>
                <Textarea id="notes" placeholder="Tell us what matters most to you..." maxLength={1000} />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Join the Pilot Waitlist
              </Button>

              <p className="font-sans text-xs text-foreground/40 text-center">We'll never share your information. You can unsubscribe anytime.</p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JoinPage;
