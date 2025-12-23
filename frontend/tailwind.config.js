export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c5d9ff',
          300: '#9fbfff',
          400: '#7399ff',
          500: '#4d6dff',
          600: '#3b4dff',
          700: '#2a3ae5',
          800: '#1f2bb8',
          900: '#1a1f8f'
        },
        beige: {
          50: '#faf7f2',
          100: '#f5f0e8',
          200: '#ede5d8',
          300: '#e1d5c7',
          400: '#d9cbb8',
          500: '#ccc0a8',
          600: '#b8ac97',
          700: '#9d9080',
          800: '#7a7569',
          900: '#5a5652'
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in',
        slideUp: 'slideUp 0.6s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    }
  },
  plugins: []
}
