"use client";
import React, { useState, useEffect } from "react";
import { Movie } from "../../types/movie"; // Asegúrate de tener tu interfaz Movie definida.
import MoviesRender from "../../component/MoviesRender"; // Componente para marcar como favorito.

const FavoritesPage = (): JSX.Element => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  // Recuperar películas favoritas del localStorage
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const fetchMovies = async (): Promise<void> => {
      const moviesData: Movie[] = await Promise.all(
        favorites.map(async (movieId: number) => {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=c1aba48feaff17750be529bbf4cda3ee`,
          );
          const data: Movie[] = await response.json();
          return data;
        }),
      );
      setFavoriteMovies(moviesData);
    };

    fetchMovies();
  }, []);

  if (favoriteMovies.length === 0) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Your favorite movies</h1>
        <p>No favorite movies found.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-4xl font-extrabold text-center text-gradient bg-gradient-to-r from-neutral-700 via-neutral-800 to-neutral-900 bg-clip-text text-transparent mb-6">
        Your Favorite Movies
      </h1>

      <div className="">
        <MoviesRender movies={favoriteMovies} />
      </div>
    </div>
  );
};

export default FavoritesPage;
