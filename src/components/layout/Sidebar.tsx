import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  Home,
  Building2,
  CircleDollarSign,
  Users,
  MessageCircle,
  Bell,
  FileText,
  Settings,
  HelpCircle,
  CreditCard,
  ShieldCheck,
  PlayCircle,
} from 'lucide-react';

interface SidebarItemProps {
  to: string;
  icon: React.ReactNode;
  text: string;
  badge?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ to, icon, text, badge }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center justify-between py-2.5 px-4 rounded-md transition-colors duration-200 ${
          isActive
            ? 'bg-primary-50 text-primary-700'
            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
        }`
      }
    >
      <div className="flex items-center">
        <span className="mr-3">{icon}</span>
        <span className="text-sm font-medium">{text}</span>
      </div>

      {badge && (
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary-100 text-primary-700">
          {badge}
        </span>
      )}
    </NavLink>
  );
};

export const Sidebar: React.FC = () => {
  const { user } = useAuth();
  if (!user) return null;

  const entrepreneurItems = [
    { to: '/dashboard/entrepreneur', icon: <Home size={20} />, text: 'Dashboard' },
    { to: `/profile/entrepreneur/${user.id}`, icon: <Building2 size={20} />, text: 'My Startup' },
    { to: '/investors', icon: <CircleDollarSign size={20} />, text: 'Find Investors' },
    { to: '/payments', icon: <CreditCard size={20} />, text: 'Payments', badge: 'NEW' },
    { to: '/messages', icon: <MessageCircle size={20} />, text: 'Messages' },
    { to: '/notifications', icon: <Bell size={20} />, text: 'Notifications' },
    { to: '/documents', icon: <FileText size={20} />, text: 'Documents' },
  ];

  const investorItems = [
    { to: '/dashboard/investor', icon: <Home size={20} />, text: 'Dashboard' },
    { to: `/profile/investor/${user.id}`, icon: <CircleDollarSign size={20} />, text: 'My Portfolio' },
    { to: '/entrepreneurs', icon: <Users size={20} />, text: 'Find Startups' },
    { to: '/payments', icon: <CreditCard size={20} />, text: 'Payments', badge: 'NEW' },
    { to: '/deals', icon: <FileText size={20} />, text: 'Deals', badge: 'NEW' },
    { to: '/messages', icon: <MessageCircle size={20} />, text: 'Messages' },
    { to: '/notifications', icon: <Bell size={20} />, text: 'Notifications' },
  ];

  const sidebarItems =
    user.role === 'entrepreneur' ? entrepreneurItems : investorItems;

  const commonItems = [
    {
      to: '/security',
      icon: <ShieldCheck size={20} />,
      text: 'Security & Access',
    },
    {
      to: '/demo',
      icon: <PlayCircle size={20} />,
      text: 'Platform Demo',
    },
    {
      to: '/settings',
      icon: <Settings size={20} />,
      text: 'Settings',
    },
    {
      to: '/help',
      icon: <HelpCircle size={20} />,
      text: 'Help & Support',
    },
  ];

  return (
    <div className="w-64 bg-white h-full border-r border-gray-200 hidden md:block">
      <div className="h-full flex flex-col">
        <div className="flex-1 py-4 overflow-y-auto">
          <div className="px-3 space-y-1">
            <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              {user.role === 'entrepreneur' ? 'Entrepreneur Panel' : 'Investor Panel'}
            </h3>

            {sidebarItems.map((item, index) => (
              <SidebarItem key={index} {...item} />
            ))}
          </div>

          <div className="mt-8 px-3">
            <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              System
            </h3>
            <div className="mt-2 space-y-1">
              {commonItems.map((item, index) => (
                <SidebarItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="bg-gray-50 rounded-md p-3">
            <p className="text-xs text-gray-600">Need assistance?</p>
            <h4 className="text-sm font-medium text-gray-900 mt-1">
              Contact Support
            </h4>
            <a
              href="mailto:support@businessnexus.com"
              className="mt-2 inline-flex items-center text-xs font-medium text-primary-600 hover:text-primary-500"
            >
              support@businessnexus.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
