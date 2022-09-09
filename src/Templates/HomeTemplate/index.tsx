import React from "react";
import { Route } from "react-router";
import styled from "styled-components";

type HomeTemplateProps = {
  Component: any;
  path?: any;
  exact?: any;
};

const HomeTemplate: React.FC<HomeTemplateProps> = ({ Component, ...props }: any) => {
  return (
    <>
      <Route
        {...props}
        render={(propsRoute) => {
          return (
            <BoxBg>
              <Component {...propsRoute} />
            </BoxBg>
          );
        }}
      />
    </>
  );
};

export default HomeTemplate;

const BoxBg = styled.div`
  position: relative;
`;

// export const Wrapper = styled(BoxPkt)`
//   background: linear-gradient(180deg, #79B8DD 0%, #79B8DD 11.89%, #FFFFFF 100%);;
//   height: 100vh;
//   position: relative;
// `;

export const UserAdminTemplate: React.FC<HomeTemplateProps> = ({ Component, ...props }: any) => {
  return (
    <>
      <Route
        {...props}
        render={(propsRoute) => {
          return (
            <>
              <Component {...propsRoute} />
            </>
          );
        }}
      />
    </>
  );
};
