import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { useSidebar } from './SidebarContext';

const NavItem = ({ 
  icon, 
  label, 
  isActive = false, 
  badge,
  onClick 
}) => {
  const { isCollapsed } = useSidebar();

  return (
    <motion.button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left
        transition-colors duration-200 group relative
        ${isActive 
          ? 'bg-primary text-primary-foreground' 
          : 'text-muted-foreground hover:text-foreground hover:bg-accent'
        }
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label={label}
    >
      <span className="flex-shrink-0 w-5 h-5">
        {icon}
      </span>
      
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-between flex-1 overflow-hidden"
          >
            <span className="font-medium truncate">{label}</span>
            {badge && (
              <Badge variant="secondary" className="ml-2 text-xs">
                {badge}
              </Badge>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {isCollapsed && badge && (
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
      )}
    </motion.button>
  );
};

export default NavItem;