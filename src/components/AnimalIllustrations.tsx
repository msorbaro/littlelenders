import React from "react";

interface AnimalProps {
  className?: string;
  size?: number;
}

/** Bunny writing on a clipboard — "Tell Us About Your Child" */
export const BunnyWithClipboard = ({ className = "", size = 100 }: AnimalProps) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
    {/* Clipboard */}
    <rect x="68" y="50" width="28" height="36" rx="3" fill="hsl(40 80% 92%)" stroke="hsl(270 6% 55%)" strokeWidth="1.5" />
    <rect x="75" y="48" width="14" height="6" rx="2" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 55%)" strokeWidth="1" />
    <line x1="74" y1="60" x2="90" y2="60" stroke="hsl(270 6% 65%)" strokeWidth="1" />
    <line x1="74" y1="66" x2="88" y2="66" stroke="hsl(270 6% 65%)" strokeWidth="1" />
    <line x1="74" y1="72" x2="86" y2="72" stroke="hsl(270 6% 65%)" strokeWidth="1" />
    {/* Pencil in paw */}
    <line x1="66" y1="72" x2="74" y2="60" stroke="hsl(30 93% 65%)" strokeWidth="2.5" strokeLinecap="round" />
    <polygon points="74,60 73,57 76,58" fill="hsl(270 6% 45%)" />
    {/* Bunny ears */}
    <ellipse cx="38" cy="25" rx="7" ry="18" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <ellipse cx="56" cy="25" rx="7" ry="18" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <ellipse cx="38" cy="25" rx="3.5" ry="12" fill="hsl(30 93% 85%)" />
    <ellipse cx="56" cy="25" rx="3.5" ry="12" fill="hsl(30 93% 85%)" />
    {/* Bunny head */}
    <circle cx="47" cy="52" r="22" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    {/* Eyes */}
    <circle cx="40" cy="48" r="2.5" fill="hsl(270 6% 35%)" />
    <circle cx="54" cy="48" r="2.5" fill="hsl(270 6% 35%)" />
    <circle cx="41" cy="47" r="0.8" fill="white" />
    <circle cx="55" cy="47" r="0.8" fill="white" />
    {/* Nose & mouth */}
    <ellipse cx="47" cy="54" rx="2.5" ry="1.8" fill="hsl(30 93% 75%)" />
    <path d="M44 57 Q47 60 50 57" stroke="hsl(270 6% 35%)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    {/* Cheeks */}
    <circle cx="34" cy="54" r="3.5" fill="hsl(30 93% 85%)" opacity="0.4" />
    <circle cx="60" cy="54" r="3.5" fill="hsl(30 93% 85%)" opacity="0.4" />
    {/* Little body/paw reaching for clipboard */}
    <ellipse cx="50" cy="78" rx="16" ry="12" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <ellipse cx="64" cy="70" rx="5" ry="4" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="1.2" transform="rotate(-20 64 70)" />
  </svg>
);

/** Fox browsing a clothes rack — "Choose Your Items" */
export const FoxShopping = ({ className = "", size = 100 }: AnimalProps) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
    {/* Clothes rack */}
    <line x1="70" y1="30" x2="110" y2="30" stroke="hsl(270 6% 55%)" strokeWidth="2" strokeLinecap="round" />
    <line x1="72" y1="30" x2="72" y2="90" stroke="hsl(270 6% 55%)" strokeWidth="2" />
    <line x1="108" y1="30" x2="108" y2="90" stroke="hsl(270 6% 55%)" strokeWidth="2" />
    {/* Hangers with clothes */}
    <path d="M80 30 L80 34 L76 38 M80 34 L84 38" stroke="hsl(270 6% 55%)" strokeWidth="1.2" fill="none" />
    <path d="M76 38 Q80 40 84 38 L83 50 Q80 52 77 50 Z" fill="hsl(193 38% 80%)" stroke="hsl(270 6% 55%)" strokeWidth="1" />
    <path d="M90 30 L90 34 L86 38 M90 34 L94 38" stroke="hsl(270 6% 55%)" strokeWidth="1.2" fill="none" />
    <path d="M86 38 Q90 40 94 38 L93 52 Q90 54 87 52 Z" fill="hsl(30 93% 80%)" stroke="hsl(270 6% 55%)" strokeWidth="1" />
    <path d="M100 30 L100 34 L96 38 M100 34 L104 38" stroke="hsl(270 6% 55%)" strokeWidth="1.2" fill="none" />
    <path d="M96 38 Q100 40 104 38 L103 48 Q100 50 97 48 Z" fill="hsl(40 80% 82%)" stroke="hsl(270 6% 55%)" strokeWidth="1" />
    {/* Fox paw reaching for clothes */}
    <ellipse cx="62" cy="46" rx="5" ry="3.5" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="1.2" transform="rotate(-30 62 46)" />
    {/* Fox ears */}
    <polygon points="25,18 20,42 34,38" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <polygon points="52,18 57,42 43,38" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <polygon points="26,24 23,38 32,36" fill="hsl(40 80% 92%)" />
    <polygon points="51,24 54,38 45,36" fill="hsl(40 80% 92%)" />
    {/* Fox head */}
    <ellipse cx="38" cy="52" rx="22" ry="20" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <ellipse cx="38" cy="58" rx="13" ry="12" fill="hsl(40 80% 96%)" />
    {/* Eyes — looking at clothes */}
    <ellipse cx="32" cy="48" rx="2.5" ry="3" fill="hsl(270 6% 35%)" />
    <ellipse cx="44" cy="48" rx="2.5" ry="3" fill="hsl(270 6% 35%)" />
    <circle cx="33" cy="47" r="0.8" fill="white" />
    <circle cx="45" cy="47" r="0.8" fill="white" />
    {/* Nose */}
    <ellipse cx="38" cy="56" rx="3" ry="2" fill="hsl(270 6% 35%)" />
    <path d="M35 59 Q38 62 41 59" stroke="hsl(270 6% 35%)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    {/* Body */}
    <ellipse cx="40" cy="78" rx="16" ry="14" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <ellipse cx="40" cy="82" rx="10" ry="8" fill="hsl(40 80% 96%)" />
    {/* Star sparkle — excited! */}
    <path d="M60 28 L61 25 L62 28 L65 29 L62 30 L61 33 L60 30 L57 29 Z" fill="hsl(30 93% 75%)" />
  </svg>
);

