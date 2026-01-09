import { createUseStyles } from "react-jss";

import { Theme } from "src/styles/theme";

export const useTokenSelectorStyles = createUseStyles((theme: Theme) => ({
  background: {
    alignItems: "center",
    background: theme.palette.white,
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    padding: [0, theme.spacing(1)],
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
    background: theme.palette.white,
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    padding: [0, theme.spacing(1)],
    width: "100%",
  },
  card: {
    backgroundColor: theme.palette.white.light,
    display: "flex",
    flexDirection: "column",
    height: 515,
    maxWidth: 500,
    padding: theme.spacing(2),
    width: "100%",
  },
}));
