import React from 'react';
import { Bell, Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 z-10 ml-64 transition-colors">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center bg-gray-50 dark:bg-gray-700 rounded-lg px-3 py-2 w-96 transition-colors">
          <Search size={18} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search markets, competitors, strategies..."
            className="bg-transparent outline-none w-full text-sm dark:text-gray-200 transition-colors"
          />
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button className="relative p-2 rounded-full bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
            <Bell size={18} className="text-gray-600 dark:text-gray-300" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium dark:text-gray-200">Jane Cooper</span>
            <div className="w-8 h-8 rounded-full bg-navy-600 text-white flex items-center justify-center text-sm font-medium">
              JC
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}