/** Duck popping out of a delivery box — "Receive, Wear, Return" */
export const DuckInBox = ({ className = "", size = 100 }: AnimalProps) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
    {/* Box back */}
    <rect x="25" y="55" width="70" height="50" rx="4" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    {/* Box front stripe */}
    <line x1="60" y1="55" x2="60" y2="105" stroke="hsl(270 6% 55%)" strokeWidth="1" strokeDasharray="4 3" />
    {/* Box flaps (open) */}
    <path d="M25 55 L15 45 L55 45 L60 55" fill="hsl(40 80% 82%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <path d="M60 55 L65 45 L108 45 L95 55" fill="hsl(40 80% 82%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    {/* Shipping label */}
    <rect x="38" y="70" width="22" height="14" rx="2" fill="white" stroke="hsl(270 6% 65%)" strokeWidth="1" />
    <line x1="42" y1="75" x2="56" y2="75" stroke="hsl(270 6% 65%)" strokeWidth="0.8" />
    <line x1="42" y1="79" x2="52" y2="79" stroke="hsl(270 6% 65%)" strokeWidth="0.8" />
    {/* Duck popping out */}
    {/* Body inside box */}
    <ellipse cx="60" cy="52" rx="18" ry="10" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    {/* Head */}
    <circle cx="55" cy="30" r="16" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    {/* Neck */}
    <ellipse cx="57" cy="44" rx="9" ry="7" fill="hsl(40 80% 86%)" />
    {/* Eye */}
    <circle cx="49" cy="27" r="2.5" fill="hsl(270 6% 35%)" />
    <circle cx="50" cy="26" r="0.8" fill="white" />
    {/* Beak */}
    <ellipse cx="38" cy="32" rx="9" ry="3.5" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    {/* Cheek */}
    <circle cx="52" cy="35" r="3" fill="hsl(30 93% 85%)" opacity="0.5" />
    {/* Tuft */}
    <path d="M58 16 Q62 10 56 13" stroke="hsl(270 6% 35%)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* Wing waving */}
    <path d="M72 40 Q82 32 78 45" fill="hsl(40 80% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    {/* Little hearts — excited to arrive */}
    <path d="M82 22 C82 20 84 18 86 20 C88 18 90 20 90 22 C90 25 86 28 86 28 C86 28 82 25 82 22Z" fill="hsl(30 93% 80%)" />
    <path d="M20 30 C20 28.5 21.5 27 23 28.5 C24.5 27 26 28.5 26 30 C26 32 23 34 23 34 C23 34 20 32 20 30Z" fill="hsl(193 38% 80%)" opacity="0.7" />
  </svg>
);

/** Bear juggling clothes — "Refresh Your Wardrobe" */
export const BearSwapping = ({ className = "", size = 100 }: AnimalProps) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
    {/* Circular arrows around bear */}
    <path d="M20 45 A38 38 0 0 1 60 12" stroke="hsl(193 38% 75%)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <polygon points="60,8 60,16 66,12" fill="hsl(193 38% 75%)" />
    <path d="M100 65 A38 38 0 0 1 60 98" stroke="hsl(30 93% 75%)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <polygon points="60,94 60,102 54,98" fill="hsl(30 93% 75%)" />
    {/* Floating clothes items */}
    <path d="M18 28 L22 24 L26 28 L24 38 L20 38 Z" fill="hsl(193 38% 80%)" stroke="hsl(270 6% 55%)" strokeWidth="1" />
    <path d="M94 78 L98 74 L102 78 L100 88 L96 88 Z" fill="hsl(30 93% 80%)" stroke="hsl(270 6% 55%)" strokeWidth="1" />
    {/* Bear ears */}
    <circle cx="38" cy="34" r="10" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <circle cx="82" cy="34" r="10" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <circle cx="38" cy="34" r="5" fill="hsl(30 93% 85%)" />
    <circle cx="82" cy="34" r="5" fill="hsl(30 93% 85%)" />
    {/* Bear head */}
    <circle cx="60" cy="52" r="24" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    {/* Muzzle */}
    <ellipse cx="60" cy="58" rx="12" ry="9" fill="hsl(40 80% 92%)" />
    {/* Happy eyes — closed/smiling */}
    <path d="M49 48 Q52 44 55 48" stroke="hsl(270 6% 35%)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M65 48 Q68 44 71 48" stroke="hsl(270 6% 35%)" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Nose */}
    <ellipse cx="60" cy="55" rx="3.5" ry="2.5" fill="hsl(270 6% 35%)" />
    {/* Big smile */}
    <path d="M53 60 Q60 67 67 60" stroke="hsl(270 6% 35%)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* Cheeks */}
    <circle cx="44" cy="56" r="3.5" fill="hsl(30 93% 85%)" opacity="0.5" />
    <circle cx="76" cy="56" r="3.5" fill="hsl(30 93% 85%)" opacity="0.5" />
    {/* Body */}
    <ellipse cx="60" cy="85" rx="18" ry="14" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <ellipse cx="60" cy="88" rx="10" ry="8" fill="hsl(40 80% 92%)" />
    {/* Paws reaching out */}
    <ellipse cx="36" cy="78" rx="6" ry="5" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="1.2" transform="rotate(20 36 78)" />
    <ellipse cx="84" cy="78" rx="6" ry="5" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="1.2" transform="rotate(-20 84 78)" />
  </svg>
);

/** Deer with a shipping box — "Send In Hand-Me-Downs" */
export const DeerWithBox = ({ className = "", size = 100 }: AnimalProps) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
    {/* Box being carried */}
    <rect x="62" y="58" width="32" height="24" rx="3" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <line x1="78" y1="58" x2="78" y2="82" stroke="hsl(270 6% 55%)" strokeWidth="1" strokeDasharray="3 2" />
    <line x1="64" y1="70" x2="92" y2="70" stroke="hsl(270 6% 55%)" strokeWidth="1" strokeDasharray="3 2" />
    {/* Little clothes peeking out */}
    <path d="M70 56 Q72 50 74 56" fill="hsl(193 38% 80%)" stroke="hsl(270 6% 55%)" strokeWidth="0.8" />
    <path d="M82 56 Q84 51 86 56" fill="hsl(30 93% 80%)" stroke="hsl(270 6% 55%)" strokeWidth="0.8" />
    {/* Antlers */}
    <path d="M28 28 L24 12 L20 18" stroke="hsl(30 93% 65%)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M28 28 L26 15 L32 10" stroke="hsl(30 93% 65%)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M52 28 L56 12 L60 18" stroke="hsl(30 93% 65%)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M52 28 L54 15 L48 10" stroke="hsl(30 93% 65%)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* Ears */}
    <ellipse cx="22" cy="36" rx="5" ry="8" fill="hsl(40 80% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" transform="rotate(-15 22 36)" />
    <ellipse cx="58" cy="36" rx="5" ry="8" fill="hsl(40 80% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" transform="rotate(15 58 36)" />
    {/* Head */}
    <ellipse cx="40" cy="50" rx="20" ry="22" fill="hsl(40 80% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <ellipse cx="40" cy="56" rx="11" ry="12" fill="hsl(40 80% 92%)" />
    {/* Eyes */}
    <circle cx="33" cy="46" r="2.5" fill="hsl(270 6% 35%)" />
    <circle cx="47" cy="46" r="2.5" fill="hsl(270 6% 35%)" />
    <circle cx="34" cy="45" r="0.8" fill="white" />
    <circle cx="48" cy="45" r="0.8" fill="white" />
    {/* Nose */}
    <ellipse cx="40" cy="56" rx="3.5" ry="2.5" fill="hsl(270 6% 45%)" />
    <path d="M37 60 Q40 63 43 60" stroke="hsl(270 6% 35%)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    {/* Body */}
    <ellipse cx="42" cy="80" rx="14" ry="12" fill="hsl(40 80% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    {/* Paw holding box */}
    <ellipse cx="58" cy="66" rx="5" ry="3.5" fill="hsl(40 80% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1.2" transform="rotate(-10 58 66)" />
  </svg>
);

