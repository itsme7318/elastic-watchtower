
import React, { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import LogViewer from '@/components/LogViewer';
import { generateLogs } from '@/lib/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Filter, Download, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Logs = () => {
  // The generateLogs function doesn't accept arguments, so we'll call it without any
  const [logs, setLogs] = useState(() => generateLogs());
  const { toast } = useToast();
  
  const handleRefresh = () => {
    setLogs(generateLogs());
    toast({
      title: "Logs Refreshed",
      description: "Log data has been refreshed successfully",
    });
  };
  
  const handleFilter = () => {
    toast({
      title: "Filter Applied",
      description: "Log filtering has been applied",
    });
  };
  
  const handleExport = () => {
    toast({
      title: "Logs Exported",
      description: "Log data has been prepared for export",
    });
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Header alertCount={3} />
      <Sidebar />
      
      <main className="pb-12 pt-16 md:pl-64">
        <div className="container mx-auto p-4 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">System Logs</h1>
            <p className="text-muted-foreground">
              View and analyze log data from all connected devices and systems
            </p>
          </div>
          
          <Card className="mb-8">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Log Explorer</CardTitle>
                  <CardDescription>Detailed logs from all systems</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={handleFilter}>
                    <Filter className="h-4 w-4 mr-1" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleExport}>
                    <Download className="h-4 w-4 mr-1" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleRefresh}>
                    <RefreshCw className="h-4 w-4 mr-1" />
                    Refresh
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <LogViewer logs={logs} limit={30} />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Logs;
