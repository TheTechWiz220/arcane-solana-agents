import { motion } from "framer-motion";

const stats = [
  { label: "Agents Summoned Today", value: "2,847", icon: "🧙" },
  { label: "TECHAI Burned", value: "14,291,038", icon: "🔥" },
  { label: "Active Wizards", value: "12,493", icon: "⚡" },
];

const LiveStatsSection = () => (
  <section className="relative py-20 px-4">
    <div className="container mx-auto max-w-4xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-2xl md:text-3xl text-center text-primary text-glow-cyan mb-12"
      >
        Live Magic
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="spell-card rounded-xl p-6 text-center"
          >
            <span className="text-3xl mb-2 block">{s.icon}</span>
            <span className="font-display text-2xl md:text-3xl text-accent text-glow-gold block mb-1">{s.value}</span>
            <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LiveStatsSection;
