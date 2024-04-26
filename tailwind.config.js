/** @type {import('tailwindcss').Config} */
/**
 * Configuración de Tailwind CSS para el proyecto.
 * Define las opciones de configuración como el contenido, temas, pantallas y colores personalizados.
 */

export default {
  // Define el contenido que Tailwind CSS debe examinar para generar estilos
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // Define el tema de Tailwind CSS
  theme: {
    // Extiende o agrega nuevas propiedades al tema existente
    extend: {},

    // Define las pantallas de resolución y sus tamaños mínimos
    screens: {
      sm: "440px", // Pantalla pequeña (Small)
      md: "768px", // Pantalla mediana (Medium)
      lg: "976px", // Pantalla grande (Large)
      xl: "1440px", // Pantalla extra grande (Extra Large)
    },

    // Define los colores personalizados utilizados en la aplicación
    colors: {
      black: "#434043",
      white: "#FFFFFF",
      grey: "#939598",
      lightGrey: "#F4F2ED",
      salmon: "#D0665B",
      lightBlue: "#9ACCE5",
      yellow: "#E3A645",
    },
  },

  // Define los plugins adicionales de Tailwind CSS (no se usan en este caso)
  plugins: [],
};
