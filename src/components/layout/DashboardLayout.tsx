import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Joyride, { Step } from 'react-joyride';
import { useAuth } from '../../context/AuthContext';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

export const DashboardLayout: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth();

  // 🔹 Joyride state
  const [runTour, setRunTour] = useState(true);

  const steps: Step[] = [
    {
      target: 'body',
      content: ' Welcome! This is your main dashboard.',
      placement: 'center',
    },
    {
      target: '.sidebar',
      content: ' Use this sidebar to navigate between modules.',
    },
    {
      target: '.navbar',
      content: ' Here you can access notifications and profile options.',
    },
    {
      target: '.dashboard-content',
      content: ' This area shows your main content and data.',
    },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      {/*  Guided Tour */}
      <Joyride
        steps={steps}
        run={runTour}
        continuous
        showSkipButton
        showProgress
        styles={{
          options: {
            zIndex: 10000,
          },
        }}
      />

      <div className="navbar">
        <Navbar />
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="sidebar">
          <Sidebar />
        </div>

        <main className="flex-1 overflow-y-auto p-6 dashboard-content">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};



