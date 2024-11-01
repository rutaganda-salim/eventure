"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import UserCard from "./ui/UserCard";
import Navbar from "./Navbar"; // Import the Navbar component
import Footer from "./Footer";
import {Button} from "@/components/ui/button"; // Import the Footer component

// Define the Event type
type Event = {
  id: string; // Assuming _id from MongoDB is used as a string
  title: string;
  description: string;
  seats: number;
  date: string;
  image: string;
};

const UserHomePage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the backend API
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events"); // Replace with your actual endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        setEvents(data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const bookSeat = (eventId: string) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId && event.seats > 0
          ? { ...event, seats: event.seats - 1 }
          : event
      )
    );
  };

  if (loading) {
    return <div className="text-center">Loading events...</div>; // Loading indicator
  }

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen overflow-x-hidden w-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-screen  flex items-center justify-center text-white">
        <Image
          src="/hero.png"
          alt="Events"
          fill
          className="h-full w-full object-cover brightness-50"
        />
        <div className="z-10 text-center">
          <h1 className="text-5xl font-bold mb-2">Discover Amazing Events</h1>
          <p className="text-lg font-light mb-4">
            Explore, enjoy, and book your seat today!
          </p>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300">
            View All Events
          </button>
        </div>
      </div>

      {/* Events Section */}
      <div className="w-full max-w-screen-xl mt-12 p-6">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {events.length > 0 ? (
            events.map((event) => (
              <UserCard
                key={event.id}
                title={event.title}
                description={event.description}
                seats={event.seats}
                date={event.date}
                image={event.image}
                onBookSeat={() => bookSeat(event.id)}
                isSoldOut={event.seats === 0}
              />
            ))
          ) : (
            <div className="col-span-3 text-center">No events available</div>
          )}
        </div>
      </div>
      <section className="w-full bg-[#1a1150] py-16">
          <div className="container mx-auto flex flex-col items-center px-4 lg:flex-row lg:justify-between">
            <div className="mb-8 w-64 lg:mb-0">
              <Image
                src="/svgs.svg"
                alt="Create Event Illustration"
                width={600}
                height={600}
                className="w-full"
              />
            </div>
            <div className="text-center text-white lg:text-left">
              <h2 className="mb-4 text-3xl font-bold">Make your own Event</h2>
              <p className="mb-6 text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Button
                onClick={() => (window.location.href = "/admin/login")}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Create Events
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold">
              Join these <span className="text-purple-600">brands</span>
            </h2>
            <p className="mb-12 text-center text-muted-foreground">
              We've had the pleasure of working with industry-defining brands.
              These are just some of them.
            </p>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
              {["Spotify", "Google", "Stripe", "YouTube", "Microsoft"].map(
                (brand) => (
                  <div key={brand} className="flex items-center justify-center">
                    <Image
                      src="/brand.svg"
                      alt={brand}
                      width={120}
                      height={40}
                      className="opacity-50 transition-opacity hover:opacity-100"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </section>

      <Footer />
    </div>
  );
};

export default UserHomePage;
