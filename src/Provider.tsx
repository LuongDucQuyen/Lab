import React from "react";
import { store } from "./redux/configStore";
import { Provider } from "react-redux";

import { ModalProvider } from "@pkt2022/uikit";

type Props = {
  children: React.ReactNode;
};

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <Provider store={store}>
      <ModalProvider>{children}</ModalProvider>
    </Provider>
  );
};

export default Providers;
