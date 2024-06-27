import { useEffect, useState } from 'react';
import ModernLogin from './ModernLogin';

const ModernMain = ({
  themeDetailsData,
  walletAppliedDetails,
  toggleUserWallet,
  walletApplied,
  customerDetails,
  loadingWalletBal,
  walletRedemptionLimitDetails
}) => {
  const [storedWalletDetails, setStoredWalletDetails] = useState(null);
  const applyWalletLoader = themeDetailsData?.data?.apply_wallet_loader?.toLowerCase() !== "false";

  const getWalletRedemptionLimitDetails = () => {
    if (!walletRedemptionLimitDetails?.type) {
      const storedLimitDetails = localStorage.getItem('fc-wallet-redemption-limit');
      return storedLimitDetails ? JSON.parse(storedLimitDetails) : null;
    }
    return walletRedemptionLimitDetails;
  };

  const effectiveWalletRedemptionLimitDetails = getWalletRedemptionLimitDetails();

  useEffect(() => {
    const storedDetails = sessionStorage.getItem('walletAppliedDetails');
    if (storedDetails) {
      setStoredWalletDetails(JSON.parse(storedDetails));
    } else {
      sessionStorage.setItem('walletAppliedDetails', JSON.stringify(walletAppliedDetails));
      setStoredWalletDetails(walletAppliedDetails);
    }
  }, [walletAppliedDetails]);

  useEffect(() => {
    if (
      walletAppliedDetails.walletDiscountApplied !== 0 ||
      walletAppliedDetails.remainingWalletBalance !== 0
    ) {
      sessionStorage.setItem('walletAppliedDetails', JSON.stringify(walletAppliedDetails));
      setStoredWalletDetails(walletAppliedDetails);
    }
  }, [walletAppliedDetails]);

  const handleCheckbox = (event) => {
    event.stopPropagation();
    toggleUserWallet(walletApplied);
  };

  const detailsToUse = storedWalletDetails || walletAppliedDetails;

  return (
    <>
      {customerDetails?.customerTags !== '' ? (
        <div className='modernWalletContainer'>
          <div className='modernWalletIcon'>
            <div className='wallet_icon'></div>
          </div>
          <div className='modernWalletMidContainer'>
            <div className='modernWalletMidSection'>
              <p>
                {themeDetailsData?.data?.coin_name}
                {walletApplied &&
                  ` Applied : ${Number(
                    detailsToUse.walletDiscountApplied.toFixed(2)
                  ).toLocaleString('en-IN', {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                    style: 'currency',
                    currency: 'INR'
                  })}`}
              </p>
              {effectiveWalletRedemptionLimitDetails?.type && (
                <p>
                  {effectiveWalletRedemptionLimitDetails?.type === 'CART_PERCENT'
                    ? `${effectiveWalletRedemptionLimitDetails?.amount}% of the Grand Total `
                    : `Maximum ${Number(effectiveWalletRedemptionLimitDetails?.amount).toLocaleString('en-IN', {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                      style: 'currency',
                      currency: 'INR'
                    })} `}
                  can be paid via {themeDetailsData?.data?.coin_name}
                </p>
              )}
            </div>
            <div className='modernWalletBalance'>
              <p>Balance</p>
              <p>
                {walletApplied
                  ? Number(
                    detailsToUse?.remainingWalletBalance.toFixed(2)
                  ).toLocaleString('en-IN', {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                    style: 'currency',
                    currency: 'INR'
                  })
                  : Number(
                    detailsToUse?.remainingWalletBalance.toFixed(2)
                  ).toLocaleString('en-IN', {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                    style: 'currency',
                    currency: 'INR'
                  })}
              </p>
            </div>
          </div>
          <div className='modernWalletCheckboxContainer'>
            {applyWalletLoader && loadingWalletBal ? (
              <div className='spinner-container'>
                <div className='spinner'></div>
                <img
                  src='https://media.farziengineer.co/farziwallet/wallet_icon.svg'
                  alt='Wallet Icon'
                  className='spinner-image'
                />
              </div>
            ) : (
              <div className='modern-checkbox bounce'>
                <input
                  type='checkbox'
                  checked={walletApplied}
                  onChange={handleCheckbox}
                />
                <svg viewBox='0 0 21 21'>
                  <polyline points='5 10.75 8.5 14.25 16 6'></polyline>
                </svg>
              </div>
            )}
          </div>
        </div>
      ) : (
        <ModernLogin themeDetailsData={themeDetailsData} customerDetails={customerDetails} />
      )}
    </>
  );
};

export default ModernMain;
