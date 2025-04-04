
import React from 'react';
import { Bell, BarChart2, Search, Settings, Shield, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Header = ({ alertCount = 3 }: { alertCount?: number }) => {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-gray-800 bg-siem-dark glassmorphism">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <BarChart2 className="h-8 w-8 text-siem-blue mr-2" />
            <h1 className="text-xl font-bold">ElasticSIEM</h1>
          </div>
          <Badge variant="outline" className="hidden md:flex bg-green-500/20 text-green-500">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              Monitoring Active
            </span>
          </Badge>
        </div>
        
        <div className="flex-1 mx-8">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search logs, alerts, or devices..."
              className="w-full bg-background pl-8 focus-visible:ring-siem-blue"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              {alertCount > 0 && (
                <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-destructive p-0 text-[10px] text-destructive-foreground flex items-center justify-center">
                  {alertCount}
                </Badge>
              )}
            </Button>
          </div>
          <Button variant="ghost" size="icon">
            <Shield className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full bg-gray-800">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Admin Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Security Settings</DropdownMenuItem>
              <DropdownMenuItem>Block Management</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
