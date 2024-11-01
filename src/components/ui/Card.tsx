import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  description: string;
  date: string;
  seats: number | string;
  image: string;
}

const Card = ({ title, description, date, seats, image }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedDate, setEditedDate] = useState(date);
  const [editedSeats, setEditedSeats] = useState(seats);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSaveClick = () => {
    closeModal();
  };

  return (
    <div className="relative group max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105">
      <img
        className="rounded-t-lg w-full h-[200px] object-cover"
        src={image}
        alt="Event Image"
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {editedTitle}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-lg">
          {editedDescription}
        </p>
        <div className="flex justify-between gap-3">
          <p className="bg-blue-700 p-2 text-white rounded-3xl text-center w-48">
            Seats: {editedSeats}
          </p>
          <p className="bg-blue-700 p-2 text-white rounded-3xl text-center w-48">
            {editedDate}
          </p>
        </div>
      </div>
      {/* Pen Icon on Hover */}
      <button
        onClick={openModal}
        className="absolute top-2 right-2 bg-blue-950 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        <FaPen className="text-white" size={20} />
      </button>

      {/* Modal for Editing */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Event</DialogTitle>
            <DialogDescription>
              Update the event details below and save your changes.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                Date
              </Label>
              <Input
                id="date"
                value={editedDate}
                onChange={(e) => setEditedDate(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="seats" className="text-right">
                Seats
              </Label>
              <Input
                id="seats"
                value={editedSeats}
                onChange={(e) => setEditedSeats(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSaveClick}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Card;
