import React, { useState, useEffect } from "react";

// Definición de la interfaz para las propiedades del componente FavoriteButton.
interface FavoriteButtonProps {
  movieId: number; // Identificador único de la película (por ejemplo, un ID de base de datos o un nombre de película único)
}

// Componente funcional FavoriteButton que maneja la funcionalidad de marcar una película como favorita.
const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
  // Estado que controla si la película está marcada como favorita.
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  // Hook para cargar el estado de la película desde el localStorage al montar el componente.
  useEffect(() => {
    // Recupera las películas favoritas del localStorage (si existen).
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    // Si la película ya está en el localStorage, marcarla como favorita.
    setIsFavorite(favorites.includes(movieId));
  }, [movieId]);

  // Función para manejar el clic en el botón de favorito.
  const handleFavoriteToggle = () => {
    // Recupera las películas favoritas actuales del localStorage.
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (isFavorite) {
      // Si ya es favorita, eliminarla de la lista de favoritas.
      const updatedFavorites = favorites.filter((id: number) => id !== movieId);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      // Si no es favorita, agregarla a la lista de favoritas.
      const updatedFavorites = [...favorites, movieId];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }

    // Actualizar el estado local para reflejar el cambio en la interfaz.
    setIsFavorite(!isFavorite);
  };

  return (
    <button
        onClick={handleFavoriteToggle} // Llamada a la función al hacer clic.
        className={`w-6 h-6 flex items-center justify-center rounded-full ${
            isFavorite ? "bg-yellow-400" : "bg-gray-300"
        } transition-colors duration-300`}
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-white"
        >
            <path
            d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z"
            />
        </svg>
    </button>

  );
};

export default FavoriteButton;
