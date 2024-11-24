// src/components/HomePage.js
import React from "react";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import Footer from "./components/Footer";
import Button from "./components/Button";

const movies = [
  {
    id: 1,
    title: "Movie 1",
    thumbnail: "https://www.sample-videos.com/img/Sample-png-image-500kb.png",
  },
  {
    id: 2,
    title: "Movie 2",
    thumbnail: "https://www.sample-videos.com/img/Sample-png-image-500kb.png",
  },
  {
    id: 3,
    title: "Movie 3",
    thumbnail: "https://www.sample-videos.com/img/Sample-png-image-500kb.png",
  },
  {
    id: 4,
    title: "Movie 4",
    thumbnail: "https://www.sample-videos.com/img/Sample-png-image-500kb.png",
  },
  // Add more movies as needed
];

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="bg-background-light py-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map((movie) => (
              <MovieCard {...movie} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button text="View More" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
