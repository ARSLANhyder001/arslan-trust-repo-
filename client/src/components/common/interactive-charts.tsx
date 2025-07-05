import { motion } from "framer-motion";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from "recharts";

interface PortfolioData {
  name: string;
  value: number;
  color: string;
}

interface PerformanceData {
  month: string;
  returns: number;
  investment: number;
}

interface ProjectData {
  name: string;
  funded: number;
  target: number;
  roi: number;
}

interface InteractiveChartsProps {
  portfolioData: PortfolioData[];
  performanceData: PerformanceData[];
  projectData: ProjectData[];
}

export default function InteractiveCharts({ portfolioData, performanceData, projectData }: InteractiveChartsProps) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-card p-3 rounded-lg border border-neon-cyan/30">
          <p className="text-white font-semibold">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-neon-cyan">
              {entry.name}: {typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}
              {entry.name.includes('returns') || entry.name.includes('ROI') ? '%' : ''}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        className="text-xs font-semibold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Portfolio Allocation Pie Chart */}
      <motion.div
        className="glass-card p-6 rounded-xl"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="font-orbitron font-bold text-xl mb-6 text-white">
          Portfolio Allocation
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={portfolioData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {portfolioData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-4 space-y-2">
          {portfolioData.map((item, index) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-gray-300">{item.name}</span>
              </div>
              <span className="font-semibold text-white">{item.value}%</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Performance Over Time Line Chart */}
      <motion.div
        className="glass-card p-6 rounded-xl"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h3 className="font-orbitron font-bold text-xl mb-6 text-white">
          Returns Performance
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={performanceData}>
            <defs>
              <linearGradient id="colorReturns" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#22d3ee" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="month" 
              stroke="#9ca3af"
              tick={{ fill: '#9ca3af' }}
            />
            <YAxis 
              stroke="#9ca3af"
              tick={{ fill: '#9ca3af' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="returns"
              stroke="#22d3ee"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorReturns)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Project Funding Progress Bar Chart */}
      <motion.div
        className="glass-card p-6 rounded-xl lg:col-span-2"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3 className="font-orbitron font-bold text-xl mb-6 text-white">
          Project Funding Progress
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={projectData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="name" 
              stroke="#9ca3af"
              tick={{ fill: '#9ca3af' }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis 
              stroke="#9ca3af"
              tick={{ fill: '#9ca3af' }}
              tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
            />
            <Tooltip 
              content={<CustomTooltip />}
              formatter={(value: any, name: string) => [
                name === 'funded' ? `$${(value / 1000000).toFixed(1)}M` : 
                name === 'target' ? `$${(value / 1000000).toFixed(1)}M` : `${value}%`,
                name === 'funded' ? 'Funded' : 
                name === 'target' ? 'Target' : 'ROI'
              ]}
            />
            <Bar dataKey="funded" fill="#22d3ee" radius={[4, 4, 0, 0]} />
            <Bar dataKey="target" fill="#9333ea" radius={[4, 4, 0, 0]} opacity={0.6} />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 flex justify-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-neon-cyan rounded"></div>
            <span className="text-gray-300">Funded Amount</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-electric-violet opacity-60 rounded"></div>
            <span className="text-gray-300">Target Amount</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}