/** Owl with magnifying glass — "We Grade for Quality" */
export const OwlInspecting = ({ className = "", size = 100 }: AnimalProps) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
    {/* Magnifying glass */}
    <circle cx="88" cy="48" r="14" fill="none" stroke="hsl(270 6% 45%)" strokeWidth="2.5" />
    <circle cx="88" cy="48" r="11" fill="hsl(193 38% 92%)" opacity="0.4" />
    <line x1="79" y1="58" x2="70" y2="70" stroke="hsl(270 6% 45%)" strokeWidth="3" strokeLinecap="round" />
    {/* A tiny shirt inside magnifying glass */}
    <path d="M84 44 L86 42 L88 43 L90 42 L92 44 L90 46 L90 52 L86 52 L86 46 Z" fill="hsl(30 93% 80%)" stroke="hsl(270 6% 55%)" strokeWidth="0.8" />
    {/* Ear tufts */}
    <polygon points="28,18 24,34 36,32" fill="hsl(40 80% 76%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <polygon points="58,18 62,34 50,32" fill="hsl(40 80% 76%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    {/* Head */}
    <circle cx="43" cy="44" r="20" fill="hsl(40 80% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    {/* Eye circles */}
    <circle cx="35" cy="42" r="8" fill="hsl(40 80% 92%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <circle cx="51" cy="42" r="8" fill="hsl(40 80% 92%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    {/* Focused eyes — one squinting */}
    <circle cx="35" cy="42" r="4" fill="hsl(270 6% 35%)" />
    <circle cx="51" cy="42" r="4" fill="hsl(270 6% 35%)" />
    <circle cx="37" cy="40" r="1.5" fill="white" />
    <circle cx="53" cy="40" r="1.5" fill="white" />
    {/* Beak */}
    <polygon points="43,48 40,52 46,52" fill="hsl(30 93% 75%)" />
    {/* Body */}
    <ellipse cx="43" cy="72" rx="18" ry="16" fill="hsl(40 80% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <ellipse cx="43" cy="76" rx="10" ry="10" fill="hsl(40 80% 92%)" />
    {/* Wings */}
    <ellipse cx="26" cy="68" rx="6" ry="12" fill="hsl(40 80% 76%)" stroke="hsl(270 6% 35%)" strokeWidth="1.2" transform="rotate(8 26 68)" />
    {/* Paw holding magnifying glass handle */}
    <ellipse cx="62" cy="68" rx="5" ry="4" fill="hsl(40 80% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1.2" transform="rotate(-15 62 68)" />
    {/* Feet */}
    <path d="M36 88 L34 92 M38 88 L38 92 M40 88 L42 92" stroke="hsl(30 93% 75%)" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M46 88 L44 92 M48 88 L48 92 M50 88 L52 92" stroke="hsl(30 93% 75%)" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

/** Cat with a credit card / coin — "Receive Credit" */
export const CatWithCredit = ({ className = "", size = 100 }: AnimalProps) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
    {/* Coins */}
    <circle cx="88" cy="40" r="12" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 45%)" strokeWidth="1.5" />
    <text x="88" y="44" textAnchor="middle" fontSize="12" fill="hsl(270 6% 35%)" fontWeight="bold">$</text>
    <circle cx="96" cy="52" r="8" fill="hsl(40 80% 82%)" stroke="hsl(270 6% 45%)" strokeWidth="1.2" />
    <text x="96" y="56" textAnchor="middle" fontSize="9" fill="hsl(270 6% 35%)" fontWeight="bold">$</text>
    {/* Sparkles */}
    <path d="M78 28 L79 25 L80 28 L83 29 L80 30 L79 33 L78 30 L75 29 Z" fill="hsl(30 93% 75%)" />
    <path d="M100 34 L100.5 32 L101 34 L103 34.5 L101 35 L100.5 37 L100 35 L98 34.5 Z" fill="hsl(30 93% 80%)" />
    {/* Cat ears */}
    <polygon points="22,14 18,42 36,38" fill="hsl(193 38% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <polygon points="62,14 66,42 48,38" fill="hsl(193 38% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <polygon points="24,20 21,38 33,36" fill="hsl(193 38% 90%)" />
    <polygon points="60,20 63,38 51,36" fill="hsl(193 38% 90%)" />
    {/* Head */}
    <circle cx="42" cy="50" r="22" fill="hsl(193 38% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <ellipse cx="42" cy="56" rx="9" ry="7" fill="hsl(193 38% 92%)" />
    {/* Happy eyes */}
    <path d="M32 46 Q35 42 38 46" stroke="hsl(270 6% 35%)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M46 46 Q49 42 52 46" stroke="hsl(270 6% 35%)" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Nose */}
    <polygon points="42,52 39,55 45,55" fill="hsl(30 93% 75%)" />
    <path d="M39 57 Q42 61 45 57" stroke="hsl(270 6% 35%)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    {/* Whiskers */}
    <line x1="20" y1="50" x2="30" y2="52" stroke="hsl(270 6% 55%)" strokeWidth="1" />
    <line x1="20" y1="56" x2="30" y2="55" stroke="hsl(270 6% 55%)" strokeWidth="1" />
    <line x1="64" y1="50" x2="54" y2="52" stroke="hsl(270 6% 55%)" strokeWidth="1" />
    <line x1="64" y1="56" x2="54" y2="55" stroke="hsl(270 6% 55%)" strokeWidth="1" />
    {/* Body */}
    <ellipse cx="44" cy="80" rx="16" ry="14" fill="hsl(193 38% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    {/* Paw reaching for coins */}
    <ellipse cx="62" cy="60" rx="5" ry="3.5" fill="hsl(193 38% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1.2" transform="rotate(-30 62 60)" />
    {/* Cheeks */}
    <circle cx="30" cy="54" r="3" fill="hsl(30 93% 85%)" opacity="0.5" />
    <circle cx="54" cy="54" r="3" fill="hsl(30 93% 85%)" opacity="0.5" />
  </svg>
);

