import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-background-dark text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary-purple">CineMingle</h1>
        <nav className="flex gap-6">
          <a href="#" className="hover:text-light-purple">
            Home
          </a>
          <a href="#" className="hover:text-light-purple">
            Movies
          </a>
          <a href="#" className="hover:text-light-purple">
            TV Shows
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
