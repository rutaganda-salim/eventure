// src/app/api/createEvents/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb'; // Adjust the path if needed

export async function POST(req: NextRequest) {
  try {
    // Use the connectToDatabase function to get the client and database
    const { db } = await connectToDatabase();
    const eventsCollection = db.collection('eventuredb');
    
    const { title, description, date, seats, image } = await req.json();
    const event = {
      title,
      description,
      date,
      seats: parseInt(seats, 10),
      image,
      createdAt: new Date(),
    };

    // Insert the event into the collection
    const result = await eventsCollection.insertOne(event);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
  }
}