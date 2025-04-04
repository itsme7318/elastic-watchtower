
import { subHours, format } from 'date-fns';

// Types
export interface Device {
  id: string;
  name: string;
  ip: string;
  type: 'laptop' | 'phone' | 'tablet' | 'desktop' | 'other';
  status: 'online' | 'offline';
  lastSeen: string;
  os: string;
  trafficUsage: number; // in MB
}

export interface Alert {
  id: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  title: string;
  description: string;
  deviceId: string;
  timestamp: string;
  category: 'malware' | 'phishing' | 'anomaly' | 'intrusion' | 'policy';
  status: 'new' | 'acknowledged' | 'resolved';
  source: string;
}

export interface LogEntry {
  id: string;
  timestamp: string;
  deviceId: string;
  level: 'info' | 'warning' | 'error';
  message: string;
  details: string;
  category: string;
  source: string;
}

export interface TrafficData {
  timestamp: string;
  inbound: number;
  outbound: number;
}

// Mock devices
export const devices: Device[] = [
  {
    id: '1',
    name: 'Main Laptop',
    ip: '192.168.1.100',
    type: 'laptop',
    status: 'online',
    lastSeen: new Date().toISOString(),
    os: 'Windows 11',
    trafficUsage: 428
  },
  {
    id: '2',
    name: 'iPhone 14',
    ip: '192.168.1.101',
    type: 'phone',
    status: 'online',
    lastSeen: new Date().toISOString(),
    os: 'iOS 16',
    trafficUsage: 156
  },
  {
    id: '3',
    name: 'Work Laptop',
    ip: '192.168.1.102',
    type: 'laptop',
    status: 'offline',
    lastSeen: subHours(new Date(), 5).toISOString(),
    os: 'macOS Monterey',
    trafficUsage: 0
  },
  {
    id: '4',
    name: 'Android Tablet',
    ip: '192.168.1.103',
    type: 'tablet',
    status: 'online',
    lastSeen: new Date().toISOString(),
    os: 'Android 13',
    trafficUsage: 82
  },
  {
    id: '5',
    name: 'Desktop PC',
    ip: '192.168.1.104',
    type: 'desktop',
    status: 'online',
    lastSeen: new Date().toISOString(),
    os: 'Ubuntu 22.04',
    trafficUsage: 314
  }
];

// Mock alerts
export const alerts: Alert[] = [
  {
    id: '1',
    severity: 'critical',
    title: 'Potential Malware Access Detected',
    description: 'Connection to known malware distribution domain detected',
    deviceId: '2',
    timestamp: subHours(new Date(), 1).toISOString(),
    category: 'malware',
    status: 'new',
    source: 'malicious-sites.com'
  },
  {
    id: '2',
    severity: 'high',
    title: 'Suspicious Login Attempt',
    description: 'Multiple failed login attempts detected',
    deviceId: '1',
    timestamp: subHours(new Date(), 3).toISOString(),
    category: 'intrusion',
    status: 'acknowledged',
    source: 'Login Service'
  },
  {
    id: '3',
    severity: 'medium',
    title: 'Unusual Traffic Pattern',
    description: 'Abnormal outbound data transfer detected',
    deviceId: '5',
    timestamp: subHours(new Date(), 6).toISOString(),
    category: 'anomaly',
    status: 'new',
    source: 'Network Monitor'
  },
  {
    id: '4',
    severity: 'high',
    title: 'Phishing Website Accessed',
    description: 'User accessed known phishing website',
    deviceId: '4',
    timestamp: subHours(new Date(), 2).toISOString(),
    category: 'phishing',
    status: 'new',
    source: 'fake-bank-login.net'
  },
  {
    id: '5',
    severity: 'low',
    title: 'Outdated Software',
    description: 'Device running outdated browser version with known vulnerabilities',
    deviceId: '3',
    timestamp: subHours(new Date(), 12).toISOString(),
    category: 'policy',
    status: 'resolved',
    source: 'Software Inventory'
  }
];

// Generate mock logs
export const generateLogs = (): LogEntry[] => {
  const logs: LogEntry[] = [];
  
  // Generate 50 random logs
  for (let i = 0; i < 50; i++) {
    const randomDevice = devices[Math.floor(Math.random() * devices.length)];
    const randomHoursAgo = Math.floor(Math.random() * 48);
    const timestamp = subHours(new Date(), randomHoursAgo).toISOString();
    
    const categories = ['network', 'auth', 'system', 'application', 'security'];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    
    const levels: ('info' | 'warning' | 'error')[] = ['info', 'warning', 'error'];
    const randomLevel = levels[Math.floor(Math.random() * levels.length)];
    
    let message = '';
    let details = '';
    
    switch (randomCategory) {
      case 'network':
        message = `${randomLevel === 'error' ? 'Failed connection' : 'Connection'} to ${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
        details = `Port: ${Math.floor(Math.random() * 65535)}, Protocol: ${Math.random() > 0.5 ? 'TCP' : 'UDP'}`;
        break;
      case 'auth':
        message = randomLevel === 'error' ? 'Failed login attempt' : 'Successful login';
        details = `User: user${Math.floor(Math.random() * 10)}, Source IP: ${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
        break;
      case 'system':
        message = `${randomLevel === 'error' ? 'System error' : 'System event'}: ${randomLevel === 'error' ? 'resource limit reached' : 'resource usage normal'}`;
        details = `CPU: ${Math.floor(Math.random() * 100)}%, Memory: ${Math.floor(Math.random() * 100)}%`;
        break;
      case 'application':
        message = `${randomLevel === 'error' ? 'Application crash' : 'Application event'}: ${randomLevel === 'error' ? 'unexpected termination' : 'normal operation'}`;
        details = `App: ${['browser', 'mail', 'office', 'media'][Math.floor(Math.random() * 4)]}, PID: ${Math.floor(Math.random() * 10000)}`;
        break;
      case 'security':
        message = randomLevel === 'error' ? 'Security violation detected' : 'Security scan completed';
        details = `Threat level: ${['low', 'medium', 'high'][Math.floor(Math.random() * 3)]}, Action: ${randomLevel === 'error' ? 'blocked' : 'allowed'}`;
        break;
    }
    
    logs.push({
      id: `log-${i}`,
      timestamp,
      deviceId: randomDevice.id,
      level: randomLevel,
      message,
      details,
      category: randomCategory,
      source: randomDevice.name
    });
  }
  
  // Sort logs by timestamp, newest first
  return logs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
};

// Generate hourly traffic data for the last 24 hours
export const generateTrafficData = (): TrafficData[] => {
  const trafficData: TrafficData[] = [];
  
  for (let i = 24; i >= 0; i--) {
    const timestamp = format(subHours(new Date(), i), 'HH:mm');
    // Random values between 10-100 for inbound and outbound
    const inbound = 10 + Math.floor(Math.random() * 90);
    const outbound = 10 + Math.floor(Math.random() * 90);
    
    trafficData.push({
      timestamp,
      inbound,
      outbound
    });
  }
  
  return trafficData;
};

// Find device by ID
export const findDeviceById = (id: string): Device | undefined => {
  return devices.find(device => device.id === id);
};

// Count active alerts
export const countActiveAlerts = (): number => {
  return alerts.filter(alert => alert.status !== 'resolved').length;
};

// Get alerts for device
export const getAlertsForDevice = (deviceId: string): Alert[] => {
  return alerts.filter(alert => alert.deviceId === deviceId);
};
