"use client";

import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Founder & CEO",
      image: "https://picsum.photos/seed/johndoe/200/200",
      description: "Passionate about creating memorable experiences.",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Head of Marketing",
      image: "https://picsum.photos/seed/janesmith/200/200",
      description: "Expert in connecting with our audience.",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Event Coordinator",
      image: "https://picsum.photos/seed/mikejohnson/200/200",
      description: "Ensuring every event runs smoothly.",
    },
    // Additional team members...
  ];

  return (
    <div>
    <Navbar />
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-12 w-screen">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="max-w-2xl text-center text-lg text-gray-700 mb-8">
        We are dedicated to bringing you unforgettable events that inspire and connect. Our team works tirelessly to curate unique experiences for everyone.
      </p>

      {/* Mission Section */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600">
          Our mission is to foster community through engaging events that celebrate creativity and collaboration. We believe in the power of connection and strive to create spaces where ideas can flourish.
        </p>
      </div>

      {/* Team Section */}
      <h2 className="text-3xl font-semibold mb-6">Meet Our Team</h2>
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-screen-xl">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={200}
              height={200}
              className="rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
            <p className="text-gray-600 text-center mt-2">{member.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Join Us in Making Memories</h2>
        <p className="text-lg text-gray-600 mb-6">
          We’d love to hear from you! Reach out to us for any inquiries or partnership opportunities.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
          Contact Us
        </button>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
