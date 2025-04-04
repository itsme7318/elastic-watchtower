
import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Device, getAlertsForDevice } from '@/lib/mockData';
import { Laptop, Smartphone, Tablet, Monitor, HardDrive, Activity, ShieldOff, Shield, ExternalLink } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';

interface DevicesTableProps {
  devices: Device[];
  limit?: number;
}

const DevicesTable: React.FC<DevicesTableProps> = ({ devices, limit }) => {
  const { toast } = useToast();
  const displayDevices = limit ? devices.slice(0, limit) : devices;
  const [blockedDevices, setBlockedDevices] = useState<string[]>([]);

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

  const toggleDeviceBlock = (deviceId: string, deviceName: string) => {
    if (blockedDevices.includes(deviceId)) {
      setBlockedDevices(blockedDevices.filter(id => id !== deviceId));
      toast({
        title: "Device Unblocked",
        description: `${deviceName} has been unblocked and can now access the network.`,
        variant: "default",
      });
    } else {
      setBlockedDevices([...blockedDevices, deviceId]);
      toast({
        title: "Device Blocked",
        description: `${deviceName} has been blocked from accessing the network.`,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="rounded-md border border-gray-800">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Device</TableHead>
            <TableHead>IP Address</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Seen</TableHead>
            <TableHead>OS</TableHead>
            <TableHead>Traffic</TableHead>
            <TableHead>Alerts</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayDevices.map((device) => {
            const alerts = getAlertsForDevice(device.id);
            const activeAlerts = alerts.filter(a => a.status !== 'resolved').length;
            const isBlocked = blockedDevices.includes(device.id);
            
            return (
              <TableRow key={device.id} className={`hover:bg-siem-dark-accent ${isBlocked ? 'bg-red-900/10 border-l-2 border-l-red-500' : ''}`}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getDeviceIcon(device.type)}
                    <span className="font-medium">{device.name}</span>
                    {isBlocked && <Badge variant="outline" className="bg-red-500/20 text-red-500">Blocked</Badge>}
                  </div>
                </TableCell>
                <TableCell>{device.ip}</TableCell>
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={isBlocked ? 'bg-red-500/20 text-red-500' : device.status === 'online' 
                      ? 'bg-green-500/20 text-green-500' 
                      : 'bg-gray-500/20 text-gray-400'
                    }
                  >
                    {isBlocked 
                      ? 'Blocked'
                      : device.status === 'online' 
                        ? <span className="flex items-center gap-1">
                            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse-slow"></span>
                            Online
                          </span>
                        : 'Offline'
                    }
                  </Badge>
                </TableCell>
                <TableCell>
                  {format(parseISO(device.lastSeen), 'MMM d, h:mm a')}
                </TableCell>
                <TableCell>{device.os}</TableCell>
                <TableCell>
                  {device.status === 'online' && !isBlocked
                    ? <div className="flex items-center gap-2">
                        <span>{`${device.trafficUsage} MB`}</span> 
                        <Activity className="h-3 w-3 text-green-500" />
                      </div>
                    : <span className="text-gray-500">-</span>
                  }
                </TableCell>
                <TableCell>
                  {activeAlerts > 0 ? (
                    <Badge className="bg-red-500 hover:bg-red-600">
                      {activeAlerts}
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-transparent border-gray-700">
                      0
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        Actions
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Device Controls</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Activity className="h-4 w-4 mr-2" />
                        View Traffic
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => toggleDeviceBlock(device.id, device.name)}>
                        {isBlocked ? (
                          <>
                            <Shield className="h-4 w-4 mr-2 text-green-500" />
                            Unblock Device
                          </>
                        ) : (
                          <>
                            <ShieldOff className="h-4 w-4 mr-2 text-red-500" />
                            Block Device
                          </>
                        )}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default DevicesTable;
