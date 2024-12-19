# Quikbet-Movies

# 🎥 Quikbet-Movies - Aplicación Web de Películas

Una aplicación web desarrollada como prueba técnica para el rol de FrontEnd Developer en **ABC Cinematografía**. La aplicación permite a los usuarios explorar películas populares, buscar títulos específicos, ver detalles de cada película y guardar sus favoritas. Todo ello con un diseño responsivo y optimizado para dispositivos móviles.

## 🚀 Características principales

- **Página de inicio:** Lista de películas populares obtenidas de la API de [TMDb](https://www.themoviedb.org/).
- **Búsqueda de películas:** Barra de búsqueda para encontrar películas por título con resultados paginados.
- **Detalles de la película:** Información completa (título, descripción, fecha de lanzamiento, puntuación, géneros, actores) y tráiler, si está disponible.
- **Favoritos:** Capacidad para marcar películas como favoritas y almacenarlas localmente (usando Local Storage).
- **Diseño responsivo:** Optimizado para dispositivos móviles siguiendo el enfoque **mobile-first**.
- **Mejoras de SEO:** Meta tags, Open Graph y estrategias de renderizado avanzadas (SSR/ISR) para optimización en buscadores.
- **Validación y manejo de errores:** Validación de entradas de usuario y manejo adecuado de errores en las respuestas de la API.

## 🛠️ Tecnologías utilizadas

- **Framework:** [Next.js](https://nextjs.org/) para renderizado del lado del servidor y generación estática.
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) para un código tipado y mantenible.
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) para un diseño rápido y personalizable.
- **Control de calidad:** Configuración de ESLint y Prettier para un código limpio y consistente.
- **Despliegue:** [Vercel](https://vercel.com/) para despliegue rápido y confiable.

## 📦 Instalación y configuración

Sigue estos pasos para configurar y ejecutar la aplicación localmente:

### Clonar el repositorio

```bash
git clone https://github.com/Esmererney/frontend-quikbet-movies.git
cd frontend-quikbet-movies

```

## 🧑‍💻 Investigación y Desarrollo

### 1. **Requerimientos Iniciales y Planificación**

- **Objetivo:** Crear una aplicación web para explorar películas usando la API de TMDb.
- **Tecnologías clave:** Next.js, TypeScript, Tailwind CSS, Vercel para despliegue.
- **Decisión de Diseño:** Responsivo, mobile-first para un buen rendimiento en dispositivos móviles.
- **Objetivos Funcionales:**
    - Visualización de películas populares.
    - Búsqueda y filtrado por título.
    - Almacenamiento de favoritos.
    - Optimización para SEO con SSR/ISR.

### 2. **Investigación sobre APIs**

- **TMDb API:** Se eligió esta API debido a su documentación completa y facilidad de uso.
    - **Endpoint principal:** `/movie/popular` para obtener películas populares.
    - **Búsqueda:** Endpoint `/search/movie` para realizar búsquedas por título.
- **Decisiones clave sobre el uso de la API:**
    - Implementar paginación para los resultados de búsqueda.
    - Manejo de datos asincrónicos para mejorar la experiencia del usuario.
    - Control de errores para manejar posibles fallos en la carga de la API.

### 3. **Selección del Framework y Herramientas**

- **Next.js:** Se eligió Next.js por su facilidad de uso con SSR y generación estática (ISR).
- **TypeScript:** Asegura un desarrollo más robusto y fácil de mantener con tipado estricto.
- **Tailwind CSS:** Elección para facilitar el diseño con clases utilitarias y hacer el código CSS más limpio y fácil de gestionar.
- **Vercel:** Se utilizó Vercel para despliegue debido a su integración sencilla con Next.js y optimización automática.

### 4. **Desarrollo de Funcionalidades**

- **Página de inicio:**
    - Utilicé la API de TMDb para listar las películas populares.
    - Se implementó paginación para manejar la carga de grandes cantidades de datos.
- **Búsqueda de películas:**
    - Creación de una barra de búsqueda interactiva utilizando el endpoint de búsqueda de la API.
- **Favoritos:**
    - Implementación de Local Storage para almacenar películas favoritas.
    - Creación de una función de manejo de favoritos para que los usuarios puedan agregar y eliminar películas.
- **Detalles de la película:**
    - Se agregaron vistas detalladas de las películas que incluyen título, descripción, fecha de lanzamiento, puntuación y actores.

### 5. **Optimización y Buenas Prácticas**

- **SEO:** Optimización mediante el uso de meta tags, Open Graph y SSR/ISR para mejorar la indexación en motores de búsqueda.
- **Validación de datos:** Se implementaron validaciones básicas en las entradas del usuario para prevenir errores y mejorar la experiencia del usuario.
- **Manejo de errores:** Se creó un sistema de manejo de errores para respuestas fallidas de la API y entradas incorrectas.

### 6. **Pruebas y Despliegue**

- **Pruebas locales:** Durante el desarrollo, se realizaron pruebas locales para asegurar que la aplicación funcionara correctamente.
- **Despliegue en Vercel:** Una vez terminado el proyecto, se realizó el despliegue a Vercel, lo que permitió que la aplicación estuviera accesible de manera rápida y eficiente.

### 7. **Lecciones Aprendidas y Mejoras Futuras**

- **Lecciones Aprendidas:**
    - La API de TMDb tiene ciertas limitaciones que deben tenerse en cuenta (por ejemplo, la cantidad de solicitudes por hora).
    - La gestión de favoritos en el Local Storage puede ser limitada para usuarios con muchas películas guardadas.
- **Mejoras Futuras:**
    - Implementar autenticación de usuarios para que los favoritos puedan ser almacenados de manera más robusta en una base de datos.
    - Mejorar el diseño con transiciones y animaciones más interactivas.

# **Deploy en Vercel:** [Quikbet Movies](https://frontend-quikbet-movies.vercel.app/).
