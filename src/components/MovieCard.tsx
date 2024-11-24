import React from "react";

interface MovieProps {
  id: number;
  title: string;
  thumbnail: string;
  description?: string;
}

const MovieCard: React.FC<MovieProps> = (props: MovieProps) => {
  const { thumbnail, title, description } = props;
  return (
    <div className="bg-background-light shadow-card overflow-hidden">
      <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-primary-purple text-lg font-bold">{title}</h3>
        <p className="text-text-dark text-sm mt-2">{description ?? ""}</p>
      </div>
    </div>
  );
};

export default MovieCard;
