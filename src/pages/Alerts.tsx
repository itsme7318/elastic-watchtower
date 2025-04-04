
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import AlertsTable from '@/components/tables/AlertsTable';
import { alerts } from '@/lib/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertTriangle, AlertOctagon, Bell, BellOff, Filter, RefreshCw } from 'lucide-react';

const Alerts = () => {
  const criticalAlerts = alerts.filter(alert => alert.severity === 'critical');
  const highAlerts = alerts.filter(alert => alert.severity === 'high');
  const mediumAlerts = alerts.filter(alert => alert.severity === 'medium');
  const lowAlerts = alerts.filter(alert => alert.severity === 'low');
  
  const newAlerts = alerts.filter(alert => alert.status === 'new');
  const acknowledgedAlerts = alerts.filter(alert => alert.status === 'acknowledged');
  const resolvedAlerts = alerts.filter(alert => alert.status === 'resolved');
  
  return (
    <div className="min-h-screen bg-background">
      <Header alertCount={newAlerts.length} />
      <Sidebar />
      
      <main className="pb-12 pt-16 md:pl-64">
        <div className="container mx-auto p-4 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Security Alerts</h1>
            <p className="text-muted-foreground">
              View and manage all detected security alerts
            </p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="border-red-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <AlertOctagon className="h-4 w-4 text-red-500" />
                  Critical
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{criticalAlerts.length}</div>
                <p className="text-xs text-muted-foreground">Require immediate attention</p>
              </CardContent>
            </Card>
            
            <Card className="border-orange-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-orange-500" />
                  High
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{highAlerts.length}</div>
                <p className="text-xs text-muted-foreground">Require prompt attention</p>
              </CardContent>
            </Card>
            
            <Card className="border-yellow-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  Medium
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mediumAlerts.length}</div>
                <p className="text-xs text-muted-foreground">Should be reviewed</p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Bell className="h-4 w-4 text-blue-500" />
                  Low
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{lowAlerts.length}</div>
                <p className="text-xs text-muted-foreground">Informational alerts</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-8">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle>Alert Management</CardTitle>
                    <CardDescription>View and respond to security incidents</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-1" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <RefreshCw className="h-4 w-4 mr-1" />
                      Refresh
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Tabs defaultValue="all" className="w-full">
                  <div className="px-6 pt-2">
                    <TabsList className="w-full md:w-auto">
                      <TabsTrigger value="all">All ({alerts.length})</TabsTrigger>
                      <TabsTrigger value="new">New ({newAlerts.length})</TabsTrigger>
                      <TabsTrigger value="acknowledged">Acknowledged ({acknowledgedAlerts.length})</TabsTrigger>
                      <TabsTrigger value="resolved">Resolved ({resolvedAlerts.length})</TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="all" className="pt-2">
                    <AlertsTable alerts={alerts} />
                  </TabsContent>
                  
                  <TabsContent value="new" className="pt-2">
                    <AlertsTable alerts={newAlerts} />
                  </TabsContent>
                  
                  <TabsContent value="acknowledged" className="pt-2">
                    <AlertsTable alerts={acknowledgedAlerts} />
                  </TabsContent>
                  
                  <TabsContent value="resolved" className="pt-2">
                    <AlertsTable alerts={resolvedAlerts} />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BellOff className="h-5 w-5 text-muted-foreground" />
                Alert Suppression Rules
              </CardTitle>
              <CardDescription>Configure rules to suppress specific alerts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-muted-foreground">Alert suppression rules would go here</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Alerts;
