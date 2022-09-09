import React, { useEffect, useState } from "react";
import web3 from "web3";
import { Modal } from "../Modal";
import { useWeb3React } from "@web3-react/core";
import { InjectedModalProps, Box, Flex } from "@pkt2022/uikit";

import { useConnectWallet, useActiveWeb3React } from "../../hooks";
import { NEED_A_PLACEHOLDER, WALLET_LIST } from "../../constants/index";
import WalletItem from "./WalletItem";
import FubiIcon from "../../assets/logoToken/IconFubi.svg";
import { CloseConnectIcon } from "../Svg";

import { BoxModal, BoxModalContent, BoxPd, ModalText, BoxHeader, BoxModalDisConnect, BoxPdDisconnect } from "./styled";

interface Props extends InjectedModalProps {
  title: string;
  hideCloseButton?: boolean;
  onBack?: () => void;
  bodyPadding?: string;
  setIsCheckModal?: any;
}

declare const window: Window & typeof globalThis & { ethereum: any };
const ConnectWallet: React.FC<Props> = (props: any) => {
  const { textBtn, title, onDismiss } = props;
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const { walletLogin, walletLogout } = useConnectWallet();
  const walletItemClass = "w-1/3 flex-auto mb-0.5 p-0.5 last:bg-transparent";
  const chainId = process.env.REACT_APP_CHAIN_ID ?? "0";
  const { account } = useActiveWeb3React();
  const context = useWeb3React();
  const { active, error } = context;
  if (window.ethereum) {
    window.ethereum.on("chainChanged", (chainId: any) => {
      window.location.reload();
    });

    window.ethereum.on("accountsChanged", (chainId: string) => {
      window.location.reload();
    });
  }

  // --- ACTION IN MODAL ---
  const showModalConnect = () => {
    setIsModalVisible(true);
  };
  const handleConnectOk = () => {
    setIsModalVisible(false);
  };
  const handleConnectCancel = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
  };
  //  --- Return address wallet with substring ---
  const accountEllipsis = active
    ? `${account?.substring(0, 4)}...${account?.substring(account.length - 4)}`
    : "Connect Wallet  ";

  // ---- HANDLE DISCONNECT ----
  const handleDisconnect = () => {
    walletLogout();
    setIsModalVisible(false);
  };

  // ---- HANDLE CONNECT ----
  const handleConnect = async (connectorId: string) => {
    try {
      const rs = await walletLogin(connectorId);
      setIsModalVisible(false);
    } catch (e) {
      console.error("Login failed");
    }
  };

  const changeNetwork = async (chainId: any) => {
    try {
      await window.ethereum.enable();
      // check if the chain to connect to is installed

      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: chainId }], // chainId must be in hexadecimal numbers
      });
    } catch (error) {
      // This error code indicates that the chain has not been added to MetaMask
      // if it is not, then install it into the user MetaMask
      //@ts-ignore
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: chainId,
                rpcUrl: process.env.REACT_APP_BSC_NETWORK_URL ?? "" /* ... */,
              },
            ],
          });
        } catch (addError) {
          // handle "add" error
        }
      }
      console.error(error);
    }
  };

  useEffect(() => {
    if (account) {
      if (window.ethereum) {
        if (chainId != window.ethereum.networkVersion) {
          changeNetwork(`0x${parseInt(chainId).toString(16)}`);
        }
      }
    }
  }, [account]);

  return (
    <Modal title={title}>
      <BoxModal>
        <>
          {!active ? (
            <BoxHeader>
              <Flex alignItems="flex-start" width="100%" justifyContent="flex-end">
                <Box>
                  <button onClick={onDismiss}>
                    <CloseConnectIcon />
                  </button>
                </Box>
              </Flex>

              <Box pb={["12px", "32px"]}>
                <img src={FubiIcon} alt="" />
              </Box>

              <ModalText>Connect Wallet</ModalText>
            </BoxHeader>
          ) : (
            <BoxHeader className="none-pb">
              <Flex alignItems="flex-start" width="100%" justifyContent="flex-end">
                <Box>
                  <button onClick={onDismiss}>
                    <CloseConnectIcon />
                  </button>
                </Box>
              </Flex>

              <Box pb={["12px", "32px"]}>
                <img src={FubiIcon} alt="" />
              </Box>
            </BoxHeader>
          )}
        </>
        {!active ? (
          <BoxPd>
            <BoxModalContent>
              {WALLET_LIST.map((wallet) => {
                return (
                  <WalletItem
                    className={`cus-wallet`}
                    key={wallet.title}
                    onClick={() => {
                      handleConnect(wallet.connectorId);
                      onDismiss?.();
                    }}
                    icon={<wallet.icon width="48px" />}
                    title={wallet.title}
                  />
                );
              })}
              {NEED_A_PLACEHOLDER && <div className={walletItemClass} />}
            </BoxModalContent>
          </BoxPd>
        ) : (
          <BoxPdDisconnect>
            <BoxModalDisConnect>
              {/* <p className="noti-out-text">Disconnect this contract?</p> */}
              <div className="noti-out-button">
                <button
                  className="btn-connect"
                  onClick={() => {
                    handleDisconnect();
                    onDismiss?.();
                  }}
                >
                  Disconnect
                </button>
              </div>
            </BoxModalDisConnect>
          </BoxPdDisconnect>
        )}
      </BoxModal>
    </Modal>
  );
};

export default ConnectWallet;

///
