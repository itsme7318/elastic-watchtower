
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { generateTrafficData } from '@/lib/mockData';
import NetworkTrafficChart from '@/components/charts/NetworkTrafficChart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Activity, Wifi, Download, Upload, Link2, Globe } from 'lucide-react';

const NetworkTraffic = () => {
  const trafficData = React.useMemo(() => generateTrafficData(), []);
  
  return (
    <div className="min-h-screen bg-background">
      <Header alertCount={3} />
      <Sidebar />
      
      <main className="pb-12 pt-16 md:pl-64">
        <div className="container mx-auto p-4 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Network Traffic</h1>
            <p className="text-muted-foreground">
              Monitor and analyze network traffic patterns across your devices
            </p>
          </div>

          <Tabs defaultValue="overview" className="mb-8">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="incoming">Incoming Traffic</TabsTrigger>
              <TabsTrigger value="outgoing">Outgoing Traffic</TabsTrigger>
              <TabsTrigger value="by-device">By Device</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-4">
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Activity className="h-4 w-4 text-blue-500" />
                      Current Usage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12.4 Mbps</div>
                    <p className="text-xs text-muted-foreground">+18% from usual</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Download className="h-4 w-4 text-green-500" />
                      Download
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8.2 Mbps</div>
                    <p className="text-xs text-muted-foreground">3.2 GB today</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Upload className="h-4 w-4 text-orange-500" />
                      Upload
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4.2 Mbps</div>
                    <p className="text-xs text-muted-foreground">1.1 GB today</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Wifi className="h-4 w-4 text-purple-500" />
                      Active Connections
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">42</div>
                    <p className="text-xs text-muted-foreground">12 devices</p>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Network Traffic Over Time</CardTitle>
                  <CardDescription>Last 24 hours of network activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <NetworkTrafficChart data={trafficData} />
                </CardContent>
              </Card>
              
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Globe className="h-5 w-5 text-blue-500" />
                      Top Domains
                    </CardTitle>
                    <CardDescription>Most visited websites by traffic</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {["youtube.com", "netflix.com", "google.com", "amazon.com", "facebook.com"].map((domain, i) => (
                        <div key={domain} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{i+1}.</span>
                            <span>{domain}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{Math.round(Math.random() * 500) + 200} MB</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Link2 className="h-5 w-5 text-green-500" />
                      Active Services
                    </CardTitle>
                    <CardDescription>Services currently using network</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {["Video Streaming", "Web Browsing", "Cloud Sync", "Software Updates", "Gaming"].map((service, i) => (
                        <div key={service} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span>{service}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{Math.round(Math.random() * 40) + 10}%</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="incoming" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Incoming Traffic</CardTitle>
                  <CardDescription>Detailed view of all incoming network traffic</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="py-20 text-center text-muted-foreground">Incoming traffic details would be shown here</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="outgoing" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Outgoing Traffic</CardTitle>
                  <CardDescription>Detailed view of all outgoing network traffic</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="py-20 text-center text-muted-foreground">Outgoing traffic details would be shown here</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="by-device" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Traffic By Device</CardTitle>
                  <CardDescription>Network usage breakdown by connected device</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="py-20 text-center text-muted-foreground">Device-specific traffic details would be shown here</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default NetworkTraffic;
