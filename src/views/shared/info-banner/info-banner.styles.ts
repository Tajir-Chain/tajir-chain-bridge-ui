import { createUseStyles } from "react-jss";

import { Theme } from "src/styles/theme";

export const useInfoBannerStyles = createUseStyles((theme: Theme) => ({
  infoBanner: {
    alignItems: "center",
    borderRadius: "8px",
    display: "flex",
    gap: theme.spacing(1),
    justifyContent: "center",
    maxWidth: theme.maxWidth,
    padding: theme.spacing(2),
    width: "100%",
  },
  message: {
    color: theme.palette.black,
  },
}));
