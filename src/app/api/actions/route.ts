// pages/api/events.js

import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb'; // Adjust the path if necessary

export async function GET(req: NextRequest) {
  try {
    // Use the connectToDatabase function to get the client and database
    const { db } = await connectToDatabase();
    const eventsCollection = db.collection('eventuredb');
    const usersCollection = db.collection('users'); // Assuming you have a users collection

    // Fetch events and stats
    const totalEvents = await eventsCollection.countDocuments();
    const registeredUsers = await usersCollection.countDocuments();
    const upcomingEvents = await eventsCollection.countDocuments({ date: { $gte: new Date() } });

    // Fetch recent activities (You can modify this to pull real activities from your collections)
    const recentActivities = [
      { action: 'Created a new event: "Tech Conference 2023"', time: '2 hours ago' },
      { action: 'Updated user information for John Doe', time: '5 hours ago' },
      { action: 'Deleted event: "Music Festival 2022"', time: '1 day ago' },
    ];

    return NextResponse.json({
      totalEvents,
      registeredUsers,
      upcomingEvents,
      recentActivities,
    });
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}