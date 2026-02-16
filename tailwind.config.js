export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#00965E', // Green from logo (approx)
            dark: '#007A4D',
            light: '#E6F4EA',
          },
          secondary: {
            DEFAULT: '#D81B1F', // Red from logo (approx)
            dark: '#B01619',
            light: '#FDECEC',
          },
          text: {
            DEFAULT: '#333333',
            muted: '#666666',
          }
        },
        fontFamily: {
          sans: ['"Source Sans 3"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
