
export const getEnv = (key: keyof ImportMetaEnv, defaultValue: string): string => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const value = import.meta.env[key];
  return typeof value === 'string' ? value : defaultValue;
};

export type Theme = {
  breakpoints: {
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
    white: string;
  };
  spacing: (value: number) => number;
}


export const theme: Theme = {
  breakpoints: {
    upSm: "@media (min-width: 480px)",
  },
  hoverTransition: "all 150ms",
  maxWidth: 644,
  palette: {
    black: getEnv("VITE_THEME_COLOR_BLACK", "#0a0b0d"),
    error: {
      light: getEnv("VITE_THEME_COLOR_ERROR_LIGHT", "rgba(232,67,12,0.1)"),
      main: getEnv("VITE_THEME_COLOR_ERROR_MAIN", "#e8430d"),
    },
    grey: {
      dark: getEnv("VITE_THEME_COLOR_GREY_DARK", "#78798d"),
      light: getEnv("VITE_THEME_COLOR_GREY_LIGHT", "#f0f1f6"),
      main: getEnv("VITE_THEME_COLOR_GREY_MAIN", "#e2e5ee"),
      veryDark: getEnv("VITE_THEME_COLOR_GREY_VERY_DARK", "#363740"),
    },
    primary: {
      dark: getEnv("VITE_THEME_COLOR_PRIMARY_DARK", "#5a1cc3"),
      light: getEnv("VITE_THEME_COLOR_PRIMARY_LIGHT", "#EEE8FF"),
      main: getEnv("VITE_THEME_COLOR_PRIMARY_MAIN", "#7b3fe4"),
      mainRedesign: getEnv("VITE_THEME_COLOR_PRIMARY_MAIN_REDESIGN", "#8950FA"),
    },
    success: {
      light: getEnv("VITE_THEME_COLOR_SUCCESS_LIGHT", "rgba(0,255,0,0.1)"),
      main: getEnv("VITE_THEME_COLOR_SUCCESS_MAIN", "#54DC04"),
    },
    transparency: getEnv("VITE_THEME_COLOR_TRANSPARENCY", "rgba(8,17,50,0.5)"),
    warning: {
      light: getEnv("VITE_THEME_COLOR_WARNING_LIGHT", "rgba(225,126,38,0.1)"),
      main: getEnv("VITE_THEME_COLOR_WARNING_MAIN", "#e17e26"),
    },
    white: getEnv("VITE_THEME_COLOR_WHITE", "#ffffff"),
  },
  spacing: (value: number): number => value * 8,
};

