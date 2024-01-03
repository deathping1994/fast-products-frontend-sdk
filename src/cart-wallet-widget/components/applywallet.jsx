import { useEffect, useState } from "preact/hooks";
import { Checkbox } from "./checkbox";
import { WALLET_API_URI } from "..";
import { CircularLoader } from "./circularloader";
import { SkeletonLoader } from "./skeletonloader";
import { setCookie } from "../../global/utils";
let debounceTimer;
const returnDebouncedFunc = (mainFunction, delay) => {
  return function (...args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      mainFunction(...args);
    }, delay);
  };
};

const calculateWalletRedemptionLimit = ({
  walletRedemptionLimitDetails,
  cartTotalPrice,
}) => {
  let walletLimitAmount;

  if (walletRedemptionLimitDetails?.type === "CART_PERCENT") {
    walletLimitAmount =
      (walletRedemptionLimitDetails?.amount / 100) * cartTotalPrice;
  } else if (walletRedemptionLimitDetails?.type === "FIXED") {
    walletLimitAmount = Number(walletRedemptionLimitDetails?.amount || "0");
  } else {
    walletLimitAmount = Number(walletRedemptionLimitDetails?.amount || "0");
  }

  return walletLimitAmount;
};

export function ApplyWallet({
  customerDetails,
  checkoutTarget,
  renderApplyCouponCodeBox,
  refetchCartSummary,
  calculateCashback,
}) {
  const [userPoints, setUserPoints] = useState(null);
  const [walletApplied, setWalletApplied] = useState(
    localStorage.getItem("fc-wallet-cart-applied") === "true" || false
  );
  const [loadingWalletBal, setLoadingWalletBal] = useState(false);
  const [walletAppliedDetails, setWalletAppliedDetails] = useState({
    remainingWalletBalance: 0,
    walletDiscountApplied: 0,
    currency: null,
    totalPayablePrice: 0,
    couponDiscountApplied: 0,
  });

  const [walletRedemptionLimitDetails, setWalletRedemptionLimitDetails] =
    useState({
      amount: 0,
      type: null,
    });

  const getUserPoints = async () => {
    setLoadingWalletBal(true);
    try {
      const response = await fetch(`${WALLET_API_URI}/user-walletlogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer_id: customerDetails?.customerID,
          user_hash: customerDetails?.customerTags,
          client_id: customerDetails?.clientID,
        }),
      });
      let walletData = await response.json();
      let walletAmount = walletData?.data?.data?.wallet?.wallet?.amount || 0;
      setUserPoints(walletAmount);
    } catch (err) {
      setUserPoints(0);
      setLoadingWalletBal(false);
    }
    setLoadingWalletBal(false);
  };

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
      });
    } catch (err) {
      setWalletRedemptionLimitDetails({
        type: "FIXED",
        amount: 0,
      });
    }
  };

  const toggleUserWalletApplied = async (prevWalletApplied) => {
    setLoadingWalletBal(true);
    if (prevWalletApplied) {
      if (checkoutTarget?.enable) {
        setCookie("discount_code", "", 7);
        const cartRes = await fetch(`/cart.json?v=${Date.now()}`);
        const cartDetails = await cartRes.json();
        const totalPrice = cartDetails?.total_price / 100;
        setWalletAppliedDetails({
          ...walletAppliedDetails,
          remainingWalletBalance: Number(userPoints),
          walletDiscountApplied: 0,
          currency: cartDetails?.currency,
          totalPayablePrice: Number(totalPrice),
        });
        setLoadingWalletBal(false);
      }
      //TEMP: reset other app discounts
      setCookie("docapp-coupon", "", 7);
      setCookie("docapp-auto-coupon", "", 7);
      try {
        localStorage.removeItem("docapp-coupon");
      } catch (err) {
        console.log(err);
      }

      const walletCouponCode = "WALLET_REMOVED19212";

      const appliedDiscountCode = localStorage.getItem(
        "fc-coupon-applied-code"
      );

      !renderApplyCouponCodeBox && fetch(`/discount/${walletCouponCode}`);
      const checkoutResponse = await fetch(
        `/checkout/?discount=${walletCouponCode},${appliedDiscountCode}`,
        {
          method: "POST",
        }
      );
      setCookie("discount_code", "", 7); // Remove discount code from cookie for GoKwik checkout
      if (!checkoutTarget?.enable) {
        const cartRes = await fetch(`/cart.json?v=${Date.now()}`);
        const cartDetails = await cartRes.json();

        const totalPrice = cartDetails?.total_price / 100;

        const appliedDiscountCodeAmount =
          cartDetails?.cart_level_discount_applications?.find((item) => {
            return (
              item?.title?.toLowerCase() === appliedDiscountCode?.toLowerCase()
            );
          })?.total_allocated_amount;

        setWalletAppliedDetails({
          ...walletAppliedDetails,
          remainingWalletBalance: Number(userPoints),
          walletDiscountApplied: 0,
          currency: cartDetails?.currency,
          totalPayablePrice: Number(totalPrice),
          couponDiscountApplied: appliedDiscountCodeAmount / 100,
        });
        setLoadingWalletBal(false);
      }
    } else {
      const cartRes = await fetch(`/cart.json?v=${Date.now()}`);
      const cartDetails = await cartRes.json();
      const prevWalletAmountApplied =
        cartDetails?.cart_level_discount_applications?.find((item) => {
          return item?.title?.includes("WALLETAPPLIED");
        })?.total_allocated_amount;
      const alreadyAppliedWalletDiscount = prevWalletAmountApplied
        ? prevWalletAmountApplied / 100
        : 0;
      const totalPrice =
        cartDetails?.total_price / 100 + alreadyAppliedWalletDiscount;
      const walletPointsToApplyBeforeLimit = Math.min(
        Number(userPoints),
        Number(totalPrice)
      );
      const walletRedemptionLimit = calculateWalletRedemptionLimit({
        walletRedemptionLimitDetails,
        cartTotalPrice: Number(totalPrice),
      });
      const walletPointsToApply = walletRedemptionLimit
        ? Math.min(
            Number(walletPointsToApplyBeforeLimit),
            Number(walletRedemptionLimit)
          )
        : walletPointsToApplyBeforeLimit;

      try {
        const walletCouponResponse = await fetch(
          `${WALLET_API_URI}/loyalty/get-wallet-coupon`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              client_id: customerDetails?.clientID,
              customer_id: customerDetails?.customerID,
              wallet_points: Math.round(walletPointsToApply),
            }),
          }
        );
        const walletCouponData = await walletCouponResponse.json();

        var walletCouponCode = walletCouponData?.data?.coupon_code;

        localStorage.setItem("fc-wallet-applied-code", walletCouponCode);
      } catch (err) {
        setLoadingWalletBal(false);
      }

      if (checkoutTarget?.enable) {
        setCookie("discount_code", walletCouponCode, 7);
        !renderApplyCouponCodeBox && fetch(`/discount/${walletCouponCode}`);
        setWalletAppliedDetails({
          ...walletAppliedDetails,
          remainingWalletBalance: Number(userPoints) - walletPointsToApply,
          walletDiscountApplied: walletPointsToApply,
          currency: cartDetails?.currency,
          totalPayablePrice: Number(totalPrice) - walletPointsToApply,
        });
        setLoadingWalletBal(false);
        const appliedDiscountCode = localStorage.getItem(
          "fc-coupon-applied-code"
        );
        const checkoutResponse = await fetch(
          appliedDiscountCode
            ? `/checkout/?discount=${walletCouponCode},${appliedDiscountCode}`
            : `/checkout/?discount=${walletCouponCode}`,
          {
            method: "POST",
          }
        );

        const checkoutURL = checkoutResponse?.url;
        const updatedCheckoutRes = await fetch(checkoutURL);
        const updatedCheckout = await updatedCheckoutRes.text();
        let updatedCheckoutContainer = document.createElement("div");
        updatedCheckoutContainer.innerHTML = updatedCheckout;
        const totalFinalPrice =
          Number(
            updatedCheckoutContainer
              ?.querySelector("[data-checkout-payment-due-target]")
              .getAttribute("data-checkout-payment-due-target")
          ) / 100;

        setWalletAppliedDetails({
          ...walletAppliedDetails,
          remainingWalletBalance: Number(userPoints) - walletPointsToApply,
          walletDiscountApplied: walletPointsToApply,
          currency: cartDetails?.currency,
          totalPayablePrice: totalFinalPrice,
        });
      } else {
        const appliedDiscountCode = localStorage.getItem(
          "fc-coupon-applied-code"
        );
        !renderApplyCouponCodeBox && fetch(`/discount/${walletCouponCode}`);
        const checkoutResponse = await fetch(
          `/checkout/?discount=${walletCouponCode},${appliedDiscountCode}`,
          {
            method: "POST",
          }
        );
        const cartResUpdated = await fetch(`/cart.json?v=${Date.now()}`);
        const cartDetailsUpdated = await cartResUpdated.json();

        const walletAppliedFromUpdatedCart =
          cartDetailsUpdated?.cart_level_discount_applications?.find((item) => {
            return item?.title?.includes("WALLETAPPLIED");
          })?.total_allocated_amount;

        const walletPointsApplied = walletAppliedFromUpdatedCart
          ? walletAppliedFromUpdatedCart / 100
          : 0;

        const appliedDiscountCodeAmount =
          cartDetailsUpdated?.cart_level_discount_applications?.find((item) => {
            return (
              item?.title?.toLowerCase() === appliedDiscountCode?.toLowerCase()
            );
          })?.total_allocated_amount;

        setWalletAppliedDetails({
          ...walletAppliedDetails,
          remainingWalletBalance: Number(userPoints) - walletPointsApplied,
          walletDiscountApplied: walletPointsApplied,
          currency: cartDetailsUpdated?.currency,
          totalPayablePrice: cartDetailsUpdated?.total_price / 100,
          couponDiscountApplied: appliedDiscountCodeAmount / 100,
        });
      }
    }
    setLoadingWalletBal(false);
  };

  const debouncedToggleUserWalletApplied = returnDebouncedFunc(
    (prevWalletApplied) => toggleUserWalletApplied(prevWalletApplied),
    200
  );

  const toggleUserWallet = () => {
    setWalletApplied((prev) => {
      debouncedToggleUserWalletApplied(prev);
      try {
        localStorage.setItem("fc-wallet-cart-applied", `${!prev}`);
      } catch (err) {
        console.log(err);
      }
      return !prev;
    });
  };

  useEffect(() => {
    getUserPoints();
    getWalletRemeptionLimit();
  }, []);

  useEffect(() => {
    if (userPoints !== null && checkoutTarget?.isSet) {
      toggleUserWalletApplied(!walletApplied);
    }
  }, [userPoints, checkoutTarget?.isSet, refetchCartSummary]);

  useEffect(() => {
    if (walletAppliedDetails?.totalPayablePrice) {
      calculateCashback({
        totalPrice: walletAppliedDetails?.totalPayablePrice,
      });
    }
  }, [walletAppliedDetails]);

  return (
    <>
      <div class="wallet-box-container" onClick={toggleUserWallet}>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Checkbox
            walletApplied={walletApplied}
            setWalletApplied={setWalletApplied}
          />
          <span>Use Wallet Credit</span>
          {loadingWalletBal ? (
            <span>
              <CircularLoader />
            </span>
          ) : (
            <></>
          )}
        </p>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Avl Bal </p>
          <strong class="point-details">
            {" "}
            {loadingWalletBal ? (
              <>
                <SkeletonLoader width="50px" height="16px" />
              </>
            ) : (
              userPoints
            )}
          </strong>
        </p>
      </div>

      <div class="wallet-applied-details-container">
        {walletApplied ? (
          <>
            <div class="wallet-applied-details">
              <p>Remaining Wallet Balance</p>
              <p class="point-details">
                {loadingWalletBal ? (
                  <SkeletonLoader width="50px" height="16px" />
                ) : (
                  walletAppliedDetails?.remainingWalletBalance
                )}
              </p>
            </div>
            <div class="wallet-applied-details">
              <p>Wallet Discount Applied</p>
              <p class="point-details">
                {loadingWalletBal ? (
                  <SkeletonLoader width="50px" height="16px" />
                ) : walletAppliedDetails?.walletDiscountApplied ? (
                  <>
                    {"- "}
                    {` ${Number(
                      walletAppliedDetails?.walletDiscountApplied
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
          </>
        ) : (
          <></>
        )}

        {renderApplyCouponCodeBox &&
        walletAppliedDetails?.couponDiscountApplied ? (
          <div class="wallet-applied-details">
            <p>Coupon Discount</p>
            <p class="point-details">
              {loadingWalletBal ? (
                <SkeletonLoader width="50px" height="16px" />
              ) : walletAppliedDetails?.couponDiscountApplied ? (
                <>
                  {"- "}
                  {` ${Number(
                    walletAppliedDetails?.couponDiscountApplied
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
