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

  const [msg,setMsg]=useState(`Save more on Your Cart!`)

  const setWalletMsg=()=>{
    if(walletRedemptionLimitDetails.type && walletAppliedDetails.currency){
      if(walletRedemptionLimitDetails?.type === "CART_PERCENT"){
      setMsg( `${walletRedemptionLimitDetails?.amount}% of the Cart Total can be paid via ${" " + themeDetailsData?.data?.coin_name} `)
      }
      else if(walletRedemptionLimitDetails?.type === "CART_LIMIT" ){
        const conditionArray = walletRedemptionLimitDetails?.condition;
        const payablePrice = walletAppliedDetails?.totalPayablePrice + walletAppliedDetails?.walletDiscountApplied;
        const sortedArray = conditionArray.sort((a, b) => a?.minSubTotal - b?.minSubTotal);
        if(payablePrice> sortedArray[0].minSubTotal){
        for (let i = sortedArray.length - 1; i >= 0; i--) {
          const { discount,minSubTotal} = sortedArray[i];
          if (payablePrice >= minSubTotal) {
              setMsg(`${discount}₹ can be paid via ${themeDetailsData?.data?.coin_name}`)
              break;
          }
      }
    }else{
  setMsg(`${sortedArray[0].discount} ${themeDetailsData?.data?.coin_name} can be used on a minimum order of ${sortedArray[0].minSubTotal}₹`)
    }
      }
      else{
       setMsg(` ${ Number(walletRedemptionLimitDetails?.amount || 0).toLocaleString("en-IN", {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
          style: "currency",
          currency: "INR",
        })} can be paid via ${" " + themeDetailsData?.data?.coin_name }`)
      }
    }}

    setWalletMsg()
  return (
    <>
      <div className="modernWalletContainer">
        <div className="modernWalletIcon">
          <div className="wallet_icon"></div>
        </div>
        <div className="modernWalletMidContainer">
          <div className="modernWalletMidSection">
            <p>{themeDetailsData?.data?.coin_name}</p>
          
            <p>{msg}</p>
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
