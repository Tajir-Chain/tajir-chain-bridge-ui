import { FC } from "react";

import { ReactComponent as ArrowLeftIcon } from "src/assets/icons/arrow-left.svg";
import { ReactComponent as XMarkIcon } from "src/assets/icons/xmark.svg";
import { useTokenSelectorHeaderRedesignStyles } from "src/views/home/components/token-selector-header/token-selector-header.styles";
import { Typography } from "src/views/shared/typography/typography.view";

type TokenSelectorHeaderProps = {
  onClose?: () => void;
  onGoBack?: () => void;
  title: string;
}

export const TokenSelectorHeaderRedesign: FC<TokenSelectorHeaderProps> = ({ onClose, onGoBack, title }) => {
  const classes = useTokenSelectorHeaderRedesignStyles();

  return (
    <div className={classes.tokenSelectorHeader}>
      {onGoBack && (
        <button className={classes.backButton} onClick={onGoBack}>
          <ArrowLeftIcon className={classes.backButtonIcon} />
        </button>
      )}
      <Typography type="h2">{title}</Typography>
      {onClose && (
        <button className={classes.closeButton} onClick={onClose}>
          <XMarkIcon className={classes.closeButtonIcon} />
        </button>
      )}
    </div>
  );
};
