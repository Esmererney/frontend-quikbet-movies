"use client";

import { useState, useEffect } from "react";
import RootLayout from "./layout";
import { Movie } from "../types/movie";
import SearchMovie from "../component/SearchMovie";
import Movies from "../component/Movie"; // Componente que muestra las películas
import Carousel from "../component/Carousel"; // Componente que muestra las películas
import Skeleton from "../component/Skeleton";

export default function Example(): JSX.Element {
  const [query, setQuery] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Manejadores para actualizar el estado desde `SearchMovie`
  const handleSearch = (newQuery: string): void => setQuery(newQuery);
  const handleGenreSelect = (genreId: number | null): void =>
  setSelectedGenre(genreId);

  useEffect(() => {
    // Simulando la carga de datos
    setTimeout(() => {
      setLoading(false);
    }, 4000); // 2 segundos de carga simulada
  }, []);


  return (
    <RootLayout>
      <Carousel />
      {/* Cambia de flex-col en móviles a flex-row en pantallas medianas */}
      <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">
        {/* Contenedor del contenido dinámico, 30% */}
        <div className="w-full md:w-1/4 sticky left-0 text-black p-4 overflow-y-auto bg-neutral-800">
          {loading ? (
            <Skeleton type="search" />
          ) : (
            <SearchMovie onSearch={handleSearch} onGenreChange={handleGenreSelect} />
          )}
        </div>
        {/* Contenedor del contenido dinámico, 70% */}
        <div className="w-full md:w-3/4 p-4 overflow-auto bg-neutral-600">
            <Movies query={query} genreId={selectedGenre} />
        </div>
      </div>
    </RootLayout>
  );
}
