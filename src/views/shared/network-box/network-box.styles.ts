import { createUseStyles } from "react-jss";

import { Theme } from "src/styles/theme";

export const useNetworkBoxStyles = createUseStyles((theme: Theme) => ({
  button: {
    "&:disabled": {
      cursor: "inherit",
      opacity: 0.75,
    },
    "&:hover:not(:disabled)": {
      background: theme.palette.grey.main,
    },
    alignItems: "center",
    appearance: "none",
    background: theme.palette.grey.light,
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    display: "flex",
    padding: [theme.spacing(1), theme.spacing(1.5)],
    transition: theme.hoverTransition,
  },
  buttonIcon: {
    marginRight: theme.spacing(1),
    width: 20,
  },
  buttons: {
    alignItems: "center",
    display: "flex",
    gap: theme.spacing(4),
    textAlign: "center",
  },
  link: {
    color: theme.palette.primary.dark,
  },
  list: {
    paddingLeft: theme.spacing(2),
    width: "100%",
    wordBreak: "break-word",
  },
  listItem: {
    padding: [theme.spacing(0.25), 0],
  },
  networkBox: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
  },
}));

export const useNetworkBoxRedesignStyles = createUseStyles((theme: Theme) => ({
  button: {
    "&:disabled": {
      cursor: "inherit",
      opacity: 0.75,
    },
    alignItems: "center",
    appearance: "none",
    background: theme.palette.white,
    border: "1px solid #EEE8FF",
    borderRadius: 8,
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    padding: [theme.spacing(1), theme.spacing(1)],
    width: "100%",
  },
  buttonArrow: {
    display: "flex",
  },
  buttonIcon: {
    marginRight: theme.spacing(1),
    width: 25,
  },
  buttonIconAndTitle: {
    alignItems: "center",
    display: "flex",
  },
  buttonRounded: {
    "&:hover": {
      background: theme.palette.grey.light,
    },
    alignItems: "center",
    border: "1px solid #EEE8FF",
    borderRadius: 28,
    display: "flex",
    fontSize: 14,
    height: 30,
    justifyContent: "center",
    padding: [theme.spacing(0), theme.spacing(1.5)],
    transition: "all 0.2s ease-in-out",
  },
  buttons: {
    alignItems: "center",
    display: "flex",
    gap: theme.spacing(4),
    textAlign: "center",
  },
  connectWalletBox: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.upM]: {
      flexDirection: "column",
      gap: theme.spacing(2),
    },
  },
  largeTitle: {
    fontSize: 32,
    fontWeight: 500,
    lineHeight: "40px",
  },

  link: {
    color: theme.palette.primary.dark,
  },
  list: {
    width: "100%",
    wordBreak: "break-word",
  },

  listIcon: {
    color: "#78798d",
    display: "flex",
    justifyContent: "center",
    marginLeft: theme.spacing(1),
    width: 12,
  },

  listItem: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    padding: [theme.spacing(0.5), 0],
  },
  listItemLabel: {
    fontSize: 14,
    fontWeight: 500,
  },
  listItemValue: {
    "&:hover:not(:disabled)": {
      boxShadow: `
       2px 2px 6px rgba(0, 0, 0, 0.2),
       -2px -2px 6px rgba(255, 255, 255, 0.8)
     `,
      transform: "translateY(-1px)",
    },
    alignItems: "center",
    backgroundColor: theme.palette.primary.light,
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    fontSize: 12,
    justifyContent: "center",
    padding: "4px 8px",
    transition: "all 0.3s ease-in-out",
  },
  networkBox: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
  },
  smallTitle: {
    color: "#78798d",
    fontSize: 12,
    fontWeight: 400,
  },
  titlesBox: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    justifyContent: "center",
  },
}));
