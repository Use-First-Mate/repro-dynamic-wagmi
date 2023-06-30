import "@/styles/globals.css";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";

const stagingWithWC2 = "5764ca4e-b339-4d3a-a485-6e274b3edf04";
const prodWithoutWC2 = "64629af2-1ebe-4cac-90dc-b8cdc856ff6e";

export default function App({ Component, pageProps }) {
  const settingsFails = {
    environmentId: stagingWithWC2,
    initialAuthenticationMode: "connect-and-sign",
  };
  const settingsSucceeds = {
    environmentId: prodWithoutWC2,
    initialAuthenticationMode: "connect-only",
    walletConnectV1Bridge: "https://derelay.rabby.io/",
  };
  return (
    <DynamicContextProvider
      settings={settingsFails}
      //settings={settingsSucceeds}
    >
      <DynamicWagmiConnector>
        <Component {...pageProps} />
      </DynamicWagmiConnector>
    </DynamicContextProvider>
  );
}
