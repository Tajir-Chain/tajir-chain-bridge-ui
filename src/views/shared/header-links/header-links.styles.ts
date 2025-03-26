import { createUseStyles } from "react-jss";

import { Theme } from "src/styles/theme";

export const useHeaderLinksRedesignStyles = createUseStyles((theme: Theme) => ({
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
    padding: [theme.spacing(1), theme.spacing(2)],
  },
  icon: {
  width: 14,
},
  linkItem: {
    color: "#676e73 ",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  linksContainer: {
    "& a:hover": {
      color: theme.palette.primary.main,
    },
    alignItems: "center",
    display: "flex",
    gap: theme.spacing(3),
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(4),
  },
  logo: {
    cursor: "pointer",
  },


  wrapper: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },

}));
