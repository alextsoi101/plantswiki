/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'blue': '#008285',
      'navy': '#016b70',
      'dark': '#262626',
      'dark-black': '#181818',
      'black': '#000000',
      'gray': '#757575',
      'silver': '#C8C8C8',
      'gray-light': '#f4f3f1',
      'gray-blue': '#F2F8F8',
      'yellow': '#ffde02',
      'pink': '#f8ccc4'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    screens: {
      'xs': '320px',
      'sm': '490px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        plant_search: 'url(/src/assets/images/searchsection.jpg)',
        plant_blog: 'url(/src/assets/images/blog-main.jpg)',
      }
    },
  },
  plugins: [],
}

