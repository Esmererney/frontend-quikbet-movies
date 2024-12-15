"use client";

import { useEffect, useState } from "react";
import MoviesRender from "./MoviesRender"; // Componente que renderiza las películas
import { Movie } from "../types/movie"; // Interfaz para la película

interface MoviesProps {
  query: string;
  genreId: number | null;
}

export default function Movies({ query, genreId }: Readonly<MoviesProps>): JSX.Element {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1); // Página actual
  const [totalPages, setTotalPages] = useState<number>(1); // Total de páginas

  // Función para obtener datos desde la API de TMDB con paginación
  const fetchMovies = async (url: string): Promise<void> => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWFiYTQ4ZmVhZmYxNzc1MGJlNTI5YmJmNGNkYTNlZSIsIm5iZiI6MTczNDAyNDAyMC40NzgwMDAyLCJzdWIiOiI2NzViMWI1NGM3ZDNmMmY5M2UxMzJjNjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aCifoKzp3CXenqMLcIvouanza2P6VxKEcrCexflnhhk",
      },
    };

    setLoading(true);
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setMovies(data.results || []);
      setTotalPages(data.total_pages); // Guardar el total de páginas
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  // Efecto para obtener películas cuando cambian el query, genreId o página
  useEffect(() => {
    let url = "";
    if (query.trim()) {
      url = `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=${page}`;
    } else if (genreId) {
      url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&language=en-US&page=${page}`;
    } else {
      url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;
    }

    fetchMovies(url);
  }, [query, genreId, page]); // Dependemos de query, genreId y page

  // Manejadores de paginación
  const goToNextPage = (): void => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const goToPreviousPage = (): void => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="p-4">
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <>
          <MoviesRender movies={movies} />
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={goToPreviousPage}
              disabled={page === 1}
              className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
            >
              Previous
            </button>
            <span>
              Page {page} of {totalPages}
            </span>
            <button
              onClick={goToNextPage}
              disabled={page === totalPages}
              className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}