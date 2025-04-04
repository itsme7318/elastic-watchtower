
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import RecentConnectionsWidget from '@/components/widgets/RecentConnectionsWidget';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useSIEM } from '@/contexts/SIEMContext';
import { Network, RefreshCw, Link2, WifiOff, Database } from 'lucide-react';

const Connections = () => {
  const { devices, recentConnections } = useSIEM();
  
  return (
    <div className="min-h-screen bg-background">
      <Header alertCount={3} />
      <Sidebar />
      
      <main className="pb-12 pt-16 md:pl-64">
        <div className="container mx-auto p-4 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Network Connections</h1>
            <p className="text-muted-foreground">
              Monitor real-time network connections and activity
            </p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="border-blue-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Network className="h-4 w-4 text-blue-500" />
                  Active Connections
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{devices.filter(d => d.status === 'online').length * 3 + 12}</div>
                <p className="text-xs text-muted-foreground">Current network connections</p>
              </CardContent>
            </Card>
            
            <Card className="border-green-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <RefreshCw className="h-4 w-4 text-green-500" />
                  Connection Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24/min</div>
                <p className="text-xs text-muted-foreground">New connections per minute</p>
              </CardContent>
            </Card>
            
            <Card className="border-orange-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Link2 className="h-4 w-4 text-orange-500" />
                  Unique Domains
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">47</div>
                <p className="text-xs text-muted-foreground">Distinct domains accessed</p>
              </CardContent>
            </Card>
            
            <Card className="border-red-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <WifiOff className="h-4 w-4 text-red-500" />
                  Dropped
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">6</div>
                <p className="text-xs text-muted-foreground">Connections blocked/dropped</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 mb-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Network className="h-5 w-5 text-blue-500" />
                    Connection Map
                  </CardTitle>
                  <CardDescription>
                    Visual representation of current network connections
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-card/60 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Connection map visualization would go here</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-green-500" />
                    Top Services
                  </CardTitle>
                  <CardDescription>
                    Most active network services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {["HTTP/HTTPS (80/443)", "DNS (53)", "DHCP (67/68)", "NTP (123)", "SMTP (25)"].map((service, i) => (
                      <div key={service} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{i+1}.</span>
                          <span>{service}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{Math.round(Math.random() * 100) + 50} conn.</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mb-8">
            <RecentConnectionsWidget />
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Connection History</CardTitle>
              <CardDescription>Historical record of network connections</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-muted-foreground">Connection history details would go here</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Connections;
