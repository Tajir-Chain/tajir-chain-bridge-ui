import { createUseStyles } from "react-jss";

import { Theme } from "src/styles/theme";

export const useButtonStyles = createUseStyles((theme: Theme) => ({
  button: {
    "&:disabled": {
      backgroundColor: "#E8D4A0",
      cursor: "default",
      opacity: 0.7,
    },
    "&:hover&:not(:disabled)": {
      backgroundColor: theme.palette.primary.dark,
    },
    alignItems: "center",
    backgroundColor: "#F3CD52",
    border: "none",
    borderRadius: 80,
    color: theme.palette.white,
    cursor: "pointer",
    display: "flex",
    fontSize: "20px",
    justifyContent: "center",
    lineHeight: "24px",
    minWidth: "260px",
    padding: `${theme.spacing(2)}px ${theme.spacing(10)}px`,
    transition: theme.hoverTransition,
    [theme.breakpoints.downM]: {
      fontSize: "16px",
      lineHeight: "20px",
      minWidth: "200px",
      padding: `${theme.spacing(1.5)}px ${theme.spacing(4)}px`,
    },
  },
  paddedSpinner: {
    paddingLeft: theme.spacing(1.5),
  },
}));
