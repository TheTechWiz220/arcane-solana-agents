import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "The Spellbook", "Summon Wizard", "The Forge", "Wizard Duels", "Academy", "Mana Vault", "Docs"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-rune">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="font-display text-lg text-primary text-glow-cyan tracking-wider">
          TechWiz
        </a>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-300 hover:text-glow-cyan"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="hidden lg:inline-flex px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm font-body hover:bg-primary/20 transition-all box-glow-cyan"
        >
          Connect Wallet
        </button>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden border-rune mx-4 mb-2 rounded-lg p-4"
          >
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm font-body text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <button className="w-full mt-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm font-body">
                  Connect Wallet
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
