import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Little Lenders" className="h-8 w-auto brightness-200" />
              <span className="font-serif text-lg text-primary-foreground">Little Lenders</span>
            </Link>
            <p className="font-sans text-sm text-primary-foreground/60">
              Sustainable kids' fashion, delivered to your door.
            </p>
          </div>
          {[
            {
              title: "Explore",
              links: [
                { label: "How It Works", to: "/how-it-works" },
                { label: "Trade-In Credit", to: "/trade-in" },
                { label: "Pricing", to: "/pricing" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", to: "/about" },
                { label: "FAQ", to: "/faq" },
                { label: "Join Pilot", to: "/join" },
              ],
            },
            {
              title: "Support",
              links: [
                { label: "FAQ", to: "/faq" },
                { label: "Contact Us", to: "/join" },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-sans font-semibold text-sm text-primary-foreground mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="font-sans text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="font-sans text-xs text-primary-foreground/40">© 2026 Little Lenders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
