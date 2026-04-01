import { motion } from "framer-motion";

const WhatIsSection = () => (
  <section className="relative py-24 px-4">
    <div className="container mx-auto max-w-3xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl text-primary text-glow-cyan mb-6"
      >
        What is Tech Wizardry?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="font-body text-muted-foreground text-lg leading-relaxed"
      >
        Turn simple prompts into <span className="text-accent font-semibold">autonomous on-chain AI agents</span>.
        Farm DeFi yields, snipe memecoin launches, create powerful spells — all living and evolving
        on <span className="text-primary font-semibold">Solana</span>. No code required. Pure magic.
      </motion.p>
    </div>
  </section>
);

export default WhatIsSection;
