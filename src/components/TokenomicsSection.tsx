import { motion } from "framer-motion";

const allocations = [
  { label: "Community & Rewards", pct: 40, color: "bg-primary" },
  { label: "Development & Forge", pct: 20, color: "bg-purple-glow" },
  { label: "Liquidity Pool", pct: 15, color: "bg-accent" },
  { label: "Team & Advisors", pct: 15, color: "bg-cyan-glow" },
  { label: "Treasury & Burns", pct: 10, color: "bg-muted-foreground" },
];

const utilities = ["Agent Summoning", "Staking & Yield", "Governance Voting", "Deflationary Burns", "Wizard Duels Entry", "Forge Access"];

const TokenomicsSection = () => (
  <section className="relative py-24 px-4">
    <div className="container mx-auto max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl text-center text-primary text-glow-cyan mb-16"
      >
        Tokenomics
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Allocations */}
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
                    transition={{ duration: 1, delay: 0.3 }}
                    className={`h-full rounded-full ${a.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Utility */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="spell-card rounded-xl p-8"
        >
          <h3 className="font-heading text-xl text-primary text-glow-cyan mb-6">Token Utility</h3>
          <div className="grid grid-cols-2 gap-3">
            {utilities.map((u) => (
              <div key={u} className="flex items-center gap-2 p-3 rounded-lg bg-muted/30 border border-border">
                <span className="text-accent text-sm">✦</span>
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
