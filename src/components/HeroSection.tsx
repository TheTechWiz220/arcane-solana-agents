import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const runeSymbols = ["ᚠ", "ᚢ", "ᚦ", "ᚨ", "ᚱ", "ᚲ", "ᚷ", "ᚹ", "ᚺ", "ᚾ", "ᛁ", "ᛃ"];

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-transparent to-secondary/20" />
    </div>

    {/* Floating Runes */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {runeSymbols.map((rune, i) => (
        <motion.span
          key={i}
          className="absolute text-primary/20 text-2xl font-display select-none"
          style={{
            left: `${8 + (i * 7.5) % 85}%`,
            top: `${10 + (i * 13) % 75}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        >
          {rune}
        </motion.span>
      ))}
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center">
      {/* Crystal Orb */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="mx-auto mb-8 relative w-36 h-36 sm:w-44 sm:h-44"
      >
        {/* Orbiting rune ring */}
        <div className="absolute inset-[-20px] animate-rune-spin">
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <span
              key={deg}
              className="absolute text-primary/40 text-xs font-display"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${deg}deg) translateY(-70px) rotate(-${deg}deg)`,
              }}
            >
              ᚱ
            </span>
          ))}
        </div>
        {/* Outer glow ring */}
        <div className="absolute inset-[-8px] rounded-full border border-primary/20" style={{ animation: 'orb-pulse 4s ease-in-out infinite' }} />
        {/* The orb */}
        <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 via-secondary/30 to-purple-glow/20 border border-primary/30 flex items-center justify-center backdrop-blur-sm"
          style={{ animation: 'orb-pulse 4s ease-in-out infinite' }}
        >
          {/* Solana logo placeholder */}
          <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20">
            <defs>
              <linearGradient id="sol-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(185 100% 50%)" />
                <stop offset="100%" stopColor="hsl(270 80% 60%)" />
              </linearGradient>
            </defs>
            <path d="M20 70 L70 70 L80 60 L30 60 Z" fill="url(#sol-grad)" opacity="0.9"/>
            <path d="M20 50 L70 50 L80 40 L30 40 Z" fill="url(#sol-grad)" opacity="0.7"/>
            <path d="M80 30 L30 30 L20 40 L70 40 Z" fill="url(#sol-grad)" opacity="0.5"/>
          </svg>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6"
      >
        AI Agents as On-Chain Spells • Autonomous Solana Wizards
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-glow-cyan text-primary leading-tight mb-6"
      >
        Summon Your
        <br />
        <span className="text-accent text-glow-gold">Tech Wizard</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="font-body text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg mb-10 leading-relaxed"
      >
        Deploy intelligent AI agents that trade, farm yield, snipe launches, and evolve on Solana.
        All powered by <span className="text-accent font-semibold">TechAi</span> token.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <button className="group ritual-button px-8 py-4 rounded-xl text-primary font-heading text-lg tracking-wide">
          <span className="relative z-10">⚡ Enter the Spellbook</span>
          <span className="block text-xs text-muted-foreground mt-1 font-body relative z-10">Connect Brave Wallet & Begin</span>
        </button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-8 text-xs text-muted-foreground font-body tracking-wide"
      >
        Native .brave domain • Fully decentralized on IPFS • Powered by Solana
      </motion.p>
    </div>
  </section>
);

export default HeroSection;
