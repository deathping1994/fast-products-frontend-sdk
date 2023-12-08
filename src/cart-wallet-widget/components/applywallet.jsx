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

export function ApplyWallet({ customerDetails, checkoutTarget }) {
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
  });
  const [walletRedemptionLimit, setWalletRedemptionLimit] = useState(null);

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
      const walletRemeptionLimitAmount = Number(
        walletData?.data?.limit_amount || "0"
      );
      setWalletRedemptionLimit(walletRemeptionLimitAmount || null);
    } catch (err) {
      setWalletRedemptionLimit(null);
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

      fetch(`/discount/${walletCouponCode}`);
      const checkoutResponse = await fetch(
        `/checkout/?discount=${walletCouponCode}`,
        {
          method: "POST",
        }
      );
      setCookie("discount_code", "", 7); // Remove discount code from cookie for GoKwik checkout
      if (!checkoutTarget?.enable) {
        const cartRes = await fetch(`/cart.json?v=${Date.now()}`);
        const cartDetails = await cartRes.json();

        const totalPrice = cartDetails?.total_price / 100;
        setWalletAppliedDetails({
          remainingWalletBalance: Number(userPoints),
          walletDiscountApplied: 0,
          currency: cartDetails?.currency,
          totalPayablePrice: Number(totalPrice),
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
              wallet_points: walletPointsToApply,
            }),
          }
        );
        const walletCouponData = await walletCouponResponse.json();

        var walletCouponCode = walletCouponData?.data?.coupon_code;
      } catch (err) {
        setLoadingWalletBal(false);
      }

      if (checkoutTarget?.enable) {
        setCookie("discount_code", walletCouponCode, 7);
        fetch(`/discount/${walletCouponCode}`);
        setWalletAppliedDetails({
          remainingWalletBalance: Number(userPoints) - walletPointsToApply,
          walletDiscountApplied: walletPointsToApply,
          currency: cartDetails?.currency,
          totalPayablePrice: Number(totalPrice) - walletPointsToApply,
        });
        setLoadingWalletBal(false);
        const checkoutResponse = await fetch(
          `/checkout/?discount=${walletCouponCode}`,
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
          remainingWalletBalance: Number(userPoints) - walletPointsToApply,
          walletDiscountApplied: walletPointsToApply,
          currency: cartDetails?.currency,
          totalPayablePrice: totalFinalPrice,
        });
      } else {
        fetch(`/discount/${walletCouponCode}`);
        const checkoutResponse = await fetch(
          `/checkout/?discount=${walletCouponCode}`,
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

        setWalletAppliedDetails({
          remainingWalletBalance: Number(userPoints) - walletPointsApplied,
          walletDiscountApplied: walletPointsApplied,
          currency: cartDetailsUpdated?.currency,
          totalPayablePrice: cartDetailsUpdated?.total_price / 100,
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
  }, [userPoints, checkoutTarget?.isSet]);

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
