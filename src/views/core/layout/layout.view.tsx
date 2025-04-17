import { FC, PropsWithChildren, useEffect, useState } from "react";

import { reportError } from "src/adapters/error";
// import LogoGatewayfm from "src/assets/icons/logo-gatewayfm.svg?react";
import { useEnvContext } from "src/contexts/env.context";
import { useUIContext } from "src/contexts/ui.context";
import { useLayoutStyles } from "src/views/core/layout/layout.styles";
import { ConfirmationModal } from "src/views/shared/confirmation-modal/confirmation-modal.view";
import { ExternalLink } from "src/views/shared/external-link/external-link.view";
import { HeaderLinks } from "src/views/shared/header-links/header-links.view.redesign";
import { Snackbar } from "src/views/shared/snackbar/snackbar.view";
import { Typography } from "src/views/shared/typography/typography.view";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const classes = useLayoutStyles();
  const { closeSnackbar, snackbar } = useUIContext();
  const [showNetworkOutdatedModal, setShowNetworkOutdatedModal] = useState(false);
  const env = useEnvContext();
  const showBrandComponents = env?.brandComponents && env?.frontendType !== "old-design";

  const onCloseSnackbar = closeSnackbar;
  const onReportFromSnackbar = reportError;

  useEffect(() => {
    if (env) {
      setShowNetworkOutdatedModal(env.outdatedNetworkModal.isEnabled);
    }
  }, [env]);

  return (
    <>
      <div className={classes.layout}>
        {showBrandComponents && <HeaderLinks />}
        <div className={classes.container}>{children}</div>
        {showBrandComponents && (
          <div className={classes.poweredLogoBox}>
            Powered by{" "}
            {/* <LogoGatewayfm onClick={() => window.open("https://gateway.fm/", "_blank")} /> */}
          </div>
        )}
      </div>
      {env && snackbar.status === "open" && (
        <Snackbar
          message={snackbar.message}
          onClose={onCloseSnackbar}
          onReport={onReportFromSnackbar}
          reportForm={env.reportForm}
        />
      )}
      {/* {env && showNetworkOutdatedModal && env.outdatedNetworkModal.isEnabled && (
        <ConfirmationModal
          message={
            <div>
              {env.outdatedNetworkModal.messageParagraph1 && (
                <Typography type="body2">{env.outdatedNetworkModal.messageParagraph1}</Typography>
              )}
              {env.outdatedNetworkModal.messageParagraph2 && (
                <>
                  <br />
                  <Typography type="body2">{env.outdatedNetworkModal.messageParagraph2}</Typography>
                </>
              )}
              <br />
              {env.outdatedNetworkModal.url && (
                <Typography className={classes.linkContainer} type="body2">
                  <ExternalLink href={env.outdatedNetworkModal.url}>
                    {env.outdatedNetworkModal.url}
                  </ExternalLink>
                </Typography>
              )}
            </div>
          }
          onClose={() => setShowNetworkOutdatedModal(false)}
          onConfirm={() => setShowNetworkOutdatedModal(false)}
          showCancelButton={false}
          title={env.outdatedNetworkModal.title}
        />
      )} */}
    </>
  );
};
