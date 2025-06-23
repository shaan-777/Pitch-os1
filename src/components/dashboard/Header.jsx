import React from 'react';
import { Menu, Bell, Search, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { useSidebar } from './SidebarContext';

const Header = () => {
  const { isMobile, setIsCollapsed } = useSidebar();

  return (
    <header className="bg-background border-b border-border p-4 md:p-6 sticky top-16 z-30">
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
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's your overview.</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
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

          <Avatar className="w-8 h-8">
            <div className="w-full h-full bg-primary/10 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;