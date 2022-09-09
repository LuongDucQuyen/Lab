import React, { useEffect, useState } from "react";
import web3 from "web3";
import { useConnectWallet, useActiveWeb3React } from "../../hooks";
import { NEED_A_PLACEHOLDER, WALLET_LIST } from "../../constants/index";
import WalletItem from "./WalletItem";
import { useWeb3React } from "@web3-react/core";
import "./style.css";

declare const window: Window & typeof globalThis & { ethereum: any };
const ConnectWallet = (props: any) => {
  const { textBtn } = props;
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
  const handleConnectCancel = (e:any) => {
    e.stopPropagation();
    e.preventDefault()
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
    <>
      {/* <button className="btn-connect" onClick={showModalConnect}>
        {textBtn ? textBtn : accountEllipsis}
      </button>

      <Modal
        title={<div className="text-md connect-wallet-title">{!account ? "Connect Wallet" : ""}</div>}
        visible={isModalVisible}
        onOk={handleConnectOk}
        onCancel={handleConnectCancel}
        className="connect-wallet"
      >
        {!active ? (
          <div className="flex flex-wrap">
            {WALLET_LIST.map((wallet) => {
              return (
                <WalletItem
                  className={`wallet-item`}
                  key={wallet.title}
                  onClick={() => handleConnect(wallet.connectorId)}
                  icon={<wallet.icon width="48px" />}
                  title={wallet.title}
                />
              );
            })}
            {NEED_A_PLACEHOLDER && <div className={walletItemClass} />}
          </div>
        ) : (
          <div className="noti-out">
            <p className="noti-out-text">Disconnect this contract?</p>
            <div className="noti-out-button">
              <button className="btn-connect" onClick={handleDisconnect}>
                Disconnect
              </button>
            </div>
          </div>
        )}
      </Modal> */}

      {/* change */}
      <button className="btn-connect" onClick={showModalConnect}>
        {textBtn ? textBtn : accountEllipsis}
      </button>
      <div
        className="Connect-Wapper"
        style={{
          backgroundColor: `${isModalVisible ? "rgab(22,22,22,0.8)" : "rgba(255,255,255,0)"}`,
          bottom: `${isModalVisible ? '0px' : '100%' }`,
          transitionDelay: `${isModalVisible ? '' : '0.3s'}`
        }}
        onClick={handleConnectOk}
      >
        <div
          onClick={(e) => handleConnectCancel(e)}
          className={!isModalVisible ? "connect-wallet" : "connect-wallet connect-Wallet-active"}
        >
          <h1 className="text-md connect-wallet-title">
            {!account ? "Connect Wallet" : ""}
          </h1>
          {!active ? (
            <div className="flex flex-wrap connectWallet_container">
              {WALLET_LIST.map((wallet) => {
                return (
                  <WalletItem
                    className={`wallet-item`}
                    key={wallet.title}
                    onClick={() => handleConnect(wallet.connectorId)}
                    icon={<wallet.icon width="48px" />}
                    title={wallet.title}
                  />
                );
              })}
              {NEED_A_PLACEHOLDER && <div className={walletItemClass} />}
            </div>
          ) : (
            <div className="noti-out">
              <p className="noti-out-text">Disconnect this contract?</p>
              <div className="noti-out-button">
                <button className="btn-connect" onClick={handleDisconnect}>
                  Disconnect
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ConnectWallet;

///
