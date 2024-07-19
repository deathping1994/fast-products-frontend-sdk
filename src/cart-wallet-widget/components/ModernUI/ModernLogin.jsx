import { useEffect, useState } from "preact/hooks";
import { WALLET_API_URI } from "../..";

const ModernLogin = ({ themeDetailsData, customerDetails }) => {
  const [walletRedemptionLimitDetails, setWalletRedemptionLimitDetails] =
    useState({
      amount: 0,
      type: null,
      condition: null,
    });
  const [walletAppliedDetails, setWalletAppliedDetails] = useState({
    remainingWalletBalance: 0,
    walletDiscountApplied: 0,
    currency: null,
    totalPayablePrice: 0,
    couponDiscountApplied: 0,
  });
  useEffect(() => {
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
          condition: walletData?.data?.limit_details?.condition,
        });
        const cartRes = await fetch(`/cart.json?v=${Date.now()}`);
        const cartDetails = await cartRes.json();
        const totalPrice = cartDetails?.total_price / 100;
        localStorage.setItem("totalCartPrice", `${totalPrice}`);
        setWalletAppliedDetails({
          ...walletAppliedDetails,
          remainingWalletBalance: 0,
          walletDiscountApplied: 0,
          currency: cartDetails?.currency,
          totalPayablePrice: Number(totalPrice),
        });
      } catch (err) {
        setWalletRedemptionLimitDetails({
          type: "FIXED",
          amount: 0,
          condition: null,
        });
      }
    };
    getWalletRemeptionLimit()
  }, [])
  const handleLogin = () => {
    if (window?.fc_custom_login)
      window?.fc_custom_login()
    else window.location.href = themeDetailsData?.data?.login_page || '/account/login';
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
            <p>{walletRedemptionLimitDetails?.type === "CART_PERCENT" ? (
              `${walletRedemptionLimitDetails?.amount}% of the Grand Total `
            ) : walletRedemptionLimitDetails?.type === "CART_LIMIT" ? (
              (() => {
                const conditionArray = walletRedemptionLimitDetails?.condition;
                let discount = 0;
                const payablePrice = walletAppliedDetails?.totalPayablePrice + walletAppliedDetails?.walletDiscountApplied;

                const sortedArray = conditionArray.sort((a, b) => a?.minSubTotal - b?.minSubTotal);
                let isPercent = false;

                for (let item of sortedArray) {
                  if (payablePrice >= item?.minSubTotal) {
                    if (item?.type === "PERCENT")
                      isPercent = true;
                    else isPercent = false;
                    discount = item?.discount;
                  } else {
                    break;
                  }
                }

                if (isPercent)
                  return (`${discount}% of the Grand Total `);
                return (`${discount.toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                  style: "currency",
                  currency: "INR",
                })} `);
              })()
            ) : (
              ` ${Number(walletRedemptionLimitDetails?.amount).toLocaleString("en-IN", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
                style: "currency",
                currency: "INR",
              })} `
            )}
              can be paid via{" " + themeDetailsData?.data?.coin_name}
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
