import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { HeaderLinks } from "../shared/header-links/header-links.view.redesign";
import { NetworkBoxRedesign } from "../shared/network-box/network-box.view.redesign";
import { WalletListRedesign } from "./components/wallet-list/wallet-list.view.redesign";
import { routerStateParser } from "src/adapters/browser";
import { getPolicyCheck, setPolicyCheck } from "src/adapters/storage";
import { ReactComponent as ArrowDoubleIcon } from "src/assets/icons/arrow-double.svg";
import { ReactComponent as LogoGatewayfm } from "src/assets/icons/chains/logo-gatewayfm.svg";
import { useEnvContext } from "src/contexts/env.context";
import { useProvidersContext } from "src/contexts/providers.context";
import { EthereumChainId, PolicyCheck, WalletName } from "src/domain";
import { routes } from "src/routes";
import { getDeploymentName } from "src/utils/labels";
import { useLoginRedesignStyles } from "src/views/login/login.styles";
import { ConfirmationModal } from "src/views/shared/confirmation-modal/confirmation-modal.view";
import { ErrorMessage } from "src/views/shared/error-message/error-message.view";
import { InfoBanner } from "src/views/shared/info-banner/info-banner.view";
import { Typography } from "src/views/shared/typography/typography.view";

export const LoginRedesign: FC = () => {
  const classes = useLoginRedesignStyles();
  const [selectedWallet, setSelectedWallet] = useState<WalletName>();
  const [showPolicyModal, setShowPolicyModal] = useState(false);
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { state } = useLocation();
  const { connectedProvider, connectProvider } = useProvidersContext();
  const env = useEnvContext();

  const onConnectProvider = () => {
    setPolicyCheck();
    if (selectedWallet) {
      connectProvider(selectedWallet).catch((error) => {
        console.error(error);
      });
      setShowPolicyModal(false);
    }
  };

  const onCheckAndConnectProvider = (walletName: WalletName) => {
    setSelectedWallet(walletName);
    const checked = getPolicyCheck();
    if (checked === PolicyCheck.Checked) {
      void connectProvider(walletName);
    } else {
      setShowPolicyModal(true);
    }
  };

  useEffect(() => {
    if (connectedProvider.status === "successful") {
      const routerState = routerStateParser.safeParse(state);

      if (routerState.success) {
        navigate(routerState.data.redirectUrl, { replace: true });
      } else {
        navigate(routes.home.path, { replace: true });
      }
    }
  }, [connectedProvider, state, navigate]);

  if (!env) {
    return null;
  }

  const name = env.networkName;
  const ethereumChain = env.chains[0];
  const deploymentName = getDeploymentName(ethereumChain);
  const appName = deploymentName !== undefined ? `${deploymentName} Bridge` : "Bridge";

  return (
    <div className={classes.login}>
      <HeaderLinks />
      <div className={classes.contentWrapper}>
        <div className={classes.networkTopBox}>
          <Typography className={classes.appName} type="body1">
            <ArrowDoubleIcon className={classes.appNameIcon} /> {appName}
          </Typography>
          <Typography className={classes.networkName} type="body1">
            {name ? name : env.chains[1].name}
          </Typography>
        </div>
        <div className={classes.networkBoxWrapper}>
          <NetworkBoxRedesign />
        </div>
        <div className={classes.cardWrap}>
          <WalletListRedesign onSelectWallet={onCheckAndConnectProvider} />
          {connectedProvider.status === "failed" && (
            <ErrorMessage error={connectedProvider.error} />
          )}
        </div>
        {ethereumChain.chainId !== EthereumChainId.MAINNET && (
          <InfoBanner message={`Connect with ${ethereumChain.name} environment`} />
        )}
      </div>
      <div className={classes.poweredLogoBox}>
        Powered by <LogoGatewayfm onClick={() => window.open("https://gateway.fm/", "_blank")} />
      </div>
      {showPolicyModal && (
        <ConfirmationModal
          message={
            <Typography type="body1">
              DISCLAIMER: This version of the Polygon zkEVM will require frequent maintenance and
              may be restarted if upgrades are needed.
            </Typography>
          }
          onClose={() => setShowPolicyModal(false)}
          onConfirm={onConnectProvider}
          showCancelButton={false}
          title={`Welcome to the Polygon zkEVM ${deploymentName || ""}`}
        />
      )}
    </div>
  );
};
