import { FC } from "react";

import MetaMaskIcon from "src/assets/icons/metamask.svg?react";
import WalletConnectIcon from "src/assets/icons/walletconnect.svg?react";
import { WalletName } from "src/domain";
import { useWalletIconRedesignStyles } from "src/views/login/components/wallet-icon/wallet-icon.styles";

type WalletIconProps = {
  className?: string;
  size: "sm" | "lg";
  walletName: WalletName;
};

export const WalletIconRedesign: FC<WalletIconProps> = ({ className, size, walletName }) => {
  const classes = useWalletIconRedesignStyles({ size });

  switch (walletName) {
    case WalletName.METAMASK: {
      return (
        <div className={`${classes.walletIcon} ${classes.metaMaskIcon} ${className || ""}`}>
          <MetaMaskIcon />
        </div>
      );
    }
    case WalletName.WALLET_CONNECT: {
      return (
        <div className={`${classes.walletIcon} ${classes.walletConnectIcon} ${className || ""}`}>
          <WalletConnectIcon />
        </div>
      );
    }
  }
};
