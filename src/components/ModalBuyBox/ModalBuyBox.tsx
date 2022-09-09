import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import { InjectedModalProps } from "@pkt2022/uikit";
import { Modal } from "../Modal";
import { ButtonV1, Box, Heading, Text, Flex, IconButton } from "@pkt2022/uikit";
import { FlexPkt, BoxPkt, Row } from "../../components/Layout";
// import { DimissIcon, DonHangIcon } from "../../components/Svg";

interface Props extends InjectedModalProps {
  title: string;
  hideCloseButton?: boolean;
  onBack?: () => void;
  bodyPadding?: string;
}

const BoxModal = styled(Box)`
  width: 65%;
  min-height: 100%;
  background-color: #fff;
  display: inline-flex;
  position: absolute;
  z-index: 99;
  margin-top: 60px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px;
  padding: 30px 15px;

  @media only screen and (max-width: 520px) {
    width: 100%;
    max-width: 380px;
  }

  @media only screen and (max-width: 390px) {
    width: 100%;
    max-width: 350px;
  }
`;

const TableBox = styled.table`
  width: 100%;
  min-width: 768px;

  .custom-header {
    background: linear-gradient(180deg, #487b9a 0%, #1a3a4e 50.52%, #083753 100%);

    height: 43px;
    line-height: 43px;
  }

  tr {
    text-align: center;
  }

  .custom-body {
    background: #fff;
    border-radius: 6px;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #f3f6f9;
  }

  th:nth-child(1) {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  th:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .cus-blue {
    color: #2f80ed;
  }

  .cus-red {
    color: #eb5757;
  }

  td {
    font-weight: bold;
    color: #464e5f;
  }

  .custom-total {
    text-align: right;
  }

  th {
    color: #fff;
  }

  .cus-btn-modal {
    background-color: transparent;
    box-shadow: none;
    color: #000;
    display: inline-block;
    width: fit-content;
    padding: 0;
    height: auto;

    :hover {
      background-color: transparent !important;
    }
  }

  .custom-modal {
    border: 0.5px solid #e8e8e8;
    border-radius: 6px;
    width: min-content;
    display: inline-flex;
    padding: 4px;
  }

  .btn-width {
    border-radius: 99px;
    width: 10px;
    height: 10px;
    padding: 0;
  }
`;

