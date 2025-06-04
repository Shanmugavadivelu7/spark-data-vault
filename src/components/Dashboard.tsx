
import React, { useState } from 'react';
import { FileText, Wrench, CheckCircle, Trophy, RefreshCw } from 'lucide-react';
import StatCard from './StatCard';
import PriorityRepairs from './PriorityRepairs';
import RepairTable from './RepairTable';

const Dashboard = () => {
  const [refreshing, setRefreshing] = useState(false);

  // Mock data
  const stats = [
    { title: 'MY NEW TICKETS', count: 0, icon: FileText, color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { title: 'IN PROGRESS', count: 0, icon: Wrench, color: 'text-orange-600', bgColor: 'bg-orange-50' },
    { title: 'READY FOR PICKUP', count: 0, icon: CheckCircle, color: 'text-green-600', bgColor: 'bg-green-50' },
    { title: 'COMPLETED THIS WEEK', count: 0, icon: Trophy, color: 'text-purple-600', bgColor: 'bg-purple-50' },
  ];

  const priorityRepairs = [
    { id: 'R_0031', customer: 'John Doe', daysOverdue: 3 },
  ];

  const activeRepairs = [
    {
      id: 'R_0045',
      customer: 'Jane Smith',
      printer: 'Ender 3 Pro',
      status: 'In Progress',
      created: '2024-06-01',
      updated: '2024-06-03',
    },
    {
      id: 'R_0044',
      customer: 'Mike Johnson',
      printer: 'Prusa i3 MK3S',
      status: 'Ready for Pickup',
      created: '2024-05-28',
      updated: '2024-06-02',
    },
  ];

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  return (
    <div className="flex-1 bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Technician Dashboard</h1>
          <div className="flex space-x-3">
            <button
              onClick={handleRefresh}
              className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              + New Repair
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              count={stat.count}
              icon={stat.icon}
              color={stat.color}
              bgColor={stat.bgColor}
            />
          ))}
        </div>

        {/* Priority Repairs */}
        <PriorityRepairs repairs={priorityRepairs} />

        {/* Active Repairs Table */}
        <RepairTable repairs={activeRepairs} />
      </div>
    </div>
  );
};

export default Dashboard;
