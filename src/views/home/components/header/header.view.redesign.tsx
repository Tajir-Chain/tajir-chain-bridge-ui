import { FC } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as ClockIcon } from "src/assets/icons/clock.svg";
import { ReactComponent as SettingIcon } from "src/assets/icons/setting.svg";
import { useEnvContext } from "src/contexts/env.context";
import { routes } from "src/routes";
import { areSettingsVisible } from "src/utils/feature-toggles";
import { useHeaderRedesignStyles } from "src/views/home/components/header/header.styles";
import { NetworkSelectorRedesign } from "src/views/shared/network-selector/network-selector.view.redesign";
import { Typography } from "src/views/shared/typography/typography.view";

export const HeaderRedesign: FC = () => {
 const classes = useHeaderRedesignStyles();
 const env = useEnvContext();

 if (!env) {
  return null;
 }

 const networkName = env.networkName;

 return (
  <header className={classes.header}>
   <div className={`${classes.block} ${classes.leftBlock}`}>
    {areSettingsVisible(env) && (
     <Link className={classes.link} title="Settings" to={routes.settings.path}>
      <SettingIcon />
     </Link>
    )}
    <Link className={classes.link} to={routes.activity.path}>
     <ClockIcon />
     <Typography className={classes.activityLabel} type="body1">
      Activity
     </Typography>
    </Link>
   </div>
   <div className={`${classes.block} ${classes.centerBlock}`}>
    {networkName}
   </div>
   <div className={`${classes.block} ${classes.rightBlock}`}>
    <NetworkSelectorRedesign />
   </div>
  </header>
 );
};
