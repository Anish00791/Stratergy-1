import React from 'react';
import { 
  BarChart3, 
  Users, 
  Target, 
  Rocket, 
  Globe,
  Menu,
  ChevronRight,
  Brain
} from 'lucide-react';

const menuItems = [
  { icon: Brain, label: 'AI Recommendations', path: '#ai-recommendations' },
  { icon: BarChart3, label: 'Market Analysis', path: '#market-analysis' },
  { icon: Users, label: 'Customer Discovery', path: '#customer-discovery' },
  { icon: Target, label: 'Competitive Intel', path: '#competitive-intel' },
  { icon: Rocket, label: 'Product Evolution', path: '#product-evolution' },
  { icon: Globe, label: 'Market Expansion', path: '#market-expansion' },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div className={`bg-navy-900 dark:bg-gray-800 text-white dark:text-gray-300 transition-all duration-300 ${
      collapsed ? 'w-16' : 'w-64'
    } min-h-screen fixed left-0 top-0`}>
      <div className="p-4 flex items-center justify-between">
        {!collapsed && (
          <span className="text-xl font-bold">StrategyAI</span>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 hover:bg-navy-800 dark:hover:bg-gray-700 rounded-lg"
        >
          {collapsed ? <ChevronRight size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav className="mt-8">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.path}
            className="flex items-center px-4 py-3 text-gray-300 dark:text-gray-500 hover:bg-navy-800 dark:hover:bg-gray-700 hover:text-white transition-colors"
          >
            <item.icon size={20} />
            {!collapsed && <span className="ml-3">{item.label}</span>}
          </a>
        ))}
      </nav>
    </div>
  );
}