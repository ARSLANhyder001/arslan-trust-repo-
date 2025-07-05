import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Transaction {
  id: number;
  project: string;
  date: string;
  amount: number;
  return: string;
  status: string;
}

interface DashboardWidgetProps {
  transactions: Transaction[];
}

export default function DashboardWidget({ transactions }: DashboardWidgetProps) {
  const statusColors = {
    ACTIVE: "bg-light-mint text-navy",
    FUNDING: "bg-electric-violet text-white",
    COMPLETE: "bg-neon-cyan text-navy",
  };

  return (
    <motion.div
      className="glass-card rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="p-6 border-b border-gray-700">
        <h3 className="font-orbitron font-bold text-xl text-white">Recent Transactions</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-800/50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Project</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Date</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Amount</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Return %</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {transactions.map((transaction, index) => (
              <motion.tr
                key={transaction.id}
                className="hover:bg-gray-800/30 transition-colors duration-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <td className="px-6 py-4 text-white">{transaction.project}</td>
                <td className="px-6 py-4 text-gray-300">{transaction.date}</td>
                <td className="px-6 py-4 text-white">${transaction.amount.toLocaleString()}</td>
                <td className="px-6 py-4 text-light-mint">{transaction.return}</td>
                <td className="px-6 py-4">
                  <Badge className={statusColors[transaction.status as keyof typeof statusColors]}>
                    {transaction.status}
                  </Badge>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
