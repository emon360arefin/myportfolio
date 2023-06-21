/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                fahkwang: ['Fahkwang', 'sans-serif']
            },

            colors: {
                primary: {
                    text: '#3C3E41',
                    heading: '#3d485a'
                },
                secondary: {
                    text: '#637289'
                }
            }
        },
    },
    plugins: [],
}

