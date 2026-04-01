import { motion } from "framer-motion";
import { Globe, Zap, Shield } from "lucide-react";

const reasons = [
  { icon: Globe, title: "Native .brave Resolution", desc: "Access thetechwiz.brave directly in Brave Browser — no extensions, no workarounds.", rune: "ᚹ" },
  { icon: Zap, title: "Lightning-Fast Solana", desc: "Sub-second finality, near-zero fees. Your AI agents execute strategies in real-time.", rune: "ᛃ" },
  { icon: Shield, title: "Seamless Wallet Experience", desc: "Brave Wallet integration means one-click connects with built-in security.", rune: "ᚺ" },
];

const WhyBraveSection = () => (
  <section className="relative py-24 px-4 parchment-overlay">
    <div className="section-divider mb-24" />
    <div className="container mx-auto max-w-4xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-accent/30 text-3xl font-display block mb-3">⚡</span>
        <h2 className="font-display text-3xl md:text-4xl text-primary text-glow-cyan">
          Why Brave & Solana?
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="spell-card rounded-xl p-6 text-center group"
          >
            <div className="relative inline-block mb-4">
              <r.icon className="w-8 h-8 text-accent text-glow-gold transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute -top-1 -right-3 text-xs text-accent/20 font-display">{r.rune}</span>
            </div>
            <h3 className="font-heading text-lg text-foreground mb-2">{r.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyBraveSection;
