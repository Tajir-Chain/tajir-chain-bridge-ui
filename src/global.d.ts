// src/global.d.ts
import type { ExternalProvider } from '@ethersproject/providers'

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    ethereum?: ExternalProvider & { isMetaMask?: boolean }
  }
}

export {}
