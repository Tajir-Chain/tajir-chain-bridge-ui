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
    backgroundColor: theme.palette.primary.mainRedesign,
    border: "none",
    borderRadius: 16,
    color: theme.palette.white,
    cursor: "pointer",
    display: "flex",
    gap: theme.spacing(1),
    height: 30,
    padding: [theme.spacing(2), theme.spacing(2)],
    [theme.breakpoints.downM]: {
      display: "none",
    },
  },

  icon: {
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
    marginInline: theme.spacing(5),
    marginTop: theme.spacing(3),

    [theme.breakpoints.downM]: {
      marginInline: theme.spacing(3),
      marginTop: theme.spacing(1),
    },
  },
}));
