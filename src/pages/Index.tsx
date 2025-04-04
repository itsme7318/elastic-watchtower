
import React from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Activity, AlertTriangle, Laptop, Network, Server, ShieldAlert } from 'lucide-react';
import { generateLogs, devices, alerts, generateTrafficData, countActiveAlerts } from '@/lib/mockData';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import StatusCard from '@/components/cards/StatusCard';
import AlertsTable from '@/components/tables/AlertsTable';
import DevicesTable from '@/components/tables/DevicesTable';
import NetworkTrafficChart from '@/components/charts/NetworkTrafficChart';
import LogViewer from '@/components/LogViewer';

const Dashboard = () => {
  const { toast } = useToast();
  const logs = React.useMemo(() => generateLogs(), []);
  const trafficData = React.useMemo(() => generateTrafficData(), []);
  const activeAlerts = countActiveAlerts();
  
  const onlineDevices = devices.filter(device => device.status === 'online').length;
  
  // Show toast for critical alerts
  React.useEffect(() => {
    const criticalAlerts = alerts.filter(
      alert => alert.severity === 'critical' && alert.status === 'new'
    );
    
    if (criticalAlerts.length > 0) {
      criticalAlerts.forEach(alert => {
        toast({
          variant: "destructive",
          title: "Critical Alert Detected",
          description: alert.description,
        });
      });
    }
  }, [toast]);

  return (
    <div className="min-h-screen bg-background">
      <Header alertCount={activeAlerts} />
      <Sidebar />
      
      <main className="pb-12 pt-16 md:pl-64">
        <div className="container mx-auto p-4 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">SIEM Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor your network security and get real-time alerts for suspicious activities.
            </p>
          </div>
          
          {/* Status Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8">
            <StatusCard
              title="Online Devices"
              value={onlineDevices}
              description={`Out of ${devices.length} total devices`}
              icon={<Laptop className="h-4 w-4" />}
              variant="success"
            />
            <StatusCard
              title="Active Alerts"
              value={activeAlerts}
              description="Requiring attention"
              icon={<AlertTriangle className="h-4 w-4" />}
              variant={activeAlerts > 0 ? "danger" : "success"}
            />
            <StatusCard
              title="Network Traffic"
              value="980 MB"
              description="Last 24 hours"
              icon={<Activity className="h-4 w-4" />}
              trend="up"
              trendValue="12% from yesterday"
            />
            <StatusCard
              title="Monitored Services"
              value="8"
              description="All running normally"
              icon={<Server className="h-4 w-4" />}
              variant="success"
            />
          </div>
          
          {/* Network Traffic Chart */}
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mb-8">
            <NetworkTrafficChart data={trafficData} />
          </div>
          
          {/* Active Alerts Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <ShieldAlert className="mr-2 h-5 w-5 text-red-500" />
              Active Security Alerts
            </h2>
            <AlertsTable alerts={alerts} />
          </div>
          
          {/* Connected Devices Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Network className="mr-2 h-5 w-5 text-siem-blue" />
              Connected Devices
            </h2>
            <DevicesTable devices={devices} />
          </div>
          
          {/* System Logs */}
          <div>
            <LogViewer logs={logs} limit={10} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
