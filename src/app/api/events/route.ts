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

    // Fetch events from the collection
    const events = await eventsCollection.find().toArray();

    // Map MongoDB _id to id for frontend compatibility
    const transformedEvents = events.map(event => ({
      id: event._id.toString(),
      title: event.title,
      description: event.description,
      seats: event.seats,
      date: event.date,
      image: event.image
    }));

    return NextResponse.json(transformedEvents);
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  } finally {
    await client.close();
  }
}
