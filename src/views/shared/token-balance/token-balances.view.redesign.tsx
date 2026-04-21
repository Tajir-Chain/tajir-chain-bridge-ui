import { BigNumber } from "ethers";
import { FC } from "react";

import { Token } from "src/domain";
import { formatTokenAmount } from "src/utils/amounts";
import { getDisplaySymbol } from "src/utils/tokens";
import { isAsyncTaskDataAvailable } from "src/utils/types";
import { Spinner } from "src/views/shared/spinner/spinner.view";
import { useTokenBalanceRedesignStyles } from "src/views/shared/token-balance/token-balance.styles";
import { Typography, TypographyProps } from "src/views/shared/typography/typography.view";

type TokenBalanceProps = {
 chainId: string;
 spinnerSize: number;
 token: Token;
 typographyProps: TypographyProps;
}

export const TokenBalanceRedesign: FC<TokenBalanceProps> = ({ chainId, spinnerSize, token, typographyProps }) => {
 const classes = useTokenBalanceRedesignStyles();
 const loader = (
  <div className={classes.loader}>
   <Spinner size={spinnerSize} />
   <Typography {...typographyProps}>&nbsp;{token.symbol}</Typography>
  </div>
 );

 const symbol = getDisplaySymbol(token, chainId);

 if (!token.balance) {
  return loader;
 }

 switch (token.balance.status) {
  case "pending":
  case "loading":
  case "reloading": {
   return loader;
  }
  case "successful":
  case "failed": {
   const formattedTokenAmount = formatTokenAmount(
    isAsyncTaskDataAvailable(token.balance) ? token.balance.data : BigNumber.from(0),
    token
   );

   return (
    <Typography className={classes.tokenBalance} {...typographyProps}>{`${formattedTokenAmount} ${symbol}`}</Typography>
   );
  }
 }
};
