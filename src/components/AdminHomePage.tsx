import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import hat from "../../public/hat.png";
import Card from "./ui/Card";

type Event = {
  id: string;
  title: string;
  description: string;
  seats: number;
  date: string;
  image: string;
};

const AdminHomePage = () => {
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

  if (loading) {
    return <div>Loading...</div>; // Optional loading state
  }

  return (
    <div className="flex flex-col">
      <div className="p-4">
        <a
          href="#"
          className="flex flex-col items-center bg-blue-600 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-screen hover:bg-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 duration-200 text-white text-2xl"
        >
          <div className="flex flex-col justify-between p-6 leading-relaxed">
            <h5 className="mb-4 text-3xl font-bold tracking-tight text-white">
              Noteworthy Technology Acquisitions 2021
            </h5>
            <p className="mb-4 font-normal text-white dark:text-gray-400 text-lg">
              Enter the world of events. Discover the latest Events or start
              creating your own!
            </p>
            <div className="flex mt-4">
              <Button className="px-6 py-5 bg-white text-slate-600 text-lg hover:bg-transparent hover:border hover:text-white hover:border-white mx-4">
                Discover Now
              </Button>
              <Button className="px-6 py-5 bg-transparent border border-white text-lg text-white hover:bg-transparent">
                Watch Video
              </Button>
            </div>
          </div>
          <img
            className="object-cover w-full rounded-t-lg h-[400px] md:h-auto md:w-64 md:rounded-none md:rounded-s-lg"
            src={hat.src}
            alt="Noteworthy technology acquisitions"
          />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
      {events.map((event) => (
          <Card
            key={event.id}
            title={event.title}
            description={event.description}
            seats={event.seats.toString()} // If seats is a number, convert to string if needed
            date={event.date}
            image={event.image}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminHomePage;
