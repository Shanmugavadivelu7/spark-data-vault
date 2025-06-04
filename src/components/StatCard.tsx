
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  count: number;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

const StatCard = ({ title, count, icon: Icon, color, bgColor }: StatCardProps) => {
  return (
    <div className={`${bgColor} rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow`}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
            {title}
          </h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">{count}</p>
        </div>
        <div className={`${color} p-3 rounded-full bg-opacity-20`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
