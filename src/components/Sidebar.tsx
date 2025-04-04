
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Shield, 
  FileText, 
  Activity, 
  AlertTriangle, 
  Laptop, 
  Network,
  Database,
  HelpCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItemProps {
  icon: React.ReactNode;
  title: string;
  href: string;
}

const NavItem = ({ icon, title, href }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === href;
  
  return (
    <Link 
      to={href} 
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-all hover:bg-siem-dark-accent",
        isActive ? "bg-siem-dark-accent text-siem-blue" : "text-gray-400"
      )}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 flex-col border-r border-gray-800 bg-siem-dark pt-16 md:flex">
      <nav className="flex-1 space-y-1 px-4 py-6">
        <div className="mb-6">
          <h2 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            OVERVIEW
          </h2>
          <div className="space-y-1">
            <NavItem icon={<Home className="h-5 w-5" />} title="Dashboard" href="/" />
            <NavItem icon={<Shield className="h-5 w-5" />} title="Security" href="/security" />
            <NavItem icon={<Database className="h-5 w-5" />} title="Logs" href="/logs" />
          </div>
        </div>

        <div className="mb-6">
          <h2 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            MONITORING
          </h2>
          <div className="space-y-1">
            <NavItem icon={<Activity className="h-5 w-5" />} title="Network Traffic" href="/network" />
            <NavItem icon={<AlertTriangle className="h-5 w-5" />} title="Alerts" href="/alerts" />
            <NavItem icon={<Laptop className="h-5 w-5" />} title="Devices" href="/devices" />
            <NavItem icon={<Network className="h-5 w-5" />} title="Connections" href="/connections" />
          </div>
        </div>

        <div className="mb-6">
          <h2 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            REPORTING
          </h2>
          <div className="space-y-1">
            <NavItem icon={<FileText className="h-5 w-5" />} title="Reports" href="/reports" />
          </div>
        </div>
      </nav>

      <div className="mt-auto border-t border-gray-800 p-4">
        <NavItem icon={<HelpCircle className="h-5 w-5" />} title="Documentation" href="/docs" />
      </div>
    </aside>
  );
};

export default Sidebar;
