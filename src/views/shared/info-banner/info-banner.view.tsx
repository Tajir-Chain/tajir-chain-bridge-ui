import { FC } from "react";

import InfoIcon from "src/assets/icons/info.svg?react";
import { useInfoBannerStyles } from "src/views/shared/info-banner/info-banner.styles";
import { Typography } from "src/views/shared/typography/typography.view";

type InfoBannerProps = {
  className?: string;
  message: string;
}

export const InfoBanner: FC<InfoBannerProps> = ({ className, message }) => {
  const classes = useInfoBannerStyles();

  return (
    <div className={`${classes.infoBanner} ${className ?? ""}`}>
      <InfoIcon />
      <Typography className={classes.message} type="body2">
        {message}
      </Typography>
    </div>
  );
};
