
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatusCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  variant?: 'default' | 'danger' | 'success' | 'warning';
  className?: string;
}

const StatusCard = ({
  title,
  value,
  description,
  icon,
  trend,
  trendValue,
  variant = 'default',
  className,
}: StatusCardProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'danger':
        return 'bg-red-500/10 text-red-500';
      case 'success':
        return 'bg-green-500/10 text-green-500';
      case 'warning':
        return 'bg-yellow-500/10 text-yellow-500';
      default:
        return 'bg-blue-500/10 text-blue-500';
    }
  };

  const getTrendStyles = () => {
    switch (trend) {
      case 'up':
        return 'text-green-500';
      case 'down':
        return 'text-red-500';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className={cn("p-2 rounded-full", getVariantStyles())}>{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && <CardDescription>{description}</CardDescription>}
        {trend && trendValue && (
          <p className={cn("text-xs mt-2", getTrendStyles())}>
            {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} {trendValue}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default StatusCard;