const ModalBuyBox: React.FC<Props> = ({ title, onBack, onDismiss }) => {
  const [isCount, setIsCount]: any = useState([
    {
      id: "1",
      name: `Bổ thận Tâm Đan Plus`,
      quantity: 0,
      price: 100,
      isCheck: false,
      total: 0,
    },
    {
      id: "2",
      name: `Overcrom - Giảm Cân An Toàn`,
      quantity: 0,
      price: 300,
      isCheck: false,
      total: 0,
    },
    {
      id: "3",
      name: `Thông Huyết Mạch`,
      quantity: 0,
      price: 500,
      isCheck: false,
      total: 0,
    },
    {
      id: "4",
      name: `Calcium-Nano`,
      quantity: 0,
      price: 300,
      isCheck: false,
      total: 0,
    },
    {
      id: "5",
      name: `Vitamin K2`,
      quantity: 0,
      price: 500,
      isCheck: false,
      total: 0,
    },
  ]);

  const [checked, setChecked] = useState(false);

  const Increment = (id: any) => {
    setIsCount((prev: any) => {
      return prev.map((num: any) => {
        if (num.id === id) {
          return { ...num, quantity: num.quantity + 1 };
        } else {
          return num;
        }
      });
    });
  };

  const UnIncrease = (id: any) => {
    setIsCount((prev: any) => {
      return prev.map((num: any) => {
        if (num.id === id && num.quantity > 0) {
          return { ...num, quantity: num.quantity - 1 };
        } else {
          return num;
        }
      });
    });
  };

  const handleChecked = (id: any) => {
    setIsCount((prev: any) => {
      return prev.map((num: any) => {
        if (num.id === id) {
          if (num.isCheck === false) {
            return { ...num, isCheck: true };
          } else if (num.isCheck === true) {
            return { ...num, isCheck: false, quantity: 0 };
          }
        } else {
          return num;
        }
      });
    });
  };

  const result = isCount.reduce(
    (total: any, currentValue: any) => (total = total + currentValue.price * currentValue.quantity),
    0
  );

  // console.log(result);

  console.log("checked", checked);

  return (
    <Modal title={title}>
      <BoxModal className="boxShadow">
        <BoxPkt background="#fff" borderRadius="10px">
          <BoxPkt>
            <FlexPkt justifyContent="space-between">
              <Flex>
                <Box pr="10px">
                  {/* <DonHangIcon /> */}
                </Box>
                <Heading textAlign="center">ĐƠN HÀNG</Heading>
              </Flex>
              {/* <ButtonV1 variant="tertiary" className="btn-dimiss" onClick={onDismiss} endIcon={<DimissIcon />} /> */}
              <IconButton variant="tertiary" className="btn-dimiss" onClick={onDismiss}>
                {/* <DimissIcon /> */}
              </IconButton>
            </FlexPkt>
            <BoxPkt pt="34px" overflowX="auto">
              <TableBox id="customers">
                <tr className="custom-header">
                  <th style={{ width: "10%" }}>CHỌN</th>
                  <th>TÊN SẢN PHẨM</th>
                  <th>ĐƠN GIÁ</th>
                  <th>SỐ LƯỢNG</th>
                  <th>TRẠNG THÁI</th>
                  <th>THÀNH TIỀN</th>
                </tr>

                {isCount.map((_item: any) => (
                  <tr className="custom-body" key={`tr-${_item.id}`}>
                    <td>
                      <ButtonV1
                        variant="success"
                        className="btn-dimiss btn-width"
                        onClick={() => handleChecked(_item.id)}
                      >
                        <input type="checkbox" />
                      </ButtonV1>
                    </td>
                    <td>{_item.name}</td>
                    <td>{_item.price}</td>
                    {/* <td>{_item.isCheck.toString()}</td> */}
                    <td>
                      {_item.isCheck ? (
                        <Flex className="custom-modal" justifyContent="center">
                          <ButtonV1 className="cus-btn-modal" onClick={() => UnIncrease(_item.id)}>
                            -
                          </ButtonV1>
                          <Text bold minWidth="30px">
                            {_item.quantity}
                          </Text>
                          <ButtonV1 className="cus-btn-modal" onClick={() => Increment(_item.id)}>
                            +
                          </ButtonV1>
                        </Flex>
                      ) : (
                        <Flex className="custom-modal" justifyContent="center">
                          <ButtonV1 className="cus-btn-modal" onClick={() => UnIncrease(_item.id)} disabled>
                            -
                          </ButtonV1>
                          <Text bold minWidth="30px">
                            {_item.quantity}
                          </Text>
                          <ButtonV1 className="cus-btn-modal" onClick={() => Increment(_item.id)} disabled>
                            +
                          </ButtonV1>
                        </Flex>
                      )}
                    </td>
                    <td className="cus-blue">Còn hàng</td>
                    <td>{_item.price * _item.quantity}</td>
                  </tr>
                ))}
              </TableBox>
            </BoxPkt>
            <FlexPkt justifyContent={["center", "center", "flex-end", "flex-end"]} pt="14px">
              <Text bold mr={["0", "47px", "47px", "47px"]}>
                Tổng thanh toán:
              </Text>
              <Box mr={["0", "48px", "48px", "48px"]}>
                <Flex justifyContent="center" width="128px" height="34px" borderRadius="6px">
                  <Heading>{result} USDT</Heading>
                </Flex>
              </Box>
            </FlexPkt>
            <FlexPkt
              justifyContent={["center", "center", "flex-end", "flex-end"]}
              pt="14px"
              pr={["0", "0", "40px", "40px"]}
            >
              <ButtonV1 variant="success" className="cus-btn-v2" width="148px">
                MUA
              </ButtonV1>
            </FlexPkt>
          </BoxPkt>
        </BoxPkt>
      </BoxModal>
    </Modal>
  );
};

export default ModalBuyBox;
