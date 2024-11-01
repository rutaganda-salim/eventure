import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1a1150] py-12 text-white">
    <div className="container mx-auto px-4">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold">
          <span className="text-purple-400">Eventure</span>
        </h2>
        <div className="mt-4 flex justify-center space-x-4">
          <Input
            className="max-w-xs bg-white/10 text-white placeholder:text-gray-400"
            placeholder="Enter your email"
            type="email"
          />
          <Button className="bg-purple-600 hover:bg-purple-700">
            Subscribe
          </Button>
        </div>
      </div>
      <div className="flex justify-center space-x-8 text-sm">
        <Link href="/" className="hover:text-purple-400">
          Home
        </Link>
        <Link href="/about" className="hover:text-purple-400">
          About
        </Link>
        <Link href="/services" className="hover:text-purple-400">
          Services
        </Link>
        <Link href="/contact" className="hover:text-purple-400">
          Get in touch
        </Link>
        <Link href="/faqs" className="hover:text-purple-400">
          FAQs
        </Link>
      </div>
      <div className="mt-8 text-center text-sm text-gray-400">
        © 2024 Eventure. All rights reserved.
      </div>
    </div>
  </footer>
  );
};

export default Footer;
