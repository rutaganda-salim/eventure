// src/app/api/createEvents/route.ts
import { MongoClient } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('MongoDB connection string is not defined in environment variables.');
}

const client = new MongoClient(uri);

export async function POST(req: NextRequest) {
  try {
    await client.connect();
    const database = client.db('test');
    const eventsCollection = database.collection('eventuredb');
    
    const { title, description, date, seats, image } = await req.json();
    const event = {
      title,
      description,
      date,
      seats: parseInt(seats, 10),
      image,
      createdAt: new Date(),
    };

    const result = await eventsCollection.insertOne(event);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
  } finally {
    await client.close();
  }
}
