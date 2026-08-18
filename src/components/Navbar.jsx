import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Συλλογές", href: "/#sylloges", id: "sylloges" },
  { label: "Η Φιλοσοφία μας", href: "/#filosofia", id: "filosofia" },
  { label: "Δημιουργίες", href: "/creations", id: null },
  { label: "Επικοινωνία", href: "/#epikoinonia", id: "epikoinonia" },
];

export default function Navbar({ forceSolid = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 48);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isSolid = forceSolid || isScrolled || isMenuOpen;

  const handleLinkClick = (e, link) => {
    setIsMenuOpen(false);

    // Αν είμαστε ήδη στην αρχική σελίδα και είναι anchor link
    if (link.id && (window.location.pathname === "/" || window.location.pathname === "")) {
      e.preventDefault();
      setTimeout(() => {
        const target = document.getElementById(link.id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `/#${link.id}`);
        }
      }, 100);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        isSolid
          ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(11,37,40,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a
          href="/"
          className={`font-display text-xl tracking-[0.28em] transition-colors duration-500 ${
            isSolid ? "text-botanical-petrol" : "text-white"
          }`}
        >
          ΙΩΑΝΝΗΣ
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`group relative font-body text-sm tracking-wide transition-colors duration-500 ${
                  isSolid ? "text-botanical-petrol" : "text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-rose-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="/#epikoinonia"
              onClick={(e) => handleLinkClick(e, { href: "/#epikoinonia", id: "epikoinonia" })}
              className={`rounded-full border px-5 py-2 text-sm tracking-wide transition-colors duration-500 ${
                isSolid
                  ? "border-botanical-petrol text-botanical-petrol hover:bg-botanical-petrol hover:text-white"
                  : "border-white/70 text-white hover:bg-white hover:text-botanical-petrol"
              }`}
            >
              Κλείστε Ραντεβού
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
          aria-expanded={isMenuOpen}
          className={`md:hidden ${isSolid ? "text-botanical-petrol" : "text-white"}`}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-white shadow-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-8 pt-2">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className="block border-b border-warm-sand/30 py-4 font-body text-base font-medium text-botanical-petrol transition-colors hover:text-rose-gold"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * NAV_LINKS.length, duration: 0.3 }}
                className="pt-4"
              >
                <a
                  href="/#epikoinonia"
                  onClick={(e) => handleLinkClick(e, { href: "/#epikoinonia", id: "epikoinonia" })}
                  className="block rounded-full bg-botanical-petrol px-5 py-3.5 text-center font-body text-sm font-medium tracking-wide text-white transition-opacity hover:opacity-90 active:scale-[0.99]"
                >
                  Κλείστε Ραντεβού
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}