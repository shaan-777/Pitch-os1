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
  const { isCollapsed, isMobile } = useSidebar();
  
  // Determine if content should be visible (text and badge)
  // On mobile: show content when sidebar is NOT collapsed (when it's open)
  // On desktop: show content when sidebar is NOT collapsed
  const showContent = !isCollapsed;

  return (
    <motion.button
      onClick={onClick}
      className={`
        w-full flex items-center gap-2 sm:gap-3 
        px-2 sm:px-3 py-2 sm:py-2.5 
        rounded-lg text-left text-sm sm:text-base
        transition-colors duration-200 group relative
        ${isActive 
          ? 'bg-primary text-primary-foreground' 
          : 'text-muted-foreground hover:text-foreground hover:bg-accent'
        }
      `}
      whileHover={{ scale: isMobile ? 1 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label={label}
    >
      <span className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5">
        {icon}
      </span>
      
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-between flex-1 overflow-hidden"
          >
            <span className="font-medium truncate text-sm sm:text-base">{label}</span>
            {badge && (
              <Badge variant="secondary" className="ml-2 text-xs px-1.5 py-0.5">
                {badge}
              </Badge>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Badge dot for collapsed state */}
      {isCollapsed && badge && !isMobile && (
        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary rounded-full" />
      )}
    </motion.button>
  );
};

export default NavItem;