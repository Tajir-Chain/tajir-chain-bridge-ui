export type Theme = {
  breakpoints: {
    downLg: string;
    downM: string;
    upSm: string;
  };
  hoverTransition: string;
  maxWidth: number;
  palette: {
    black: string;
    error: {
      light: string;
      main: string;
    };
    grey: {
      dark: string;
      light: string;
      main: string;
      veryDark: string;
    };
    primary: {
      dark: string;
      light: string;
      main: string;
      mainRedesign: string;
    };
    success: {
      light: string;
      main: string;
    };
    transparency: string;
    warning: {
      light: string;
      main: string;
    };
    white: {
      dark: string;
      light: string;
      main: string;
      mainRedesign: string;
    };
  };
  spacing: (value: number) => number;
};

export const theme: Theme = {
  breakpoints: {
    downLg: "@media (max-width: 1024px)",
    downM: "@media (max-width: 788px)",
    upSm: "@media (min-width: 480px)",
  },
  hoverTransition: "all 150ms",
  maxWidth: 644,
  palette: {
    black: "#0a0b0d",

    error: {
      light: "rgba(232,67,12,0.1)",
      main: "#e8430d",
    },

    grey: {
      dark: "#78798d",
      light: "#FBFBFB",
      main: "#e2e5ee",
      veryDark: "#363740",
    },

    primary: {
      dark: "#2f8f77",          // darker shade of #41C9AB
      light: "#41C9AB",         // lighter/base shade
      main: "#41C9AB",          // base green
      mainRedesign: "#33b89a",  // slightly different for redesign
    },

    success: {
      light: "rgba(0,255,0,0.1)",
      main: "#54DC04",
    },

    transparency: "rgba(8,17,50,0.5)",

    warning: {
      light: "rgba(225,126,38,0.1)",
      main: "#e17e26",
    },

    white: {
      dark: "#e6e6e6",
      light: "#ffffff",
      main: "#fefefe",
      mainRedesign: "#ffffff",
    },
  },

  spacing: (value: number): number => value * 8,
};
