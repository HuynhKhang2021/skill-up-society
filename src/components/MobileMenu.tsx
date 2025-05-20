
import React from "react";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="text-base">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[240px]">
        <nav className="flex flex-col gap-4 mt-8">
          <Link to="/" className="text-lg font-medium">
            Home
          </Link>
          <Link to="/skills/reading" className="text-lg font-medium">
            Reading
          </Link>
          <Link to="/skills/writing" className="text-lg font-medium">
            Writing
          </Link>
          <Link to="/skills/speaking" className="text-lg font-medium">
            Speaking
          </Link>
          <Link to="/skills/listening" className="text-lg font-medium">
            Listening
          </Link>
          <Link to="/chat" className="text-lg font-medium">
            Community Chat
          </Link>
          <Link to="/profile" className="text-lg font-medium">
            Profile
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
