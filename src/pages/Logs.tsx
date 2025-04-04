
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import LogViewer from '@/components/LogViewer';
import { generateLogs } from '@/lib/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Filter, Download, RefreshCw } from 'lucide-react';

const Logs = () => {
  const logs = React.useMemo(() => generateLogs(30), []);
  
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
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-1" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm">
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
