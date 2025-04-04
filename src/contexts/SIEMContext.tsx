
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Device, Alert, devices as initialDevices } from '@/lib/mockData';
import { useToast } from '@/hooks/use-toast';

interface SIEMContextType {
  devices: Device[];
  connectedDevices: number;
  blockedDevices: string[];
  recentConnections: Device[];
  blockDevice: (deviceId: string, deviceName: string) => void;
  unblockDevice: (deviceId: string, deviceName: string) => void;
  isDeviceBlocked: (deviceId: string) => boolean;
  addNewDevice: (device: Device) => void;
}

const SIEMContext = createContext<SIEMContextType | undefined>(undefined);

export const SIEMProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { toast } = useToast();
  const [devices, setDevices] = useState<Device[]>(initialDevices);
  const [blockedDevices, setBlockedDevices] = useState<string[]>([]);
  const [recentConnections, setRecentConnections] = useState<Device[]>([]);

  const blockDevice = (deviceId: string, deviceName: string) => {
    if (!blockedDevices.includes(deviceId)) {
      setBlockedDevices([...blockedDevices, deviceId]);
      toast({
        title: "Device Blocked",
        description: `${deviceName} has been blocked from accessing the network.`,
        variant: "destructive",
      });
    }
  };

  const unblockDevice = (deviceId: string, deviceName: string) => {
    setBlockedDevices(blockedDevices.filter(id => id !== deviceId));
    toast({
      title: "Device Unblocked",
      description: `${deviceName} has been unblocked and can now access the network.`,
    });
  };

  const isDeviceBlocked = (deviceId: string) => {
    return blockedDevices.includes(deviceId);
  };

  const addNewDevice = (device: Device) => {
    setDevices(prev => [...prev, device]);
    setRecentConnections(prev => [device, ...prev].slice(0, 5));
    
    toast({
      title: "New Device Connected",
      description: `${device.name} (${device.ip}) has connected to the network.`,
      variant: "default",
    });
  };

  const connectedDevices = devices.filter(
    device => device.status === 'online' && !blockedDevices.includes(device.id)
  ).length;

  // Simulate new device connections periodically (for demo purposes)
  useEffect(() => {
    const interval = setInterval(() => {
      const randomConnect = Math.random() > 0.7;
      if (randomConnect) {
        const deviceTypes = ['laptop', 'phone', 'tablet', 'desktop', 'other'] as const;
        const osOptions = ['Windows 11', 'iOS 16', 'Android 13', 'macOS Ventura', 'Linux Mint'];
        
        const newDevice: Device = {
          id: `device-${Date.now()}`,
          name: `New ${deviceTypes[Math.floor(Math.random() * deviceTypes.length)]}`,
          ip: `192.168.1.${Math.floor(Math.random() * 100) + 150}`,
          type: deviceTypes[Math.floor(Math.random() * deviceTypes.length)],
          status: 'online',
          lastSeen: new Date().toISOString(),
          os: osOptions[Math.floor(Math.random() * osOptions.length)],
          trafficUsage: Math.floor(Math.random() * 200)
        };
        
        addNewDevice(newDevice);
      }
    }, 30000); // Every 30 seconds check for a new connection

    return () => clearInterval(interval);
  }, []);

  return (
    <SIEMContext.Provider 
      value={{ 
        devices, 
        connectedDevices, 
        blockedDevices, 
        recentConnections,
        blockDevice, 
        unblockDevice, 
        isDeviceBlocked,
        addNewDevice
      }}
    >
      {children}
    </SIEMContext.Provider>
  );
};

export const useSIEM = () => {
  const context = useContext(SIEMContext);
  if (context === undefined) {
    throw new Error('useSIEM must be used within a SIEMProvider');
  }
  return context;
};
