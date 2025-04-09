import { createUseStyles } from "react-jss";

import { Theme } from "src/styles/theme";

export const useTokenBalanceStyles = createUseStyles((theme: Theme) => ({
  loader: {
    alignItems: "center",
    display: "flex",
    gap: theme.spacing(0.25),
  },
}));

export const useTokenBalanceRedesignStyles = createUseStyles((theme: Theme) => ({
  loader: {
    alignItems: "center",
    display: "flex",
    gap: theme.spacing(0.25),
  },
  tokenBalance: {
    [theme.breakpoints.downM]: {
      maxWidth: "100%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  },
}));
