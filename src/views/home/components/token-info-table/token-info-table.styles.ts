import { createUseStyles } from "react-jss";

import { Theme } from "src/styles/theme";

export const useTokenInfoTableStyles = createUseStyles((theme: Theme) => ({
  alignRow: {
    alignItems: "center",
    display: "flex",
    gap: theme.spacing(1),
  },
  button: {
    "&:hover": {
      background: theme.palette.grey.main,
    },
    background: "transparent",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    display: "flex",
    padding: theme.spacing(1),
  },
  chainIcon: {
    height: 20,
    width: 20,
  },
  copyIcon: {
    "& path": {
      fill: theme.palette.grey.dark,
    },
    height: 16,
    width: 16,
  },
  newWindowIcon: {
    "& path": {
      fill: theme.palette.grey.dark,
      stroke: theme.palette.grey.dark,
      strokeWidth: 1,
    },
    height: 16,
    width: 16,
  },
  row: {
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(0.5),
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1.5),
    [theme.breakpoints.upSm]: {
      alignItems: "center",
      backgroundColor: "transparent",
      borderRadius: 0,
      flexDirection: "row",
      gap: theme.spacing(1),
      height: 48,
      marginBottom: 0,
      padding: 0,
    },
  },
  rowRightBlock: {
    alignItems: "center",
    display: "flex",
  },
  tokenAddress: {
    alignItems: "center",
    display: "flex",
    gap: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  wrapper: {
    background: theme.palette.white,
  },
}));
