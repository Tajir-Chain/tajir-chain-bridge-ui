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
    border: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
    borderRadius: 8,
    fontSize: "20px",
    height: "100%",
    lineHeight: "24px",
    outline: "none",
    textAlign: "right",
    width: "60%",
    [theme.breakpoints.upSm]: {
      fontSize: (value: number) => (value < 16 ? "35px" : "25px"),
      lineHeight: "40px",
    },
  },
  maxButton: {
    "&:disabled": {
      backgroundColor: theme.palette.grey.main,
    },
    "&:not(:disabled)": {
      cursor: "pointer",
    },
    background: theme.palette.primary.mainRedesign,

    border: "1px solid rgba(0, 0, 0, 0.05)",
    borderRadius: 8,
    color: theme.palette.black,
    height: "100%",
    padding: theme.spacing(1),
  },
  maxText: {
    color: theme.palette.white,
  },
  wrapper: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    gap: theme.spacing(1.5),
    justifyContent: "flex-end",
    marginLeft: theme.spacing(1),
    [theme.breakpoints.upSm]: {
      marginLeft: theme.spacing(2.5),
    },
  },
}));
