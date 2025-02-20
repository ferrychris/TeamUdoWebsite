import React from "react";
import { Button } from "../ui/button";
import { LogIn } from "lucide-react";


const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a href="https://soyomu.com">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
           TeamUdo Pro
          </h1></a>
          <div className="hidden md:flex space-x-6">
{/*             <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a> */}
            <a
              href="#courses"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Courses
            </a>
{/*             <a
              href="#testimonials"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonials
            </a> */}
          </div>
        </div>
        <div className="flex items-center space-x-4">
{/*           <Button variant="ghost">Sign In</Button> */}
          <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
            <LogIn className="mr-2 h-4 w-4" /> Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
