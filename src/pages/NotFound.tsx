import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-background-dark text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary-purple">404</h1>
        <p className="text-lg text-text-light mt-2">Oops! Page Not Found.</p>
        <a
          href="/"
          className="mt-4 inline-block text-primary-purple hover:underline"
        >
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
