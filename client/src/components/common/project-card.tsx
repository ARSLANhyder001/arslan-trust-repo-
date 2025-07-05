import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const progressPercentage = (project.currentAmount / project.targetAmount) * 100;
  
  const statusColors = {
    ACTIVE: "bg-light-mint text-navy",
    FUNDING: "bg-electric-violet text-white",
    COMPLETE: "bg-neon-cyan text-navy",
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <motion.div
      className="glass-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -8 }}
    >
      <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url(${project.imageUrl})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
        <div className="absolute top-4 right-4">
          <Badge className={statusColors[project.status as keyof typeof statusColors]}>
            {project.status}
          </Badge>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-orbitron font-bold text-xl mb-2 text-neon-cyan">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-light-mint">
            {project.roi}% ROI
          </span>
          <span className="text-sm text-gray-400">
            {Math.round(progressPercentage)}% Funded
          </span>
        </div>
        <Progress value={progressPercentage} className="mb-4" />
        <div className="flex justify-between text-sm text-gray-400">
          <span>Min: {formatCurrency(project.minInvestment)}</span>
          <span>Target: {formatCurrency(project.targetAmount)}</span>
        </div>
      </div>
    </motion.div>
  );
}
