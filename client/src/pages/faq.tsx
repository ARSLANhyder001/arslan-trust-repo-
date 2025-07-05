import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { faqData } from "@/lib/mock-data";
import GlowingButton from "@/components/common/glowing-button";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-orbitron font-bold text-4xl md:text-6xl mb-6 glow-text">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300">
            Get answers to common questions about SAIR REIT and our investment platform.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-6 mb-16">
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              className="glass-card rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-800/30 transition-colors duration-200"
                onClick={() => toggleItem(item.id)}
              >
                <span className="font-semibold text-lg pr-4">{item.question}</span>
                <motion.div
                  animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-6 h-6 flex-shrink-0" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openItems.includes(item.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          className="glass-card p-8 rounded-xl text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <MessageCircle className="w-16 h-16 text-neon-cyan mx-auto mb-6" />
          <h3 className="font-orbitron font-bold text-2xl mb-4 text-white">
            Still Have Questions?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our investment advisors are here to help. Get personalized answers to your questions 
            about Sharia-compliant real estate investing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlowingButton variant="primary">
              Schedule a Call
            </GlowingButton>
            <GlowingButton variant="outline">
              Email Support
            </GlowingButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
