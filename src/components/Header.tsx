
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell, BarChart2, Search, Settings, Shield, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger 
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

const Header = ({ alertCount = 3 }: { alertCount?: number }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [open, setOpen] = React.useState(false);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const query = formData.get('search') as string;
    
    if (query) {
      toast({
        title: "Search",
        description: `Searching for "${query}"...`,
      });
    }
  };
  
  const handleAlertClick = () => {
    navigate('/alerts');
  };
  
  const handleSecurityClick = () => {
    navigate('/security');
  };
  
  const handleSettingsClick = () => {
    navigate('/settings');
  };

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been logged out of the system.",
    });
  };

  return (
    <header className="sticky top-0 z-30 w-full border-b border-gray-800 bg-siem-dark glassmorphism">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center">
            <BarChart2 className="h-8 w-8 text-siem-blue mr-2" />
            <h1 className="text-xl font-bold">ElasticSIEM</h1>
          </Link>
          <Badge variant="outline" className="hidden md:flex bg-green-500/20 text-green-500">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              Monitoring Active
            </span>
          </Badge>
        </div>
        
        <div className="flex-1 mx-8">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                name="search"
                placeholder="Search logs, alerts, or devices..."
                className="w-full bg-background pl-8 focus-visible:ring-siem-blue"
              />
            </div>
          </form>
        </div>
        
        <div className="flex items-center space-x-4">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="relative" onClick={handleAlertClick}>
                <Bell className="h-5 w-5" />
                {alertCount > 0 && (
                  <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-destructive p-0 text-[10px] text-destructive-foreground flex items-center justify-center">
                    {alertCount}
                  </Badge>
                )}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Notifications</DialogTitle>
                <DialogDescription>
                  You have {alertCount} unread notifications.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-2 mt-2">
                <div className="p-3 bg-card/60 rounded-md border border-border">
                  <div className="font-medium text-sm">Critical Alert: Possible Intrusion Attempt</div>
                  <div className="text-xs text-muted-foreground">3 minutes ago</div>
                </div>
                <div className="p-3 bg-card/60 rounded-md border border-border">
                  <div className="font-medium text-sm">New Device Connected: iPhone</div>
                  <div className="text-xs text-muted-foreground">12 minutes ago</div>
                </div>
                <div className="p-3 bg-card/60 rounded-md border border-border">
                  <div className="font-medium text-sm">High Network Traffic Detected</div>
                  <div className="text-xs text-muted-foreground">25 minutes ago</div>
                </div>
              </div>
              <div className="mt-2 text-center">
                <Button variant="link" onClick={() => {
                  setOpen(false);
                  navigate('/alerts');
                }}>
                  View All Alerts
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          
          <Button variant="ghost" size="icon" onClick={handleSecurityClick}>
            <Shield className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" onClick={handleSettingsClick}>
            <Settings className="h-5 w-5" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full bg-gray-800">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-siem-dark border-gray-700">
              <DropdownMenuLabel>Admin Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate('/settings?tab=account')}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/settings?tab=security')}>
                Security Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/devices')}>
                Block Management
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