/** Giraffe with recycling leaves/nature — "Items Are Re-Circulated" */
export const GiraffeRecycling = ({ className = "", size = 100 }: AnimalProps) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
    {/* Recycling circle of leaves */}
    <path d="M80 30 Q90 25 95 35 Q92 30 85 32" fill="hsl(140 40% 65%)" stroke="hsl(140 30% 45%)" strokeWidth="1" />
    <path d="M95 40 Q100 50 92 55 Q97 48 93 42" fill="hsl(140 40% 65%)" stroke="hsl(140 30% 45%)" strokeWidth="1" />
    <path d="M88 58 Q80 62 78 52 Q82 58 86 55" fill="hsl(140 40% 65%)" stroke="hsl(140 30% 45%)" strokeWidth="1" />
    {/* Small recycling arrows */}
    <path d="M86 28 A10 10 0 0 1 96 40" stroke="hsl(140 35% 55%)" strokeWidth="1.5" fill="none" />
    <polygon points="96,38 96,43 92,40" fill="hsl(140 35% 55%)" />
    <path d="M96 46 A10 10 0 0 1 84 54" stroke="hsl(140 35% 55%)" strokeWidth="1.5" fill="none" />
    <polygon points="84,52 84,57 88,54" fill="hsl(140 35% 55%)" />
    <path d="M82 50 A10 10 0 0 1 84 34" stroke="hsl(140 35% 55%)" strokeWidth="1.5" fill="none" />
    <polygon points="84,36 84,31 80,34" fill="hsl(140 35% 55%)" />
    {/* Giraffe horns */}
    <line x1="32" y1="16" x2="32" y2="6" stroke="hsl(270 6% 35%)" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="50" y1="16" x2="50" y2="6" stroke="hsl(270 6% 35%)" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="32" cy="5" r="2.5" fill="hsl(30 93% 75%)" />
    <circle cx="50" cy="5" r="2.5" fill="hsl(30 93% 75%)" />
    {/* Ears */}
    <ellipse cx="22" cy="24" rx="5" ry="7" fill="hsl(40 80% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" transform="rotate(-15 22 24)" />
    <ellipse cx="60" cy="24" rx="5" ry="7" fill="hsl(40 80% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" transform="rotate(15 60 24)" />
    {/* Head */}
    <ellipse cx="41" cy="34" rx="18" ry="20" fill="hsl(40 80% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    {/* Spots */}
    <circle cx="34" cy="26" r="2.5" fill="hsl(30 93% 70%)" opacity="0.5" />
    <circle cx="48" cy="28" r="2" fill="hsl(30 93% 70%)" opacity="0.5" />
    {/* Muzzle */}
    <ellipse cx="41" cy="42" rx="10" ry="7" fill="hsl(40 80% 90%)" />
    {/* Eyes */}
    <circle cx="34" cy="33" r="2.5" fill="hsl(270 6% 35%)" />
    <circle cx="48" cy="33" r="2.5" fill="hsl(270 6% 35%)" />
    <circle cx="35" cy="32" r="0.8" fill="white" />
    <circle cx="49" cy="32" r="0.8" fill="white" />
    {/* Nose */}
    <circle cx="38" cy="41" r="1.2" fill="hsl(270 6% 55%)" />
    <circle cx="44" cy="41" r="1.2" fill="hsl(270 6% 55%)" />
    <path d="M38 45 Q41 48 44 45" stroke="hsl(270 6% 35%)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    {/* Neck */}
    <rect x="34" y="52" width="14" height="30" rx="7" fill="hsl(40 80% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    {/* Neck spots */}
    <circle cx="39" cy="62" r="2" fill="hsl(30 93% 70%)" opacity="0.5" />
    <circle cx="44" cy="72" r="1.8" fill="hsl(30 93% 70%)" opacity="0.5" />
    {/* Holding a leaf */}
    <ellipse cx="56" cy="60" rx="4" ry="3" fill="hsl(40 80% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1" transform="rotate(-15 56 60)" />
    <path d="M60 58 Q66 52 70 56 Q66 54 62 58" fill="hsl(140 40% 65%)" stroke="hsl(140 30% 45%)" strokeWidth="0.8" />
  </svg>
);

// ---- Simple standalone animals for Trust & Care and decorative use ----

export const BunnyIcon = ({ className = "", size = 64 }: AnimalProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
    <ellipse cx="38" cy="25" rx="8" ry="20" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <ellipse cx="62" cy="25" rx="8" ry="20" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <ellipse cx="38" cy="25" rx="4" ry="14" fill="hsl(30 93% 85%)" />
    <ellipse cx="62" cy="25" rx="4" ry="14" fill="hsl(30 93% 85%)" />
    <circle cx="50" cy="55" r="25" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <circle cx="42" cy="50" r="3" fill="hsl(270 6% 35%)" />
    <circle cx="58" cy="50" r="3" fill="hsl(270 6% 35%)" />
    <circle cx="43" cy="49" r="1" fill="white" />
    <circle cx="59" cy="49" r="1" fill="white" />
    <ellipse cx="50" cy="57" rx="3" ry="2" fill="hsl(30 93% 75%)" />
    <path d="M47 60 Q50 64 53 60" stroke="hsl(270 6% 35%)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <circle cx="36" cy="57" r="4" fill="hsl(30 93% 85%)" opacity="0.5" />
    <circle cx="64" cy="57" r="4" fill="hsl(30 93% 85%)" opacity="0.5" />
  </svg>
);

export const FoxIcon = ({ className = "", size = 64 }: AnimalProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
    <polygon points="28,15 22,45 38,40" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <polygon points="72,15 78,45 62,40" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <polygon points="28,22 25,40 35,38" fill="hsl(40 80% 92%)" />
    <polygon points="72,22 75,40 65,38" fill="hsl(40 80% 92%)" />
    <ellipse cx="50" cy="58" rx="26" ry="24" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <ellipse cx="50" cy="65" rx="16" ry="15" fill="hsl(40 80% 96%)" />
    <ellipse cx="40" cy="52" rx="3" ry="3.5" fill="hsl(270 6% 35%)" />
    <ellipse cx="60" cy="52" rx="3" ry="3.5" fill="hsl(270 6% 35%)" />
    <circle cx="41" cy="51" r="1" fill="white" />
    <circle cx="61" cy="51" r="1" fill="white" />
    <ellipse cx="50" cy="61" rx="3.5" ry="2.5" fill="hsl(270 6% 35%)" />
    <path d="M47 64 Q50 68 53 64" stroke="hsl(270 6% 35%)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
);

