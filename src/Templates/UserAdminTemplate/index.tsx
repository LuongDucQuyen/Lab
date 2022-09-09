import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import noop from "lodash/noop";
import { Route } from "react-router";
import { Link, useHistory, useLocation, Redirect } from "react-router-dom";
import { FlexPkt, BoxPkt, Row } from "../../components/Layout";
import UseScrollTop from "../../hooks/UseScrollTop";
import { BoxTransition } from "./styled";

import { links } from "../../view/UserAdmin/MenuAdmin/config";

import Menu from "../../view/UserAdmin/MenuAdmin/Menu";

type HomeTemplateProps = {
  Component: any;
  path?: any;
  exact?: any;
};


const UserAdminTemplate: React.FC<HomeTemplateProps> = ({ Component, ...props }: any) => {
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state: any) => state.userAdmin);

  return (
    <BoxTransition>
      <Route
        {...props}
        render={(propsRoute) => {
          return (
            <>
              <UseScrollTop />
              <BoxPkt>
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
                  <Component {...propsRoute} />
                </Menu>
              </BoxPkt>
            </>
          );
        }}
      />
    </BoxTransition>
  );
};

export default UserAdminTemplate;
