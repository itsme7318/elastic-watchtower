
import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LogEntry, findDeviceById } from '@/lib/mockData';
import { ScrollArea } from '@/components/ui/scroll-area';

interface LogViewerProps {
  logs: LogEntry[];
  limit?: number;
  className?: string;
}

const LogViewer: React.FC<LogViewerProps> = ({ logs, limit, className }) => {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredLogs = logs.filter(log => {
    if (filter === 'all') return true;
    if (filter === 'error') return log.level === 'error';
    if (filter === 'warning') return log.level === 'warning';
    if (filter === 'info') return log.level === 'info';
    if (filter === 'network') return log.category === 'network';
    if (filter === 'security') return log.category === 'security';
    return true;
  });
  
  const displayLogs = limit ? filteredLogs.slice(0, limit) : filteredLogs;
  
  const getLevelColor = (level: LogEntry['level']) => {
    switch (level) {
      case 'error':
        return 'bg-red-500/20 text-red-500 border-red-500';
      case 'warning':
        return 'bg-yellow-500/20 text-yellow-500 border-yellow-500';
      case 'info':
        return 'bg-blue-500/20 text-blue-500 border-blue-500';
      default:
        return 'bg-gray-500/20 text-gray-500 border-gray-500';
    }
  };

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>System Logs</CardTitle>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Logs</SelectItem>
              <SelectItem value="error">Errors</SelectItem>
              <SelectItem value="warning">Warnings</SelectItem>
              <SelectItem value="info">Info</SelectItem>
              <SelectItem value="network">Network</SelectItem>
              <SelectItem value="security">Security</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <CardDescription>
          Showing {displayLogs.length} out of {logs.length} log entries
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] rounded-md">
          <div className="space-y-4 pr-4">
            {displayLogs.map((log) => {
              const device = findDeviceById(log.deviceId);
              return (
                <div key={log.id} className="rounded-md border border-gray-800 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className={`${getLevelColor(log.level)}`}>
                      {log.level.toUpperCase()}
                    </Badge>
                    <span className="text-xs text-gray-400">
                      {format(parseISO(log.timestamp), 'MMM d, yyyy HH:mm:ss')}
                    </span>
                  </div>
                  <div className="mb-1 font-medium">{log.message}</div>
                  <div className="text-sm text-gray-400">{log.details}</div>
                  <div className="mt-2 flex items-center justify-between">
                    <Badge variant="outline" className="bg-transparent border-gray-700">
                      {log.category}
                    </Badge>
                    <span className="text-xs">
                      Source: {device?.name || 'Unknown Device'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default LogViewer;
