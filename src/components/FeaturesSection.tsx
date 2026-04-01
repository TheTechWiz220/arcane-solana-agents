import { motion } from "framer-motion";
import { Wand2, BookOpen, Swords, Coins } from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "Summon AI Agents",
    desc: "Describe your wizard and cast the spell. Your AI agent deploys on-chain, ready to execute strategies autonomously.",
    glow: "text-glow-cyan",
    color: "text-primary",
    borderHover: "hover:border-primary/50",
    rune: "ᚠ",
  },
  {
    icon: BookOpen,
    title: "The Grimoire Forge",
    desc: "No-code Solana dApp builder. Craft custom spells, smart contracts, and DeFi strategies without writing a line.",
    glow: "text-glow-purple",
    color: "text-purple-glow",
    borderHover: "hover:border-purple-glow/50",
    rune: "ᚦ",
  },
  {
    icon: Swords,
    title: "Wizard Duels & Fusion",
    desc: "Battle your agents against others and merge them to create legendary wizards with enhanced powers.",
    glow: "text-glow-gold",
    color: "text-accent",
    borderHover: "hover:border-accent/50",
    rune: "ᚱ",
  },
  {
    icon: Coins,
    title: "TechAi Token",
    desc: "The mana powering all spells. Stake for rewards, govern the realm, and benefit from deflationary burns.",
    glow: "text-glow-cyan",
    color: "text-primary",
    borderHover: "hover:border-primary/50",
    rune: "ᚲ",
  },
];

const FeaturesSection = () => (
  <section id="the-spellbook" className="relative py-24 px-4 parchment-overlay">
    <div className="section-divider mb-24" />
    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-accent/30 text-3xl font-display block mb-3">⚔</span>
        <h2 className="font-display text-3xl md:text-4xl text-primary text-glow-cyan">
          Core Spells
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className={`spell-card rounded-xl p-8 group ${f.borderHover}`}
          >
            <div className="flex items-start gap-4">
              <div className="relative">
                <f.icon className={`w-10 h-10 ${f.color} ${f.glow} transition-transform duration-300 group-hover:scale-110`} />
                <span className={`absolute -top-2 -right-2 text-xs ${f.color} opacity-30 font-display`}>{f.rune}</span>
              </div>
              <div>
                <h3 className={`font-heading text-xl ${f.color} mb-3`}>{f.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
