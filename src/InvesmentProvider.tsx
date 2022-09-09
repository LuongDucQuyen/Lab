import React, { useState, createContext, useRef } from "react";
// @ts-ignore
const InvestmentPopupContext = createContext();
// @ts-ignore
const InvestmentPopupPovider = ({ children }) => {
    const [isShowPopUp , setIsShowPopUp] = useState(false)
    const [DataPopUpInvestment , setDataPopUpInvestment ]=useState({
        img: "",
        price: "",
        rank: "",
        change: "",
      })
    const handleSetDataPopUpInvestment = (data:any)=>{
        setDataPopUpInvestment(data);
    }
    const handleShowPopUp = ()=>{
        setIsShowPopUp(true)
    }
    const handleClosePopUp = ()=>{
        setIsShowPopUp(false)
    }
  return (
    <InvestmentPopupContext.Provider
      value={{
        DataPopUpInvestment: DataPopUpInvestment,
        handleSetDataPopUpInvestment : handleSetDataPopUpInvestment,
        isShowPopUp: isShowPopUp,
        handleShowPopUp : handleShowPopUp ,
        handleClosePopUp : handleClosePopUp,
      }}
    >
      {children}
    </InvestmentPopupContext.Provider>
  );
};
export { InvestmentPopupContext, InvestmentPopupPovider };