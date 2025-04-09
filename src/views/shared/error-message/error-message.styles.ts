import { createUseStyles } from "react-jss";

import { Theme } from "src/styles/theme";

export const useErrorMessageStyles = createUseStyles((theme: Theme) => ({
  error: {
    color: theme.palette.error.main,
    lineHeight: "26px",
    textAlign: "center",
    whiteSpace: "break-spaces",
  },
  errorWrapper: {
    marginTop: theme.spacing(3),
    textAlign: "center",
  },
}));
