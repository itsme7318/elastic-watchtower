
import React from 'react';
import { format, parseISO } from 'date-fns';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Device, getAlertsForDevice } from '@/lib/mockData';
import { Laptop, Smartphone, Tablet, Monitor, HardDrive } from 'lucide-react';

interface DevicesTableProps {
  devices: Device[];
  limit?: number;
}

const DevicesTable: React.FC<DevicesTableProps> = ({ devices, limit }) => {
  const displayDevices = limit ? devices.slice(0, limit) : devices;

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
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayDevices.map((device) => {
            const alerts = getAlertsForDevice(device.id);
            const activeAlerts = alerts.filter(a => a.status !== 'resolved').length;
            
            return (
              <TableRow key={device.id} className="hover:bg-siem-dark-accent">
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getDeviceIcon(device.type)}
                    <span className="font-medium">{device.name}</span>
                  </div>
                </TableCell>
                <TableCell>{device.ip}</TableCell>
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={device.status === 'online' 
                      ? 'bg-green-500/20 text-green-500' 
                      : 'bg-gray-500/20 text-gray-400'
                    }
                  >
                    {device.status === 'online' 
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
                  {device.status === 'online' 
                    ? `${device.trafficUsage} MB` 
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
                  <Button variant="ghost" size="sm">
                    Details
                  </Button>
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
