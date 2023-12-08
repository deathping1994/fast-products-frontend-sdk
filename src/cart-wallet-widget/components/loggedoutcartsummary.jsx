import { useEffect, useState } from "preact/hooks";
import { SkeletonLoader } from "./skeletonloader";

export function LoggedoutCartSummary() {
  const [loadingWalletBal, setLoadingWalletBal] = useState(false);
  const [walletAppliedDetails, setWalletAppliedDetails] = useState({
    currency: null,
    totalPayablePrice: 0,
  });

  const loadCartSummary = async () => {
    setLoadingWalletBal(true);
    const cartRes = await fetch(`/cart.json?v=${Date.now()}`);
    const cartDetails = await cartRes.json();

    const totalPrice = cartDetails?.total_price / 100;
    setWalletAppliedDetails({
      currency: cartDetails?.currency,
      totalPayablePrice: Number(totalPrice),
    });
    setLoadingWalletBal(false);
    setLoadingWalletBal(false);
  };

  useEffect(() => {
    loadCartSummary();
  }, []);

  return (
    <>
      <div class="wallet-applied-details-container">
        <div class="wallet-applied-details">
          <p>Total Payable Amount</p>
          <p class="point-details">
            {loadingWalletBal ? (
              <SkeletonLoader width="50px" height="16px" />
            ) : (
              <>{` ${Number(
                walletAppliedDetails?.totalPayablePrice
              ).toLocaleString("en-IN", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
                style: "currency",
                currency: "INR",
              })}`}</>
            )}
          </p>
        </div>
      </div>
    </>
  );
}
