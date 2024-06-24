import ModernLogin from "./ModernLogin";

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
          <p>{walletRedemptionLimitDetails?.type === "CART_PERCENT" ? `${walletRedemptionLimitDetails?.amount}% of the Grand Total ` : `Up to ${Number(walletRedemptionLimitDetails?.amount).toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                      style: "currency",
                      currency: "INR",
                    })} `}
             can be paid via{" "+themeDetailsData?.data?.coin_name}
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
              checked={walletApplied}
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
