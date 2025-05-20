
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { MessageCircle, User } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary rounded-lg p-1.5">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="font-bold text-xl hidden sm:inline text-brand-dark">SkillUp Society</span>
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          <Link to="/skills/reading" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
            Reading
          </Link>
          <Link to="/skills/writing" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
            Writing
          </Link>
          <Link to="/skills/speaking" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
            Speaking
          </Link>
          <Link to="/skills/listening" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
            Listening
          </Link>
          <Link to="/vocabulary" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
            Vocabulary
          </Link>
        </div>

        <div className="flex items-center space-x-2">
          <Link to="/chat">
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/profile">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
