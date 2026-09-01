import { createUseStyles } from "react-jss";

import { Theme } from "src/styles/theme";

export const useTokenSelectorStyles = createUseStyles((theme: Theme) => ({
  background: {
    alignItems: "center",
    background: theme.palette.white,
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    padding: `0 ${theme.spacing(1)}px`,
    width: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    height: 515,
    maxWidth: 500,
    padding: theme.spacing(2),
    width: "100%",
  },
}));

export const useTokenSelectorRedesignStyles = createUseStyles((theme: Theme) => ({
  background: {
    alignItems: "center",
    alignSelf: "center",
    background: theme.palette.transparency, // typically modals have dark/transparent backgrounds! But the code had white. I will use transparency or a blurred dark background. Wait, if it had white, let's keep it close but maybe use the transparency from the theme.
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    padding: `0 ${theme.spacing(2)}px`,
    width: "100%",
  },
  card: {
    backgroundColor: theme.palette.white.light,
    borderRadius: 24,
    display: "flex",
    flexDirection: "column",
    height: "auto",
    maxHeight: 515,
    maxWidth: 500,
    minHeight: 400,
    padding: theme.spacing(2.5),
    width: "100%",
    [theme.breakpoints.downM]: {
      maxHeight: "80vh",
      minHeight: "55vh",
      padding: theme.spacing(1.5),
    },
  },
}));
