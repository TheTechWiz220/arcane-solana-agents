import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6"
      >
        AI Agents as On-Chain Spells • Autonomous Solana Wizards
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-glow-cyan text-primary leading-tight mb-6"
      >
        Summon Your
        <br />
        <span className="text-accent text-glow-gold">Tech Wizard</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="font-body text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg mb-10 leading-relaxed"
      >
        Deploy intelligent AI agents that trade, farm yield, snipe launches, and evolve on Solana.
        All powered by <span className="text-accent font-semibold">TechAi</span> token.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <button className="group relative px-8 py-4 rounded-xl bg-primary/10 border border-primary/40 text-primary font-heading text-lg tracking-wide animate-pulse-glow hover:bg-primary/20 transition-all duration-300">
          <span className="relative z-10">⚡ Enter the Spellbook</span>
          <span className="block text-xs text-muted-foreground mt-1 font-body">Connect Brave Wallet & Begin</span>
        </button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-8 text-xs text-muted-foreground font-body tracking-wide"
      >
        Native .brave domain • Fully decentralized on IPFS • Powered by Solana
      </motion.p>
    </div>
  </section>
);

export default HeroSection;
