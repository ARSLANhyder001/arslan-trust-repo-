import { motion } from "framer-motion";
import { useState } from "react";
import { Building2, TrendingUp, DollarSign, PieChart, BarChart3, Users } from "lucide-react";
import GlassCard from "@/components/common/glass-card";
import FeatureIconCard from "@/components/common/feature-icon-card";

export default function InvestorEducation() {
  const [activeReitType, setActiveReitType] = useState("equity");

  // Quick REIT Facts
  const quickFacts = [
    { icon: <Building2 className="w-7 h-7 text-neon-cyan" />, label: "$1.3T+ US REIT Market Cap" },
    { icon: <Users className="w-7 h-7 text-electric-violet" />, label: "100+ Shareholders Required" },
    { icon: <DollarSign className="w-7 h-7 text-light-mint" />, label: "90% Income Paid as Dividends" },
    { icon: <PieChart className="w-7 h-7 text-primary" />, label: "75%+ Assets in Real Estate" },
  ];

  const reitTypes = [
    {
      id: "equity",
      title: "Equity REITs",
      description: "Own and operate income-producing real estate",
      percentage: "90%",
      examples: ["Shopping centers", "Apartments", "Office buildings", "Hotels"],
      characteristics: [
        "Generate income through rent collection",
        "Focus on property appreciation",
        "Most common type of REIT",
        "Direct property ownership"
      ]
    },
    {
      id: "mortgage",
      title: "Mortgage REITs",
      description: "Provide financing for income-producing real estate",
      percentage: "8%",
      examples: ["Mortgage loans", "Mortgage-backed securities", "Construction loans"],
      characteristics: [
        "Earn income from interest on mortgages",
        "Higher dividend yields typically",
        "Sensitive to interest rate changes",
        "Focus on debt rather than equity"
      ]
    },
    {
      id: "hybrid",
      title: "Hybrid REITs",
      description: "Combine strategies of both equity and mortgage REITs",
      percentage: "2%",
      examples: ["Mixed portfolios", "Diversified holdings", "Balanced approach"],
      characteristics: [
        "Balanced risk profile",
        "Diversified income streams",
        "Combines rent and interest income",
        "Flexible investment strategy"
      ]
    }
  ];

  const reitBenefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: "Regular Dividends",
      description: "REITs must distribute 90% of taxable income to shareholders",
      iconColor: "cyan" as const,
    },
    {
      icon: <Building2 className="w-8 h-8 text-white" />,
      title: "Real Estate Exposure",
      description: "Access to commercial real estate without direct ownership",
      iconColor: "violet" as const,
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Liquidity",
      description: "Publicly traded REITs offer stock-like liquidity",
      iconColor: "mint" as const,
    },
    {
      icon: <PieChart className="w-8 h-8 text-white" />,
      title: "Diversification",
      description: "Spread risk across multiple properties and markets",
      iconColor: "cyan" as const,
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Capital Collection",
      description: "REIT raises capital from investors through share offerings"
    },
    {
      step: "2", 
      title: "Property Acquisition",
      description: "Uses capital to purchase income-generating real estate"
    },
    {
      step: "3",
      title: "Income Generation", 
      description: "Properties generate rental income and appreciate in value"
    },
    {
      step: "4",
      title: "Distribution",
      description: "90% of income distributed to shareholders as dividends"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-2 md:px-6 bg-gradient-to-br from-background via-muted to-card">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-orbitron font-extrabold text-4xl md:text-6xl mb-6 bg-gradient-to-r from-primary via-electric-violet to-neon-cyan bg-clip-text text-transparent drop-shadow-lg animate-fade-in">
            Investor Education
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Learn about Real Estate Investment Trusts (REITs), their types, benefits, and how they work in the modern investment landscape.
          </p>
        </motion.div>

        {/* Quick REIT Facts */}
        <motion.div
          className="mb-16 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {quickFacts.map((fact, idx) => (
            <div key={idx} className="glass-card flex items-center gap-3 px-5 py-3 rounded-xl shadow-md border border-primary/20 min-w-[220px]">
              {fact.icon}
              <span className="text-base text-foreground font-semibold">{fact.label}</span>
            </div>
          ))}
        </motion.div>

        {/* What is REIT Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-orbitron font-bold text-3xl mb-8 text-center glow-text animate-fade-in">
            What is a REIT?
          </h2>
          <GlassCard className="p-8 bg-background/80">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  A Real Estate Investment Trust (REIT) is a company that owns, operates, or finances income-producing real estate. 
                  REITs provide a way for individual investors to earn dividends from real estate investments without having to buy, 
                  manage, or finance properties themselves.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                    <span className="text-gray-300">Must distribute 90% of taxable income as dividends</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-electric-violet rounded-full"></div>
                    <span className="text-gray-300">Minimum 75% of assets in real estate</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-light-mint rounded-full"></div>
                    <span className="text-gray-300">At least 100 shareholders required</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="glass-card p-6 inline-block">
                  <Building2 className="w-24 h-24 text-neon-cyan mx-auto mb-4" />
                  <h3 className="font-orbitron font-bold text-xl text-white">$1.3 Trillion</h3>
                  <p className="text-gray-300">Total US REIT Market Cap</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.section>

        {/* REIT Types Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="font-orbitron font-bold text-3xl mb-12 text-center glow-text animate-fade-in">
            Types of REITs
          </h2>
          
          {/* REIT Type Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {reitTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveReitType(type.id)}
                className={`glass-card px-6 py-3 rounded-xl font-semibold transition-all duration-300 border-2 shadow-md ${
                  activeReitType === type.id
                    ? "border-neon-cyan text-neon-cyan bg-neon-cyan/10 scale-105"
                    : "border-transparent hover:border-neon-cyan/50 hover:bg-muted/40"
                }`}
              >
                {type.title}
              </button>
            ))}
          </div>

          {/* Active REIT Type Details */}
          {reitTypes.map((type) => {
            if (type.id !== activeReitType) return null;
            
            return (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="p-8 bg-background/80">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="font-orbitron font-bold text-2xl mb-4 text-white">
                        {type.title}
                      </h3>
                      <p className="text-lg text-gray-300 mb-6">{type.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-neon-cyan mb-3">Examples:</h4>
                          <ul className="space-y-2">
                            {type.examples.map((example, idx) => (
                              <li key={idx} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-light-mint rounded-full"></div>
                                <span className="text-gray-300">{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-electric-violet mb-3">Characteristics:</h4>
                          <ul className="space-y-2">
                            {type.characteristics.map((char, idx) => (
                              <li key={idx} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-light-mint rounded-full"></div>
                                <span className="text-gray-300">{char}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="glass-card p-6 border border-neon-cyan/30">
                        <PieChart className="w-16 h-16 text-neon-cyan mx-auto mb-4 animate-pulse" />
                        <h4 className="font-orbitron font-bold text-3xl text-white mb-2">
                          {type.percentage}
                        </h4>
                        <p className="text-gray-300">of REIT Market</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.section>

        {/* How REITs Work */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="font-orbitron font-bold text-3xl mb-12 text-center glow-text animate-fade-in">
            How REITs Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                className="glass-card p-6 rounded-xl text-center hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-neon-cyan to-electric-violet rounded-full flex items-center justify-center mx-auto mb-4 animate-fade-in">
                  <span className="font-orbitron font-bold text-lg text-white">{step.step}</span>
                </div>
                <h3 className="font-orbitron font-bold text-lg mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="font-orbitron font-bold text-3xl mb-12 text-center bg-gradient-to-r from-primary via-electric-violet to-neon-cyan bg-clip-text text-transparent drop-shadow animate-fade-in">
            Benefits of REIT Investment
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reitBenefits.map((benefit, index) => (
              <FeatureIconCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                iconColor={benefit.iconColor}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.section>

        {/* SAIR REIT Advantage */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <GlassCard className="p-8 bg-gradient-to-r from-neon-cyan/10 via-electric-violet/10 to-light-mint/10">
            <div className="text-center">
              <h2 className="font-orbitron font-bold text-3xl mb-6 glow-text">
                The SAIR REIT Advantage
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Combining traditional REIT benefits with Sharia-compliant principles and cutting-edge technology 
                for a new generation of ethical real estate investment.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Users className="w-12 h-12 text-neon-cyan mx-auto mb-4" />
                  <h3 className="font-orbitron font-bold text-lg text-white mb-2">5,000+</h3>
                  <p className="text-gray-300">Active Investors</p>
                </div>
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-electric-violet mx-auto mb-4" />
                  <h3 className="font-orbitron font-bold text-lg text-white mb-2">12.8%</h3>
                  <p className="text-gray-300">Average Annual Return</p>
                </div>
                <div className="text-center">
                  <Building2 className="w-12 h-12 text-light-mint mx-auto mb-4" />
                  <h3 className="font-orbitron font-bold text-lg text-white mb-2">$1.2B</h3>
                  <p className="text-gray-300">Assets Under Management</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.section>
      </div>
    </div>
  );
}
