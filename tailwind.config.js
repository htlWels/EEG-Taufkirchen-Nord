/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'eeg-green': '#2ecc71',
                'eeg-blue': '#2980b9',
                'eeg-yellow': '#f1c40f',
                'eeg-dark': '#2c3e50',
            },
        },
    },
    plugins: [],
}