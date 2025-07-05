import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Building2 } from "lucide-react";
import type { DashboardStats } from "@/lib/mock-data";

interface StatsGridProps {
  stats: DashboardStats;
}

export default function StatsGrid({ stats }: StatsGridProps) {
  const statItems = [
    {
      title: "Total Invested",
      value: `$${stats.totalInvested.toLocaleString()}`,
      change: "+12.5% this month",
      icon: DollarSign,
      color: "neon-cyan",
      borderColor: "border-neon-cyan/30 hover:border-neon-cyan/60",
      iconBg: "text-neon-cyan",
    },
    {
      title: "Monthly Returns",
      value: `$${stats.monthlyReturns.toLocaleString()}`,
      change: "+8.2% from last month",
      icon: TrendingUp,
      color: "electric-violet",
      borderColor: "border-electric-violet/30 hover:border-electric-violet/60",
      iconBg: "text-electric-violet",
    },
    {
      title: "Active Projects",
      value: stats.activeProjects.toString(),
      change: "2 new this week",
      icon: Building2,
      color: "light-mint",
      borderColor: "border-light-mint/30 hover:border-light-mint/60",
      iconBg: "text-light-mint",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {statItems.map((item, index) => (
        <motion.div
          key={item.title}
          className={`glass-card p-6 rounded-xl border transition-all duration-300 ${item.borderColor}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-300">{item.title}</h3>
            <item.icon className={`w-6 h-6 ${item.iconBg}`} />
          </div>
          <p className="text-3xl font-orbitron font-bold text-white mb-2">
            {item.value}
          </p>
          <p className="text-light-mint text-sm">{item.change}</p>
        </motion.div>
      ))}
    </div>
  );
}
