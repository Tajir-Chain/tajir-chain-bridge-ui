// src/global.d.ts
import type { ExternalProvider } from '@ethersproject/providers'

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    ethereum?: ExternalProvider & {
      chainId?: string;
      isMetaMask?: boolean;
      on?: (
        event: "chainChanged" | "accountsChanged" | "disconnect",
        callback: (arg: unknown) => void
      ) => void;
      removeListener?: (
        event: "chainChanged" | "accountsChanged" | "disconnect",
        callback: (arg: unknown) => void
      ) => void;
    };
  }
}

export { }
