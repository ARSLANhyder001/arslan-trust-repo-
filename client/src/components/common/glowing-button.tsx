import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowingButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function GlowingButton({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
}: GlowingButtonProps) {
  const variants = {
    primary: "bg-gradient-to-r from-neon-cyan to-electric-violet text-navy",
    secondary: "bg-gradient-to-r from-electric-violet to-light-mint text-white",
    outline: "glass-card border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-navy",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={cn(
        "font-semibold rounded-xl transition-all duration-300 font-orbitron",
        variants[variant],
        sizes[size],
        className
      )}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 30px rgba(34, 211, 238, 0.6)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
