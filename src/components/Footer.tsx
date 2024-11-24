import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark text-white py-8">
      <div className="container mx-auto text-center">
        <ul className="flex justify-between items-center flex-wrap text-text-light text-sm">
          <li>
            <a href="#" className="hover:text-light-purple">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-light-purple">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-light-purple">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-light-purple">
              Contact
            </a>
          </li>
        </ul>

        <p className="text-text-light text-xs mt-6">
          &copy; {new Date().getFullYear()} CineMingle. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
