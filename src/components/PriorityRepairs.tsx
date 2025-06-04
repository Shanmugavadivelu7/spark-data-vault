
import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface PriorityRepair {
  id: string;
  customer: string;
  daysOverdue: number;
}

interface PriorityRepairsProps {
  repairs: PriorityRepair[];
}

const PriorityRepairs = ({ repairs }: PriorityRepairsProps) => {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
      <div className="flex items-center mb-4">
        <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
        <h3 className="text-lg font-semibold text-yellow-800">Priority Repairs</h3>
      </div>
      
      <p className="text-sm text-yellow-700 mb-4">
        The following repairs require immediate attention:
      </p>
      
      {repairs.length > 0 ? (
        <ul className="space-y-2">
          {repairs.map((repair) => (
            <li key={repair.id} className="flex items-center justify-between">
              <span className="text-sm text-yellow-800">
                {repair.customer} ({repair.id})
              </span>
              <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                {repair.daysOverdue} days overdue
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-yellow-700">No priority repairs at this time.</p>
      )}
    </div>
  );
};

export default PriorityRepairs;
