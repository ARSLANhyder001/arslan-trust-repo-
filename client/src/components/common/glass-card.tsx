import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className,
  hover = true,
  onClick,
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-card rounded-xl p-6 transition-all duration-300",
        hover && "hover:translate-y-[-4px] hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
      whileHover={hover ? { y: -4 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
