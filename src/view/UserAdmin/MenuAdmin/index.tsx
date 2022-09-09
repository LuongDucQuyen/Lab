import React, { lazy, Suspense } from "react";
import noop from "lodash/noop";
import history from "../../../routerHistory";
import {
  Route,
  Switch,
  useLocation,
  Router,
  useHistory,
} from "react-router-dom";
import Menu from "./Menu";
import { links } from "./config";
import {
  HomeFUBI,
  DashboardFUBI,
  InvestmentFUBI,
  TransactionHistory,
  FubiToken,
  Tokenomics,
  Affiliates,
  RoadMap,
  WithdrawFubi,
} from "../Body";
import UseScrollTop from "../../../hooks/UseScrollTop";
import SwapFUBI from "../Body/SwapFUBI";
const TestMenu = () => {
  const location = useLocation();

  return (
    <>
      {/* <Router history={history}> */}
      <UseScrollTop />
      <Menu
        account={"hieu"}
        login="login"
        logout={noop}
        isDark
        toggleTheme={noop}
        langs="langs"
        setLang={noop}
        currentLang="EN"
        links={links}
      >
        <Switch>
          <Suspense fallback={null}>
            <Route exact strict path="/" component={HomeFUBI} />
            <Route exact strict path="/dashboard" component={DashboardFUBI} />
            <Route exact strict path="/swap" component={SwapFUBI} />
            <Route exact strict path="/investment" component={InvestmentFUBI} />
            <Route exact strict path="/Withdraw" component={WithdrawFubi} />
            <Route
              exact
              strict
              path="/Transaction-History"
              component={TransactionHistory}
            />
            <Route exact strict path="/Affiliates" component={Affiliates} />
            <Route exact strict path="/Fubi-Token" component={FubiToken} />
            <Route exact strict path="/Tokenomics" component={Tokenomics} />
            <Route exact strict path="/Roadmap" component={RoadMap} />
            <Route
              exact
              strict
              path="/Whitepapper"
              component={TransactionHistory}
            />
          </Suspense>
        </Switch>
      </Menu>
      {/* </Router> */}
    </>
  );
};

export default TestMenu;
