import { createUseStyles } from "react-jss";

import { Theme } from "src/styles/theme";

export const useHeaderStyles = createUseStyles((theme: Theme) => ({
  activityLabel: {
    display: "none",
    [theme.breakpoints.upSm]: {
      display: "block",
    },
  },
  block: {
    display: "flex",
    flex: 1,
    gap: theme.spacing(0.75),
  },
  centerBlock: {
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    display: "flex",
    margin: [theme.spacing(2), "auto", 0],
    width: "100%",
  },
  leftBlock: {
    justifyContent: "left",
  },
  link: {
    "&:hover": {
      backgroundColor: theme.palette.grey.main,
    },
    alignItems: "center",
    borderRadius: 8,
    display: "flex",
    gap: theme.spacing(1),
    padding: [theme.spacing(0.75), theme.spacing(1)],
    transition: theme.hoverTransition,
  },
  logo: {
    height: 56,
  },
  rightBlock: {
    justifyContent: "end",
  },
}));

export const useHeaderRedesignStyles = createUseStyles((theme: Theme) => ({
  activityLabel: {
    display: "none",
    [theme.breakpoints.upSm]: {
      display: "block",
    },
  },
  block: {
    display: "flex",
    flex: 1,
    gap: theme.spacing(0.75),
    marginInline: theme.spacing(3),
    [theme.breakpoints.upM]: {
      marginInline: 0,
    },
  },
  centerBlock: {
    fontSize: 72,
    justifyContent: "center",

    [theme.breakpoints.upM]: {
      fontSize: 22,
    },
  },
  header: {
    alignItems: "center",
    display: "flex",
    margin: [theme.spacing(3), "auto", 0],
    width: "100%",
  },
  leftBlock: {
    justifyContent: "left",
  },
  link: {
    "&:hover": {
      boxShadow: `
       2px 2px 6px rgba(0, 0, 0, 0.2),
       -2px -2px 6px rgba(255, 255, 255, 0.8)
     `,
      transform: "translateY(-2px)",
      zIndex: 2,
      // border: 'none',
    },
    alignItems: "center",
    border: "1px solid rgba(0, 0, 0, 0.05)",
    borderRadius: 8,
    display: "flex",
    gap: theme.spacing(1),
    padding: [theme.spacing(0.75), theme.spacing(1)],
    transition: theme.hoverTransition,
  },
  logo: {
    height: 56,
  },
  rightBlock: {
    justifyContent: "end",
  },
}));
