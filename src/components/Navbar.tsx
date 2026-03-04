import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Trade-In Credit", to: "/trade-in" },
  { label: "Pricing", to: "/pricing" },
  { label: "FAQ", to: "/faq" },
  { label: "About", to: "/about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-28 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Little Lenders" className="h-24 w-auto" />
          <span className="font-serif text-xl text-foreground">Little Lenders</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6 font-sans text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "transition-colors",
                location.pathname === link.to
                  ? "text-foreground"
                  : "text-foreground/60 hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/join"
            className="bg-peach text-peach-foreground px-5 py-2 rounded-full text-sm font-semibold hover:bg-peach/80 transition-colors"
          >
            Join Pilot
          </Link>
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-b border-border pb-4">
          <div className="container mx-auto px-4 flex flex-col gap-3 font-sans text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "py-2 transition-colors",
                  location.pathname === link.to
                    ? "text-foreground"
                    : "text-foreground/60 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
