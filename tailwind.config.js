/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        screens: {
            'sm': '576px',
            // => @media (min-width: 576px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '992px',
            // => @media (min-width: 992px) { ... }

            'xl': '1200px',
            // => @media (min-width: 1200px) { ... }
        },
        fontFamily: {
            ffam: ['Inter'],
            title: ['Murecho']
        },
        keyframes: {
            leftIn: {
                '0% ': {
                    transform: 'translateX(-150%)',
                },
                ' 100%': {
                    transform: 'translateY(0)',
                },
            },
            leftOut: {
                '0% ': {
                    opacity: '1',
                },
                '99%': {
                    opacity: '0',
                    height: '100vw',
                    width: '100vh'
                },
                ' 100%': {
                    opacity: '0',
                    height: '100vw',
                    width: '100vh'
                },
            },
            none: {
                ' 100%': {
                    transform: 'translateY(0)'
                }
            }
        },
        animation: {
            leftIn: 'leftIn 1s',
            leftOut: 'leftOut 1s forwards',
            none: 'none 0s'
        },
        extend: {
            colors: {
                'olive': '#DEE8E1',
                'violet': '#CAD6F0',
                'bege': '#F0EECA',
                'hum-bege': '#E8CEC6',
                'light-gray': '#E6E4EA',
                'blue': '#007AFF',
                'dark-gray': '#4E4E53',
                'over-gray': '#232326',
                'red': '#D62D30',
                'blood-red': '#FF3B30',
                'white': '#ffffff',
                'bereza': '#13E3FE',
                'link-blue': '#1A67FB ',
                'transparent': 'transparent !important'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            boxShadow: {
                'items-shadow': '0px 0px 0px 0px rgba(87, 87, 76, 0.06), 8px 11px 30px 0px rgba(87, 87, 76, 0.06), 33px 42px 54px 0px rgba(87, 87, 76, 0.05), 75px 95px 73px 0px rgba(87, 87, 76, 0.03), 133px 169px 86px 0px rgba(87, 87, 76, 0.01), 207px 264px 94px 0px rgba(87, 87, 76, 0.00)'
            }
        },
    },
    plugins: [],
}