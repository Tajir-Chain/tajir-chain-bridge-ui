import copy from "copy-to-clipboard";
import { useEffect, useMemo, useState } from "react";

import { CardRedesign } from "../card/card.view.redesign";
import { parseError } from "src/adapters/error";
import { ReactComponent as ArrowRightIcon } from "src/assets/icons/arrow-right-purple.svg";
import { ReactComponent as CopyIcon } from "src/assets/icons/copy-outlined.svg";
import { ReactComponent as CornerWhiteIcon } from "src/assets/icons/corner-right-white.svg";
import { ReactComponent as MetaMaskIcon } from "src/assets/icons/metamask.svg";
import { ReactComponent as WarningIcon } from "src/assets/icons/warning.svg";
import { useEnvContext } from "src/contexts/env.context";
import { useErrorContext } from "src/contexts/error.context";
import { useProvidersContext } from "src/contexts/providers.context";
import { useUIContext } from "src/contexts/ui.context";
import { Message } from "src/domain";
import { useCallIfMounted } from "src/hooks/use-call-if-mounted";
import { isAsyncTaskDataAvailable, isMetaMaskUserRejectedRequestError } from "src/utils/types";
import { Divider } from "src/views/divider/divider.view";
import { ExternalLink } from "src/views/shared/external-link/external-link.view";
import { useNetworkBoxRedesignStyles } from "src/views/shared/network-box/network-box.styles";
import { Typography } from "src/views/shared/typography/typography.view";

type ListValueObject = {
  icon: JSX.Element;
  onClick?: () => void;
};

export const NetworkBoxRedesign = () => {
  const classes = useNetworkBoxRedesignStyles();
  const env = useEnvContext();
  const { addNetwork, connectedProvider } = useProvidersContext();
  const [isAddNetworkButtonDisabled, setIsAddNetworkButtonDisabled] = useState(false);
  const { openSnackbar } = useUIContext();
  const callIfMounted = useCallIfMounted();
  const { notifyError } = useErrorContext();

  const ethereumChain = env?.chains[0];
  const polygonZkEVMChain = env?.chains[1];

  // const name = env?.networkName;
  const symbol = env?.networkSymbol;



  const onCopyText = (text: string) => () => {
    const success = copy(text);

    if (success) {
      openSnackbar({ text: "Copied to clipboard!", type: "success-msg" });
    } else {
      openSnackbar({ text: "Failed to copy", type: "error-msg" });
    }
  };

  const getListValueObject = (label: string, value: string | URL): ListValueObject => {
    switch (label) {
      case "RPC URL":
      case "Chain ID":
      case "Currency symbol": {
        return {
          icon: <CopyIcon />,
          onClick: onCopyText(String(value)),
        };
      }
      case "Block explorer URL":
      case "Smart Contract":
      default: {
        return {
          icon: <ArrowRightIcon />,
          onClick: () => window.open(value, "_blank"),
        };
      }
    }
  };

  const successMsg: Message = useMemo(
    () => ({
      text: `${polygonZkEVMChain?.name ?? "Polygon"} network successfully added`,
      type: "success-msg",
    }),
    [polygonZkEVMChain?.name]
  );

  const details = useMemo(
    () => [
      { label: "RPC URL", value: polygonZkEVMChain?.provider.connection.url, icon: "" },
      { label: "Chain ID", value: polygonZkEVMChain?.chainId },
      {
        label: "Currency symbol",
        value: symbol || polygonZkEVMChain?.nativeCurrency.symbol,
      },
      {
        label: "Block explorer URL",
        value: polygonZkEVMChain?.explorerUrl,
        // eslint-disable-next-line sort-keys-fix/sort-keys-fix
        link: polygonZkEVMChain?.explorerUrl,
      },
      {
        label: `${ethereumChain?.name ?? "Ethereum"} Smart Contract`,
        link: ethereumChain
          ? `${ethereumChain.explorerUrl}/address/${ethereumChain.poeContractAddress}`
          : "",
        value: ethereumChain?.poeContractAddress ?? "",
      },
    ],
    [polygonZkEVMChain, ethereumChain, symbol]
  );

  const onAddNetwork = (): void => {
    setIsAddNetworkButtonDisabled(true);
    if (!polygonZkEVMChain) {
      return;
    }
    addNetwork(polygonZkEVMChain)
      .then(() => {
        callIfMounted(() => {
          openSnackbar(successMsg);
        });
      })
      .catch((error) => {
        callIfMounted(() => {
          void parseError(error).then((parsed) => {
            if (parsed === "wrong-network") {
              openSnackbar(successMsg);
            } else if (isMetaMaskUserRejectedRequestError(error) === false) {
              notifyError(error);
            }
          });
        });
      })
      .finally(() => {
        callIfMounted(() => {
          setIsAddNetworkButtonDisabled(false);
        });
      });
  };

  if (!env || !ethereumChain || !polygonZkEVMChain) {
    return null;
  }

  return (
    <CardRedesign>
      <div className={classes.networkBox}>
        <div className={classes.connectWalletBox}>
          <div className={classes.titlesBox}>
            <div className={classes.largeTitle}>Add a network</div>
          </div>

          <a
            className={classes.buttonRounded}
            href="https://discord.gg/77vtmKNbkf"
            rel="noopener noreferrer"
            target="_blank"
          >
            <WarningIcon className={classes.reportIcon} />
            <div className={classes.reportTitle}> Report an issue</div>
          </a>
        </div>
        <button
          className={classes.button}
          disabled={
            isAddNetworkButtonDisabled ||
            (isAsyncTaskDataAvailable(connectedProvider) &&
              connectedProvider.data.chainId === polygonZkEVMChain.chainId)
          }
          onClick={onAddNetwork}
        >
          <div className={classes.buttonIconAndTitle}>
            <MetaMaskIcon className={classes.buttonIcon} />
            Add to MetaMask
          </div>
          <div>
            <CornerWhiteIcon className={classes.buttonArrow} />
          </div>
        </button>
        <Divider />
        <div className={classes.list}>
          {details.map(({ label, link, value }) => {
            const { icon, onClick } = getListValueObject(label, link ?? String(value) ?? "");
            return (
              <Typography key={label} type="body2">
                <div className={classes.listItem}>
                  <div className={classes.listItemLabel}> {label}:</div>
                  <div className={classes.listItemValue} onClick={onClick}>
                    {link ? <ExternalLink href={link}>{value}</ExternalLink> : value}
                    <div className={classes.listIcon}> {icon}</div>
                  </div>
                </div>
              </Typography>
            );
          })}
        </div>
      </div>
    </CardRedesign>
  );
};
