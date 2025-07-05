import React, { useState } from "react";

// Utility for currency formatting
const formatPKR = (value: number) =>
  value.toLocaleString("en-PK", { style: "currency", currency: "PKR", maximumFractionDigits: 0 });

const InvestorAITools: React.FC = () => {
  // Separate state for analyzer and property finder for better UX
  const [investment, setInvestment] = useState<string>("");
  const [propertyBudget, setPropertyBudget] = useState<string>("");
  const [analysis, setAnalysis] = useState<string>("");
  const [propertySuggestion, setPropertySuggestion] = useState<string>("");

  const handleAnalyze = () => {
    if (!investment || isNaN(Number(investment)) || Number(investment) <= 0) {
      setAnalysis("Please enter a valid investment amount.");
      return;
    }
    const roi = Math.round(Number(investment) * 0.18);
    setAnalysis(
      `Estimated annual ROI: ${formatPKR(roi)} (based on 18% projection)`
    );
  };

  // Risk Meter logic
  let riskLevel = "Medium";
  let riskColor = "text-primary bg-primary/10 border-primary";
  const numericInvestment = Number(investment);
  if (investment !== "" && numericInvestment > 1000000) {
    riskLevel = "High";
    riskColor = "text-red-700 bg-red-100/80 border-red-400";
  } else if (investment !== "" && numericInvestment <= 100000) {
    riskLevel = "Low";
    riskColor = "text-neon-cyan bg-neon-cyan/10 border-neon-cyan";
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-card text-foreground px-2 py-6 md:px-8 lg:px-24 font-sans">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight bg-gradient-to-r from-primary via-electric-violet to-neon-cyan bg-clip-text text-transparent drop-shadow-lg">
          🤖 SAIR AI Tools for Smart Investors
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
          Unlock smarter investment decisions with our suite of AI-powered tools designed for the modern investor.
        </p>
      </div>

      {/* AI Tools Summary */}
      <div className="flex justify-center mb-10">
        <div className="glass-card w-full max-w-4xl p-8 md:p-10 rounded-2xl shadow-xl border-2 border-primary/30 bg-background/80 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-neon-cyan drop-shadow-lg text-center">About SAIR AI Tools</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 text-center max-w-2xl">
            SAIR AI Tools empower investors with smart, data-driven features to make your real estate journey easier, safer, and more profitable.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-left text-foreground w-full max-w-2xl mb-2">
            <li><span className="font-semibold text-primary">Investment Analyzer:</span> Instantly estimate your potential ROI based on your investment amount.</li>
            <li><span className="font-semibold text-primary">ROI Predictor:</span> Visualize and forecast your returns (coming soon).</li>
            <li><span className="font-semibold text-primary">Risk Meter:</span> Get a real-time risk assessment for your investment.</li>
            <li><span className="font-semibold text-primary">Best Property Finder:</span> Receive property suggestions tailored to your budget.</li>
            <li><span className="font-semibold text-primary">AI Investor Portfolio:</span> Personalized portfolio insights (coming soon).</li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground text-center max-w-xl">
            These tools are designed to help you make informed, confident, and optimized investment decisions in real estate—whether you’re a beginner or a seasoned investor.
          </p>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Investment Analyzer */}
        <div className="bg-card rounded-2xl shadow-xl p-7 flex flex-col items-center hover:shadow-2xl transition-shadow border border-primary/20">
          <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">📊 Investment Analyzer</h2>
          <input
            type="number"
            min="0"
            aria-label="Investment amount in PKR"
            className="w-full px-4 py-2 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-3 bg-background text-foreground text-lg transition-all focus:border-neon-cyan focus:ring-neon-cyan"
            placeholder="Enter amount (PKR)"
            value={investment}
            onChange={e => {
              setInvestment(e.target.value);
              setAnalysis("");
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') handleAnalyze();
            }}
          />
          <button
            className="w-full bg-gradient-to-r from-primary via-electric-violet to-neon-cyan text-white font-semibold py-2 rounded-lg hover:scale-105 hover:from-neon-cyan hover:to-electric-violet transition-all shadow-md mb-2 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
            onClick={handleAnalyze}
            aria-label="Analyze investment ROI"
          >
            Analyze
          </button>
          {analysis && (
            <div className="mt-2 text-center text-sm text-muted-foreground bg-muted rounded p-2 w-full animate-fade-in">
              {analysis}
            </div>
          )}
        </div>


        {/* ROI Predictor */}
        <div className="bg-card rounded-2xl shadow-xl p-7 flex flex-col items-center justify-center hover:shadow-2xl transition-shadow border border-primary/20">
          <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">📈 ROI Predictor</h2>
          <div className="w-full h-24 flex items-center justify-center text-muted-foreground bg-muted rounded-lg animate-pulse">
            <span className="text-base font-medium">Coming Soon</span>
          </div>
        </div>

        {/* Risk Meter */}
        <div className="bg-card rounded-2xl shadow-xl p-7 flex flex-col items-center justify-center hover:shadow-2xl transition-shadow border border-primary/20">
          <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">🛡️ Risk Meter</h2>
          <div className={`w-full flex flex-col items-center`}>
            <span className={`text-lg font-semibold px-6 py-3 rounded-full shadow-inner animate-fade-in border-2 ${riskColor} transition-colors duration-300 mb-2 text-center`} style={{minWidth: 160}}>
              Risk Level: {riskLevel}
            </span>
            <span className="text-xs text-muted-foreground mt-1">(Auto-calculated from investment)</span>
          </div>
        </div>

        {/* Best Property Finder */}
        <div className="bg-card rounded-2xl shadow-xl p-7 flex flex-col items-center hover:shadow-2xl transition-shadow border border-primary/20 w-full">
          <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">🏠 Best Property Finder</h2>
          <input
            type="number"
            min="0"
            aria-label="Budget in PKR"
            className="w-full px-4 py-2 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-3 bg-background text-foreground text-lg transition-all focus:border-neon-cyan focus:ring-neon-cyan"
            placeholder="Enter your budget (PKR)"
            value={propertyBudget}
            onChange={e => {
              setPropertyBudget(e.target.value);
              setPropertySuggestion("");
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                if (!propertyBudget || Number(propertyBudget) <= 0) {
                  setPropertySuggestion("Please enter a valid budget.");
                  return;
                }
                const budget = Number(propertyBudget);
                let suggestion = "";
                if (budget < 2000000) {
                  suggestion = "Consider 1-bed apartments or small commercial shops in emerging areas.";
                } else if (budget < 10000000) {
                  suggestion = "Look for 2-3 bed apartments, small houses, or plots in developing societies.";
                } else if (budget < 50000000) {
                  suggestion = "Explore luxury apartments, 1-kanal houses, or commercial properties in prime locations.";
                } else {
                  suggestion = "You can invest in high-end villas, multi-kanal plots, or premium commercial plazas.";
                }
                setPropertySuggestion(suggestion);
              }
            }}
          />
          <button
            className="w-full bg-gradient-to-r from-primary via-electric-violet to-neon-cyan text-white font-semibold py-2 rounded-lg hover:scale-105 hover:from-neon-cyan hover:to-electric-violet transition-all shadow-md mb-2 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
            onClick={() => {
              if (!propertyBudget || Number(propertyBudget) <= 0) {
                setPropertySuggestion("Please enter a valid budget.");
                return;
              }
              const budget = Number(propertyBudget);
              let suggestion = "";
              if (budget < 2000000) {
                suggestion = "Consider 1-bed apartments or small commercial shops in emerging areas.";
              } else if (budget < 10000000) {
                suggestion = "Look for 2-3 bed apartments, small houses, or plots in developing societies.";
              } else if (budget < 50000000) {
                suggestion = "Explore luxury apartments, 1-kanal houses, or commercial properties in prime locations.";
              } else {
                suggestion = "You can invest in high-end villas, multi-kanal plots, or premium commercial plazas.";
              }
              setPropertySuggestion(suggestion);
            }}
            aria-label="Find best property for your budget"
          >
            Find Best Property
          </button>
          {typeof propertySuggestion === "string" && propertySuggestion && (
            <div className="mt-2 text-center text-sm text-muted-foreground bg-muted rounded p-2 w-full animate-fade-in">
              {propertySuggestion}
            </div>
          )}
        </div>

        {/* AI Investor Portfolio */}
        <div className="bg-card rounded-2xl shadow-xl p-7 flex flex-col items-center justify-center hover:shadow-2xl transition-shadow border border-primary/20">
          <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">🤝 AI Investor Portfolio</h2>
          <div className="w-full h-24 flex items-center justify-center text-muted-foreground bg-muted rounded-lg animate-fade-in">
            <span className="text-base font-medium">Personalized portfolio insights coming soon!</span>
          </div>
        </div>

        {/* Join Beta (spans full width on mobile, right on desktop) */}
        <div className="bg-card rounded-2xl shadow-xl p-7 flex flex-col items-center justify-center col-span-full lg:col-span-1 hover:shadow-2xl transition-shadow mt-2 lg:mt-0 border border-primary/20">
          <h2 className="text-2xl font-bold mb-4 text-center text-primary flex items-center gap-2">🚀 Join Beta</h2>
          <button className="bg-gradient-to-r from-primary via-electric-violet to-neon-cyan text-white font-semibold px-8 py-2 rounded-lg hover:scale-105 hover:from-neon-cyan hover:to-electric-violet transition-all shadow-md mt-2 focus:outline-none focus:ring-2 focus:ring-neon-cyan" aria-label="Join Beta">
            Join Beta Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestorAITools;
