"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const events = [
    {
      title: "BestSeller Book Bootcamp - write, Market & Publish Your Book",
      location: "Lucknow",
      date: "March 15, 5:30PM",
      type: "ONLINE EVENT",
      image: "/event.png",
    },
    {
      title: "BestSeller Book Bootcamp - write, Market & Publish Your Book",
      location: "Lucknow",
      date: "March 15, 5:30PM",
      type: "ONLINE EVENT",
      image: "/event.png",
    },
    {
      title: "BestSeller Book Bootcamp - write, Market & Publish Your Book",
      location: "Lucknow",
      date: "March 15, 5:30PM",
      type: "ONLINE EVENT",
      image: "/event.png",
    },
    {
      title: "BestSeller Book Bootcamp - write, Market & Publish Your Book",
      location: "Lucknow",
      date: "March 15, 5:30PM",
      type: "ONLINE EVENT",
      image: "/event.png",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <header className="container flex h-16 items-center justify-between px-4">
        <Link className="flex items-center space-x-2" href="/">
          <span className="text-xl font-bold">Event</span>
          <span className="text-xl font-bold text-purple-600">ure</span>
        </Link>
        <div className="flex items-center space-x-4 ml-auto">
          {" "}
          {/* Added ml-auto here */}
          <Button
            variant="ghost"
            onClick={() => (window.location.href = "/admin/login")}
          >
            Login
          </Button>
          <Button
            onClick={() => (window.location.href = "/admin/signup")}
            className="bg-purple-600 hover:bg-purple-700"
          >
            Signup
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative h-[500px]">
          <div className="absolute inset-0">
            <Image
              src="/hero.png"
              alt="Audience at an event"
              className="object-cover brightness-50"
              fill
              priority
            />
          </div>
          <div className="relative flex h-full flex-col items-center justify-center space-y-12 text-white">
            <h1 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl">
              MADE FOR THOSE
              <br />
              WHO DO
            </h1>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              Upcoming <span className="text-purple-600">Events</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <Card key={index} className="overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={400}
                  height={200}
                  className="aspect-video object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {event.location}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-purple-600">
                      {event.date}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {event.type}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline">Load more...</Button>
          </div>
        </section>

        <section className="bg-[#1a1150] py-16">
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

        <section className="py-16">
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

        <section className="container mx-auto px-4 py-16">
          <h2 className="mb-8 text-2xl font-bold">
            Our <span className="text-purple-600">Blogs</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((blog) => (
              <Card key={blog} className="overflow-hidden">
                <Image
                  src="/image3.svg"
                  alt="Blog"
                  width={400}
                  height={200}
                  className="aspect-video object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold">BestSeller Book Bootcamp</h3>
                  <p className="text-sm text-muted-foreground">
                    March 15, 5:30PM
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#1a1150] py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold">
              Event <span className="text-purple-400">Hive</span>
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
    </div>
  );
}