export const BearIcon = ({ className = "", size = 64 }: AnimalProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
    <circle cx="30" cy="30" r="12" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <circle cx="70" cy="30" r="12" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <circle cx="30" cy="30" r="6" fill="hsl(30 93% 85%)" />
    <circle cx="70" cy="30" r="6" fill="hsl(30 93% 85%)" />
    <circle cx="50" cy="55" r="28" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <ellipse cx="50" cy="62" rx="14" ry="10" fill="hsl(40 80% 92%)" />
    <circle cx="40" cy="50" r="3.5" fill="hsl(270 6% 35%)" />
    <circle cx="60" cy="50" r="3.5" fill="hsl(270 6% 35%)" />
    <circle cx="41" cy="49" r="1.2" fill="white" />
    <circle cx="61" cy="49" r="1.2" fill="white" />
    <ellipse cx="50" cy="58" rx="4" ry="3" fill="hsl(270 6% 35%)" />
    <path d="M46 62 Q50 67 54 62" stroke="hsl(270 6% 35%)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <circle cx="34" cy="58" r="4" fill="hsl(30 93% 85%)" opacity="0.5" />
    <circle cx="66" cy="58" r="4" fill="hsl(30 93% 85%)" opacity="0.5" />
  </svg>
);

export const DuckIcon = ({ className = "", size = 64 }: AnimalProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
    <ellipse cx="50" cy="68" rx="28" ry="20" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <circle cx="35" cy="38" r="18" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <circle cx="30" cy="34" r="3" fill="hsl(270 6% 35%)" />
    <circle cx="31" cy="33" r="1" fill="white" />
    <ellipse cx="18" cy="40" rx="10" ry="4" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <circle cx="35" cy="42" r="3.5" fill="hsl(30 93% 85%)" opacity="0.5" />
  </svg>
);

// ---- Trade-In Page Animals ----

/** Bunny tidying up a drawer — "Reduce Clutter" */
export const BunnyTidying = ({ className = "", size = 100 }: AnimalProps) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
    {/* Open drawer */}
    <rect x="58" y="52" width="40" height="28" rx="3" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <rect x="62" y="56" width="32" height="20" rx="2" fill="hsl(40 80% 92%)" />
    <circle cx="78" cy="50" r="2" fill="hsl(270 6% 55%)" />
    {/* Clothes flying out */}
    <path d="M70 48 Q72 40 76 44" fill="hsl(193 38% 80%)" stroke="hsl(270 6% 55%)" strokeWidth="0.8" />
    <path d="M82 46 Q86 38 88 43" fill="hsl(30 93% 80%)" stroke="hsl(270 6% 55%)" strokeWidth="0.8" />
    {/* Sparkles — clean! */}
    <path d="M95 38 L96 35 L97 38 L100 39 L97 40 L96 43 L95 40 L92 39 Z" fill="hsl(30 93% 75%)" />
    <path d="M64 36 L65 34 L66 36 L68 37 L66 38 L65 40 L64 38 L62 37 Z" fill="hsl(193 38% 75%)" />
    {/* Bunny ears */}
    <ellipse cx="30" cy="22" rx="7" ry="18" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <ellipse cx="48" cy="22" rx="7" ry="18" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <ellipse cx="30" cy="22" rx="3.5" ry="12" fill="hsl(30 93% 85%)" />
    <ellipse cx="48" cy="22" rx="3.5" ry="12" fill="hsl(30 93% 85%)" />
    {/* Bunny head */}
    <circle cx="39" cy="50" r="20" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    {/* Happy eyes */}
    <path d="M31 46 Q34 42 37 46" stroke="hsl(270 6% 35%)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M41 46 Q44 42 47 46" stroke="hsl(270 6% 35%)" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Nose */}
    <ellipse cx="39" cy="52" rx="2.5" ry="1.8" fill="hsl(30 93% 75%)" />
    <path d="M36 55 Q39 58 42 55" stroke="hsl(270 6% 35%)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    {/* Body */}
    <ellipse cx="42" cy="76" rx="14" ry="12" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    {/* Paw reaching */}
    <ellipse cx="56" cy="64" rx="5" ry="3.5" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="1.2" transform="rotate(-20 56 64)" />
    {/* Cheeks */}
    <circle cx="28" cy="52" r="3" fill="hsl(30 93% 85%)" opacity="0.4" />
    <circle cx="50" cy="52" r="3" fill="hsl(30 93% 85%)" opacity="0.4" />
  </svg>
);

/** Fox with a wallet/coin purse — "Unlock Value" */
export const FoxWithWallet = ({ className = "", size = 100 }: AnimalProps) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
    {/* Wallet */}
    <rect x="70" y="50" width="30" height="22" rx="4" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <rect x="70" y="50" width="30" height="8" rx="4" fill="hsl(30 93% 70%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <circle cx="92" cy="58" r="3" fill="hsl(30 93% 85%)" stroke="hsl(270 6% 45%)" strokeWidth="1" />
    {/* Coins popping out */}
    <circle cx="80" cy="42" r="6" fill="hsl(40 80% 78%)" stroke="hsl(270 6% 45%)" strokeWidth="1.2" />
    <text x="80" y="45" textAnchor="middle" fontSize="7" fill="hsl(270 6% 35%)" fontWeight="bold">$</text>
    <circle cx="92" cy="38" r="5" fill="hsl(40 80% 82%)" stroke="hsl(270 6% 45%)" strokeWidth="1" />
    <text x="92" y="41" textAnchor="middle" fontSize="6" fill="hsl(270 6% 35%)" fontWeight="bold">$</text>
    {/* Sparkles */}
    <path d="M76 32 L77 29 L78 32 L81 33 L78 34 L77 37 L76 34 L73 33 Z" fill="hsl(30 93% 75%)" />
    {/* Fox ears */}
    <polygon points="20,16 15,40 30,36" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <polygon points="48,16 53,40 38,36" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <polygon points="21,22 18,36 28,34" fill="hsl(40 80% 92%)" />
    <polygon points="47,22 50,36 40,34" fill="hsl(40 80% 92%)" />
    {/* Fox head */}
    <ellipse cx="34" cy="50" rx="20" ry="18" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <ellipse cx="34" cy="56" rx="12" ry="11" fill="hsl(40 80% 96%)" />
    {/* Eyes */}
    <circle cx="28" cy="46" r="2.5" fill="hsl(270 6% 35%)" />
    <circle cx="40" cy="46" r="2.5" fill="hsl(270 6% 35%)" />
    <circle cx="29" cy="45" r="0.8" fill="white" />
    <circle cx="41" cy="45" r="0.8" fill="white" />
    {/* Nose */}
    <ellipse cx="34" cy="54" rx="3" ry="2" fill="hsl(270 6% 35%)" />
    <path d="M31 57 Q34 60 37 57" stroke="hsl(270 6% 35%)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    {/* Body */}
    <ellipse cx="36" cy="76" rx="14" ry="12" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <ellipse cx="36" cy="80" rx="8" ry="6" fill="hsl(40 80% 96%)" />
    {/* Paw reaching */}
    <ellipse cx="54" cy="60" rx="5" ry="3.5" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="1.2" transform="rotate(-25 54 60)" />
  </svg>
);

