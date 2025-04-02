import { FC, MouseEvent, useEffect, useState } from "react";

import { TokenAdderRedesign } from "../token-adder/token-adder.view.tsx.redesign";
import { TokenInfoRedesign } from "../token-info/token-info.view.redesign";
import { TokenListRedesign } from "../token-list/token-list.view.redesign";
import { Chain, Token } from "src/domain";
import { useTokenSelectorRedesignStyles } from "src/views/home/components/token-selector/token-selector.styles";
import { CardRedesign } from "src/views/shared/card/card.view.redesign";
import { Portal } from "src/views/shared/portal/portal.view";

type Screen =
  | {
      type: "token-list";
    }
  | {
      token: Token;
      type: "token-adder";
    }
  | {
      token: Token;
      type: "token-info";
    };

type SelectedChains = {
  from: Chain;
  to: Chain;
};

type TokenSelectorProps = {
  account: string;
  chains: SelectedChains;
  onAddToken: (token: Token) => void;
  onClose: () => void;
  onRemoveToken: (token: Token) => void;
  onSelectToken: (token: Token) => void;
  tokens: Token[];
};

export const TokenSelectorRedesign: FC<TokenSelectorProps> = ({
  account,
  chains,
  onAddToken,
  onClose,
  onRemoveToken,
  onSelectToken,
  tokens,
}) => {
  const classes = useTokenSelectorRedesignStyles();

  const [screen, setScreen] = useState<Screen>({
    type: "token-list",
  });

  const onOutsideClick = (event: MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const onNavigateToTokenAdder = (token: Token) => {
    setScreen({
      token,
      type: "token-adder",
    });
  };

  const onNavigateToTokenInfo = (token: Token) => {
    setScreen({
      token,
      type: "token-info",
    });
  };

  const onNavigateToTokenList = () => {
    setScreen({
      type: "token-list",
    });
  };

  const onAddTokenToList = (token: Token) => {
    onAddToken(token);
    setScreen({
      type: "token-list",
    });
  };

  const onRemoveTokenFromList = (token: Token) => {
    onRemoveToken(token);
    setScreen({
      type: "token-list",
    });
  };

  useEffect(() => {
    const onKeyUp = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [onClose]);

  return (
    <Portal>
      <div className={classes.background} onMouseDown={onOutsideClick}>
        <CardRedesign className={classes.card}>
          {(() => {
            switch (screen.type) {
              case "token-list": {
                return (
                  <TokenListRedesign
                    account={account}
                    chains={chains}
                    onClose={onClose}
                    onNavigateToTokenAdder={onNavigateToTokenAdder}
                    onNavigateToTokenInfo={onNavigateToTokenInfo}
                    onSelectToken={onSelectToken}
                    tokens={tokens}
                  />
                );
              }
              case "token-adder": {
                return (
                  <TokenAdderRedesign
                    onAddToken={onAddTokenToList}
                    onClose={onClose}
                    onNavigateToTokenList={onNavigateToTokenList}
                    token={screen.token}
                  />
                );
              }
              case "token-info": {
                return (
                 <TokenInfoRedesign
                    chain={chains.from}
                    onClose={onClose}
                    onNavigateToTokenList={onNavigateToTokenList}
                    onRemoveToken={onRemoveTokenFromList}
                    token={screen.token}
                  />
                );
              }
            }
          })()}
        </CardRedesign>
      </div>
    </Portal>
  );
};
