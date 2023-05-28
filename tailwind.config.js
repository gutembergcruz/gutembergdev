/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          50: '#f4154d',
          100: '#ec0b43',
          150: '#d60a3d'
        },
        dk: {
          50: '#222831',
          100: '#232832',
          150: '#1D222A'
        },
        blue: {
          50: '#0d4896',
          100: '#0a3876',
          150: '#0a3671'
        },
        white: {
          50: '#ffffff',
          100: '#d6dce6',
          150: '#ccd4e0'
        }
      },
      width: {
        l: '1200px',
        m: '800px',
        s: '580px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};