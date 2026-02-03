import { createUseStyles } from "react-jss";

import { Theme } from "src/styles/theme";

export const useAmountInputStyles = createUseStyles((theme: Theme) => ({
  amountInput: {
    "&:disabled": {
      backgroundColor: "transparent",
    },
    border: "none",
    borderRadius: 8,
    fontSize: "20px",
    lineHeight: "24px",
    outline: "none",
    textAlign: "right",
    width: "100%",
    [theme.breakpoints.upSm]: {
      fontSize: (value: number) => (value < 16 ? "40px" : "30px"),
      lineHeight: "40px",
    },
  },
  maxButton: {
    "&:not(:disabled)": {
      cursor: "pointer",
    },
    background: "none",
    border: "none",
    color: theme.palette.black,
    padding: theme.spacing(1),
  },
  maxText: {
    color: theme.palette.black,
  },
  wrapper: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    marginLeft: theme.spacing(1),
    [theme.breakpoints.upSm]: {
      marginLeft: theme.spacing(2.5),
    },
  },
}));

export const useAmountInputRedesignStyles = createUseStyles((theme: Theme) => ({
  amountInput: {
    "&:disabled": {
      backgroundColor: "transparent",
    },
    backgroundColor: "transparent",
    border: "none",
    borderRadius: 0,
    fontSize: "20px",
    lineHeight: "24px",
    outline: "none",
    padding: `${theme.spacing(0.5)}px 0`,
    textAlign: "right",
    width: "100%",
    [theme.breakpoints.upSm]: {
      fontSize: (value: number) => (value < 16 ? "35px" : "25px"),
      lineHeight: "40px",
    },
  },
  maxButton: {
    "&:disabled": {
      cursor: "default",
      opacity: 0.4,
    },
    "&:not(:disabled)": {
      cursor: "pointer",
    },
    background: "#F7F7F7",
    border: "1px solid rgba(0, 0, 0, 0.06)",
    borderRadius: 999,
    color: theme.palette.black,
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1.5)}px`,
  },
  maxText: {
    color: theme.palette.black,
  },
  quickActions: {
    display: "flex",
    gap: theme.spacing(1),
    justifyContent: "flex-end",
  },
  wrapper: {
    alignItems: "stretch",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginTop: 0,
    [theme.breakpoints.upSm]: {
      marginLeft: theme.spacing(4),
    },
  },
}));
