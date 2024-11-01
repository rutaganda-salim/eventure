import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import axios from "axios";

interface AdminSettings {
  notifications: boolean;
  theme: string;
  userManagement: string;
  eventManagement: string;
  emailNotifications: boolean;
  siteTitle: string;
  siteDescription: string;
  socialLinks: string;
}

const Settings: React.FC = () => {
  const [settings, setSettings] = useState<AdminSettings>({
    notifications: false,
    theme: "light",
    userManagement: "enabled",
    eventManagement: "enabled",
    emailNotifications: false,
    siteTitle: "",
    siteDescription: "",
    socialLinks: "",
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get("/api/admin/settings");
        setSettings(response.data);
      } catch (error) {
        console.error("Failed to fetch admin settings", error);
      }
    };
    fetchSettings();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, checked, value } = e.target;
    setSettings((prev) => ({
      ...prev,
      [id]: e.target.type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = async () => {
    try {
      await axios.put("/api/admin/settings", settings);
      alert("Admin settings updated successfully");
    } catch (error) {
      console.error("Failed to update admin settings", error);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <div className="w-full max-w-lg p-8 bg-white dark:bg-gray-800 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Admin Settings</h2>
        <form className="space-y-6">
          {/* Notifications Section */}
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications" className="text-lg">Enable Notifications</Label>
            <Input
              id="notifications"
              type="checkbox"
              checked={settings.notifications}
              onChange={handleChange}
              className="h-6 w-6"
            />
          </div>

          {/* Theme Selection */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="theme" className="text-lg">Theme</Label>
            <select
              id="theme"
              value={settings.theme}
              onChange={handleChange}
              className="col-span-3 p-2 border rounded"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          {/* User Management */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="userManagement" className="text-lg">User Management</Label>
            <select
              id="userManagement"
              value={settings.userManagement}
              onChange={handleChange}
              className="col-span-3 p-2 border rounded"
            >
              <option value="enabled">Enabled</option>
              <option value="disabled">Disabled</option>
            </select>
          </div>

          {/* Event Management */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="eventManagement" className="text-lg">Event Management</Label>
            <select
              id="eventManagement"
              value={settings.eventManagement}
              onChange={handleChange}
              className="col-span-3 p-2 border rounded"
            >
              <option value="enabled">Enabled</option>
              <option value="disabled">Disabled</option>
            </select>
          </div>

          {/* Email Notifications */}
          <div className="flex items-center justify-between">
            <Label htmlFor="emailNotifications" className="text-lg">Email Notifications</Label>
            <Input
              id="emailNotifications"
              type="checkbox"
              checked={settings.emailNotifications}
              onChange={handleChange}
              className="h-6 w-6"
            />
          </div>

          {/* Site Title */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="siteTitle" className="text-lg">Site Title</Label>
            <Input
              id="siteTitle"
              value={settings.siteTitle}
              onChange={handleChange}
              className="col-span-3 p-2 border rounded"
            />
          </div>

          {/* Site Description */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="siteDescription" className="text-lg">Site Description</Label>
            <Input
              id="siteDescription"
              value={settings.siteDescription}
              onChange={handleChange}
              className="col-span-3 p-2 border rounded"
            />
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="socialLinks" className="text-lg">Social Media Links</Label>
            <Input
              id="socialLinks"
              value={settings.socialLinks}
              onChange={handleChange}
              className="col-span-3 p-2 border rounded"
              placeholder="Comma separated links"
            />
          </div>

          <div className="flex justify-center mt-6">
            <Button onClick={handleSave}>Save Changes</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
