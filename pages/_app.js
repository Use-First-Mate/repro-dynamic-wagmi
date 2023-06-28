import "@/styles/globals.css";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";

const staging = "5764ca4e-b339-4d3a-a485-6e274b3edf04"
const prod = "64629af2-1ebe-4cac-90dc-b8cdc856ff6e"
export default function App({ Component, pageProps }) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: staging,
        initialAuthenticationMode: 'connect-and-sign',
      }}
    >
      <DynamicWagmiConnector>
        <Component {...pageProps} />
      </DynamicWagmiConnector>
    </DynamicContextProvider>
  );
}
