"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Movie } from "../../../types/movie";
import Rating from "../../../component/Rating";
import BackButton from "../../../component/BackButton";
import FavoriteButton from "../../../component/FavoriteButton";
import Image from "next/image";
import { PlayIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const MovieDetail = (): JSX.Element => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const searchParams = useSearchParams();
  const [recommendedMovies, setRecommendedMovies] = useState<Movie[]>([]);

  const id = searchParams.get("id");

  useEffect(() => {
    if (id) {
      const fetchMovieDetail = async (): Promise<void> => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=c1aba48feaff17750be529bbf4cda3ee`,
          );
          const data: Movie = await response.json();
          setMovie(data);

          fetchRecommendedMovies(parseInt(id as string));
        } catch (error) {
          // console.error("Error fetching movie details:", error);
        }
      };

      fetchMovieDetail();
    }
  }, [id]);

  const fetchRecommendedMovies = async (movieId: number): Promise<void> => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=c1aba48feaff17750be529bbf4cda3ee`,
      );
      const data = await response.json();
      setRecommendedMovies(data.results || []);
    } catch (error) {
      // console.error("Error fetching recommended movies:", error);
    }
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="bg-neutral-900 text-white">
      <div
        className="relative p-4 sm:p-6 lg:p-20 bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w500${movie.backdrop_path}')`,
        }}
      >
        {/* Fondo oscuro */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

        {/* Botón atrás */}
        <div className="absolute top-4 left-4 z-20">
          <BackButton />
        </div>

        {/* Contenido */}
        <div className="relative z-10 flex flex-col md:flex-row items-start gap-6 mt-10">
          {/* Imagen y botón de tráiler */}
          <div className="w-full md:w-auto flex flex-col items-center">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={300}
              height={450}
              className="rounded-lg shadow-lg w-full md:w-auto"
            />
            <a
              href={movie.trailer_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <button className="mt-4 text-black text-xs px-6 py-2 bg-yellow-400 font-bold rounded-lg shadow-md hover:bg-yellow-500 w-full flex items-center justify-center gap-2">
                Official Trailer <PlayIcon className="w-4 h-4 text-black" />
              </button>
            </a>
          </div>

          {/* Información de la película */}
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-2xl sm:text-4xl font-bold">
              {movie.title}{" "}
              {movie.release_date
                ? `(${movie.release_date.split("-")[0]})`
                : ""}
            </h1>
            <p className="text-sm text-gray-300">
              {movie.release_date} • {movie.runtime} min
            </p>
            <h3 className="text-lg sm:text-xl font-semibold">Overview</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              {movie.overview}
            </p>

            {/* Rating y Favoritos */}
            <div className="flex items-center justify-between gap-6">
              <Rating rating={movie.vote_average} variant="large" />
              <FavoriteButton movieId={movie.id} variant="large" />
            </div>

            {/* Géneros */}
            <div className="flex flex-wrap gap-2 mt-4">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="px-3 py-1 border border-yellow-400 rounded-md text-yellow-400 text-sm hover:text-black hover:bg-yellow-400"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recomendaciones */}
      <div className="mt-12 px-4 sm:px-6 lg:px-20">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Recommendations</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {recommendedMovies && recommendedMovies.length > 0 && recommendedMovies.map((recMovie) => (
            <Link
              key={`movie-${recMovie.id}`}
              href={`/movie/${recMovie.id}?id=${recMovie.id}`}
            >
              <div
                key={recMovie.id}
                className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w500${recMovie.poster_path}`}
                  alt={recMovie.title}
                  width={200}
                  height={300}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-white text-sm font-semibold truncate">
                    {recMovie.title}
                  </h3>
                  <p className="text-gray-400 text-xs">
                    {recMovie.release_date}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
