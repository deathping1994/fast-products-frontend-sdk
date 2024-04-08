import { SkeletonLoader } from "./skeletonloader";

export function LoggedoutCartSummary({
  loadingWalletBal,
  walletAppliedDetails,
}) {
  const mainScript = document.querySelector("#fc-wallet-cart-widget-script-19212");
  const checkout_total = mainScript.getAttribute('data-checkout-total')
  const checkoutTotalTag = document.querySelector(`.${checkout_total}`)
  checkoutTotalTag.innerHTML = `${String.fromCharCode(160)}${Number(
    walletAppliedDetails?.totalPayablePrice
  ).toLocaleString("en-IN", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    style: "currency",
    currency: "INR",
  })}`

  return (
    <>
      <div class="wallet-applied-details-container">
        {walletAppliedDetails?.totalDiscount ? (
          <div class="wallet-applied-details">
            <p>Discount Applied</p>
            <p class="point-details">
              {loadingWalletBal ? (
                <SkeletonLoader width="50px" height="16px" />
              ) : walletAppliedDetails?.totalDiscount ? (
                <>
                  {"- "}
                  {` ${Number(
                    walletAppliedDetails?.totalDiscount
                  ).toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "INR",
                  })}`}
                </>
              ) : (
                0
              )}
            </p>
          </div>
        ) : (
          <></>
        )}
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
