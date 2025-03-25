import { createUseStyles } from "react-jss";

import { Theme } from "src/styles/theme";

export const useAppStyles = createUseStyles((theme: Theme) => ({
  "@font-face": [
    {
      fallbacks: [
        { src: "url('/fonts/modern-era/ModernEra-Regular.woff') format('woff')" },
        { src: "url('/fonts/modern-era/ModernEra-Regular.ttf') format('truetype')" },
      ],
      fontFamily: "Modern Era",
      fontStyle: "normal",
      fontWeight: 400,
      src: "url('/fonts/modern-era/ModernEra-Regular.woff2') format('woff2')",
    },
    {
      fallbacks: [
        { src: "url('/fonts/modern-era/ModernEra-Medium.woff') format('woff')" },
        { src: "url('/fonts/modern-era/ModernEra-Medium.ttf') format('truetype')" },
      ],
      fontFamily: "Modern Era",
      fontStyle: "normal",
      fontWeight: 500,
      src: "url('/fonts/modern-era/ModernEra-Medium.woff2') format('woff2')",
    },
    {
      fallbacks: [
        { src: "url('/fonts/modern-era/ModernEra-Bold.woff') format('woff')" },
        { src: "url('/fonts/modern-era/ModernEra-Bold.ttf') format('truetype')" },
      ],
      fontFamily: "Modern Era",
      fontStyle: "normal",
      fontWeight: 700,
      src: "url('/fonts/modern-era/ModernEra-Bold.woff2') format('woff2')",
    },
    {
      fallbacks: [
        { src: "url('/fonts/modern-era/ModernEra-ExtraBold.woff') format('woff')" },
        { src: "url('/fonts/modern-era/ModernEra-ExtraBold.ttf') format('truetype')" },
      ],
      fontFamily: "Modern Era",
      fontStyle: "normal",
      fontWeight: 800,
      src: "url('/fonts/modern-era/ModernEra-ExtraBold.woff2') format('woff2')",
    },
  ],
  "@global": {
    "#app-root": {
      alignItems: "center",
      display: "flex",
      flex: 1,
      flexDirection: "column",
      position: "relative",
      zIndex: 0,
    },
    "#portal-root": {
      zIndex: 1,
    },
    "*": {
      boxSizing: "border-box",
    },
    a: {
      color: "inherit",
      textDecoration: "none",
    },
    body: {
      color: theme.palette.black,
      display: "flex",
      flexDirection: "column",
      fontFamily: "Modern Era",
      fontSize: 16,
      minHeight: "100vh",
    },
    button: {
      "&:hover:not(:disabled)": {
        boxShadow: `
       2px 2px 6px rgba(0, 0, 0, 0.2),
       -2px -2px 6px rgba(255, 255, 255, 0.8)
     `,
        transform: "translateY(-2px)",
      },
      transition: "all 0.2s ease-in-out",
    },
    "input[type='search']::-webkit-search-cancel-button": {
      "-webkit-appearance": "none",
    },
  },
}));
