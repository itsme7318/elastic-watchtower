
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrafficData } from '@/lib/mockData';

interface NetworkTrafficChartProps {
  data: TrafficData[];
}

const NetworkTrafficChart: React.FC<NetworkTrafficChartProps> = ({ data }) => {
  const totalInbound = data.reduce((sum, current) => sum + current.inbound, 0);
  const totalOutbound = data.reduce((sum, current) => sum + current.outbound, 0);
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-siem-dark p-2 border border-gray-700 rounded">
          <p className="label mb-1">{`Time: ${label}`}</p>
          <p className="text-siem-blue">{`Inbound: ${payload[0].value} MB/s`}</p>
          <p className="text-siem-teal">{`Outbound: ${payload[1].value} MB/s`}</p>
        </div>
      );
    }
  
    return null;
  };

  return (
    <Card className="col-span-3">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>Network Traffic</CardTitle>
          <div className="flex space-x-2">
            <Badge variant="outline" className="text-siem-blue border-siem-blue">
              Inbound: {totalInbound} MB
            </Badge>
            <Badge variant="outline" className="text-siem-teal border-siem-teal">
              Outbound: {totalOutbound} MB
            </Badge>
          </div>
        </div>
        <CardDescription>24 hour network activity monitoring</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="timestamp" tick={{ fill: '#ccc' }} />
              <YAxis tick={{ fill: '#ccc' }} />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="inbound"
                name="Inbound"
                strokeWidth={2}
                stroke="#1976d2"
                fill="#1976d2"
                fillOpacity={0.3}
              />
              <Area
                type="monotone"
                dataKey="outbound"
                name="Outbound"
                strokeWidth={2}
                stroke="#00bcd4"
                fill="#00bcd4"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default NetworkTrafficChart;
