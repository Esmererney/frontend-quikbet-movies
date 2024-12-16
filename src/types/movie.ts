import { Gender } from "./gender";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  description: string;
  image: string;
  runtime: number;
  trailer_url: string;
  genres: Gender[];
  backdrop_path?: string; // Opcional, ya que no todas las películas pueden tener un backdrop
  overview?: string; // Opcional, si quieres incluir una descripción breve de la película
  genre_ids?: number[]; // Opcional, para obtener los géneros de la película
  original_language?: string; // Opcional, para el idioma original de la película
}
