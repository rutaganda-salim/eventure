// pages/api/events.js

import { MongoClient } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('MongoDB connection string is not defined in environment variables.');
}

const client = new MongoClient(uri);

export async function GET(req: NextRequest) {
  try {
    await client.connect();
    const database = client.db('test');
    const eventsCollection = database.collection('eventuredb');
    const usersCollection = database.collection('users'); // Assuming you have a users collection

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
  } finally {
    await client.close();
  }
}
