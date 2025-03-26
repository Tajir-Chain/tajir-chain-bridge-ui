import { useDividerStyles } from "./divider.styles";

export const Divider = () => {
 const classes = useDividerStyles();
  return (
    <div className={classes.dividerBox}><hr className={classes.dividerLine}/></div>
  )
}