"use client";

import { useRouter } from "next/navigation"; // En Next.js 14, usamos next/navigation
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const BackButton = (): JSX.Element => {
  const router = useRouter();

  const handleBack = (): void => {
    router.back(); // Navega hacia la página anterior en el historial
  };

  return (
    <button
      onClick={handleBack}
      className="flex items-center p-2 space-x-2 rounded-lg transition duration-300"
    >
      <ChevronLeftIcon className="w-10 h-10 text-white" />
    </button>
  );
};

export default BackButton;
