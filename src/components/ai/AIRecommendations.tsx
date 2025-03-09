
import React, { useState } from 'react';
import { Brain, TrendingUp, Users, Zap, RefreshCw } from 'lucide-react';

interface Recommendation {
  id: string;
  category: 'market' | 'competitive' | 'product';
  title: string;
  description: string;
  confidence: number;
  impact: 'high' | 'medium' | 'low';
}

export default function AIRecommendations() {
  const [loading, setLoading] = useState(false);
  
  const mockRecommendations: Recommendation[] = [
    {
      id: '1',
      category: 'market',
      title: 'Expand into European Market',
      description: 'Based on market growth trends and low competitor saturation, expanding into European markets could yield a 15-20% revenue increase within 12 months.',
      confidence: 87,
      impact: 'high'
    },
    {
      id: '2',
      category: 'competitive',
      title: 'Adjust Pricing Strategy',
      description: 'Competitor analysis shows your pricing is 12% higher than market average. A slight reduction could increase conversion rates by up to 8%.',
      confidence: 92,
      impact: 'medium'
    },
    {
      id: '3',
      category: 'product',
      title: 'Prioritize Mobile Experience',
      description: 'User data indicates 68% of your traffic comes from mobile devices, but conversion rate is 23% lower than desktop. Optimizing mobile UX could significantly improve performance.',
      confidence: 95,
      impact: 'high'
    }
  ];

  const [recommendations, setRecommendations] = useState<Recommendation[]>(mockRecommendations);

  const refreshRecommendations = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'market':
        return <TrendingUp className="text-green-500" size={20} />;
      case 'competitive':
        return <Users className="text-blue-500" size={20} />;
      case 'product':
        return <Zap className="text-purple-500" size={20} />;
      default:
        return <Brain className="text-navy-500" size={20} />;
    }
  };

  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case 'high':
        return <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">High Impact</span>;
      case 'medium':
        return <span className="text-xs font-medium px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">Medium Impact</span>;
      case 'low':
        return <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">Low Impact</span>;
      default:
        return null;
    }
  };

  return (
    <div className="card space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Brain size={24} className="text-navy-600" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">AI-Powered Recommendations</h3>
        </div>
        <button 
          className="btn-primary flex items-center space-x-2"
          onClick={refreshRecommendations}
          disabled={loading}
        >
          {loading ? (
            <RefreshCw size={16} className="animate-spin" />
          ) : (
            <RefreshCw size={16} />
          )}
          <span>Refresh Insights</span>
        </button>
      </div>
      
      <div className="space-y-4">
        {recommendations.map(rec => (
          <div key={rec.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center space-x-2">
                {getCategoryIcon(rec.category)}
                <h4 className="font-medium text-gray-900 dark:text-white">{rec.title}</h4>
              </div>
              {getImpactBadge(rec.impact)}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{rec.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500 dark:text-gray-400">Confidence</span>
                <div className="bg-gray-200 dark:bg-gray-600 h-2 w-24 rounded-full overflow-hidden">
                  <div 
                    className="bg-navy-500 h-full" 
                    style={{ width: `${rec.confidence}%` }}
                  ></div>
                </div>
                <span className="text-xs font-medium">{rec.confidence}%</span>
              </div>
              <button className="text-xs text-navy-600 dark:text-navy-300 hover:underline">
                Apply Recommendation
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
