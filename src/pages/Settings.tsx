
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Bell, Shield, Database, Clock, User, Lock, Globe, Wifi, AlertTriangle } from 'lucide-react';

const Settings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header alertCount={3} />
      <Sidebar />
      
      <main className="pb-12 pt-16 md:pl-64">
        <div className="container mx-auto p-4 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Settings</h1>
            <p className="text-muted-foreground">
              Configure your SIEM system preferences and settings
            </p>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>System Configuration</CardTitle>
              <CardDescription>Manage core system settings and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="general">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="data">Data Management</TabsTrigger>
                  <TabsTrigger value="account">Account</TabsTrigger>
                </TabsList>
                
                <TabsContent value="general" className="mt-6 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Globe className="h-5 w-5 text-blue-500" />
                      System Information
                    </h3>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="system-name" className="text-right">
                          System Name
                        </Label>
                        <Input id="system-name" defaultValue="ElasticSIEM" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="timezone" className="text-right">
                          Time Zone
                        </Label>
                        <Input id="timezone" defaultValue="UTC (Coordinated Universal Time)" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="update-check" className="text-right">
                          Check for Updates
                        </Label>
                        <div className="flex items-center space-x-2 col-span-3">
                          <Switch id="update-check" defaultChecked />
                          <Label htmlFor="update-check">Automatically check for updates</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Wifi className="h-5 w-5 text-green-500" />
                      Network Configuration
                    </h3>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="ip-range" className="text-right">
                          Network IP Range
                        </Label>
                        <Input id="ip-range" defaultValue="192.168.1.0/24" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="scan-interval" className="text-right">
                          Network Scan Interval
                        </Label>
                        <Input id="scan-interval" defaultValue="30" className="col-span-3" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Reset</Button>
                    <Button>Save Changes</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="notifications" className="mt-6 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Bell className="h-5 w-5 text-orange-500" />
                      Alert Notifications
                    </h3>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="critical-alerts" className="text-right">
                          Critical Alerts
                        </Label>
                        <div className="flex items-center space-x-2 col-span-3">
                          <Switch id="critical-alerts" defaultChecked />
                          <Label htmlFor="critical-alerts">Immediately notify on critical alerts</Label>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="high-alerts" className="text-right">
                          High Alerts
                        </Label>
                        <div className="flex items-center space-x-2 col-span-3">
                          <Switch id="high-alerts" defaultChecked />
                          <Label htmlFor="high-alerts">Notify on high severity alerts</Label>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="medium-alerts" className="text-right">
                          Medium Alerts
                        </Label>
                        <div className="flex items-center space-x-2 col-span-3">
                          <Switch id="medium-alerts" defaultChecked />
                          <Label htmlFor="medium-alerts">Notify on medium severity alerts</Label>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="low-alerts" className="text-right">
                          Low Alerts
                        </Label>
                        <div className="flex items-center space-x-2 col-span-3">
                          <Switch id="low-alerts" />
                          <Label htmlFor="low-alerts">Notify on low severity alerts</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Clock className="h-5 w-5 text-blue-500" />
                      Notification Delivery
                    </h3>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email-notifications" className="text-right">
                          Email Notifications
                        </Label>
                        <div className="flex items-center space-x-2 col-span-3">
                          <Switch id="email-notifications" defaultChecked />
                          <Label htmlFor="email-notifications">Send notifications via email</Label>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="push-notifications" className="text-right">
                          Push Notifications
                        </Label>
                        <div className="flex items-center space-x-2 col-span-3">
                          <Switch id="push-notifications" defaultChecked />
                          <Label htmlFor="push-notifications">Send push notifications</Label>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="sms-notifications" className="text-right">
                          SMS Notifications
                        </Label>
                        <div className="flex items-center space-x-2 col-span-3">
                          <Switch id="sms-notifications" />
                          <Label htmlFor="sms-notifications">Send SMS for critical alerts only</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Reset</Button>
                    <Button>Save Changes</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="security" className="mt-6 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Shield className="h-5 w-5 text-red-500" />
                      Threat Detection
                    </h3>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="auto-block" className="text-right">
                          Auto-Block Threats
                        </Label>
                        <div className="flex items-center space-x-2 col-span-3">
                          <Switch id="auto-block" defaultChecked />
                          <Label htmlFor="auto-block">Automatically block detected threats</Label>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="sensitivity" className="text-right">
                          Detection Sensitivity
                        </Label>
                        <Input id="sensitivity" defaultValue="Medium" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="ioc-updates" className="text-right">
                          IoC Updates
                        </Label>
                        <div className="flex items-center space-x-2 col-span-3">
                          <Switch id="ioc-updates" defaultChecked />
                          <Label htmlFor="ioc-updates">Automatically update threat intelligence</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Lock className="h-5 w-5 text-purple-500" />
                      Access Control
                    </h3>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="two-factor" className="text-right">
                          Two-Factor Authentication
                        </Label>
                        <div className="flex items-center space-x-2 col-span-3">
                          <Switch id="two-factor" defaultChecked />
                          <Label htmlFor="two-factor">Require 2FA for admin access</Label>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="session-timeout" className="text-right">
                          Session Timeout
                        </Label>
                        <Input id="session-timeout" defaultValue="30 minutes" className="col-span-3" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Reset</Button>
                    <Button>Save Changes</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="data" className="mt-6 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Database className="h-5 w-5 text-blue-500" />
                      Log Storage
                    </h3>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="retention-period" className="text-right">
                          Retention Period
                        </Label>
                        <Input id="retention-period" defaultValue="90 days" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="storage-limit" className="text-right">
                          Storage Limit
                        </Label>
                        <Input id="storage-limit" defaultValue="100GB" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="compression" className="text-right">
                          Log Compression
                        </Label>
                        <div className="flex items-center space-x-2 col-span-3">
                          <Switch id="compression" defaultChecked />
                          <Label htmlFor="compression">Enable log compression</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-yellow-500" />
                      Data Management
                    </h3>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="auto-backup" className="text-right">
                          Automatic Backups
                        </Label>
                        <div className="flex items-center space-x-2 col-span-3">
                          <Switch id="auto-backup" defaultChecked />
                          <Label htmlFor="auto-backup">Enable automatic backups</Label>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="backup-frequency" className="text-right">
                          Backup Frequency
                        </Label>
                        <Input id="backup-frequency" defaultValue="Daily" className="col-span-3" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Reset</Button>
                    <Button>Save Changes</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="account" className="mt-6 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <User className="h-5 w-5 text-green-500" />
                      User Profile
                    </h3>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Username
                        </Label>
                        <Input id="username" defaultValue="admin" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                          Email
                        </Label>
                        <Input id="email" defaultValue="admin@example.com" className="col-span-3" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Lock className="h-5 w-5 text-red-500" />
                      Security
                    </h3>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="change-password" className="text-right">
                          Change Password
                        </Label>
                        <Button variant="outline" id="change-password" className="col-span-3">
                          Change Password
                        </Button>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="api-tokens" className="text-right">
                          API Tokens
                        </Label>
                        <Button variant="outline" id="api-tokens" className="col-span-3">
                          Manage API Tokens
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Reset</Button>
                    <Button>Save Changes</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Settings;
