import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  BarChart3, 
  Users, 
  Settings, 
  Bell,
  ChevronLeft, 
  ChevronRight,
  Activity,
  HomeIcon,
  LayoutDashboard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useSidebar } from './SidebarContext';
import NavItem from './NavItem';
import Dashboard from '@/pages/Dashboard';

const Sidebar = () => {
  const { isCollapsed, setIsCollapsed, isMobile } = useSidebar();
  const [activeItem, setActiveItem] = React.useState('dashboard');

  const navItems = [
    { id: 'dashboard', icon: <LayoutDashboard />, label: 'Dashboard' },
    { id: 'analytics', icon: <BarChart3 />, label: 'Analytics' },
    { id: 'users', icon: <Users />, label: 'Users', badge: '12' },
    { id: 'notifications', icon: <Bell />, label: 'Notifications', badge: '3' },
    { id: 'settings', icon: <Settings />, label: 'Settings' },
    { id: 'Back to home', icon: <Home />, label: 'Back To WebHome' },
  ];

  const handleClose = () => {
    if (isMobile) {
      setIsCollapsed(true);
    }
  };

  return (
    <>
      {isMobile && !isCollapsed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-[49]"
          onClick={() => setIsCollapsed(true)}
        />
      )}

      <motion.aside
        initial={false}
        animate={{
          width: isCollapsed ? (isMobile ? 0 : 80) : 280,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`
          fixed left-0 top-0 md:top-16 h-screen md:h-[calc(100vh-4rem)]
          bg-background border-r border-border z-50
          flex flex-col overflow-hidden
          ${isMobile ? 'shadow-xl w-[280px]' : ''}
        `}
      >
        <div className="p-3 sm:p-4 border-b border-border">
          <div className="flex items-center justify-between">
            <AnimatePresence>
              {!isCollapsed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Activity className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-bold text-lg">Dashboard</span>
                </motion.div>
              )}
            </AnimatePresence>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2"
              aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
            </Button>
          </div>
        </div>

        <nav className="flex-1 p-3 sm:p-4 space-y-2">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              isActive={activeItem === item.id}
              badge={item.badge}
              onClick={() => {
                setActiveItem(item.id);
                handleClose();
              }}
            />
          ))}
        </nav>

        {/* Removed avatar section */}
      </motion.aside>
    </>
  );
};

export default Sidebar;