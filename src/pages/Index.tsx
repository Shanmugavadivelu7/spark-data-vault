
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import NewRepairForm from '../components/NewRepairForm';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'new-repair':
        return <NewRepairForm />;
      case 'my-repairs':
        return (
          <div className="flex-1 bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">My Repairs</h1>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-gray-600">My repairs content will be implemented here.</p>
              </div>
            </div>
          </div>
        );
      case 'customers':
        return (
          <div className="flex-1 bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Customers</h1>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-gray-600">Customer management content will be implemented here.</p>
              </div>
            </div>
          </div>
        );
      case 'completed':
        return (
          <div className="flex-1 bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Completed Repairs</h1>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-gray-600">Completed repairs content will be implemented here.</p>
              </div>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      {renderContent()}
    </div>
  );
};

export default Index;
