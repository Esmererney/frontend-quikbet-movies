import RatingCircle from "./Rating";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

interface MoviesRenderProps {
  movies: Movie[];
}

export default function MoviesRender({
  movies,
}: Readonly<MoviesRenderProps>): JSX.Element {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <Link
          key={`movie-${movie.id}`}
          href={`/movie/${movie.id}?id=${movie.id}`}
        >
          <div
            key={movie.id}
            className="bg-neutral-800 shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || "No title available"}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-bold text-white">
                {movie.title || "Unknown"}
              </h3>
              <p className="text-xs text-white mt-2">
                {movie.release_date || "N/A"}
              </p>
              <div className="flex flex-row justify-center  items-center text-xs pt-2">
                <div className="flex flex-col items-center text-white">
                  <span className="mb-2">Rating</span>
                  <RatingCircle rating={movie.vote_average || 0} />
                </div>
                <div className="flex flex-col items-center text-white ml-4">
                  <span className="mb-2">Favorite</span>
                  <FavoriteButton movieId={movie.id} />
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
