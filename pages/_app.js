import "@/styles/globals.css";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";

export default function App({ Component, pageProps }) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "64629af2-1ebe-4cac-90dc-b8cdc856ff6e",
        initialAuthenticationMode: 'connect-only',
      }}
    >
      <DynamicWagmiConnector>
        <Component {...pageProps} />
      </DynamicWagmiConnector>
    </DynamicContextProvider>
  );
}
