import { useState } from "react";
import { HistoryContainer, HistoryTitle, HistoryConTent, HistoryTitleBtn, HistoryTitleRight } from "./style";

interface PropsInvestment {
  isList?: [];
}

const History: React.FC<PropsInvestment> = (props: any) => {
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
      setDataShow(Fakeapi.slice((PageShow + 1) * limit, (PageShow + 2) * limit));
      setPageShow(PageShow + 1);
    }
  };
  return (
    <HistoryContainer>
      <HistoryTitle>
        <h1>{props.Title}</h1>
        <HistoryTitleRight>
          <h2>
            <p>
              {PageShow * limit + 1}-{(PageShow + 1) * limit < Fakeapi.length ? (PageShow + 1) * limit : Fakeapi.length}
            </p>
            trong số <p>{Fakeapi.length} </p>
          </h2>
          <HistoryTitleBtn>
            <button type="button" style={{ opacity: `${PageShow === 0 ? "0.5" : "1"}` }} onClick={handlePrevPage} />
            <button
              type="button"
              style={{ opacity: `${PageShow === NumberPage ? "0.5" : "1"}` }}
              onClick={handleNextPage}
            />
          </HistoryTitleBtn>
        </HistoryTitleRight>
      </HistoryTitle>
      <HistoryConTent>
        <table>
          <tr>
            <th>NO</th>
            <th>Create At</th>
            <th>Description</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
          {dataShow.map((item: any, index: number) => {
            return (
              <>
                <tr>
                  <td>{index + 1 + limit * PageShow}</td>
                  <td>{item.CreateAt}</td>
                  <td>{item.Description}</td>
                  <td>{item.Type}</td>
                  <td>{item.Amount}</td>
                  <td>{item.Status}</td>
                </tr>
              </>
            );
          })}
        </table>
      </HistoryConTent>
    </HistoryContainer>
  );
};
export default History;
