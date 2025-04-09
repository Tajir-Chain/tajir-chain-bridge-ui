import { FC, PropsWithChildren } from "react";

import { useCardRedesignStyles } from "src/views/shared/card/card.styles";

type CardProps = PropsWithChildren<{
  className?: string;
  onClick?: () => void;
}>;

export const CardRedesign: FC<CardProps> = ({ children, className, onClick }) => {
  const classes = useCardRedesignStyles();

  return (
    <div className={`${classes.card} ${className || ""}`} onClick={onClick}>
      {children}
    </div>
  );
};
