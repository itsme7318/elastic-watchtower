
import React from 'react';
import { format, parseISO } from 'date-fns';
import { Laptop, Smartphone, Tablet, Monitor, HardDrive, ShieldAlert } from 'lucide-react';
import { useSIEM } from '@/contexts/SIEMContext';
import { Device } from '@/lib/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const RecentConnectionsWidget: React.FC = () => {
  const { recentConnections, blockDevice } = useSIEM();

  const getDeviceIcon = (type: Device['type']) => {
    switch (type) {
      case 'laptop':
        return <Laptop className="h-4 w-4" />;
      case 'phone':
        return <Smartphone className="h-4 w-4" />;
      case 'tablet':
        return <Tablet className="h-4 w-4" />;
      case 'desktop':
        return <Monitor className="h-4 w-4" />;
      default:
        return <HardDrive className="h-4 w-4" />;
    }
  };

  if (recentConnections.length === 0) {
    return null;
  }

  return (
    <Card className="border-orange-500/20">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <ShieldAlert className="h-5 w-5 text-orange-500" />
          Recent Connections
        </CardTitle>
        <CardDescription>
          New devices that have connected to your network
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentConnections.map((device) => (
            <div key={device.id} className="flex items-center justify-between p-2 rounded-md bg-card/60 border border-border">
              <div className="flex items-center gap-2">
                {getDeviceIcon(device.type)}
                <div>
                  <div className="font-medium">{device.name}</div>
                  <div className="text-xs text-muted-foreground">{device.ip} • {device.os}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-green-500/20 text-green-500">
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    New
                  </span>
                </Badge>
                <div className="text-xs text-muted-foreground">
                  {format(parseISO(device.lastSeen), 'h:mm a')}
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-red-500 hover:text-red-700 hover:bg-red-100/10"
                  onClick={() => blockDevice(device.id, device.name)}
                >
                  Block
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentConnectionsWidget;
