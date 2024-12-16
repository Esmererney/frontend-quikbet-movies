"use client";

import { useState } from "react";
import RootLayout from "./layout";
import { Movie } from "../types/movie";
import SearchMovie from "../component/SearchMovie";
import Movies from "../component/Movie"; // Componente que muestra las películas
import Carousel from "../component/Carousel"; // Componente que muestra las películas

export default function Example(): JSX.Element {
  const [query, setQuery] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

  // Manejadores para actualizar el estado desde `SearchMovie`
  const handleSearch = (newQuery: string): void => setQuery(newQuery);
  const handleGenreSelect = (genreId: number | null): void =>
    setSelectedGenre(genreId);

  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  return (
    <RootLayout>
      <Carousel />
      {/* Cambia de flex-col en móviles a flex-row en pantallas medianas */}
      <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">
        {/* Contenedor del contenido dinámico, 30% */}
        <div className="w-full md:w-1/4 sticky left-0 text-black p-4 overflow-y-auto bg-neutral-800">
          <SearchMovie
            onSearch={handleSearch}
            onGenreChange={handleGenreSelect}
          />
        </div>
        {/* Contenedor del contenido dinámico, 70% */}
        <div className="w-full md:w-3/4 p-4 overflow-auto bg-neutral-600">
          <Movies query={query} genreId={selectedGenre} />
        </div>
      </div>
    </RootLayout>
  );
}
