import { useEffect, useState } from "preact/hooks";
import { CircularLoader } from "./circularloader";

export function ApplyDiscountCode({
  setRefetchSummary,
  appliedDiscountCode,
  appliedDiscountsList,
}) {
  const [loadingWalletBal, setLoadingWalletBal] = useState(false);

  const [couponInputValue, setCouponInputValue] = useState(
    appliedDiscountCode || ""
  );

  const applyCouponDiscount = async () => {
    setLoadingWalletBal(true);

    // fetch(`/discount/${couponInputValue}`);


    const isWalletAppliedCode =
      localStorage.getItem("fc-wallet-cart-applied") === "true" || false;
    const walletAppliedCode = isWalletAppliedCode
      ? localStorage.getItem("fc-wallet-applied-code") || ""
      : "";

    localStorage.setItem("fc-coupon-applied-code", couponInputValue);

    const checkoutResponse = await fetch(
      `/checkout/?discount=${couponInputValue},${walletAppliedCode}`,
      {
        method: "POST",
      }
    );

    setRefetchSummary((prev) => !prev);

    setLoadingWalletBal(false);
  };

  const removeCouponDiscount = async () => {
    setLoadingWalletBal(true);

    const clearDiscountCode = "FC_REMOVE_CODE";

    //fetch(`/discount/${clearDiscountCode}`);
    const isWalletAppliedCode =
      localStorage.getItem("fc-wallet-cart-applied") === "true" || false;
    const walletAppliedCode = isWalletAppliedCode
      ? localStorage.getItem("fc-wallet-applied-code") || ""
      : "";

    localStorage.removeItem("fc-coupon-applied-code");

    const checkoutResponse = await fetch(
      `/checkout/?discount=${clearDiscountCode},${walletAppliedCode}`,
      {
        method: "POST",
      }
    );

    setRefetchSummary((prev) => !prev);

    setLoadingWalletBal(false);
  };

  useEffect(() => {
    setCouponInputValue(appliedDiscountCode);
  }, [appliedDiscountCode]);

  return (
    <>
      <div class="apply-code-container">
        <div class="input-container">
          <input
            type="text"
            name="temp-discount"
            class="docapp-coupon-input--input"
            placeholder="Discount Code"
            value={couponInputValue}
            readonly={appliedDiscountCode ? true : false}
            onChange={(e) => {
              if (appliedDiscountCode) {
                setCouponInputValue(appliedDiscountCode);
              } else {
                // @ts-ignore
                setCouponInputValue(e.target.value);
              }
            }}
          />
        </div>
        {appliedDiscountCode ? (
          <div class="apply-btn" onClick={removeCouponDiscount}>
            {loadingWalletBal ? (
              <>
                <CircularLoader />
              </>
            ) : (
              "Remove"
            )}
          </div>
        ) : (
          <div class="apply-btn" onClick={applyCouponDiscount}>
            {loadingWalletBal ? <CircularLoader /> : "Apply"}
          </div>
        )}
      </div>
    </>
  );
}
