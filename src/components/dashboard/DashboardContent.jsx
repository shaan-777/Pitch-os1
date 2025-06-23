import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Activity,
  BarChart3,
  Bell,
  Settings,
  Loader2
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert } from '@/components/ui/alert';
import { useSidebar } from './SidebarContext';
import StatCard from './StatCard';

const DashboardContent = () => {
  const { isCollapsed, isMobile } = useSidebar();
  const [dashboardState, setDashboardState] = useState({
    isLoading: true,
    hasError: false,
    isEmpty: false
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDashboardState({
        isLoading: false,
        hasError: false,
        isEmpty: false
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231.89',
      change: '+20.1% from last month',
      icon: <DollarSign className="w-6 h-6 text-primary" />
    },
    {
      title: 'Orders',
      value: '2,350',
      change: '+15.3% from last month',
      icon: <ShoppingCart className="w-6 h-6 text-primary" />
    },
    {
      title: 'Active Users',
      value: '12,234',
      change: '+8.2% from last month',
      icon: <Users className="w-6 h-6 text-primary" />
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: '+2.1% from last month',
      icon: <Activity className="w-6 h-6 text-primary" />
    }
  ];

  if (dashboardState.hasError) {
    return (
      <div className="p-6">
        <Alert className="border-destructive">
          <AlertCircle className="h-4 w-4" />
          <div>
            <h4 className="font-semibold">Error loading dashboard</h4>
            <p className="text-sm text-muted-foreground">
              Unable to load dashboard data. Please try again later.
            </p>
          </div>
        </Alert>
      </div>
    );
  }

  if (dashboardState.isEmpty) {
    return (
      <div className="p-6 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <BarChart3 className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No data available</h3>
          <p className="text-muted-foreground">
            Start by adding some data to see your dashboard analytics.
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 md:p-6 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
            isLoading={dashboardState.isLoading}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          {dashboardState.isLoading ? (
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="w-8 h-8 rounded-full" />
                  <div className="flex-1 space-y-1">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {[
                { action: 'New user registered', time: '2 minutes ago', status: 'success' },
                { action: 'Order #1234 completed', time: '5 minutes ago', status: 'success' },
                { action: 'Payment failed for order #1235', time: '10 minutes ago', status: 'error' },
                { action: 'New product added', time: '15 minutes ago', status: 'info' },
                { action: 'System backup completed', time: '1 hour ago', status: 'success' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.status === 'success' ? 'bg-green-500' :
                    activity.status === 'error' ? 'bg-red-500' : 'bg-blue-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          {dashboardState.isLoading ? (
            <div className="grid grid-cols-2 gap-3">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-20 rounded-lg" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Add User', icon: <Users className="w-5 h-5" /> },
                { label: 'Create Report', icon: <BarChart3 className="w-5 h-5" /> },
                { label: 'Send Message', icon: <Bell className="w-5 h-5" /> },
                { label: 'View Settings', icon: <Settings className="w-5 h-5" /> }
              ].map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-20 flex-col gap-2 hover:bg-accent"
                >
                  {action.icon}
                  <span className="text-xs">{action.label}</span>
                </Button>
              ))}
            </div>
          )}
        </Card>
      </div>

      {dashboardState.isLoading && (
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span className="text-sm text-muted-foreground">Loading dashboard data...</span>
          </div>
        </Card>
      )}
    </motion.div>
  );
};

export default DashboardContent;