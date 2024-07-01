import {useState} from "preact/hooks";
import ModernLogin from "./ModernLogin";

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
      debouncedcall()
      setIsWalletApplied(false)
    }else{
      debouncedcall()
      setIsWalletApplied(true)
    }
  }  
  checkForCheckbox()
  console.log("bebo amin");
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
              <p>
                {walletRedemptionLimitDetails?.type === "CART_PERCENT" ? (
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

                    if(isPercent)
                      return (`${discount}% of the Grand Total `);
                    return (`${discount.toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                      style: "currency",
                      currency: "INR",
                    })} `);
                  })()
                ) :(
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
