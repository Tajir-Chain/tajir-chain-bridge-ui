import { FC } from "react";

import { WalletIconRedesign } from "../wallet-icon/wallet-icon.view.redesign";
import ArrowRight from "src/assets/icons/arrow-right.svg?react";
// import { useEnvContext } from "src/contexts/env.context";
import { WalletName } from "src/domain";
import { useWalletListRedesignStyles } from "src/views/login/components/wallet-list/wallet-list.styles";
import { CardRedesign } from "src/views/shared/card/card.view.redesign";
import { Typography } from "src/views/shared/typography/typography.view";

type WalletListProps = {
  onSelectWallet: () => void;
};

export const WalletListRedesign: FC<WalletListProps> = ({ onSelectWallet }) => {
  const classes = useWalletListRedesignStyles();
  const isMobile = window.innerWidth < 788;

  return (
    <CardRedesign>
      <div className={classes.cardBox}>
        <Typography type="h1">Connect a wallet</Typography>
        <div className={classes.smallTitle}>Connect with {import.meta.env.VITE_ENVIRONMENT_NAME ? String(import.meta.env.VITE_ENVIRONMENT_NAME) : 'tajir'} environment</div>

        <ul className={classes.walletList}>
          <li
            className={classes.wallet}
            onClick={() => onSelectWallet()}
            role="button"
          >
            <div className={classes.walletInfo}>
              <button className={classes.button}>
                <div className={classes.buttonWalletTitle}>
                  <WalletIconRedesign
                    className={classes.walletIcon}
                    size="sm"
                    walletName={WalletName.WALLET_CONNECT}
                  />
                  {isMobile ? "Connect wallet" : " Connect using web wallet"}
                </div>
                <ArrowRight />
              </button>
            </div>
          </li>
        </ul>{" "}
      </div>
    </CardRedesign>
  );
};
