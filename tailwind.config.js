/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                'montserrat': ['Montserrat'],
                'roboto': ['Roboto'],
                'Condensed': ['Roboto Condensed'],
            },
            colors: {
                'blue': '#0C8BC0',
            },
            padding: {
                'globalPadding': '120px',
            },
            fontSize: {
                'titleSize': '50px',
            },
            animation: {
                sprinkle: "animateBtn 0.5s ease",
            },
            keyframes: {
                animateBtn: {
                    "0%": {
                        opacity: "0",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                    },
                    "100%": {
                        opacity: "1",
                    }
                }
            }
        }
    },
    plugins: []

}
