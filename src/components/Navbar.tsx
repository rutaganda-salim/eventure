import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-600">Eventure</div>
        <ul className="flex space-x-6 text-gray-600">
            
          <li>
            <Button
              variant="ghost"
              onClick={() => (window.location.href = "/admin/login")}
            >
              Login
            </Button>
          </li>
          <li>
            <Button
              onClick={() => (window.location.href = "/admin/signup")}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Signup
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
