import React, { useState } from "react";
import {
  HistoryMobileWapper,
  HistoryMobileTitled,
  HistoryMobileTitleRight,
  HistoryMobileTitleBtn,
  ItemHistory,
  ItemHistoryLeft,
  ItemHistoryRight,
} from "./style";
const HistoryMobile = (props: any) => {
  const Fakeapi = props.api;
  const limit = props.limit;
  const NumberPage = Math.floor(Fakeapi.length / limit);
  const [PageShow, setPageShow] = useState(0);
  const [dataShow, setDataShow] = useState(Fakeapi.slice(0, limit));
  const handlePrevPage = () => {
    if (PageShow > 0) {
      console.log(PageShow);
      setPageShow(PageShow - 1);
      setDataShow(Fakeapi.slice((PageShow - 1) * limit, PageShow * limit));
    }
  };
  const handleNextPage = () => {
    if (PageShow < NumberPage) {
      setDataShow(
        Fakeapi.slice((PageShow + 1) * limit, (PageShow + 2) * limit)
      );
      setPageShow(PageShow + 1);
    }
  };
  return (
    <HistoryMobileWapper>
      <HistoryMobileTitled>
        <h1>Transaction History</h1>
        <HistoryMobileTitleRight>
          <h2>
            <p>
              {PageShow * props.limit + 1}-
              {(PageShow + 1) * limit < Fakeapi.length
                ? (PageShow + 1) * limit
                : Fakeapi.length}
            </p>
            /<p>{Fakeapi.length} </p>
          </h2>
          <HistoryMobileTitleBtn>
            <button
              type="button"
              style={{ opacity: `${PageShow === 0 ? "0.5" : "1"}` }}
              onClick={handlePrevPage}
            />
            <button
              type="button"
              style={{ opacity: `${PageShow === NumberPage ? "0.5" : "1"}` }}
              onClick={handleNextPage}
            />
            <div></div>
          </HistoryMobileTitleBtn>
        </HistoryMobileTitleRight>
      </HistoryMobileTitled>
      {dataShow.map((item: any) => {
        return (
          <ItemHistory>
            <ItemHistoryLeft>
                <h2>{item.Description}</h2>
                <p>{item.CreateAt}</p>
                <h3>{item.Type}</h3>
            </ItemHistoryLeft>
            <ItemHistoryRight>
                <h6>{item.Amount}</h6>
                <h5>{item.Status}</h5>
            </ItemHistoryRight>
          </ItemHistory>
        );
      })}
    </HistoryMobileWapper>
  );
};
export default HistoryMobile;
