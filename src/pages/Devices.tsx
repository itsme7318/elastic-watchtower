
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import DevicesTable from '@/components/tables/DevicesTable';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSIEM } from '@/contexts/SIEMContext';
import { Laptop, Smartphone, ShieldAlert, Network, Wifi } from 'lucide-react';

const Devices = () => {
  const { devices, blockedDevices } = useSIEM();
  const connectedDevices = devices.filter(device => device.status === 'online' && !blockedDevices.includes(device.id));
  
  const laptops = devices.filter(device => device.type === 'laptop');
  const phones = devices.filter(device => device.type === 'phone');
  const tablets = devices.filter(device => device.type === 'tablet');
  const desktops = devices.filter(device => device.type === 'desktop');
  const other = devices.filter(device => device.type === 'other');
  
  return (
    <div className="min-h-screen bg-background">
      <Header alertCount={3} />
      <Sidebar />
      
      <main className="pb-12 pt-16 md:pl-64">
        <div className="container mx-auto p-4 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Connected Devices</h1>
            <p className="text-muted-foreground">
              View and manage all devices on your network
            </p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="border-green-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Network className="h-4 w-4 text-green-500" />
                  Connected
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{connectedDevices.length}</div>
                <p className="text-xs text-muted-foreground">Active devices</p>
              </CardContent>
            </Card>
            
            <Card className="border-red-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4 text-red-500" />
                  Blocked
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{blockedDevices.length}</div>
                <p className="text-xs text-muted-foreground">Restricted access</p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Laptop className="h-4 w-4 text-blue-500" />
                  Computers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{laptops.length + desktops.length}</div>
                <p className="text-xs text-muted-foreground">Laptops and desktops</p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-purple-500" />
                  Mobile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{phones.length + tablets.length}</div>
                <p className="text-xs text-muted-foreground">Phones and tablets</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mb-8">
            <CardHeader className="pb-2">
              <CardTitle>Device Management</CardTitle>
              <CardDescription>View and control connected devices</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="all" className="w-full">
                <div className="px-6 pt-2">
                  <TabsList className="w-full md:w-auto">
                    <TabsTrigger value="all">All Devices</TabsTrigger>
                    <TabsTrigger value="online">Online</TabsTrigger>
                    <TabsTrigger value="blocked">Blocked</TabsTrigger>
                    <TabsTrigger value="by-type">By Type</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="all" className="pt-2">
                  <DevicesTable />
                </TabsContent>
                
                <TabsContent value="online" className="pt-2">
                  <DevicesTable />
                </TabsContent>
                
                <TabsContent value="blocked" className="pt-2">
                  <DevicesTable />
                </TabsContent>
                
                <TabsContent value="by-type" className="pt-2">
                  <div className="p-6">
                    <Tabs defaultValue="laptops">
                      <TabsList>
                        <TabsTrigger value="laptops">Laptops ({laptops.length})</TabsTrigger>
                        <TabsTrigger value="phones">Phones ({phones.length})</TabsTrigger>
                        <TabsTrigger value="tablets">Tablets ({tablets.length})</TabsTrigger>
                        <TabsTrigger value="desktops">Desktops ({desktops.length})</TabsTrigger>
                        <TabsTrigger value="other">Other ({other.length})</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="laptops" className="mt-4">
                        <DevicesTable />
                      </TabsContent>
                      <TabsContent value="phones" className="mt-4">
                        <DevicesTable />
                      </TabsContent>
                      <TabsContent value="tablets" className="mt-4">
                        <DevicesTable />
                      </TabsContent>
                      <TabsContent value="desktops" className="mt-4">
                        <DevicesTable />
                      </TabsContent>
                      <TabsContent value="other" className="mt-4">
                        <DevicesTable />
                      </TabsContent>
                    </Tabs>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wifi className="h-5 w-5 text-blue-500" />
                Network Access Control
              </CardTitle>
              <CardDescription>Configure network access policies for devices</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-muted-foreground">Network access control policies would go here</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Devices;
