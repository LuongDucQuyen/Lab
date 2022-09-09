import React, {useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PopUpContainer, PopUpGroup, PopupImg, PopupBtn } from "./styledPopUp";

// truyền dữ liệu qua prop
// ví dụ :
//  <PopupNotice
//     message="Tài khoản hoặc mật khẩu không đúng"
//     type="error"
//     btn={["Trang Chu","Nhập lại"]}
//     img={LoginFaillImg}
//     link={[undefined , undefined]}
//   />
// ******************
// mặc định nhấn Enter , Active vào Buttun cuối cùng bên phải :)))

const PopUpNotice = (props: any) => {
  const [closePopUp, setClosePopUp] = useState(true);
  const handleClosePopup = (e: any) => {
    setClosePopUp(false);
  };
  const handleKeyPress = (e: any) => {
    if(e.key === 'Enter' && props.link && props.link[props.link.length-1]){
      const { href } = window.location;
      window.location.href= `${props.link[props.link.length-1]}`
    }else{
      setClosePopUp(false);
    }
  };
  const Wrapper = useRef(null)
  useEffect(() =>{
    //@ts-ignore
    Wrapper.current.focus()
  },[])
  return (
    <PopUpContainer
      style={{ display: `${closePopUp ? "" : "none"}` }}
      onKeyPress={(e) => handleKeyPress(e)}
      tabIndex={0}
      ref={Wrapper}
    >
      <PopUpGroup>
        <PopupImg>
          {props.PopUpStyle === "PositionImg" ? (
            <div className={props.type === "error" ? " PopUpPositionImg PopUpPositionImgError" : "PopUpPositionImg"}>
              <img src={props.img} />
            </div>
          ) : (
            <>
              <img src={props.img} />
            </>
          )}
        </PopupImg>
        <h2>{props.message}</h2>
        <PopupBtn
          style={{
            justifyContent: `${
              props.btn.length === 1 ? "center" : "space-between"
            }`,
          }}
        >
          {props.type === "error" ? (
            <>
              {props.btn.map((btn: string, index: number) => {
                return (
                  <>
                    {props.link[index] && props.link ? (
                      <Link
                        to={`${props.link[index]}`}
                        style={{
                          width: `${95 / props.btn.length}%`,
                        }}
                      >
                        <button
                          style={{ width: "100%" }}
                          className={
                            props.btn.length === 1 || index > 0
                              ? "PopupBtnError"
                              : ""
                          }
                        >
                          {btn}
                        </button>
                      </Link>
                    ) : (
                      <button
                        style={{
                          width: `${95 / props.btn.length}%`,
                        }}
                        className={
                          props.btn.length === 1 || index > 0
                            ? "PopupBtnError"
                            : ""
                        }
                        onClick={handleClosePopup}
                      >
                        {btn}
                      </button>
                    )}
                  </>
                );
              })}
            </>
          ) : (
            <>
              {props.btn.map((btn: string, index: number) => {
                return (
                  <>
                    {props.link[index] && props.link ? (
                      <Link
                        to={`${props.link[index]}`}
                        style={{
                          width: `${95 / props.btn.length}%`,
                        }}
                      >
                        <button
                          style={{ width: "100%" }}
                          className={
                            props.btn.length === 1 || index > 0
                              ? "PopupBtnSuccess"
                              : ""
                          }
                        >
                          {btn}
                        </button>
                      </Link>
                    ) : (
                      <button
                        style={{
                          width: `${95 / props.btn.length}%`,
                        }}
                        className={
                          props.btn.length === 1 || index > 0
                            ? "PopupBtnSuccess"
                            : ""
                        }
                        onClick={handleClosePopup}
                      >
                        {btn}
                      </button>
                    )}
                  </>
                );
              })}
            </>
          )}
        </PopupBtn>
      </PopUpGroup>
    </PopUpContainer>
  );
};
export default PopUpNotice;