/** Deer hugging a globe with leaves — "Close the Loop" */
export const DeerWithGlobe = ({ className = "", size = 100 }: AnimalProps) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
    {/* Globe */}
    <circle cx="82" cy="55" r="18" fill="hsl(193 38% 85%)" stroke="hsl(270 6% 45%)" strokeWidth="1.5" />
    <ellipse cx="82" cy="55" rx="8" ry="18" fill="none" stroke="hsl(193 38% 70%)" strokeWidth="1" />
    <line x1="64" y1="55" x2="100" y2="55" stroke="hsl(193 38% 70%)" strokeWidth="1" />
    {/* Leaves on globe */}
    <path d="M92 42 Q98 38 96 45 Q96 40 92 42" fill="hsl(140 40% 65%)" />
    <path d="M70 64 Q64 68 68 62 Q66 66 70 64" fill="hsl(140 40% 65%)" />
    {/* Recycling arrows around globe */}
    <path d="M72 38 A20 20 0 0 1 94 42" stroke="hsl(140 35% 55%)" strokeWidth="1.5" fill="none" />
    <polygon points="94,40 94,45 90,42" fill="hsl(140 35% 55%)" />
    <path d="M96 66 A20 20 0 0 1 74 68" stroke="hsl(140 35% 55%)" strokeWidth="1.5" fill="none" />
    <polygon points="74,66 74,71 78,68" fill="hsl(140 35% 55%)" />
    {/* Antlers */}
    <path d="M22 26 L18 10 L14 16" stroke="hsl(30 93% 65%)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M22 26 L20 13 L26 8" stroke="hsl(30 93% 65%)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M44 26 L48 10 L52 16" stroke="hsl(30 93% 65%)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M44 26 L46 13 L40 8" stroke="hsl(30 93% 65%)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* Ears */}
    <ellipse cx="16" cy="34" rx="5" ry="8" fill="hsl(40 80% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" transform="rotate(-15 16 34)" />
    <ellipse cx="50" cy="34" rx="5" ry="8" fill="hsl(40 80% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" transform="rotate(15 50 34)" />
    {/* Head */}
    <ellipse cx="33" cy="48" rx="18" ry="20" fill="hsl(40 80% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <ellipse cx="33" cy="54" rx="10" ry="11" fill="hsl(40 80% 92%)" />
    {/* Eyes */}
    <circle cx="27" cy="44" r="2.5" fill="hsl(270 6% 35%)" />
    <circle cx="39" cy="44" r="2.5" fill="hsl(270 6% 35%)" />
    <circle cx="28" cy="43" r="0.8" fill="white" />
    <circle cx="40" cy="43" r="0.8" fill="white" />
    {/* Nose */}
    <ellipse cx="33" cy="54" rx="3" ry="2.2" fill="hsl(270 6% 45%)" />
    <path d="M30 57 Q33 60 36 57" stroke="hsl(270 6% 35%)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    {/* Body */}
    <ellipse cx="38" cy="78" rx="14" ry="12" fill="hsl(40 80% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    {/* Paw hugging globe */}
    <ellipse cx="56" cy="58" rx="5" ry="3.5" fill="hsl(40 80% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1.2" transform="rotate(-15 56 58)" />
  </svg>
);

/** Bear with checkmark badge — "Accepted items" */
export const BearWithCheck = ({ className = "", size = 100 }: AnimalProps) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
    {/* Checkmark badge */}
    <circle cx="88" cy="35" r="16" fill="hsl(140 40% 65%)" stroke="hsl(140 30% 45%)" strokeWidth="2" />
    <path d="M80 35 L86 41 L96 29" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    {/* Bear ears */}
    <circle cx="30" cy="32" r="10" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <circle cx="66" cy="32" r="10" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <circle cx="30" cy="32" r="5" fill="hsl(30 93% 85%)" />
    <circle cx="66" cy="32" r="5" fill="hsl(30 93% 85%)" />
    {/* Bear head */}
    <circle cx="48" cy="52" r="24" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <ellipse cx="48" cy="58" rx="12" ry="9" fill="hsl(40 80% 92%)" />
    {/* Eyes */}
    <circle cx="40" cy="48" r="3" fill="hsl(270 6% 35%)" />
    <circle cx="56" cy="48" r="3" fill="hsl(270 6% 35%)" />
    <circle cx="41" cy="47" r="1" fill="white" />
    <circle cx="57" cy="47" r="1" fill="white" />
    {/* Nose */}
    <ellipse cx="48" cy="55" rx="3.5" ry="2.5" fill="hsl(270 6% 35%)" />
    <path d="M44 59 Q48 64 52 59" stroke="hsl(270 6% 35%)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* Cheeks */}
    <circle cx="34" cy="56" r="3.5" fill="hsl(30 93% 85%)" opacity="0.5" />
    <circle cx="62" cy="56" r="3.5" fill="hsl(30 93% 85%)" opacity="0.5" />
    {/* Body */}
    <ellipse cx="48" cy="84" rx="16" ry="14" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <ellipse cx="48" cy="88" rx="9" ry="7" fill="hsl(40 80% 92%)" />
    {/* Thumbs up paw */}
    <ellipse cx="68" cy="70" rx="5" ry="4" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="1.2" />
  </svg>
);

