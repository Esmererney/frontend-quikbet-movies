import React from "react";

// Definición de la interfaz para las propiedades del componente RatingCircle.
interface RatingCircleProps {
  rating: number;
}

// Función para determinar el color según la calificación.
const getColorByRating = (rating: number): "stroke-green-500" | "stroke-yellow-500" | "stroke-red-500" => {
  // Si la calificación es mayor o igual a 7, se devuelve un color verde.
  if (rating >= 7) return "stroke-green-500";
  // Si la calificación está entre 4 y 6, se devuelve un color amarillo.
  if (rating >= 4) return "stroke-yellow-500";
  // Si la calificación es menor a 4, se devuelve un color rojo.
  return "stroke-red-500";
};

// Componente funcional RatingCircle que recibe la propiedad rating.
const RatingCircle: React.FC<RatingCircleProps> = ({ rating }) => {
  // Calculamos el porcentaje de la calificación (de 0 a 100).
  const ratingPercentage = (rating / 10) * 100;
  // Determinamos la clase de color según la calificación.
  const colorClass = getColorByRating(rating);

  return (
    // Contenedor principal del círculo de calificación con fondo blanco y bordes redondeados.
    <div className="relative w-6 h-6 bg-white rounded-full">
      <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 36 36">
        {/* Círculo de fondo gris claro que representa el 100% del progreso */}
        <circle
          className="text-gray-200"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          cx="18"
          cy="18"
          r="16"
        />
        {/* Círculo de progreso que muestra el porcentaje basado en la calificación */}
        <circle
          className={`absolute top-0 left-0 w-full h-full ${colorClass}`}
          strokeWidth="2"
          strokeDasharray={`${ratingPercentage} ${100 - ratingPercentage}`} // Define el avance y el espacio restante.
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
          cx="18"
          cy="18"
          r="16"
          style={{
            transform: "rotate(-90deg)", // Rota el círculo para comenzar desde arriba.
            transformOrigin: "50% 50%", // Centra la rotación en el medio del círculo.
          }}
        />
        {/* Texto en el centro del círculo mostrando el porcentaje */}
        <text
          x="50%" // Centra el texto horizontalmente.
          y="50%" // Centra el texto verticalmente.
          textAnchor="middle" // Alineación horizontal del texto.
          dy=".3em" // Ajusta la posición vertical del texto.
          className="text-xxs font-semibold text-gray-900 bg-white"
        >
          {Math.round(ratingPercentage)}% {/* Muestra el porcentaje sin decimales */}
        </text>
      </svg>
    </div>

  );
};

export default RatingCircle;