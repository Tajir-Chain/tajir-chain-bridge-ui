import { FC } from "react";
import EthChainIcon from "src/assets/icons/chains/ethereum.svg?react";
import PolygonZkEVMChainIcon from "src/assets/icons/chains/tajir.svg?react";
import * as domain from "src/domain";
import { useChainStyles } from "src/views/bridge-details/components/chain/chain.styles";
import { Typography } from "src/views/shared/typography/typography.view";

type ChainProps = {
  chain: domain.Chain;
  className?: string;
}

export const Chain: FC<ChainProps> = ({ chain, className }) => {
  const classes = useChainStyles();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const chainIconUrl = import.meta.env.VITE_CHAIN_ICON_PATH;

  const renderChainIcon = () => {
    if (chain.key === "ethereum") {
      return <EthChainIcon />;
    }
    if (chainIconUrl) {
      return (
        <img
          alt={chain.name}
          className={classes.chainIcon}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={chainIconUrl}
        />
      );
    }
    return <PolygonZkEVMChainIcon className={classes.chainIcon} />;
  };

  return (
    <Typography className={className} type="body1">
      {renderChainIcon() ? (
        renderChainIcon()
      ) : (
        <img
          alt={chain.name}
          className={classes.chainIcon}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={chainIconUrl}
        />
      )}
      {chain.name}
    </Typography>
  );
};
