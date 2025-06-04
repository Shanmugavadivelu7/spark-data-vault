
import React from 'react';
import { 
  Home, 
  Wrench, 
  Plus, 
  Users, 
  CheckCircle, 
  FileText, 
  AlertTriangle,
  Settings
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'my-repairs', label: 'My Repairs', icon: Wrench },
    { id: 'new-repair', label: 'New Repair', icon: Plus },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'completed', label: 'Completed', icon: CheckCircle },
    { id: 'new-tickets', label: 'New Tickets', icon: FileText, color: 'text-blue-400' },
    { id: 'under-repair', label: 'Under Repair', icon: AlertTriangle, color: 'text-orange-400' },
    { id: 'ready-pickup', label: 'Ready for Pickup', icon: CheckCircle, color: 'text-green-400' },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="flex items-center mb-8">
        <Settings className="w-6 h-6 mr-2" />
        <h1 className="text-xl font-bold">3D Printer Repair</h1>
      </div>
      
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <Icon className={`w-5 h-5 mr-3 ${item.color || ''}`} />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
