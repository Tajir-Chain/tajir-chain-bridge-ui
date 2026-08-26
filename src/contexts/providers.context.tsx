import { Web3Provider } from "@ethersproject/providers";
import { createAppKit, useAppKit, useAppKitAccount, useAppKitNetwork, useAppKitProvider } from "@reown/appkit/react";
import { Ethers5Adapter } from "@reown/appkit-adapter-ethers5";
import { hexValue } from "ethers/lib/utils";
import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { AsyncTask, Chain, ConnectedProvider } from "src/domain";
import { getChecksumAddress } from "src/utils/addresses";
import {
  isAsyncTaskDataAvailable,
  isMetaMaskResourceUnavailableError,
  isMetaMaskUnknownChainError,
} from "src/utils/types";

// AppKit Initialization
const projectId = import.meta.env.VITE_REOWN_PROJECT_ID ? String(import.meta.env.VITE_REOWN_PROJECT_ID) : "YOUR_PROJECT_ID";

const ethereumNetwork = {
  blockExplorers: { default: { name: 'Etherscan', url: String(import.meta.env.VITE_ETHEREUM_EXPLORER_URL) } },
  id: Number(import.meta.env.VITE_ETHEREUM_CHAIN_ID),
  name: 'Ethereum',
  nativeCurrency: { decimals: 18, name: 'Ether', symbol: 'ETH' },
  network: 'ethereum',
  rpcUrls: { default: { http: [String(import.meta.env.VITE_ETHEREUM_RPC_URL)] } },
};

