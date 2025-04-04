
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, findDeviceById } from '@/lib/mockData';
import { format, parseISO } from 'date-fns';
import { AlertTriangle, Eye, Shield, AlertOctagon, ExternalLink } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';

interface AlertsTableProps {
  alerts: Alert[];
  limit?: number;
}

const AlertsTable: React.FC<AlertsTableProps> = ({ alerts, limit }) => {
  const { toast } = useToast();
  const displayAlerts = limit ? alerts.slice(0, limit) : alerts;

  const getSeverityColor = (severity: Alert['severity']) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-500 hover:bg-red-600';
      case 'high':
        return 'bg-orange-500 hover:bg-orange-600';
      case 'medium':
        return 'bg-yellow-500 hover:bg-yellow-600';
      case 'low':
        return 'bg-blue-500 hover:bg-blue-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  const getSeverityIcon = (severity: Alert['severity']) => {
    switch (severity) {
      case 'critical':
        return <AlertOctagon className="h-4 w-4 mr-2 text-red-500" />;
      case 'high':
        return <AlertTriangle className="h-4 w-4 mr-2 text-orange-500" />;
      default:
        return <AlertTriangle className="h-4 w-4 mr-2 text-yellow-500" />;
    }
  };

  const getStatusColor = (status: Alert['status']) => {
    switch (status) {
      case 'new':
        return 'bg-red-500/20 text-red-500';
      case 'acknowledged':
        return 'bg-yellow-500/20 text-yellow-500';
      case 'resolved':
        return 'bg-green-500/20 text-green-500';
      default:
        return 'bg-gray-500/20 text-gray-500';
    }
  };

  const blockDevice = (deviceId: string, deviceName: string) => {
    toast({
      title: "Device Blocked",
      description: `${deviceName} has been blocked due to suspicious activity.`,
      variant: "destructive",
    });
  };

  const blockWebsite = (url: string, alertTitle: string) => {
    toast({
      title: "Website Blocked",
      description: `Access to malicious site related to "${alertTitle}" has been blocked.`,
      variant: "destructive",
    });
  };

  return (
    <div className="rounded-md border border-gray-800">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[100px]">Severity</TableHead>
            <TableHead>Alert</TableHead>
            <TableHead>Device</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayAlerts.map((alert) => {
            const device = findDeviceById(alert.deviceId);
            return (
              <TableRow key={alert.id} className="hover:bg-siem-dark-accent">
                <TableCell>
                  <Badge className={`${getSeverityColor(alert.severity)}`}>
                    {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="font-medium">{alert.title}</div>
                  <div className="text-sm text-gray-400">{alert.description}</div>
                </TableCell>
                <TableCell>{device?.name || 'Unknown Device'}</TableCell>
                <TableCell>
                  {format(parseISO(alert.timestamp), 'MMM d, h:mm a')}
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={getStatusColor(alert.status)}>
                    {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        Actions
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Threat Response</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => device && blockDevice(device.id, device.name || 'Device')}>
                        <Shield className="h-4 w-4 mr-2 text-red-500" />
                        Block Device
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => blockWebsite('https://malicious-site.com', alert.title)}>
                        <ExternalLink className="h-4 w-4 mr-2 text-red-500" />
                        Block Website
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        {getSeverityIcon(alert.severity)}
                        View IoCs
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

export default AlertsTable;
