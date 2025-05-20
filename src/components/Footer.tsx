
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary rounded-lg p-1.5">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-xl text-brand-dark">SkillUp Society</span>
            </Link>
            <p className="text-sm text-gray-600">Mastering English, one skill at a time.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Skills</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/skills/reading" className="text-sm text-gray-600 hover:text-primary">
                  Reading
                </Link>
              </li>
              <li>
                <Link to="/skills/writing" className="text-sm text-gray-600 hover:text-primary">
                  Writing
                </Link>
              </li>
              <li>
                <Link to="/skills/speaking" className="text-sm text-gray-600 hover:text-primary">
                  Speaking
                </Link>
              </li>
              <li>
                <Link to="/skills/listening" className="text-sm text-gray-600 hover:text-primary">
                  Listening
                </Link>
              </li>
              <li>
                <Link to="/vocabulary" className="text-sm text-gray-600 hover:text-primary">
                  Vocabulary
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/chat" className="text-sm text-gray-600 hover:text-primary">
                  Chat
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-sm text-gray-600 hover:text-primary">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} SkillUp Society. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
