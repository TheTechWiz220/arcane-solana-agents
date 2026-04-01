import { motion } from "framer-motion";
import { Wand2, BookOpen, Swords, Coins } from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "Summon AI Agents",
    desc: "Describe your wizard and cast the spell. Your AI agent deploys on-chain, ready to execute strategies autonomously.",
    glow: "text-glow-cyan",
    color: "text-primary",
  },
  {
    icon: BookOpen,
    title: "The Grimoire Forge",
    desc: "No-code Solana dApp builder. Craft custom spells, smart contracts, and DeFi strategies without writing a line.",
    glow: "text-glow-purple",
    color: "text-purple-glow",
  },
  {
    icon: Swords,
    title: "Wizard Duels & Fusion",
    desc: "Battle your agents against others and merge them to create legendary wizards with enhanced powers.",
    glow: "text-glow-gold",
    color: "text-accent",
  },
  {
    icon: Coins,
    title: "TechAi Token",
    desc: "The mana powering all spells. Stake for rewards, govern the realm, and benefit from deflationary burns.",
    glow: "text-glow-cyan",
    color: "text-primary",
  },
];

const FeaturesSection = () => (
  <section id="the-spellbook" className="relative py-24 px-4">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl text-center text-primary text-glow-cyan mb-16"
      >
        Core Spells
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="spell-card rounded-xl p-8"
          >
            <f.icon className={`w-10 h-10 ${f.color} ${f.glow} mb-4`} />
            <h3 className={`font-heading text-xl ${f.color} mb-3`}>{f.title}</h3>
            <p className="font-body text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
