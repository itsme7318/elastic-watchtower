
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle, BookOpen, FileText, Video, Link, Download, ExternalLink } from 'lucide-react';

const Documentation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header alertCount={3} />
      <Sidebar />
      
      <main className="pb-12 pt-16 md:pl-64">
        <div className="container mx-auto p-4 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Documentation</h1>
            <p className="text-muted-foreground">
              Learn how to use and configure your SIEM system
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            <Card className="border-blue-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                  Getting Started
                </CardTitle>
                <CardDescription>Quick setup and basic usage guides</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-blue-500 hover:underline">System Overview</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-blue-500 hover:underline">Installation Guide</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-blue-500 hover:underline">First-Time Setup</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-blue-500 hover:underline">Basic Configuration</a>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-green-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-green-500" />
                  Video Tutorials
                </CardTitle>
                <CardDescription>Step-by-step video guides</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Video className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-blue-500 hover:underline">Setting Up Your Network</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Video className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-blue-500 hover:underline">Configuring Alerts</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Video className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-blue-500 hover:underline">Advanced Monitoring</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Video className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-blue-500 hover:underline">Responding to Incidents</a>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-purple-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-purple-500" />
                  FAQs
                </CardTitle>
                <CardDescription>Frequently asked questions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-blue-500 hover:underline">Common Issues</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-blue-500 hover:underline">Troubleshooting</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-blue-500 hover:underline">Network Connectivity</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-blue-500 hover:underline">Upgrading Guide</a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-500" />
                Administrator Guide
              </CardTitle>
              <CardDescription>Complete system documentation for administrators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <h3 className="text-lg font-medium mb-2">System Configuration</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <a href="#" className="text-blue-500 hover:underline">Network Setup</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <a href="#" className="text-blue-500 hover:underline">User Management</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <a href="#" className="text-blue-500 hover:underline">System Maintenance</a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Security Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <a href="#" className="text-blue-500 hover:underline">Threat Detection</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <a href="#" className="text-blue-500 hover:underline">Alert Configuration</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <a href="#" className="text-blue-500 hover:underline">Response Automation</a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Reporting</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <a href="#" className="text-blue-500 hover:underline">Creating Reports</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <a href="#" className="text-blue-500 hover:underline">Scheduled Reporting</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <a href="#" className="text-blue-500 hover:underline">Custom Dashboards</a>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <a href="#" className="inline-flex items-center gap-2 text-blue-500 hover:underline">
                  <Download className="h-4 w-4" />
                  Download Full Documentation (PDF)
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Link className="h-5 w-5 text-blue-500" />
                Additional Resources
              </CardTitle>
              <CardDescription>Helpful links and external resources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium mb-2">Community Resources</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      <a href="#" className="text-blue-500 hover:underline">User Forums</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      <a href="#" className="text-blue-500 hover:underline">Knowledge Base</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      <a href="#" className="text-blue-500 hover:underline">Community Extensions</a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Support Resources</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      <a href="#" className="text-blue-500 hover:underline">Submit a Support Ticket</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      <a href="#" className="text-blue-500 hover:underline">Contact Support</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      <a href="#" className="text-blue-500 hover:underline">Remote Assistance</a>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Documentation;
