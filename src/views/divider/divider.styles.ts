/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createUseStyles } from "react-jss";


export const useDividerStyles = createUseStyles(() => ({
  dividerBox: {
    
    width: "100%",
  },
  dividerLine: {
    border: "1px solid rgba(187,189,186, 0.1)",
    display: "flex",
    justifyContent: "center",
  },
}));
