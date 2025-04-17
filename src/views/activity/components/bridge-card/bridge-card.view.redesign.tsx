import { BigNumber } from "ethers";
import { FC, MouseEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBridgeCardRedesignStyles } from "./bridge-card.styles";
import { getBatchNumberOfL2Block } from "src/adapters/ethereum";
import { getCurrency } from "src/adapters/storage";
import BridgeL1Icon from "src/assets/icons/l1-bridge.svg?react";
import BridgeL2Icon from "src/assets/icons/l2-bridge.svg?react";
import { AsyncTask, Bridge, Env, PendingBridge } from "src/domain";
import { routes } from "src/routes";
import { formatFiatAmount, formatTokenAmount } from "src/utils/amounts";
import { getBridgeStatus, getCurrencySymbol } from "src/utils/labels";
import { isAsyncTaskDataAvailable } from "src/utils/types";
import { CardRedesign } from "src/views/shared/card/card.view.redesign";
import { ErrorMessage } from "src/views/shared/error-message/error-message.view";
import { Icon } from "src/views/shared/icon/icon.view";
import { Typography } from "src/views/shared/typography/typography.view";

export type BridgeCardProps = {
  bridge: Bridge;
  env: Env;
  isFinaliseDisabled: boolean;
  lastVerifiedBatch: AsyncTask<BigNumber, string>;
  networkError: boolean;
  onClaim?: () => void;
  showFiatAmount: boolean;
};

export const BridgeCardRedesign: FC<BridgeCardProps> = ({
  bridge,
  env,
  isFinaliseDisabled,
  lastVerifiedBatch,
  networkError,
  onClaim,
  showFiatAmount,
}) => {
  const classes = useBridgeCardRedesignStyles();
  const navigate = useNavigate();

  const { amount, fiatAmount, from, status, to, token } = bridge;
  const [batchNumberOfL2Block, setBatchNumberOfL2Block] = useState<AsyncTask<BigNumber, string>>({
    status: "pending",
  });

  const isMobile = window.innerWidth < 788;

  const [blockNumber, fromKey] =
    status !== "pending" ? [bridge.blockNumber, bridge.from.key] : [undefined, undefined];

  useEffect(() => {
    if (status === "initiated" && fromKey === "polygon-zkevm") {
      setBatchNumberOfL2Block((prev) =>
        isAsyncTaskDataAvailable(prev)
          ? { data: prev.data, status: "reloading" }
          : { status: "loading" }
      );
      getBatchNumberOfL2Block(env.chains[1].provider, blockNumber)
        .then((data) => setBatchNumberOfL2Block({ data, status: "successful" }))
        .catch(() =>
          setBatchNumberOfL2Block({
            error: "An error occurred getting the batch number of the L2 block",
            status: "failed",
          })
        );
    }
  }, [blockNumber, env, fromKey, status]);

  const onCardClick = (bridge: Exclude<Bridge, PendingBridge>) => {
    navigate(`${routes.bridgeDetails.path.split(":")[0]}${bridge.id}`);
  };

  const onClaimButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClaim?.();
  };

  const preferredCurrencySymbol = getCurrencySymbol(getCurrency());

  const tokenAmount = `${formatTokenAmount(amount, token)} ${token.symbol}`;
  const fiatAmountString = showFiatAmount
    ? `${preferredCurrencySymbol}${fiatAmount ? formatFiatAmount(fiatAmount) : "--"}`
    : undefined;

  const remainingBatchesMsg =
    isAsyncTaskDataAvailable(lastVerifiedBatch) && isAsyncTaskDataAvailable(batchNumberOfL2Block)
      ? `Waiting for validity proof. Tx will be confirmed in ${Math.max(
        batchNumberOfL2Block.data.sub(lastVerifiedBatch.data).toNumber(),
        0
      )} batches`
      : lastVerifiedBatch.status === "failed" || batchNumberOfL2Block.status === "failed"
        ? "Waiting for validity proof. This may take between 15 min and 1 hour"
        : "Waiting for validity proof";

  const BridgeAmount = (
    <div className={classes.token}>
      {token.logoURI ? (
        <Icon className={classes.tokenIcon} isRounded size={20} url={token.logoURI} />
      ) : (
        <img
          alt={token.name}
          className={classes.tokenIcon}
          src={token.logoURI}
          style={{ borderRadius: "50%", height: 20, width: 20 }}
        />
      )}
      <Typography type="body1">{tokenAmount}</Typography>
    </div>
  );

  const BridgeIcon = to.key === "ethereum" ? <BridgeL1Icon /> : <BridgeL2Icon />;
  const BridgeLabel = (
    <Typography className={classes.label} type="body1">
      {to.key === "ethereum" ? "Bridge to L1" : "Bridge to L2"}
    </Typography>
  );
  const BridgeStatus = (
    <span
      className={`${classes.statusBox} ${status === "completed" ? classes.greenStatus : classes.pendingStatus
        }`}
    >
      {getBridgeStatus(status, from)}
    </span>
  );
  const FiatAmount = (
    <Typography className={classes.fiat} type="body1">
      {fiatAmountString}
    </Typography>
  );

  const renderTopContent = (showStep?: string) => (
    <div className={classes.top}>
      {showStep && (
        <div className={classes.row}>
          <p className={classes.steps}>{showStep}</p>
        </div>
      )}
      <div className={classes.infoContainer}>
        {!isMobile && <div className={classes.circle}>{BridgeIcon}</div>}
        <div className={classes.info}>
          <div className={classes.row}>
            {BridgeLabel}
            {fiatAmountString && BridgeAmount}
          </div>
          <div className={classes.row}>
            {BridgeStatus}
            {fiatAmountString && FiatAmount}
          </div>
        </div>
        {!fiatAmountString && <div className={classes.amount}>{BridgeAmount}</div>}
      </div>
    </div>
  );

  const renderBottomContent = () => {
    switch (status) {
      case "initiated": {
        return from.key !== "ethereum" ? (
          <div className={classes.bottom}>
            <Typography className={classes.bottomTitle} type="body2">
              {remainingBatchesMsg}
            </Typography>
            <button className={classes.finaliseButton} disabled>
              Finalise
            </button>
          </div>
        ) : null;
      }
      case "on-hold": {
        return from.key !== "ethereum" ? (
          <div className={classes.bottom}>
            {networkError ? (
              <ErrorMessage error={`Switch to ${to.name} to continue`} type="body2" />
            ) : (
              <Typography type="body2">Signature required to finalise the bridge</Typography>
            )}
            <button
              className={classes.finaliseButton}
              disabled={isFinaliseDisabled}
              onClick={onClaimButtonClick}
            >
              Finalise
            </button>
          </div>
        ) : null;
      }
      default: {
        return null;
      }
    }
  };

  const getStep = () => {
    if (status === "initiated" && from.key !== "ethereum") {
      return "STEP 1/2";
    }
    if (status === "on-hold" && from.key !== "ethereum") {
      return "STEP 2/2";
    }
    return undefined;
  };

  return (
    <CardRedesign
      className={`${classes.card} ${status !== "pending" ? classes.activeStatusCard : ""}`}
      onClick={status !== "pending" ? () => onCardClick(bridge) : undefined}
    >
      {renderTopContent(getStep())}
      {renderBottomContent()}
    </CardRedesign>
  );
};
