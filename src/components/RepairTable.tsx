
import React from 'react';
import { Eye, ArrowRight } from 'lucide-react';

interface Repair {
  id: string;
  customer: string;
  printer: string;
  status: string;
  created: string;
  updated: string;
}

interface RepairTableProps {
  repairs: Repair[];
}

const RepairTable = ({ repairs }: RepairTableProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'in progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'ready for pickup':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">My Active Repairs</h3>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          View All
        </button>
      </div>
      
      {repairs.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Printer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Updated
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {repairs.map((repair) => (
                <tr key={repair.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {repair.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {repair.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {repair.printer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(repair.status)}`}>
                      {repair.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {repair.created}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {repair.updated}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="bg-green-500 hover:bg-green-600 text-white p-1 rounded">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="px-6 py-8 text-center text-gray-500">
          No active repairs assigned to you.
        </div>
      )}
    </div>
  );
};

export default RepairTable;
