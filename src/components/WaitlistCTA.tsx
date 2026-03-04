import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface WaitlistCTAProps {
  headline?: string;
  subtext?: string;
  buttonLabel?: string;
  to?: string;
}

const WaitlistCTA = ({
  headline = "Ready to rent smarter?",
  subtext = "Join the Boston pilot and be the first to experience a better way to dress your little ones.",
  buttonLabel = "Join the Waitlist",
  to = "/join",
}: WaitlistCTAProps) => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">{headline}</h2>
          <p className="font-sans text-foreground/60 mb-8">{subtext}</p>
          <Button variant="hero" size="lg" asChild>
            <Link to={to}>{buttonLabel}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistCTA;
