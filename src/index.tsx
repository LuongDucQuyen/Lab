import React from "react";
import ReactDOM from "react-dom";
import Providers from "./Provider";
import App from "./view/App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { Web3ReactProvider, createWeb3ReactRoot } from "@web3-react/core";
import { getLibrary, Web3ProviderNetwork } from "./context/web3provider";
import { RefreshContextProvider } from "./context/RefreshContext";
import { InvestmentPopupPovider } from "./InvesmentProvider";

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <RefreshContextProvider>
          <Providers>
            <InvestmentPopupPovider>
              <App />
            </InvestmentPopupPovider>
          </Providers>
        </RefreshContextProvider>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
