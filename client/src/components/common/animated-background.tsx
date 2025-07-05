import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const particles = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    left: `${10 + i * 20}%`,
    delay: i * 2,
    size: Math.random() * 3 + 1,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-neon-cyan to-transparent opacity-60"
          style={{
            left: particle.left,
            width: `${particle.size}rem`,
            height: `${particle.size}rem`,
          }}
          animate={{
            y: [window.innerHeight, -100],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
