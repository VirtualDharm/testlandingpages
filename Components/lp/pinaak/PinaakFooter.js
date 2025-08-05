import React from "react";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

function PinaakFooter() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          {/* Logo Section */}
          <div className="sm:flex-1  items-center justify-center sm:justify-start text-center sm:text-left">
            <Link href="/" passHref>
              <img
                src="/whitelogo.svg"
                alt="Pinaak Logo"
                className="h-8 sm:place-self-start place-self-center cursor-pointer"
              />
            </Link>
            <div className="mt-2">
              <p className="text-gray-400 font-sans text-sm">
                &copy; 2025 SAS ONE PRIVATE LIMITED. All rights reserved.
              </p>
            </div>
          </div>

          {/* Social Media and Navigation Section */}
          <div className="flex flex-col items-center sm:items-center space-y-4">
            {/* Social Media Icons */}
            <div className="flex justify-center items-center space-x-4">
              <a
                href="https://www.linkedin.com/company/82644363/admin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/+919565155000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/sasone.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>

            {/* Navigation Links with Separators */}
            <nav className="flex items-center space-x-4 text-sm">
              <Link
                href="/privacy-policy"
                target="_blank"
                passHref
                className="text-gray-300 hover:text-white transition-colors font-sans"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-500">|</span>
              <Link
                href="/terms-of-use"
                target="_blank"
                passHref
                className="text-gray-300 hover:text-white transition-colors font-sans"
              >
                Terms of Use
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright Section */}
      </div>
    </footer>
  );
}

export default PinaakFooter;
