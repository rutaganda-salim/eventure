import React, { useState } from "react";
import { Button } from "./button";
import UserData from "../UserData"; // Import UserData component

interface UserCardProps {
  title: string;
  description: string;
  seats: number;
  date: string;
  image: string;
  onBookSeat: (userData: { firstName: string; lastName: string; email: string }) => void; // Update function to include user data
  isSoldOut: boolean;
}

const UserCard: React.FC<UserCardProps> = ({
  title,
  description,
  seats,
  date,
  image,
  onBookSeat,
  isSoldOut,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookSeat = () => {
    if (!isSoldOut) {
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="rounded-lg shadow-lg overflow-hidden bg-white transform hover:scale-105 transition duration-300 ease-in-out">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-blue-600 mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-gray-500 text-sm mb-1">Date: {date}</p>
        <p className="text-gray-500 text-sm mb-4">
          Available Seats: <span className="font-bold">{seats}</span>
        </p>
        <Button
          onClick={handleBookSeat}
          disabled={isSoldOut}
          className={`w-full py-2 rounded-lg text-white ${
            isSoldOut ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
          } transition duration-300`}
        >
          {isSoldOut ? "Sold Out" : "Book Now"}
        </Button>
      </div>
      {isModalOpen && (
        <UserData onClose={handleModalClose} onBookSeat={onBookSeat} />
      )}
    </div>
  );
};

export default UserCard;