"use client";
import React, { useState, useEffect } from "react";
import { Movie } from "../../types/movie"; // Asegúrate de tener tu interfaz Movie definida.
import MoviesRender from "../../component/MoviesRender"; // Componente para marcar como favorito.
import BackButton from "../../component/BackButton"; // Componente para ir atrás.
import Error from "./error";

const FavoritesPage = (): JSX.Element => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores

  // Recuperar películas favoritas del localStorage
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    const fetchMovies = async (): Promise<void> => {
      try {
        const moviesData: Movie[] = await Promise.all(
          favorites.map(async (movieId: number) => {
            const response = await fetch(
              `https://api.themoviedb.org/3/movie/${movieId}?api_key=c1aba48feaff17750be529bbf4cda3ee`,
            );

            if (!response.ok) {
              return (`Failed to fetch movie with ID ${movieId}`);
            }

            const data: Movie = await response.json();
            return data;
          }),
        );

        setFavoriteMovies(moviesData);
      } catch (err) {
        setError((err as Error).message); // Guardamos el mensaje de error
      } finally {
        setTimeout(() => {
          setIsLoading(false); // Cambiamos isLoading a false
        }, 2000);
      }
    };

    fetchMovies();
  }, []);

  if (error) {
    return (
      <Error
        error={{ message: error }} // Pasamos el mensaje de error
        reset={() => {
          setError(null); // Reseteamos el estado de error
          setIsLoading(true); // Volvemos a cargar las películas
          setFavoriteMovies([]); // Limpiamos las películas para recargar
        }}
      />
    );
  }

  if (favoriteMovies.length === 0) {
    return (
      <div className="p-4 bg-neutral-400 h-full">
        <BackButton />
        <h1 className="text-4xl font-extrabold text-center text-gradient bg-gradient-to-r from-neutral-700 via-neutral-800 to-neutral-900 bg-clip-text text-transparent mb-6">
          Your favorite movies
        </h1>
        <p>No favorite movies found.</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-neutral-400 h-full">
      {/* Botón atrás */}
      <div className="top-4 left-4">
        <BackButton />
      </div>
      <h1 className="text-4xl font-extrabold text-center text-gradient bg-gradient-to-r from-neutral-700 via-neutral-800 to-neutral-900 bg-clip-text text-transparent mb-6">
        Your favorite movies
      </h1>

      <div className="pl-10 pr-10">
        <MoviesRender movies={favoriteMovies} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default FavoritesPage;
