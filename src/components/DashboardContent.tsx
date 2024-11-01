"use client";

import React, { useState } from "react";
import { Calendar, Home, Inbox, Search, Settings, Menu } from "lucide-react";

import HomeSection from "@/components/Events";
import EventsSection from "@/components/AdminHomePage";
import CreateEventSection from "@/components/CreateEvent";
import ProfileSection from "@/components/Profile";
import SettingsSection from "@/components/Settings";

const sidebarLinks = [
  { title: "Home", icon: Home, component: <HomeSection /> },
  { title: "Events", icon: Inbox, component: <EventsSection /> },
  { title: "Create Event", icon: Calendar, component: <CreateEventSection /> },
  { title: "Profile", icon: Search, component: <ProfileSection /> },
  { title: "Settings", icon: Settings, component: <SettingsSection /> },
];

const DashboardContent: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<JSX.Element>(
    <HomeSection />
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarClick = (component: JSX.Element) => {
    setActiveComponent(component);
    if (window.innerWidth < 1024) setIsSidebarOpen(false);
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="lg:flex">
      <div>
        
      </div>
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:inset-0 transition-transform duration-200 ease-in-out`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pt-16 pb-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {sidebarLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => handleSidebarClick(link.component)}
                  className="flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <link.icon className="w-5 h-5 mr-2" />
                  <span>{link.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 px-3 py-3">
          <button
            onClick={toggleSidebar}
            className="text-gray-500 dark:text-gray-400 lg:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>
          <a href="#" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Logo"
            />
            <span className="text-xl font-semibold dark:text-white">
              Eventure
            </span>
          </a>
         
        </nav>

        {/* Active Component Display */}
        <div className="pt-16 p-6 overflow-y-auto h-full bg-gray-100 dark:bg-gray-900">
          {activeComponent}
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
