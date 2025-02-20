import React from "react";
import { Button } from "../ui/button";
import RegistrationForm from "./RegistrationForm";
import Navbar from "../navigation/Navbar";
import Footer from "../navigation/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Master Digital Marketing for Network Success
              </h1>
              <p className="text-xl text-muted-foreground">
                Build your network marketing business with cutting-edge digital
                skills. Join our comprehensive training platform designed for
                modern entrepreneurs.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="font-semibold">
                  Get Started
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
                alt="Digital Marketing Training"
                className="rounded-lg shadow-2xl object-cover h-[500px] w-full"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Our Platform?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-primary/5 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Fast-Track Learning</h3>
                <p className="text-muted-foreground">
                  Build a Network Marketing Business by Accelerating your
                  success with our structured, practical training programs.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-primary/5 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Expert Mentorship</h3>
                <p className="text-muted-foreground">
                  Learn from industry professionals with proven success records.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-primary/5 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Proven Results</h3>
                <p className="text-muted-foreground">
                  Join thousands of successful graduates who have transformed
                  their businesses.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Form Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <RegistrationForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
