import React from 'react';
import SidebarProvider, { useSidebar } from '@/components/dashboard/SidebarContext';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import DashboardContent from '@/components/dashboard/DashboardContent';

const DashboardLayout = () => {
  const { isCollapsed, isMobile } = useSidebar();
  
  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      {/* Main layout */}
      <Sidebar />
      <div className={`transition-all duration-300 ${
        isMobile ? 'ml-0' : isCollapsed ? 'ml-20' : 'ml-[280px]'
      }`}>
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <SidebarProvider>
      <DashboardLayout />
    </SidebarProvider>
  );
};

export default Dashboard;