/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mipim: {
          'primary': '#003366',        // Azul MIPIM corporativo
          'primary-focus': '#002244',  // Azul más oscuro
          'primary-content': '#ffffff',
          'secondary': '#0066cc',      // Azul secundario
          'secondary-focus': '#0052a3',
          'secondary-content': '#ffffff',
          'accent': '#ffd700',         // Dorado MIPIM
          'accent-focus': '#e6c200',   // Dorado más oscuro
          'accent-content': '#003366',
          'neutral': '#2d3748',        // Gris neutro
          'neutral-focus': '#1a202c',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',       // Fondo blanco
          'base-200': '#f7fafc',       // Gris muy claro
          'base-300': '#edf2f7',       // Gris claro
          'base-content': '#2d3748',   // Texto principal
          'info': '#3182ce',           // Azul información
          'success': '#38a169',        // Verde éxito
          'warning': '#d69e2e',        // Amarillo advertencia
          'error': '#e53e3e',          // Rojo error
        },
      },
    ],
  },
};