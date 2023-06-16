/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
              'custom': ['Outfit', 'Helvetica']
            },
            colors: {
              'light-gray': 'hsl(212, 45%, 89%)',
              'grayish-blue': 'hsl(220, 15%, 55%)',
              'dark-blue': 'hsl(218, 44%, 22%)'
            },
        },
    },
    plugins: [],
};
