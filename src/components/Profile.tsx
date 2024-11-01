import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import axios from "axios";

interface UserProfile {
  username: string;
  email: string;
  password: string;
  profileImage: string;
}

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    username: "",
    email: "",
    password: "",
    profileImage: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch user profile data when the component mounts
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/api/profile"); // Replace with your API endpoint
        setProfile(response.data);
      } catch (error) {
        console.error("Failed to fetch profile", error);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProfile({ ...profile, [id]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setProfile({ ...profile, profileImage: reader.result as string });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    try {
      await axios.put("/api/profile", profile); // Replace with your API endpoint
      setIsEditing(false);
      alert("Profile updated successfully");
    } catch (error) {
      console.error("Failed to update profile", error);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <div className="w-full max-w-lg p-8 bg-white dark:bg-gray-800 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Profile</h2>
        <div className="flex flex-col items-center mb-6">
          <img
            src={profile.profileImage || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-2"
            />
          )}
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              value={profile.username}
              onChange={handleChange}
              className="col-span-3"
              readOnly={!isEditing}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={profile.email}
              onChange={handleChange}
              className="col-span-3"
              readOnly={!isEditing}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={profile.password}
              onChange={handleChange}
              className="col-span-3"
              readOnly={!isEditing}
              placeholder="••••••••"
            />
          </div>
          <div className="flex justify-center space-x-4 mt-6">
            {isEditing ? (
              <Button onClick={handleSave}>Save Changes</Button>
            ) : (
              <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
            )}
            {isEditing && (
              <Button onClick={() => setIsEditing(false)} variant="secondary">
                Cancel
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
