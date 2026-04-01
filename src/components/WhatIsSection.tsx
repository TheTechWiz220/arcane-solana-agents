import { motion } from "framer-motion";

const WhatIsSection = () => (
  <section className="relative py-24 px-4 parchment-overlay">
    <div className="section-divider mb-24" />
    <div className="container mx-auto max-w-3xl text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-primary/30 text-4xl font-display block mb-4">✦</span>
        <h2 className="font-display text-3xl md:text-4xl text-primary text-glow-cyan mb-6">
          What is Tech Wizardry?
        </h2>
        <p className="font-body text-muted-foreground text-lg leading-relaxed">
          Turn simple prompts into <span className="text-accent font-semibold">autonomous on-chain AI agents</span>.
          Farm DeFi yields, snipe memecoin launches, create powerful spells — all living and evolving
          on <span className="text-primary font-semibold">Solana</span>. No code required. Pure magic.
        </p>
      </motion.div>
    </div>
  </section>
);

export default WhatIsSection;
