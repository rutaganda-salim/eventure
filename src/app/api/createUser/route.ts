// src/app/api/createUser/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb'; // Adjust the path as necessary

export async function POST(req: NextRequest) {
  try {
    const { client, db } = await connectToDatabase();
    
    const { firstName, lastName, email } = await req.json();
    const user = {
      firstName,
      lastName,
      email,
      createdAt: new Date(),
    };

    const result = await db.collection('users').insertOne(user);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  } finally {
    // Do not close the client here, as it is cached and reused
    // await client.close(); // Remove this line
  }
}