const zkEvmNetwork = {
  blockExplorers: { default: { name: 'Explorer', url: String(import.meta.env.VITE_POLYGON_ZK_EVM_EXPLORER_URL) } },
  id: Number(import.meta.env.VITE_POLYGON_ZK_EVM_CHAIN_ID),
  name: import.meta.env.VITE_POLYGON_ZK_EVM_NETWORK_NAME ? String(import.meta.env.VITE_POLYGON_ZK_EVM_NETWORK_NAME) : 'TajirChain',
  nativeCurrency: { decimals: 18, name: 'Ether', symbol: 'ETH' },
  network: 'tajirchain',
  rpcUrls: { default: { http: [String(import.meta.env.VITE_POLYGON_ZK_EVM_RPC_URL)] } },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const networks: [any, ...any[]] = [ethereumNetwork, zkEvmNetwork];

createAppKit({
  adapters: [new Ethers5Adapter()],
  features: {
    analytics: true,
    email: false,
    socials: []
  },
  metadata: {
    description: 'TajirChain Bridge UI',
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
    name: 'Tajir Bridge',
    url: window.location.origin,
  },
  networks,
  projectId,
});

type ProvidersContext ={
  addNetwork: (chain: Chain) => Promise<void>;
  changeNetwork: (chain: Chain) => Promise<void>;
  connectProvider: () => Promise<void>;
  connectedProvider: AsyncTask<ConnectedProvider, string>;
}

const providersContextNotReadyErrorMsg = "The providers context is not yet ready";

const providersContext = createContext<ProvidersContext>({
  addNetwork: () => Promise.reject(new Error(providersContextNotReadyErrorMsg)),
  changeNetwork: () => Promise.reject(new Error(providersContextNotReadyErrorMsg)),
  connectedProvider: { status: "pending" },
  connectProvider: () => Promise.reject(new Error(providersContextNotReadyErrorMsg)),
});

const ProvidersProvider: FC<PropsWithChildren> = (props) => {
  const { open } = useAppKit();
  const { address, isConnected, status } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider('eip155');
  const { chainId } = useAppKitNetwork();

  const [connectedProvider, setConnectedProvider] = useState<AsyncTask<ConnectedProvider, string>>({
    status: "pending",
  });

  const IS_SWITCHING_NETWORK_DELAY = 1000;

  // React to AppKit state changes and map to existing context state
  useEffect(() => {
    if (status === "connecting" || status === "reconnecting") {
      setConnectedProvider({ status: "pending" });
    } else if (isConnected && walletProvider && address) {
      try {
        const web3Provider = new Web3Provider(walletProvider, "any");
        setConnectedProvider({
          data: {
            account: getChecksumAddress(address),
            chainId: chainId ? Number(chainId) : Number(import.meta.env.VITE_ETHEREUM_CHAIN_ID),
            provider: web3Provider,
          },
          status: "successful",
        });
      } catch (error) {
        setConnectedProvider({
          error: "An error occurred parsing the provider",
          status: "failed",
        });
      }
    } else if (status === "disconnected") {
      setConnectedProvider({ error: "Disconnected", status: "failed" });
    }
  }, [isConnected, walletProvider, address, chainId, status]);

  const connectProvider = useCallback(
    async (): Promise<void> => {
      await open();
    },
    [open]
  );

  const switchNetwork = (chain: Chain, providerWeb3: Web3Provider): Promise<void> => {
    if (!providerWeb3.provider.request) {
      return Promise.reject(
        new Error("No request method is available from the provider to switch the Ethereum chain")
      );
    }
    return providerWeb3.provider
      .request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: hexValue(chain.chainId) }],
      })
      .then(async () => {
        const { chainId: newChainId } = await providerWeb3.getNetwork();

        if (newChainId !== chain.chainId) {
          throw "wrong-network";
        }
      })
      .catch((error) => {
        if (!isMetaMaskResourceUnavailableError(error)) {
          throw error;
        }
      });
  };

  const addNetwork = useCallback(
    (chain: Chain): Promise<void> => {
      if (!isAsyncTaskDataAvailable(connectedProvider)) {
         return Promise.reject(new Error("No provider is available"));
      }
      const provider = connectedProvider.data.provider;
      const { request } = provider.provider;
      if (!request) {
        return Promise.reject(
          new Error("No request method is available from the provider to add an Ethereum chain")
        );
      }

      return request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: hexValue(chain.chainId) }],
      })
        .then(() => {
          throw "already-added";
        })
        .catch(async (error) => {
          if (isMetaMaskUnknownChainError(error)) {
            return request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  blockExplorerUrls: [chain.explorerUrl],
                  chainId: hexValue(chain.chainId),
                  chainName: chain.name,
                  nativeCurrency: chain.nativeCurrency,
                  rpcUrls: [chain.provider.connection.url],
                },
              ],
            }).then(async () => {
              const { chainId: newChainId } = await provider.getNetwork();
              if (newChainId !== chain.chainId) {
                throw "wrong-network";
              }
            });
          }
          throw error;
        })
        .catch((error) => {
          if (!isMetaMaskResourceUnavailableError(error)) {
            throw error;
          }
        })
        .finally(() => {
          setTimeout(() => {
             // Delay added to prevent race conditions during UI updates
          }, IS_SWITCHING_NETWORK_DELAY);
        });
    },
    [connectedProvider]
  );

  const changeNetwork = useCallback(
    (chain: Chain) => {
      if (
        isAsyncTaskDataAvailable(connectedProvider)
      ) {
        return switchNetwork(chain, connectedProvider.data.provider).catch((error) => {
          if (isMetaMaskUnknownChainError(error)) {
            return addNetwork(chain);
          } else {
            throw error;
          }
        });
      } else {
        return Promise.reject(new Error(providersContextNotReadyErrorMsg));
      }
    },
    [addNetwork, connectedProvider]
  );

  const value = useMemo(
    () => ({
      addNetwork,
      changeNetwork,
      connectedProvider,
      connectProvider,
    }),
    [connectedProvider, addNetwork, changeNetwork, connectProvider]
  );

  return <providersContext.Provider value={value} {...props} />;
};

const useProvidersContext = (): ProvidersContext => {
  return useContext(providersContext);
};

export { ProvidersProvider, useProvidersContext };
