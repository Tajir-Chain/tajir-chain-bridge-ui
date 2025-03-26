import { createUseStyles } from "react-jss";

import { Theme } from "src/styles/theme";

export const useHeaderLinksRedesignStyles = createUseStyles((theme: Theme) => ({
  burgerMenu: {
    display: "none",
    [theme.breakpoints.upM]: {
      border: "none",
      display: "block",
      maxHeight: 30,
      opacity: 0.6,
      width: 30,
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
    [theme.breakpoints.upM]: {
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
    [theme.breakpoints.upM]: {
      position: "relative",
      width: "100%",
    },
  },
  linksAndLogoContainer: {
    alignItems: "center",
    display: "flex",
    gap: theme.spacing(2),
    [theme.breakpoints.upM]: {
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

    [theme.breakpoints.upM]: {
      backdropFilter: "blur(15px)",
      backgroundColor: "transparent",
      borderRadius: 12,
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      flexDirection: "column",
      fontSize: 18,
      padding: theme.spacing(2),
      position: "absolute",
      right: 15,
      top: 70,
      width: 130,
    },
  },
  logo: {
    cursor: "pointer",
  },

  wrapper: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    marginInline: theme.spacing(3),
    marginTop: theme.spacing(3),
    [theme.breakpoints.upM]: {
      margin:0,
    },
  },
}));
