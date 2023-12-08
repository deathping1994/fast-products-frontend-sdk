import { SkeletonLoader } from "./skeletonloader";

export function LoggedoutCartSummary({
  loadingWalletBal,
  walletAppliedDetails,
}) {
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
