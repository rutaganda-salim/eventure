import React, { useEffect, useState } from "react";

interface RecentActivity {
  action: string;
  time: string;
}

const Events: React.FC = () => {
  const [stats, setStats] = useState<{
    totalEvents: number;
    registeredUsers: number;
    upcomingEvents: number;
    recentActivities: RecentActivity[];
  } | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/actions");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  if (!stats) {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-gray-100 dark:bg-gray-900 overflow-hidden">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-100 dark:bg-gray-900 overflow-hidden">
      {/* Main Content */}
      <main className="bg-white rounded-lg shadow-md p-10 w-full max-w-5xl">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          Welcome Back, Admin!
        </h1>
        <p className="mt-2 text-lg text-gray-600 text-center">
          Manage your events and settings efficiently.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-700">Total Events</h3>
            <p className="text-3xl font-bold text-gray-900">{stats.totalEvents}</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-700">Registered Users</h3>
            <p className="text-3xl font-bold text-gray-900">{stats.registeredUsers}</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-700">Upcoming Events</h3>
            <p className="text-3xl font-bold text-gray-900">{stats.upcomingEvents}</p>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Recent Activities</h2>
          <ul className="mt-4 space-y-4">
            {stats.recentActivities.map((activity, index) => (
              <li key={index} className="p-4 bg-gray-50 rounded-lg shadow-md">
                <p className="text-lg text-gray-700">{activity.action}</p>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Events;
