import { useEffect, useMemo, useState } from "preact/hooks";
import { Checkbox } from "./checkbox";
import { WALLET_API_URI } from "..";
import { CircularLoader } from "./circularloader";
import { SkeletonLoader } from "./skeletonloader";
import { setCookie } from "../../global/utils";
import ModernMain from "./ModernUI/ModernMain";
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
  const walletRedemptionLimitDetails2 = JSON.parse(localStorage.getItem("fc-wallet-redemption-limit"))
  if (walletRedemptionLimitDetails2?.type === "CART_PERCENT") {
    walletLimitAmount =
      (walletRedemptionLimitDetails2?.amount / 100) * cartTotalPrice;
  } else if (walletRedemptionLimitDetails2?.type === "FIXED") {
    walletLimitAmount = Number(walletRedemptionLimitDetails2?.amount || "0");
  } else {
    const limitDet = JSON.parse(localStorage.getItem("fc-wallet-redemption-limit"))
    walletLimitAmount = Number(walletRedemptionLimitDetails2?.amount || "0");
  }
  console.log("walletRedemptionLimitDetails2 func", walletRedemptionLimitDetails2,cartTotalPrice);
  return walletLimitAmount;
};

export function ApplyWallet({
  customerDetails,
  checkoutTarget,
  renderApplyCouponCodeBox,
  refetchCartSummary,
  calculateCashback,
  setUserHash,
  renderWalletCredit,
  themeDetailsData,
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
  // const [totalCartPrice, setTotalCartPrice] = useState(localStorage.getItem("totalCartPrice") || 0);
  const totalCartPriceLocal = useMemo(
    () => localStorage.getItem("totalCartPrice"),
    []
  );
  const mainScript = document.querySelector(
    "#fc-wallet-cart-widget-script-19212"
  );
  const checkout_total = mainScript.getAttribute("data-checkout-total");
  const walletUiTheme = mainScript.getAttribute("wallet-theme");
  try {
    const checkoutTotalTag = document.querySelector(`.${checkout_total}`);
    checkoutTotalTag.innerHTML = `${String.fromCharCode(160)}${Number(
      walletAppliedDetails?.totalPayablePrice
    ).toLocaleString("en-IN", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
      style: "currency",
      currency: "INR",
    })}`;
  } catch (error) {
    // console.log("checkout_total error");
  }

  const [walletRedemptionLimitDetails, setWalletRedemptionLimitDetails] = useState({
      amount: 0,
      type: null,
    });
  const applyWalletAmount = (amount) => {
    const event = new CustomEvent("wallet_amount_applied", {
      detail: { amount },
    });
    window.fc_wallet_amount = amount;
    document.dispatchEvent(event);
    // console.log("event fired")
  };
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
      let get_user_hash = walletData?.data?.data?.user_hash;
      if (get_user_hash) {
        setUserHash({
          ...customerDetails,
          customerTags: get_user_hash,
        });
        sessionStorage.setItem("fc_wallet_user_hash", get_user_hash);
      }
      setUserPoints(walletAmount);
    } catch (err) {
      setUserPoints(0);
    }
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
      const lmt = {
        type: walletData?.data?.limit_details?.type,
        amount: Number(walletData?.data?.limit_details?.amount),
      };
      localStorage.setItem("fc-wallet-redemption-limit", JSON.stringify(lmt))
      console.log("===type", walletData?.data?.limit_details?.type, "===amount", Number(walletData?.data?.limit_details?.amount));
    } catch (err) {
      setWalletRedemptionLimitDetails({
        type: "FIXED",
        amount: 0,
      });
      localStorage.setItem("fc-wallet-redemption-limit", JSON.stringify({
        type: "FIXED",
        amount: 0,
      }))
    }
  };
  // useEffect(()=>{

  // },[])
  const copyToggleUserWalletApplied = async (prevWalletApplied) => {
    // localStorage.setItem("fc-cart-updated", "false")
    setLoadingWalletBal(true);
    if (prevWalletApplied) {
      console.log("==if walletRedemptionLimitDetails", walletRedemptionLimitDetails);
      if (checkoutTarget?.enable) {
        setCookie("discount_code", "", 7);
        const cartRes = await fetch(`/cart.json?v=${Date.now()}`);
        const cartDetails = await cartRes.json();
        const totalPrice = cartDetails?.total_price / 100;
        localStorage.setItem("totalCartPrice", `${totalPrice}`);
        setWalletAppliedDetails({
          ...walletAppliedDetails,
          remainingWalletBalance: Number(userPoints),
          walletDiscountApplied: 0,
          currency: cartDetails?.currency,
          totalPayablePrice: Number(totalPrice),
        });
        applyWalletAmount(0);
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
      if (localStorage.getItem("fc_refresh_cart_update_status") === "true") {
        localStorage.setItem("fc_refresh_cart_update_status", "false");
        console.log("==local fc_refer 1 copy");
        fc_coupon_toggle(window.fc_refresh_cart);
      }
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
        localStorage.setItem("totalCartPrice", `${totalPrice}`);
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
        applyWalletAmount(0);
        setLoadingWalletBal(false);
      }
    } else {
      console.log("==else walletRedemptionLimitDetails", walletRedemptionLimitDetails);
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
      console.log("totalPrice copy", totalPrice, "userPoints copy", userPoints);
      console.log(
        "walletPointsToApplyBeforeLimit copy",
        walletPointsToApplyBeforeLimit
      );
      const walletRedemptionLimit = calculateWalletRedemptionLimit({
        walletRedemptionLimitDetails,
        cartTotalPrice: Number(totalPrice),
      });
      console.log("walletRedemptionLimit 1 copy", walletRedemptionLimit);
      const walletPointsToApply = walletRedemptionLimit
        ? Math.min(
            Number(walletPointsToApplyBeforeLimit),
            Number(walletRedemptionLimit)
          )
        : walletPointsToApplyBeforeLimit;
      //console.log("walletPointsToApply", walletPointsToApply);
      try {
        localStorage.setItem(
          "rtly-applied-discount",
          `${Math.round(walletPointsToApply)}`
        );
        if (walletPointsToApply > 0) {
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
                user_hash: customerDetails?.customerTags,
                wallet_points: Math.round(walletPointsToApply),
              }),
            }
          );
          const walletCouponData = await walletCouponResponse.json();

          var walletCouponCode = walletCouponData?.data?.coupon_code;

          localStorage.setItem("fc-wallet-applied-code", walletCouponCode);
        } else {
          setWalletApplied(false);
        }
      } catch (err) {
        console.log(err);
      }

      if (checkoutTarget?.enable) {
        setCookie("discount_code", walletCouponCode, 7);
        !renderApplyCouponCodeBox && fetch(`/discount/${walletCouponCode}`);
        if (localStorage.getItem("fc_refresh_cart_update_status") === "true") {
          localStorage.setItem("fc_refresh_cart_update_status", "false");
          console.log("==local fc_refer 2 copy");
          fc_coupon_toggle(window.fc_refresh_cart);
        }
        setWalletAppliedDetails({
          ...walletAppliedDetails,
          remainingWalletBalance: Number(userPoints) - walletPointsToApply,
          walletDiscountApplied: walletPointsToApply,
          currency: cartDetails?.currency,
          totalPayablePrice: Number(totalPrice) - walletPointsToApply,
        });
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
        applyWalletAmount(walletPointsToApply);
        setLoadingWalletBal(false);
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
        if (checkoutResponse) {
          if (
            localStorage.getItem("fc_refresh_cart_update_status") === "true"
          ) {
            localStorage.setItem("fc_refresh_cart_update_status", "false");
            console.log("==local fc_refer 3 copy");
            fc_coupon_toggle(window.fc_refresh_cart);
          }
          console.log("walletPointsToApply 3 copy", walletPointsToApply);
        }
        console.log("walletAppliedDetails 3 copy", walletAppliedDetails);
        const cartResUpdated = await fetch(`/cart.json?v=${Date.now()}`);
        const cartDetailsUpdated = await cartResUpdated.json();
        console.log("cartDetailsUpdated json copy", cartDetailsUpdated);

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
        applyWalletAmount(walletPointsApplied);
        setLoadingWalletBal(false);
      }
    }
    // try {
    //   // @ts-ignore
    //   fc_coupon_toggle(window.fc_refresh_cart_on_cart_update)
    // } catch (error) {
    //   console.log(error)
    // }
  };
  const toggleUserWalletApplied = async (prevWalletApplied) => {
    localStorage.setItem("fc-cart-updated", "false");
    setLoadingWalletBal(true);
    if (prevWalletApplied) {
      if (checkoutTarget?.enable) {
        setCookie("discount_code", "", 7);
        const cartRes = await fetch(`/cart.json?v=${Date.now()}`);
        const cartDetails = await cartRes.json();
        console.log("cartDetails", cartDetails);
        const totalPrice = cartDetails?.total_price / 100;
        localStorage.setItem("totalCartPrice", `${totalPrice}`);
        setWalletAppliedDetails({
          ...walletAppliedDetails,
          remainingWalletBalance: Number(userPoints),
          walletDiscountApplied: 0,
          currency: cartDetails?.currency,
          totalPayablePrice: Number(totalPrice),
        });
        applyWalletAmount(0);
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
      if (localStorage.getItem("fc_refresh_cart_update_status") === "true") {
        localStorage.setItem("fc_refresh_cart_update_status", "false");
        console.log("==local fc_refer 4");
        fc_coupon_toggle(window.fc_refresh_cart);
      }
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
        localStorage.setItem("totalCartPrice", `${totalPrice}`);
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
        applyWalletAmount(0);
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
      //console.log("totalPrice", totalPrice, "userPoints", userPoints);
      console.log(
        "walletPointsToApplyBeforeLimit",
        walletPointsToApplyBeforeLimit
      );
      const walletRedemptionLimit = calculateWalletRedemptionLimit({
        walletRedemptionLimitDetails,
        cartTotalPrice: Number(totalPrice),
      });
      console.log("walletRedemptionLimit 2", walletRedemptionLimit);
      const walletPointsToApply = walletRedemptionLimit
        ? Math.min(
            Number(walletPointsToApplyBeforeLimit),
            Number(walletRedemptionLimit)
          )
        : walletPointsToApplyBeforeLimit;
      console.log("walletPointsToApply", walletPointsToApply);
      try {
        localStorage.setItem(
          "rtly-applied-discount",
          `${Math.round(walletPointsToApply)}`
        );
        if (walletPointsToApply > 0) {
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
                user_hash: customerDetails?.customerTags,
                wallet_points: Math.round(walletPointsToApply),
              }),
            }
          );
          const walletCouponData = await walletCouponResponse.json();

          var walletCouponCode = walletCouponData?.data?.coupon_code;

          localStorage.setItem("fc-wallet-applied-code", walletCouponCode);
        } else {
          setWalletApplied(false);
        }
      } catch (err) {
        console.log(err);
      }

      if (checkoutTarget?.enable) {
        setCookie("discount_code", walletCouponCode, 7);
        !renderApplyCouponCodeBox && fetch(`/discount/${walletCouponCode}`);
        if (localStorage.getItem("fc_refresh_cart_update_status") === "true") {
          localStorage.setItem("fc_refresh_cart_update_status", "false");
          console.log("==local fc_refer 5");
          fc_coupon_toggle(window.fc_refresh_cart);
        }
        setWalletAppliedDetails({
          ...walletAppliedDetails,
          remainingWalletBalance: Number(userPoints) - walletPointsToApply,
          walletDiscountApplied: walletPointsToApply,
          currency: cartDetails?.currency,
          totalPayablePrice: Number(totalPrice) - walletPointsToApply,
        });
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
        applyWalletAmount(walletPointsToApply);
        setLoadingWalletBal(false);
      } else {
        const appliedDiscountCode = localStorage.getItem(
          "fc-coupon-applied-code"
        );
        !renderApplyCouponCodeBox && fetch(`/discount/${walletCouponCode}`);
        if (localStorage.getItem("fc_refresh_cart_update_status") === "true") {
          localStorage.setItem("fc_refresh_cart_update_status", "false");
          console.log("==local fc_refer 6");
          fc_coupon_toggle(window.fc_refresh_cart);
        }
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
        applyWalletAmount(walletPointsApplied);
        setLoadingWalletBal(false);
      }
    }
    console.log(
      `localStorage.getItem("fc_refresh_cart_update_status")`,
      localStorage.getItem("fc_refresh_cart_update_status")
    );
    if (localStorage.getItem("fc_refresh_cart_update_status") === "true") {
      localStorage.setItem("fc_refresh_cart_update_status", "false");
      console.log("==local fc_refer main");
      fc_coupon_toggle(window.fc_refresh_cart);
    }
    try {
      // @ts-ignore
      fc_coupon_toggle(window.fc_coupon_callback);
    } catch (error) {
      console.log(error);
    }
  };

  const debouncedToggleUserWalletApplied = returnDebouncedFunc(
    (prevWalletApplied) => toggleUserWalletApplied(prevWalletApplied),
    200
  );

  useEffect(() => {
    window.set_cartdrawer_wallet_amount = (element_id) => {
      const exposed_wallet_amt = document.getElementById(`${element_id}`);
      const changeWalletAmt = (data) => {
        exposed_wallet_amt.innerHTML = `-${Number(
          data.detail.amount
        ).toLocaleString("en-IN", {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
          style: "currency",
          currency: "INR",
        })}`;
        // console.log("event suna", data?.detail?.amount)
        exposed_wallet_amt.removeEventListener(
          "wallet_amount_applied",
          changeWalletAmt
        );
        return { amount: data?.detail?.amount };
      };
      exposed_wallet_amt.addEventListener(
        "wallet_amount_applied",
        changeWalletAmt
      );
    };
  }, [walletApplied]);
  const fc_coupon_toggle = (callback = () => {}) => {
    callback();
  };
  const toggleUserWallet = () => {
    setWalletApplied((prev) => {
      debouncedToggleUserWalletApplied(prev);
      try {
        localStorage.setItem("fc-wallet-cart-applied", `${!prev}`);
        const cart_applied = localStorage.getItem("fc-wallet-cart-applied");
        localStorage.setItem(
          "rtly-applied-discount",
          `${
            cart_applied === "false"
              ? "0"
              : walletAppliedDetails?.walletDiscountApplied
          }`
        );
      } catch (err) {
        console.log(err);
      }
      return !prev;
    });
  };

  useEffect(() => {
    getUserPoints();
    getWalletRemeptionLimit();
    const cart_wallet_amount_id = mainScript.getAttribute(
      "data-show-wallet-amount-on-cart"
    );
    if (cart_wallet_amount_id) {
      document.addEventListener("wallet_amount_applied", (data) => {
        document.getElementById(
          `${cart_wallet_amount_id}`
        ).innerHTML = `-${Number(data.detail.amount).toLocaleString("en-IN", {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
          style: "currency",
          currency: "INR",
        })}`;
      });
    }
    // console.log("event listner added useeffe");
  }, []);

  useEffect(() => {
    if (userPoints !== null && checkoutTarget?.isSet) {
      copyToggleUserWalletApplied(!walletApplied);
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
      {walletUiTheme === "classic" ? (
        <>
          {renderWalletCredit && (
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
                <span class="walletCreditText">Use Wallet Credit</span>
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
                    (userPoints || 0).toFixed(2)
                  )}
                </strong>
              </p>
            </div>
          )}

          <div class="wallet-applied-details-container">
            {walletApplied ? (
              <>
                <div class="wallet-applied-details">
                  <p>Remaining Wallet Balance</p>
                  <p class="point-details">
                    {loadingWalletBal ? (
                      <SkeletonLoader width="50px" height="16px" />
                    ) : (
                      walletAppliedDetails?.remainingWalletBalance.toFixed(2)
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
      ) : (
        <ModernMain
          customerDetails={customerDetails}
          themeDetailsData={themeDetailsData}
          walletAppliedDetails={walletAppliedDetails}
          toggleUserWallet={toggleUserWallet}
          walletApplied={walletApplied}
          loadingWalletBal={loadingWalletBal}
          walletRedemptionLimitDetails={walletRedemptionLimitDetails}
        />
      )}
    </>
  );
}
