import React, { createContext, useState, useContext } from "react";
import "./style.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

export type IProps = {
  showNoti: Function;
  tokenID: string;
  routerWrap: string;
};

const WrapperContext = createContext<IProps>({
  showNoti: () => {},
  tokenID: "",
  routerWrap: "",
});

export const WrapperProvider = ({ children }: any) => {
  const [tokenID, setTokenID] = useState("");
  const location = useLocation();
  const routerWrap = location.pathname;

  const showNoti = (type: string, content: string) => {
    const nodeNoti = () => {
      return (
        <div className={`noti-box`}>
          <div className="noti-box__content">
            <span className="icon">
              {type == "danger" ? (
                // <WarningOutlined />
                <div className="Outlined IconWarning">
                  <span
                    role="img"
                    aria-label="warning"
                    className="anticon anticon-warning"
                  >
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="warning"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"></path>
                    </svg>
                  </span>
                </div>
              ) : (
                type == "success" && (
                  <div className="Outlined Icon-success">
                    <span
                      role="img"
                      aria-label="check-circle"
                      className="anticon anticon-check-circle"
                    >
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="check-circle"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                      </svg>
                    </span>
                  </div>
                )
              )}
            </span>
            <span className="text">{content}</span>
          </div>
        </div>
      );
    };
  };

  return (
    <>
      <WrapperContext.Provider
        value={{
          showNoti,
          tokenID: tokenID,
          routerWrap: routerWrap,
        }}
      >
        {children}
      </WrapperContext.Provider>
    </>
  );
};

export const useWrap = () => useContext(WrapperContext);
