"use client";

import { http, createStorage, cookieStorage } from "wagmi";
import {
  mainnet,
  sepolia,
  holesky,
  goerli,
  optimism,
  arbitrum,
  base,
  zora,
  polygon,
  polygonMumbai,
  avalanche,
  fantom,
  bsc,
  gnosis,
  celo,
  linea,
  scroll,
  filecoin,
  moonbeam,
  moonriver
} from "wagmi/chains";
import { Chain, getDefaultConfig } from "@rainbow-me/rainbowkit";

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string;

const supportedChains: Chain[] = [
  mainnet,
  sepolia,
  holesky,
  goerli,
  optimism,
  arbitrum,
  base,
  zora,
  polygon,
  polygonMumbai,
  avalanche,
  fantom,
  bsc,
  gnosis,
  celo,
  linea,
  scroll,
  filecoin,
  moonbeam,
  moonriver
];

export const config = getDefaultConfig({
  appName: "RainbowKit Template",
  projectId,
  chains: supportedChains as any,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: supportedChains.reduce((obj, chain) => ({ ...obj, [chain.id]: http() }), {}),
}); 