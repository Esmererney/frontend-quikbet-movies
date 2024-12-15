"use client";

import { useEffect, useState } from "react";
import { Gender } from "../types/gender"; // Tipo para los géneros de películas

interface SearchMovieProps {
  onSearch: (query: string) => void;
  onGenreChange: (genreId: number | null) => void;
}

export default function Search({
  onSearch,
  onGenreChange,
}: SearchMovieProps): JSX.Element {
  const [query, setQuery] = useState<string>("");
  const [genres, setGenres] = useState<Gender[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

  useEffect(() => {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en-US";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWFiYTQ4ZmVhZmYxNzc1MGJlNTI5YmJmNGNkYTNlZSIsIm5iZiI6MTczNDAyNDAyMC40NzgwMDAyLCJzdWIiOiI2NzViMWI1NGM3ZDNmMmY5M2UxMzJjNjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aCifoKzp3CXenqMLcIvouanza2P6VxKEcrCexflnhhk",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setGenres(data.genres || []))
      .catch((err) => console.error(err));
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value); // Notificar al componente padre
  };

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value, 10);
    const genreId = isNaN(value) ? null : value;
    setSelectedGenre(genreId);
    onGenreChange(genreId); // Notificar al componente padre
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-left mb-4 text-white">Search</h2>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <h3 className="text-2xl mt-4 font-semibold text-left mb-4 text-white">Genre</h3>
        <select
          onChange={handleGenreChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" className="text-white">Select a genre</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
