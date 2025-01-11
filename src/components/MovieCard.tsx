import React from "react";

interface MovieProps {
  id: number;
  title: string;
  thumbnail: string;
  description?: string;
}

const MovieCard: React.FC<MovieProps> = (props: MovieProps) => {
  const { id, thumbnail, title, description } = props;
  return (
    <a
      className="bg-background-light shadow-card overflow-hidden"
      href={`/stream/${id}`}
    >
      <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-primary-purple text-lg font-bold">{title}</h3>
        <p className="text-text-dark text-sm mt-2">{description ?? ""}</p>
      </div>
    </a>
  );
};

export default MovieCard;
