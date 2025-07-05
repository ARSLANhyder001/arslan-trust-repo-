import { useEffect } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { TrendingUp, AlertCircle, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import StatsGrid from "@/components/common/stats-grid";
import DashboardWidget from "@/components/common/dashboard-widget";
import InteractiveCharts from "@/components/common/interactive-charts";
import { mockRecentTransactions } from "@/lib/mock-data";
import type { DashboardStats } from "@/lib/mock-data";

export default function Dashboard() {
  // Set document title for SEO
  useEffect(() => {
    document.title = "Investor Dashboard | SAIR REIT";
  }, []);
  const { data: stats, isLoading } = useQuery<DashboardStats>({
    queryKey: ["/api/dashboard/stats"],
  });

  const { data: projects = [] } = useQuery<any[]>({
    queryKey: ["/api/projects"],
  });

  // Interactive charts data (memoized for performance)
  const portfolioData = [
    { name: 'Dubai Marina', value: 35, color: '#22d3ee' },
    { name: 'Singapore Hub', value: 25, color: '#9333ea' },
    { name: 'London Tech', value: 20, color: '#10b981' },
    { name: 'Other Projects', value: 20, color: '#64748b' },
  ];

  const performanceData = [
    { month: 'Jan', returns: 8.2, investment: 45000 },
    { month: 'Feb', returns: 9.1, investment: 52000 },
    { month: 'Mar', returns: 10.5, investment: 58000 },
    { month: 'Apr', returns: 11.8, investment: 64000 },
    { month: 'May', returns: 12.3, investment: 71000 },
    { month: 'Jun', returns: 13.1, investment: 78000 },
  ];

  const projectData = projects.map((project) => ({
    name: project.title ? project.title.split(' ').slice(0, 2).join(' ') : 'Project',
    funded: project.currentAmount || 0,
    target: project.targetAmount || 0,
    roi: project.roi ? parseFloat(project.roi) : 0,
  }));

  if (isLoading || !stats) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-neon-cyan"></div>
      </div>
    );
  }

  return (
    <>
      {/* Skip to content for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only absolute top-2 left-2 bg-neon-cyan text-navy px-4 py-2 rounded z-50">Skip to main content</a>
      <div className="min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="flex justify-between items-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h1 className="font-orbitron font-bold text-4xl md:text-5xl glow-text mb-4" id="main-content" tabIndex={-1} aria-label="Investor Dashboard">
                Investor Dashboard
              </h1>
              <p className="text-xl text-gray-300">
                Track your investments and monitor real-time performance
              </p>
            </div>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1 }}
            >
              <Bell className="w-8 h-8 text-neon-cyan cursor-pointer" aria-label="Notifications" role="button" tabIndex={0} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-electric-violet rounded-full animate-pulse"></span>
            </motion.div>
          </motion.div>

        {/* Stats Grid */}
        <StatsGrid stats={stats} />

        {/* Interactive Charts Section */}
        <div className="mb-12">
          <motion.h2
            className="font-orbitron font-bold text-2xl mb-8 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Analytics & Performance
          </motion.h2>
          <InteractiveCharts 
            portfolioData={portfolioData}
            performanceData={performanceData}
            projectData={projectData}
          />
        </div>

        {/* Performance Metrics Summary */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="glass-card p-6 rounded-xl">
            <h3 className="font-orbitron font-bold text-xl mb-6 text-white">
              Performance Metrics
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Total Return</span>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-light-mint" />
                  <span className="font-semibold text-light-mint">+24.5%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Average ROI</span>
                <span className="font-semibold text-white">{stats.avgROI}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Risk Score</span>
                <Badge className="bg-light-mint text-navy">Low</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Diversification</span>
                <Badge className="bg-neon-cyan text-navy">Excellent</Badge>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-xl">
            <h3 className="font-orbitron font-bold text-xl mb-6 text-white">
              Market Insights
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Market Trend</span>
                <Badge className="bg-light-mint text-navy">Bullish</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Sector Performance</span>
                <span className="font-semibold text-white">+18.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Next Dividend</span>
                <span className="font-semibold text-neon-cyan">Dec 15, 2024</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Portfolio Score</span>
                <span className="font-semibold text-electric-violet">9.2/10</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recent Transactions */}
        <DashboardWidget transactions={mockRecentTransactions} />

        {/* Alerts & Notifications */}
        <motion.div
          className="mt-12 glass-card p-6 rounded-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center space-x-2 mb-6">
            <AlertCircle className="w-6 h-6 text-electric-violet" />
            <h3 className="font-orbitron font-bold text-xl text-white">
              Recent Alerts
            </h3>
          </div>
          <div className="space-y-4">
            <div className="p-4 border border-light-mint/20 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Dubai Marina Tower - Dividend Payment
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Your monthly dividend of $625 has been processed and will arrive in 2-3 business days.
                  </p>
                </div>
                <Badge className="bg-light-mint text-navy">New</Badge>
              </div>
            </div>
            
            <div className="p-4 border border-neon-cyan/20 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    New Project Available - Miami Beach Resort
                  </h4>
                  <p className="text-gray-300 text-sm">
                    A new luxury resort project with 15.2% projected ROI is now available for investment.
                  </p>
                </div>
                <Badge className="bg-neon-cyan text-navy">Opportunity</Badge>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
    </>
  );
}
