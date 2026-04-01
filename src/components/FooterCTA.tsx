import { motion } from "framer-motion";

const FooterCTA = () => (
  <footer className="relative py-24 px-4 border-t border-border">
    <div className="container mx-auto max-w-3xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl text-primary text-glow-cyan mb-4"
      >
        Ready to Become an Archmage?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="font-body text-muted-foreground mb-8"
      >
        Connect your Brave Wallet and summon your first AI agent today.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="px-8 py-4 rounded-xl bg-primary/10 border border-primary/40 text-primary font-heading text-lg tracking-wide animate-pulse-glow hover:bg-primary/20 transition-all"
      >
        ⚡ Connect Brave Wallet
      </motion.button>

      <div className="flex items-center justify-center gap-6 mt-12 flex-wrap">
        {[
          { label: "Twitter/X", href: "#" },
          { label: "Discord", href: "#" },
          { label: "Token Contract", href: "#" },
          { label: "Docs", href: "#" },
        ].map((link) => (
          <a key={link.label} href={link.href} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
            {link.label}
          </a>
        ))}
      </div>

      <p className="mt-8 font-body text-xs text-muted-foreground">
        Built for the Brave — <span className="text-primary">thetechwiz.brave</span>
      </p>
    </div>
  </footer>
);

export default FooterCTA;
