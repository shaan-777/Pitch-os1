import React from 'react';
import { Menu, Bell, Search, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { useSidebar } from './SidebarContext';

const Header = () => {
  const { isMobile, setIsCollapsed } = useSidebar();

  return (
    <header className="bg-background border-b border-border p-3 sm:p-4 md:p-6 sticky top-0 md:top-16 z-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {isMobile && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(false)}
              className="md:hidden"
            >
              <Menu />
            </Button>
          )}
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Dashboard</h1>
            <p className="text-sm text-muted-foreground">Welcome back!</p>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-10 w-64"
            />
          </div>
          
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;