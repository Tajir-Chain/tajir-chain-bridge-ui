import { createUseStyles } from "react-jss";

import { Theme } from "src/styles/theme";

export const useHeaderLinksRedesignStyles = createUseStyles((theme: Theme) => ({
  burgerMenu: {
    display: "none",
    [theme.breakpoints.downM]: {
      border: "none",
      display: "block",
      maxHeight: 30,
      opacity: 0.6,
      transition: "transform 0.3s ease",
      width: 30,
      zIndex: 99,
    },
  },

  button: {
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
      backgroundColor: theme.palette.white,
      borderRadius: 12,
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      flexDirection: "column",
      fontSize: 22,
      gap: theme.spacing(2),
      justifyContent: "center",
      padding: theme.spacing(3),
      position: "absolute",
      right: 24,
      textAlign: "center",
      top: 70,
      width: "90vw",
      zIndex: 99,
    },
  },
  logo: {
    cursor: "pointer",
  },
  openedBurgerMenuIcon: {
    transform: "rotate(90deg) ",
  },

  wrapper: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    paddingInline: theme.spacing(5),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    backgroundColor: "#fff", // Add white background
    borderBottom: "1px solid #e0e0e0", // Add bottom border (light gray)
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)", // optional subtle shadow

    [theme.breakpoints.downM]: {
      paddingInline: theme.spacing(3),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
  },
}));
