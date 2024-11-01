// src/lib/mongodb.ts

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('MongoDB connection string is not defined in environment variables.');
}

// You can include other MongoDB options here if needed, but the two below are no longer necessary.
const options = {
  // Example: maxPoolSize, useUnifiedTopology, etc.
  maxPoolSize: 10, // Optional: set the maximum pool size
};

const client = new MongoClient(uri, options);

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the client is reused
  if (!(global as any)._mongoClientPromise) {
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  // In production mode, create a new client for each connection
  clientPromise = client.connect();
}

export async function connectToDatabase() {
  const client = await clientPromise;
  const db = client.db('test'); // Use your database name
  return { db, client };
}