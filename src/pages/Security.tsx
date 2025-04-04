
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Shield, Lock, FileWarning, ListChecks } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header alertCount={3} />
      <Sidebar />
      
      <main className="pb-12 pt-16 md:pl-64">
        <div className="container mx-auto p-4 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Security Center</h1>
            <p className="text-muted-foreground">
              Configure security policies, review threats, and manage security features
            </p>
          </div>
          
          {/* Security Overview Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8">
            <Card className="border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-500" />
                  Threat Protection
                </CardTitle>
                <CardDescription>
                  Configure firewall and threat detection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Your threat protection is active and monitoring for suspicious activities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-green-500/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Lock className="h-5 w-5 text-green-500" />
                  Access Control
                </CardTitle>
                <CardDescription>
                  Manage device and website restrictions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  3 block rules active for devices and 5 website restrictions in place.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileWarning className="h-5 w-5 text-yellow-500" />
                  Vulnerability Management
                </CardTitle>
                <CardDescription>
                  View and address system vulnerabilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Last scan completed 2 hours ago. No critical vulnerabilities found.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <ListChecks className="h-5 w-5 text-purple-500" />
                  Security Policies
                </CardTitle>
                <CardDescription>
                  Configure and review security policies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All security policies are up to date and enforced.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* More security content would go here */}
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Recent Security Events</CardTitle>
                <CardDescription>Last 24 hours of security-related events</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-8 text-muted-foreground">Security events visualization would go here</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Security Health</CardTitle>
                <CardDescription>Overall security posture assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-8 text-muted-foreground">Security health metrics would go here</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Security;
