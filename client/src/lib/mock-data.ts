export interface DashboardStats {
  totalInvested: number;
  monthlyReturns: number;
  activeProjects: number;
  totalProjects: number;
  avgROI: string;
}

export interface ChartData {
  name: string;
  value: number;
  color: string;
}

export const mockChartData: ChartData[] = [
  { name: 'Dubai Marina', value: 35, color: '#22d3ee' },
  { name: 'Singapore Hub', value: 25, color: '#9333ea' },
  { name: 'London Tech', value: 20, color: '#10b981' },
  { name: 'Other Projects', value: 20, color: '#64748b' },
];

export const mockRecentTransactions = [
  {
    id: 1,
    project: 'Dubai Marina Tower',
    date: '2024-01-15',
    amount: 5000,
    return: '+12.5%',
    status: 'ACTIVE'
  },
  {
    id: 2,
    project: 'Singapore Business Hub',
    date: '2024-01-10',
    amount: 7500,
    return: '+14.2%',
    status: 'FUNDING'
  },
  {
    id: 3,
    project: 'London Tech District',
    date: '2024-01-05',
    amount: 12000,
    return: '+11.8%',
    status: 'COMPLETE'
  },
];

export const faqData = [
  {
    id: 1,
    question: "Is SAIR REIT truly Sharia-compliant?",
    answer: "Yes, SAIR REIT is certified by leading Islamic finance scholars and operates under strict Sharia principles. We ensure all investments are asset-backed, interest-free, and transparent in profit-sharing."
  },
  {
    id: 2,
    question: "What is the minimum investment amount?",
    answer: "The minimum investment varies by project, starting from $1,000 for most opportunities. This low barrier makes premium real estate investment accessible to a broader range of investors."
  },
  {
    id: 3,
    question: "How often are returns distributed?",
    answer: "Returns are distributed monthly through automated smart contracts. You'll receive your share of rental income and any appreciation gains directly to your wallet or bank account."
  },
  {
    id: 4,
    question: "Can I withdraw my investment early?",
    answer: "While real estate investments are typically long-term, we offer a secondary market where you can sell your shares to other investors. Liquidity options vary by project term and market conditions."
  },
];

export const philosophyTabs = [
  {
    id: 'halal',
    title: 'Halal Principles',
    content: {
      heading: 'Sharia-Compliant Investments',
      points: [
        'No interest-based transactions (Riba-free)',
        'Asset-backed investments in tangible real estate',
        'Transparent profit-sharing based on actual returns',
        'Certified by leading Islamic finance scholars'
      ],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400'
    }
  },
  {
    id: 'risk',
    title: 'Risk Management',
    content: {
      heading: 'Advanced Risk Management',
      points: [
        'Diversified portfolio across multiple markets',
        'AI-powered market analysis and forecasting',
        'Professional due diligence on every property',
        'Insurance coverage and contingency reserves'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400'
    }
  },
  {
    id: 'profit',
    title: 'Profit Model',
    content: {
      heading: 'Transparent Profit Model',
      points: [
        '80% of profits distributed to investors',
        'Monthly dividend payments via smart contracts',
        'Capital appreciation through property value growth',
        'Real-time profit tracking and reporting'
      ],
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400'
    }
  }
];
