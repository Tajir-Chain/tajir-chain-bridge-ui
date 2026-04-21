import { constants as ethersConstants } from "ethers";

import { Chain, Token } from "src/domain";

const selectTokenAddress = (token: Token, chain: Chain): string => {
  return token.wrappedToken && chain.chainId === token.wrappedToken.chainId
    ? token.wrappedToken.address
    : token.address;
};

const isTokenEther = (token: Token, chain: Chain): boolean => {
  if (token.chainId == chain.chainId) {
    return token.address === ethersConstants.AddressZero;
  } else {
    return token.wrappedToken?.address === ethersConstants.AddressZero;
  }
};

const isWETH = (token: Token, chainId: string): boolean => {
  if (chainId !== "ethereum" && token.symbol === "ETH" && token.wrappedToken) {
    return token.wrappedToken.address !== ethersConstants.AddressZero;
  } else {
    return false;
  }
};

const getDisplaySymbol = (token: Token, chainKey: string): string => {
  if (token.symbol === "ETH" || token.symbol === "WETH") {
    return chainKey === "ethereum" ? "ETH" : "WETH";
  }
  return token.symbol;
};

export { isTokenEther, selectTokenAddress, isWETH, getDisplaySymbol };
