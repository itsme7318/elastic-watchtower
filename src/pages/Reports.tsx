
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, FileText, Calendar, BarChart2, PieChart, TrendingUp, Clock } from 'lucide-react';

const Reports = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header alertCount={3} />
      <Sidebar />
      
      <main className="pb-12 pt-16 md:pl-64">
        <div className="container mx-auto p-4 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Reports</h1>
            <p className="text-muted-foreground">
              Generate and view security and network activity reports
            </p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="border-blue-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <FileText className="h-4 w-4 text-blue-500" />
                  Available Reports
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">14</div>
                <p className="text-xs text-muted-foreground">Pre-configured reports</p>
              </CardContent>
            </Card>
            
            <Card className="border-green-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-green-500" />
                  Generated This Month
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">Monthly report count</p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Clock className="h-4 w-4 text-purple-500" />
                  Scheduled
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Automated reports</p>
              </CardContent>
            </Card>
            
            <Card className="border-orange-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-orange-500" />
                  Data Retention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">90 days</div>
                <p className="text-xs text-muted-foreground">Report history kept</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Report Templates</CardTitle>
                  <CardDescription>Generate reports from pre-configured templates</CardDescription>
                </div>
                <Button>
                  <FileText className="h-4 w-4 mr-2" />
                  Create Custom Report
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="security">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="network">Network</TabsTrigger>
                  <TabsTrigger value="compliance">Compliance</TabsTrigger>
                </TabsList>
                
                <TabsContent value="security" className="mt-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      { title: "Security Incident Summary", icon: <BarChart2 className="h-5 w-5 text-red-500" /> },
                      { title: "Threat Detection Report", icon: <PieChart className="h-5 w-5 text-orange-500" /> },
                      { title: "Blocked Traffic Analysis", icon: <TrendingUp className="h-5 w-5 text-yellow-500" /> },
                      { title: "Device Security Status", icon: <FileText className="h-5 w-5 text-green-500" /> }
                    ].map((report) => (
                      <Card key={report.title}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-md flex items-center gap-2">
                            {report.icon}
                            {report.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">
                            Comprehensive overview of security incidents, alerts, and response actions.
                          </p>
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" size="sm">
                              <Calendar className="h-4 w-4 mr-1" />
                              Schedule
                            </Button>
                            <Button size="sm">
                              <Download className="h-4 w-4 mr-1" />
                              Generate
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="network" className="mt-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      { title: "Network Traffic Summary", icon: <BarChart2 className="h-5 w-5 text-blue-500" /> },
                      { title: "Bandwidth Usage Report", icon: <PieChart className="h-5 w-5 text-purple-500" /> },
                      { title: "Connection Statistics", icon: <TrendingUp className="h-5 w-5 text-green-500" /> },
                      { title: "Device Activity Report", icon: <FileText className="h-5 w-5 text-cyan-500" /> }
                    ].map((report) => (
                      <Card key={report.title}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-md flex items-center gap-2">
                            {report.icon}
                            {report.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">
                            Detailed analysis of network traffic patterns and bandwidth utilization.
                          </p>
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" size="sm">
                              <Calendar className="h-4 w-4 mr-1" />
                              Schedule
                            </Button>
                            <Button size="sm">
                              <Download className="h-4 w-4 mr-1" />
                              Generate
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="compliance" className="mt-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      { title: "Policy Compliance Report", icon: <BarChart2 className="h-5 w-5 text-indigo-500" /> },
                      { title: "Security Standards Audit", icon: <PieChart className="h-5 w-5 text-pink-500" /> }
                    ].map((report) => (
                      <Card key={report.title}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-md flex items-center gap-2">
                            {report.icon}
                            {report.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">
                            Verification of compliance with security policies and standards.
                          </p>
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" size="sm">
                              <Calendar className="h-4 w-4 mr-1" />
                              Schedule
                            </Button>
                            <Button size="sm">
                              <Download className="h-4 w-4 mr-1" />
                              Generate
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Generated Reports</CardTitle>
              <CardDescription>Recently generated and scheduled reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: "Weekly Security Summary", date: "2025-04-01", type: "Security" },
                  { title: "Monthly Network Usage", date: "2025-03-31", type: "Network" },
                  { title: "Daily Alert Report", date: "2025-03-30", type: "Security" },
                  { title: "Bandwidth Utilization", date: "2025-03-28", type: "Network" },
                  { title: "Policy Compliance Audit", date: "2025-03-25", type: "Compliance" }
                ].map((report, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-md bg-card/60 border border-border">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-blue-500" />
                      <div>
                        <div className="font-medium">{report.title}</div>
                        <div className="text-xs text-muted-foreground">Generated: {report.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Reports;
