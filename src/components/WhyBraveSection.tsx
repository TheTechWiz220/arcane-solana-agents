import { motion } from "framer-motion";
import { Globe, Zap, Shield } from "lucide-react";

const reasons = [
  { icon: Globe, title: "Native .brave Resolution", desc: "Access thetechwiz.brave directly in Brave Browser — no extensions, no workarounds." },
  { icon: Zap, title: "Lightning-Fast Solana", desc: "Sub-second finality, near-zero fees. Your AI agents execute strategies in real-time." },
  { icon: Shield, title: "Seamless Wallet Experience", desc: "Brave Wallet integration means one-click connects with built-in security." },
];

const WhyBraveSection = () => (
  <section className="relative py-24 px-4">
    <div className="container mx-auto max-w-4xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl text-center text-primary text-glow-cyan mb-16"
      >
        Why Brave & Solana?
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="spell-card rounded-xl p-6 text-center"
          >
            <r.icon className="w-8 h-8 text-accent text-glow-gold mx-auto mb-4" />
            <h3 className="font-heading text-lg text-foreground mb-2">{r.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyBraveSection;