/** Duck giving a package — "Re-Circulated" */
export const DuckGiving = ({ className = "", size = 100 }: AnimalProps) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
    {/* Package with bow */}
    <rect x="68" y="50" width="30" height="24" rx="3" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <line x1="83" y1="50" x2="83" y2="74" stroke="hsl(30 93% 75%)" strokeWidth="2" />
    <line x1="68" y1="62" x2="98" y2="62" stroke="hsl(30 93% 75%)" strokeWidth="2" />
    {/* Bow */}
    <path d="M83 50 Q78 42 75 48 Q78 50 83 50" fill="hsl(30 93% 80%)" stroke="hsl(270 6% 55%)" strokeWidth="0.8" />
    <path d="M83 50 Q88 42 91 48 Q88 50 83 50" fill="hsl(30 93% 80%)" stroke="hsl(270 6% 55%)" strokeWidth="0.8" />
    {/* Hearts */}
    <path d="M72 36 C72 34 74 32 76 34 C78 32 80 34 80 36 C80 39 76 42 76 42 C76 42 72 39 72 36Z" fill="hsl(30 93% 80%)" />
    <path d="M90 38 C90 37 91.2 36 92.4 37 C93.6 36 94.8 37 94.8 38 C94.8 39.5 92.4 41 92.4 41 C92.4 41 90 39.5 90 38Z" fill="hsl(193 38% 80%)" opacity="0.7" />
    {/* Duck body */}
    <ellipse cx="40" cy="72" rx="22" ry="16" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <ellipse cx="48" cy="70" rx="10" ry="8" fill="hsl(40 80% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1" transform="rotate(-15 48 70)" />
    {/* Head */}
    <circle cx="32" cy="42" r="16" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    <ellipse cx="35" cy="56" rx="8" ry="6" fill="hsl(40 80% 86%)" />
    {/* Eye */}
    <circle cx="27" cy="38" r="2.5" fill="hsl(270 6% 35%)" />
    <circle cx="28" cy="37" r="0.8" fill="white" />
    {/* Beak */}
    <ellipse cx="16" cy="44" rx="9" ry="3.5" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    {/* Cheek */}
    <circle cx="32" cy="46" r="3" fill="hsl(30 93% 85%)" opacity="0.5" />
    {/* Tuft */}
    <path d="M36 28 Q40 22 34 25" stroke="hsl(270 6% 35%)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* Wing holding gift */}
    <ellipse cx="58" cy="60" rx="6" ry="4" fill="hsl(40 80% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1.2" transform="rotate(-25 58 60)" />
  </svg>
);

