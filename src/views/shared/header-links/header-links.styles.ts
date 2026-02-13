import { createUseStyles } from "react-jss";

import { Theme } from "src/styles/theme";

export const useHeaderLinksRedesignStyles = createUseStyles((theme: Theme) => ({
  burgerMenu: {
    display: "none",
    [theme.breakpoints.downM]: {
      border: "none",
      display: "block",
      maxHeight: 30,
      opacity: 1,
      width: 30,
      zIndex: 99,
    },
  },

  button: {
    "&:disabled": {
      backgroundColor: "#E8D4A0",
      cursor: "inherit",
      opacity: 0.7,
    },
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: "#F3CD52",
    border: "none",
    borderRadius: 12,
    color: theme.palette.black,
    cursor: "pointer",
    display: "flex",
    fontWeight: 500,
    gap: theme.spacing(1),
    height: 30,
    padding: [theme.spacing(2.5), theme.spacing(2.5)],
    [theme.breakpoints.downM]: {
      display: "none",
    },
  },

  icon: {
    color: theme.palette.black,
    width: 14,
  },
  linkItem: {
    color: "#676e73 ",
    textDecoration: "none",
    transition: "color 0.3s",
    [theme.breakpoints.downM]: {
      color: theme.palette.primary.mainRedesign,
      position: "relative",
    },
  },
  linksAndLogoContainer: {
    alignItems: "center",
    display: "flex",
    gap: theme.spacing(2),
    [theme.breakpoints.downM]: {
      justifyContent: "space-between",
      marginLeft: 0,
      marginTop: theme.spacing(3),
      width: "100%",
    },
  },
  linksContainer: {
    "& a:hover": {
      color: theme.palette.primary.main,
    },
    alignItems: "center",
    display: "flex",
    gap: theme.spacing(3),

    [theme.breakpoints.downM]: {
      alignItems: "center",
      backdropFilter: "blur(10px)",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      borderRadius: 12,
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
      flexDirection: "column",
      fontSize: 22,
      gap: theme.spacing(2),
      justifyContent: "center",
      padding: theme.spacing(3),
      position: "fixed",
      right: 24,
      textAlign: "center",
      top: 70,
      width: "90vw",
      zIndex: 1100,
    },
  },
  logo: {
    cursor: "pointer",
  },
  openedBurgerMenuIcon: {},

  wrapper: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottom: "1px solid #e0e0e0",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    display: "flex",
    justifyContent: "space-between",
    left: 0,
    paddingBottom: theme.spacing(2),
    paddingInline: theme.spacing(5), 
    paddingTop: theme.spacing(2),
    right: 0,
    top: 0,

    zIndex: 1000,

    [theme.breakpoints.downM]: {
      paddingBottom: theme.spacing(1),
      paddingInline: theme.spacing(3),
      paddingTop: theme.spacing(1),
    },
  },
}));
