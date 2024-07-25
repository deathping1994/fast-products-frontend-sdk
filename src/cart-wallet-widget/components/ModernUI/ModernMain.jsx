import { useState} from "preact/hooks";
import ModernLogin from "./ModernLogin";
import { ApplyDiscountCode } from "../applydiscountcode";

// this function will take a function and will debounce call the function with delay provided.
function debounceCallTheFunction(func, delay) {
  let timerId;
  return function(...args) {
      const context = this;
      clearTimeout(timerId);
      timerId = setTimeout(() => {
          func.apply(context, args);
      }, delay);
  };
}
// we are creating a global function that can be called from anywhere and it will take a function and will call it every time the cart is refreshed. We are debouncing that function as there are too many rerenders so for performance prospective.
const debouncedcall = debounceCallTheFunction(()=>{window.fc_callFuncOnRefresh()}, 1000);

const ModernMain = ({
  themeDetailsData,
  walletAppliedDetails,
  toggleUserWallet,
  walletApplied,
  customerDetails,
  loadingWalletBal,
  walletRedemptionLimitDetails
}) => {
  const handleCheckbox = (event) => {
    event.stopPropagation();
    if(walletApplied==true){
      // means user has removed our coupon so we are updating amount on strip
      updateStripAmount(localStorage.getItem("totalCartPrice"))
    }
    toggleUserWallet(walletApplied);
  };

  window.uncheck = (j) => {
    if (j == 101 && walletApplied) {
      toggleUserWallet(walletApplied);
    }
  };

  const [isWalletApplied,setIsWalletApplied]=useState(walletAppliedDetails.walletDiscountApplied==0 ?false:true)

// When a coupon is already applied then our coupon don't gets applied with other coupon so in that case the below function will uncheck the checkbox
 function checkForCheckbox(){
    if( walletAppliedDetails.walletDiscountApplied==0){
      if(window.fc_callFuncOnRefresh){
        debouncedcall()
      }
      setIsWalletApplied(false)
    }else{
      if(window.fc_callFuncOnRefresh){
        debouncedcall()
      }
      setIsWalletApplied(true)
    }
  }  
  checkForCheckbox()


  // 
  // 
 const [msg,setMsg]= useState(`Save more on Your Cart!`)

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
      debounceCallTheFunction(setMsg(` ${ Number(walletRedemptionLimitDetails?.amount || 0).toLocaleString("en-IN", {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
        style: "currency",
        currency: "INR",
      })} can be paid via ${" " + themeDetailsData?.data?.coin_name }`),500)
    }
  }}

const debouncedcall2 = debounceCallTheFunction(()=>{setWalletMsg()}, 500);
debouncedcall2()
  return (
    <>
      {
        customerDetails?.customerTags !== "" ? <div className="modernWalletContainer">
          <div className="modernWalletIcon">
            <div className="wallet_icon"></div>
          </div>
          <div className="modernWalletMidContainer">
            <div className="modernWalletMidSection">
              <p>
                {themeDetailsData?.data?.coin_name}
                {walletApplied &&
                  ` Applied : ${Number(
                    walletAppliedDetails.walletDiscountApplied.toFixed(2)
                  ).toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "INR",
                  })}`}
              </p>
            <p>{msg}</p>
            </div>
            
        <div className="modernWalletBalance">
          <p>Balance</p>
          <p>
            {walletApplied
              ? Number(
                  walletAppliedDetails?.remainingWalletBalance.toFixed(2)
                ).toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                  style: "currency",
                  currency: "INR",
                })
              : Number(
                  walletAppliedDetails?.remainingWalletBalance.toFixed(2)
                ).toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                  style: "currency",
                  currency: "INR",
                })}
          </p>
        </div>
      </div>
      <div className='modernWalletCheckboxContainer'>
      {!loadingWalletBal ?
          <div className="modern-checkbox bounce">
            <input
              type="checkbox"
              checked={isWalletApplied}
              onChange={handleCheckbox}
            />
            <svg viewBox="0 0 21 21">
              <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
            </svg>
          </div>: 
      <div class="spinner-container">
      <div class="spinner"></div>
      <img src="https://media.farziengineer.co/farziwallet/wallet_icon.svg" alt="Wallet Icon" class="spinner-image"/>
    </div>}
    </div>
    </div>
    : <ModernLogin themeDetailsData={themeDetailsData} customerDetails={customerDetails}/> 
    }
    </>
  );
};

export default ModernMain;
