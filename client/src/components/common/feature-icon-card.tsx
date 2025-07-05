import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureIconCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor?: "cyan" | "violet" | "mint";
  delay?: number;
}

export default function FeatureIconCard({
  icon,
  title,
  description,
  iconColor = "cyan",
  delay = 0,
}: FeatureIconCardProps) {
  const iconColors = {
    cyan: "from-neon-cyan to-electric-violet shadow-[0_0_20px_rgba(34,211,238,0.5)]",
    violet: "from-electric-violet to-light-mint shadow-[0_0_20px_rgba(147,51,234,0.5)]",
    mint: "from-light-mint to-neon-cyan shadow-[0_0_20px_rgba(16,185,129,0.5)]",
  };

  const titleColors = {
    cyan: "text-neon-cyan",
    violet: "text-electric-violet",
    mint: "text-light-mint",
  };

  return (
    <motion.div
      className="glass-card p-8 rounded-xl hover:translate-y-[-8px] hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all duration-300 group"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <motion.div
        className={cn(
          "w-16 h-16 bg-gradient-to-r rounded-xl flex items-center justify-center mb-6 transition-all duration-300",
          iconColors[iconColor]
        )}
        whileHover={{ scale: 1.1 }}
      >
        {icon}
      </motion.div>
      <h3 className={cn("font-orbitron font-bold text-xl mb-4", titleColors[iconColor])}>
        {title}
      </h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}
