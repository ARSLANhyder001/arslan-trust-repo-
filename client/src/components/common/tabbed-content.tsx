import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

interface TabContent {
  heading: string;
  points: string[];
  image: string;
}

interface Tab {
  id: string;
  title: string;
  content: TabContent;
}

interface TabbedContentProps {
  tabs: Tab[];
}

export default function TabbedContent({ tabs }: TabbedContentProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const getTabColors = (tabId: string) => {
    switch (tabId) {
      case 'halal':
        return {
          active: 'border-neon-cyan text-neon-cyan',
          inactive: 'border-transparent hover:border-neon-cyan/50',
          heading: 'text-neon-cyan'
        };
      case 'risk':
        return {
          active: 'border-electric-violet text-electric-violet',
          inactive: 'border-transparent hover:border-electric-violet/50',
          heading: 'text-electric-violet'
        };
      case 'profit':
        return {
          active: 'border-light-mint text-light-mint',
          inactive: 'border-transparent hover:border-light-mint/50',
          heading: 'text-light-mint'
        };
      default:
        return {
          active: 'border-neon-cyan text-neon-cyan',
          inactive: 'border-transparent hover:border-neon-cyan/50',
          heading: 'text-neon-cyan'
        };
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex flex-col sm:flex-row justify-center mb-12 space-y-4 sm:space-y-0 sm:space-x-8">
        {tabs.map((tab) => {
          const colors = getTabColors(tab.id);
          const isActive = activeTab === tab.id;
          
          return (
            <motion.button
              key={tab.id}
              className={`glass-card px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 ${
                isActive ? colors.active : colors.inactive
              }`}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.title}
            </motion.button>
          );
        })}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {tabs.map((tab) => {
          if (tab.id !== activeTab) return null;
          const colors = getTabColors(tab.id);
          
          return (
            <motion.div
              key={tab.id}
              className="glass-card p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className={`font-orbitron font-bold text-2xl mb-6 ${colors.heading}`}>
                    {tab.content.heading}
                  </h3>
                  <ul className="space-y-4 text-gray-300">
                    {tab.content.points.map((point, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <Check className="w-6 h-6 text-light-mint mt-1 flex-shrink-0" />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <img
                    src={tab.content.image}
                    alt={tab.content.heading}
                    className="rounded-xl shadow-lg w-full h-auto opacity-80"
                  />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
