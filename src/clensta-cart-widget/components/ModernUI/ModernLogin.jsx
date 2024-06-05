import { useEffect, useState } from "preact/hooks";
import { WALLET_API_URI } from "../..";

const ModernLogin = ({ themeDetailsData, customerDetails }) => {
  const [walletRedemptionLimitDetails, setWalletRedemptionLimitDetails] =
    useState({
      amount: 0,
      type: null,
    });
  useEffect(()=>{
    const getWalletRemeptionLimit = async () => {
      try {
        const response = await fetch(`${WALLET_API_URI}/client-wallet-limit`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // customer_id: customerDetails?.customerID,
            // user_hash: customerDetails?.customerTags,
            client_id: customerDetails?.clientID,
          }),
        });
        let walletData = await response.json();
        setWalletRedemptionLimitDetails({
          type: walletData?.data?.limit_details?.type,
          amount: Number(walletData?.data?.limit_details?.amount),
        });
      } catch (err) {
        setWalletRedemptionLimitDetails({
          type: "FIXED",
          amount: 0,
        });
      }
    };
    getWalletRemeptionLimit()
  },[])
    const handleLogin = ()=>{
        window.location.href = themeDetailsData?.data?.login_page || '/account/login'
    }
  return (
    <>
      <div className="modernWalletContainer">
        <div className="modernWalletIcon">
          <div className="wallet_icon"></div>
        </div>
        <div className="modernWalletMidContainer">
          <div className="modernWalletMidSection">
            <p>{themeDetailsData?.data?.coin_name}</p>
            <p>{walletRedemptionLimitDetails?.type === "CART_PERCENT" ? `${walletRedemptionLimitDetails?.amount}% of the Grand Total ` : `Maximum ${Number(walletRedemptionLimitDetails?.amount).toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                      style: "currency",
                      currency: "INR",
                    })} `}
             can be paid via{" "+themeDetailsData?.data?.coin_name}
          </p>
          </div>
        </div>
        <div className='modernLoginBox'>
            <button className='modernLoginButton' onClick={handleLogin}>Login Now</button>
        </div>
      </div>
    </>
  );
};

export default ModernLogin;
