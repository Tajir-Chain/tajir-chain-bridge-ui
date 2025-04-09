import { createUseStyles } from "react-jss";

import { Theme } from "src/styles/theme";

type WalletIconStylesProps = {
  size: "sm" | "lg";
};

export const useWalletIconStyles = createUseStyles((theme: Theme) => ({
  metaMaskIcon: {
    background: "#fbe6df",
  },
  walletConnectIcon: {
    background: "#e2f0ff",
  },
  walletIcon: ({ size }: WalletIconStylesProps) => ({
    alignItems: "center",
    borderRadius: "50%",
    display: "flex",
    height: size === "sm" ? theme.spacing(6) : theme.spacing(7.5),
    justifyContent: "center",
    padding: theme.spacing(1),
    width: size === "sm" ? theme.spacing(6) : theme.spacing(7.5),
  }),
}));

export const useWalletIconRedesignStyles = createUseStyles((theme: Theme) => ({
  metaMaskIcon: {
    background: "#fbe6df",
  },
  walletConnectIcon: {
    background: "#e2f0ff",
  },
  walletIcon: ({ size }: WalletIconStylesProps) => ({
    alignItems: "center",
    borderRadius: "50%",
    display: "flex",
    height: size === "sm" ? theme.spacing(3.5) : theme.spacing(7.5),
    justifyContent: "center",
    padding: theme.spacing(0.3),
    width: size === "sm" ? theme.spacing(3.5) : theme.spacing(7.5),
  }),
}));
