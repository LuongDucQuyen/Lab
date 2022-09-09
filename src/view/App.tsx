import React, { Suspense, lazy } from "react";
import { Switch, Router, useLocation, Route, BrowserRouter } from "react-router-dom";
import { renderRouteUser } from "../routers";

import history from "../routerHistory";
import UseScrollTop from "../hooks/UseScrollTop";
import { ResetCSS } from "@pkt2022/uikit";
import GlobalStyle from "../style";

const Investment = lazy(() => import("./UserAdmin/Body/InvestmentFUBI"));

const App = () => {
  return (
    <BrowserRouter>
      <Router history={history}>
        <UseScrollTop />
        <ResetCSS />
        <GlobalStyle />
        <Switch>
          <Suspense fallback={null}>{renderRouteUser()}</Suspense>
        </Switch>
      </Router>
    </BrowserRouter>
  );
};

export default App;