/** Owl donating to box — "Donated or Recycled" */
export const OwlDonating = ({ className = "", size = 100 }: AnimalProps) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
    {/* Donation box */}
    <rect x="68" y="60" width="32" height="26" rx="3" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <rect x="72" y="56" width="24" height="6" rx="2" fill="hsl(40 80% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1" />
    {/* Heart on box */}
    <path d="M82 68 C82 66 84 64 86 66 C88 64 90 66 90 68 C90 71 86 74 86 74 C86 74 82 71 82 68Z" fill="hsl(30 93% 80%)" />
    {/* Clothes going in */}
    <path d="M78 54 L80 50 L82 51 L84 50 L86 54 L84 55 L84 60 L80 60 L80 55 Z" fill="hsl(193 38% 80%)" stroke="hsl(270 6% 55%)" strokeWidth="0.8" />
    {/* Ear tufts */}
    <polygon points="22,16 18,30 30,28" fill="hsl(40 80% 76%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <polygon points="50,16 54,30 42,28" fill="hsl(40 80% 76%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    {/* Head */}
    <circle cx="36" cy="40" r="18" fill="hsl(40 80% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    {/* Eye circles */}
    <circle cx="28" cy="38" r="7" fill="hsl(40 80% 92%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <circle cx="44" cy="38" r="7" fill="hsl(40 80% 92%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    {/* Pupils */}
    <circle cx="28" cy="38" r="3.5" fill="hsl(270 6% 35%)" />
    <circle cx="44" cy="38" r="3.5" fill="hsl(270 6% 35%)" />
    <circle cx="29.5" cy="37" r="1.2" fill="white" />
    <circle cx="45.5" cy="37" r="1.2" fill="white" />
    {/* Beak */}
    <polygon points="36,44 33,48 39,48" fill="hsl(30 93% 75%)" />
    {/* Body */}
    <ellipse cx="38" cy="66" rx="16" ry="14" fill="hsl(40 80% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <ellipse cx="38" cy="70" rx="9" ry="8" fill="hsl(40 80% 92%)" />
    {/* Wing reaching to box */}
    <ellipse cx="56" cy="62" rx="6" ry="4" fill="hsl(40 80% 76%)" stroke="hsl(270 6% 35%)" strokeWidth="1.2" transform="rotate(-20 56 62)" />
    {/* Feet */}
    <path d="M30 80 L28 84 M32 80 L32 84 M34 80 L36 84" stroke="hsl(30 93% 75%)" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M40 80 L38 84 M42 80 L42 84 M44 80 L46 84" stroke="hsl(30 93% 75%)" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// ---- About Page Animals ----

/** Bunny with a heart — "Our Story" */
export const BunnyWithHeart = ({ className = "", size = 100 }: AnimalProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
    {/* Big heart */}
    <path d="M50 82 C50 82 20 60 20 40 C20 30 28 22 38 22 C44 22 48 26 50 30 C52 26 56 22 62 22 C72 22 80 30 80 40 C80 60 50 82 50 82Z" fill="hsl(30 93% 85%)" stroke="hsl(30 93% 70%)" strokeWidth="1.5" />
    {/* Bunny sitting inside heart */}
    {/* Ears */}
    <ellipse cx="42" cy="32" rx="5" ry="14" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <ellipse cx="58" cy="32" rx="5" ry="14" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <ellipse cx="42" cy="32" rx="2.5" ry="9" fill="hsl(30 93% 85%)" />
    <ellipse cx="58" cy="32" rx="2.5" ry="9" fill="hsl(30 93% 85%)" />
    {/* Head */}
    <circle cx="50" cy="52" r="16" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    {/* Eyes */}
    <circle cx="44" cy="49" r="2" fill="hsl(270 6% 35%)" />
    <circle cx="56" cy="49" r="2" fill="hsl(270 6% 35%)" />
    <circle cx="45" cy="48" r="0.7" fill="white" />
    <circle cx="57" cy="48" r="0.7" fill="white" />
    {/* Nose */}
    <ellipse cx="50" cy="54" rx="2" ry="1.5" fill="hsl(30 93% 75%)" />
    <path d="M47 56 Q50 59 53 56" stroke="hsl(270 6% 35%)" strokeWidth="1" fill="none" strokeLinecap="round" />
    {/* Cheeks */}
    <circle cx="39" cy="54" r="2.5" fill="hsl(30 93% 85%)" opacity="0.4" />
    <circle cx="61" cy="54" r="2.5" fill="hsl(30 93% 85%)" opacity="0.4" />
    {/* Body */}
    <ellipse cx="50" cy="72" rx="12" ry="9" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 35%)" strokeWidth="1.2" />
  </svg>
);

/** Owl with lightbulb — "What We Believe" */
export const OwlWithLightbulb = ({ className = "", size = 100 }: AnimalProps) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
    {/* Lightbulb */}
    <path d="M85 20 Q85 8 95 8 Q105 8 105 20 Q105 28 98 32 L98 40 L92 40 L92 32 Q85 28 85 20Z" fill="hsl(40 80% 86%)" stroke="hsl(270 6% 45%)" strokeWidth="1.5" />
    <line x1="92" y1="40" x2="98" y2="40" stroke="hsl(270 6% 45%)" strokeWidth="1.5" />
    <line x1="92" y1="43" x2="98" y2="43" stroke="hsl(270 6% 45%)" strokeWidth="1.5" />
    {/* Glow rays */}
    <line x1="95" y1="2" x2="95" y2="5" stroke="hsl(30 93% 75%)" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="108" y1="10" x2="106" y2="12" stroke="hsl(30 93% 75%)" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="82" y1="10" x2="84" y2="12" stroke="hsl(30 93% 75%)" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="110" y1="20" x2="108" y2="20" stroke="hsl(30 93% 75%)" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="80" y1="20" x2="82" y2="20" stroke="hsl(30 93% 75%)" strokeWidth="1.5" strokeLinecap="round" />
    {/* Ear tufts */}
    <polygon points="22,20 18,36 30,34" fill="hsl(40 80% 76%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <polygon points="56,20 60,36 48,34" fill="hsl(40 80% 76%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    {/* Head */}
    <circle cx="39" cy="46" r="20" fill="hsl(40 80% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="2" />
    {/* Eye circles */}
    <circle cx="31" cy="44" r="8" fill="hsl(40 80% 92%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <circle cx="47" cy="44" r="8" fill="hsl(40 80% 92%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    {/* Pupils */}
    <circle cx="31" cy="44" r="4" fill="hsl(270 6% 35%)" />
    <circle cx="47" cy="44" r="4" fill="hsl(270 6% 35%)" />
    <circle cx="33" cy="42" r="1.5" fill="white" />
    <circle cx="49" cy="42" r="1.5" fill="white" />
    {/* Beak */}
    <polygon points="39,50 36,54 42,54" fill="hsl(30 93% 75%)" />
    {/* Body */}
    <ellipse cx="39" cy="74" rx="18" ry="16" fill="hsl(40 80% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <ellipse cx="39" cy="78" rx="10" ry="10" fill="hsl(40 80% 92%)" />
    {/* Wings */}
    <ellipse cx="22" cy="70" rx="6" ry="12" fill="hsl(40 80% 76%)" stroke="hsl(270 6% 35%)" strokeWidth="1.2" transform="rotate(8 22 70)" />
    <ellipse cx="56" cy="70" rx="6" ry="12" fill="hsl(40 80% 76%)" stroke="hsl(270 6% 35%)" strokeWidth="1.2" transform="rotate(-8 56 70)" />
    {/* Feet */}
    <path d="M32 90 L30 94 M34 90 L34 94 M36 90 L38 94" stroke="hsl(30 93% 75%)" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M42 90 L40 94 M44 90 L44 94 M46 90 L48 94" stroke="hsl(30 93% 75%)" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

/** Cat and fox together — "How We're Building (community)" */
export const AnimalFamily = ({ className = "", size = 100 }: AnimalProps) => (
  <svg width={size} height={size} viewBox="0 0 120 100" fill="none" className={className}>
    {/* Fox (left) */}
    <polygon points="18,18 14,36 26,33" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <polygon points="40,18 44,36 32,33" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <polygon points="19,22 17,33 24,31" fill="hsl(40 80% 92%)" />
    <polygon points="39,22 41,33 34,31" fill="hsl(40 80% 92%)" />
    <ellipse cx="29" cy="44" rx="16" ry="15" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <ellipse cx="29" cy="49" rx="10" ry="9" fill="hsl(40 80% 96%)" />
    <circle cx="24" cy="41" r="2" fill="hsl(270 6% 35%)" />
    <circle cx="34" cy="41" r="2" fill="hsl(270 6% 35%)" />
    <circle cx="25" cy="40" r="0.7" fill="white" />
    <circle cx="35" cy="40" r="0.7" fill="white" />
    <ellipse cx="29" cy="47" rx="2.5" ry="1.8" fill="hsl(270 6% 35%)" />
    <path d="M26 50 Q29 53 32 50" stroke="hsl(270 6% 35%)" strokeWidth="1" fill="none" strokeLinecap="round" />
    <ellipse cx="30" cy="66" rx="12" ry="10" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="1.2" />

    {/* Cat (right) */}
    <polygon points="72,16 68,36 80,33" fill="hsl(193 38% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <polygon points="98,16 102,36 90,33" fill="hsl(193 38% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <polygon points="73,20 71,33 78,31" fill="hsl(193 38% 90%)" />
    <polygon points="97,20 99,33 92,31" fill="hsl(193 38% 90%)" />
    <circle cx="85" cy="44" r="16" fill="hsl(193 38% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1.5" />
    <ellipse cx="85" cy="49" rx="7" ry="5.5" fill="hsl(193 38% 92%)" />
    <circle cx="80" cy="41" r="2" fill="hsl(270 6% 35%)" />
    <circle cx="90" cy="41" r="2" fill="hsl(270 6% 35%)" />
    <circle cx="81" cy="40" r="0.7" fill="white" />
    <circle cx="91" cy="40" r="0.7" fill="white" />
    <polygon points="85,46 83,49 87,49" fill="hsl(30 93% 75%)" />
    <path d="M83 51 Q85 54 87 51" stroke="hsl(270 6% 35%)" strokeWidth="1" fill="none" strokeLinecap="round" />
    {/* Whiskers */}
    <line x1="68" y1="44" x2="76" y2="46" stroke="hsl(270 6% 55%)" strokeWidth="0.8" />
    <line x1="68" y1="48" x2="76" y2="47" stroke="hsl(270 6% 55%)" strokeWidth="0.8" />
    <line x1="102" y1="44" x2="94" y2="46" stroke="hsl(270 6% 55%)" strokeWidth="0.8" />
    <line x1="102" y1="48" x2="94" y2="47" stroke="hsl(270 6% 55%)" strokeWidth="0.8" />
    <ellipse cx="84" cy="66" rx="12" ry="10" fill="hsl(193 38% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1.2" />

    {/* Heart between them */}
    <path d="M57 38 C57 35 59 33 61 35 C63 33 65 35 65 38 C65 42 61 46 61 46 C61 46 57 42 57 38Z" fill="hsl(30 93% 80%)" />
    {/* Paws touching */}
    <ellipse cx="46" cy="62" rx="4" ry="3" fill="hsl(30 93% 75%)" stroke="hsl(270 6% 35%)" strokeWidth="1" transform="rotate(-15 46 62)" />
    <ellipse cx="70" cy="62" rx="4" ry="3" fill="hsl(193 38% 80%)" stroke="hsl(270 6% 35%)" strokeWidth="1" transform="rotate(15 70 62)" />
    {/* Cheeks */}
    <circle cx="20" cy="48" r="2.5" fill="hsl(30 93% 85%)" opacity="0.4" />
    <circle cx="38" cy="48" r="2.5" fill="hsl(30 93% 85%)" opacity="0.4" />
    <circle cx="76" cy="48" r="2.5" fill="hsl(30 93% 85%)" opacity="0.4" />
    <circle cx="94" cy="48" r="2.5" fill="hsl(30 93% 85%)" opacity="0.4" />
  </svg>
);
