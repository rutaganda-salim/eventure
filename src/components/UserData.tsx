import React, { useState } from 'react';

interface UserDataProps {
  onClose: () => void;
  onBookSeat: (userData: { firstName: string; lastName: string; email: string }) => void;
}

const UserData: React.FC<UserDataProps> = ({ onClose, onBookSeat }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

// Assuming this is in UserData component
const handleSubmit = async (event: React.FormEvent) => {
  event.preventDefault();

  const userData = { firstName, lastName, email };

  try {
    // Send a POST request to the API to create the user
    const response = await fetch('/api/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    if (response.ok) {
      // Handle successful user creation (e.g., close the modal)
      console.log('User created successfully:', data);
      onBookSeat(userData); // Call the onBookSeat prop with user data
      onClose(); // Close the modal after successful submission
    } else {
      // Handle error
      console.error('Error creating user:', data.error);
    }
  } catch (error) {
    console.error('Error sending user data:', error);
  }
};

  return (
    <div>
      <div
        id="authentication-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full bg-black bg-opacity-50"
      >
        <div className="relative p-4 w-full max-w-md">
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex items-center justify-between p-4 border-b rounded-t">
              <h3 className="text-xl font-semibold">Book Your Ticket</h3>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-400 hover:text-gray-900"
              >
                X
              </button>
            </div>
            <div className="p-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="firstName" className="block mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="block w-full border rounded p-2 text-lg" 
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="block w-full border rounded p-2 text-lg" 
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full border rounded p-2 text-lg" 
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 rounded-lg py-2"
                >
                  Confirm
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserData;