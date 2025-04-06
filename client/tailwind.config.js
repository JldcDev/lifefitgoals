// tailwind.config.js
import { fontFamily } from "tailwindcss/defaultTheme";

export const content = [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
    extend: {
        colors: {
            cyan: {
                50: "#e0f7fa",
                100: "#b2ebf2",
                200: "#80deea",
                300: "#4dd0e1",
                400: "#26c6da",
                500: "#00bcd4",
                600: "#00acc1",
                700: "#0097a7",
                800: "#00838f",
                900: "#006064",
            },
        },
        fontFamily: {
            sans: ["Inter", ...fontFamily.sans],
        },
    },
};
export const plugins = [];
