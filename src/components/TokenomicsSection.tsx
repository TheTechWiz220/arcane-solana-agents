import { motion } from "framer-motion";

const allocations = [
  { label: "Community & Rewards", pct: 40, color: "bg-primary", shadow: "shadow-[0_0_10px_hsl(185_100%_50%/0.3)]" },
  { label: "Development & Forge", pct: 20, color: "bg-purple-glow", shadow: "shadow-[0_0_10px_hsl(270_80%_60%/0.3)]" },
  { label: "Liquidity Pool", pct: 15, color: "bg-accent", shadow: "shadow-[0_0_10px_hsl(51_100%_50%/0.3)]" },
  { label: "Team & Advisors", pct: 15, color: "bg-cyan-glow", shadow: "shadow-[0_0_10px_hsl(185_100%_50%/0.2)]" },
  { label: "Treasury & Burns", pct: 10, color: "bg-muted-foreground", shadow: "" },
];

const utilities = ["Agent Summoning", "Staking & Yield", "Governance Voting", "Deflationary Burns", "Wizard Duels Entry", "Forge Access"];

const TokenomicsSection = () => (
  <section className="relative py-24 px-4 parchment-overlay">
    <div className="section-divider mb-24" />
    <div className="container mx-auto max-w-5xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary/30 text-3xl font-display block mb-3">◈</span>
        <h2 className="font-display text-3xl md:text-4xl text-primary text-glow-cyan">
          Tokenomics
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="spell-card rounded-xl p-8"
        >
          <h3 className="font-heading text-xl text-accent text-glow-gold mb-2">Supply: 1,000,000,000 TECHAI</h3>
          <p className="text-muted-foreground font-body text-sm mb-6">Fixed supply, deflationary by design</p>

          <div className="space-y-4">
            {allocations.map((a) => (
              <div key={a.label}>
                <div className="flex justify-between text-sm font-body mb-1">
                  <span className="text-foreground">{a.label}</span>
                  <span className="text-muted-foreground">{a.pct}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${a.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                    className={`h-full rounded-full ${a.color} ${a.shadow}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="spell-card rounded-xl p-8"
        >
          <h3 className="font-heading text-xl text-primary text-glow-cyan mb-6">Token Utility</h3>
          <div className="grid grid-cols-2 gap-3">
            {utilities.map((u) => (
              <div key={u} className="flex items-center gap-2 p-3 rounded-lg bg-muted/20 border border-border/50 hover:border-primary/30 hover:bg-muted/30 transition-all duration-300">
                <span className="text-accent text-sm text-glow-gold">✦</span>
                <span className="font-body text-sm text-foreground">{u}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default TokenomicsSection;
