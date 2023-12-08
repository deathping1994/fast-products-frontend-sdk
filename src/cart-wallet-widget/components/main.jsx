import { useEffect, useState } from "preact/hooks";
import { ApplyWallet } from "./applywallet";
import { Login } from "./login";
import { LoggedoutCartSummary } from "./loggedoutcartsummary";
import { ApplyDiscountCode } from "./applydiscountcode";

export function Main({ themeDetailsData }) {
  const [customerDetails, setCustomerDetails] = useState({
    customerID: "",
    customerTags: "",
    clientID: "",
  });
  const [checkoutTarget, setCheckoutTarget] = useState({
    enable: false,
    isSet: false,
  });
  const [refetchCartSummary, setRefetchSummary] = useState(false);
  const [renderApplyCouponCodeBox, setRenderApplyCouponCodeBox] =
    useState(false);

  const [loadingWalletBal, setLoadingWalletBal] = useState(false);
  const [walletAppliedDetails, setWalletAppliedDetails] = useState({
    currency: null,
    totalPayablePrice: 0,
    totalDiscount: 0,
  });
  const [appliedDiscountCode, setAppliedDiscountCode] = useState("");

  const loadCartSummary = async () => {
    setLoadingWalletBal(true);
    const cartRes = await fetch(`/cart.json?v=${Date.now()}`);
    const cartDetails = await cartRes.json();

    const totalPrice = cartDetails?.total_price / 100;
    const totalDiscount = cartDetails?.total_discount / 100;
    const appliedDiscountCode =
      cartDetails?.cart_level_discount_applications?.find((item) => {
        return item.type === "discount_code";
      })?.title || "";
    setWalletAppliedDetails({
      currency: cartDetails?.currency,
      totalPayablePrice: Number(totalPrice),
      totalDiscount: Number(totalDiscount),
    });
    setAppliedDiscountCode(appliedDiscountCode);
    setLoadingWalletBal(false);
  };

  useEffect(() => {
    const mainScript = document.querySelector(
      "#fc-wallet-cart-widget-script-19212"
    );
    const customer_id = mainScript.getAttribute("data-customer-id");
    const customer_tags = mainScript.getAttribute("data-customer-tag")?.trim();
    const client_id = mainScript.getAttribute("data-client-id");

    const checkout_target = mainScript.getAttribute("data-checkout-target");
    const coupon_code_box = mainScript.getAttribute("data-coupon-code-box");

    if (coupon_code_box) {
      setRenderApplyCouponCodeBox(true);
    }

    if (checkout_target) {
      setCheckoutTarget({
        enable: true,
        isSet: true,
      });
    } else {
      setCheckoutTarget({
        enable: false,
        isSet: true,
      });
    }

    setCustomerDetails({
      customerID: customer_id,
      customerTags: customer_tags,
      clientID: client_id,
    });
  }, []);

  useEffect(() => {
    loadCartSummary();
  }, [refetchCartSummary]);

  return (
    <>
      {renderApplyCouponCodeBox ? (
        <ApplyDiscountCode
          setRefetchSummary={setRefetchSummary}
          appliedDiscountCode={appliedDiscountCode}
        />
      ) : (
        <></>
      )}
      {customerDetails?.customerID ? (
        <ApplyWallet
          customerDetails={customerDetails}
          checkoutTarget={checkoutTarget}
        />
      ) : (
        <>
          <Login themeDetails={themeDetailsData} />
          <LoggedoutCartSummary
            loadingWalletBal={loadingWalletBal}
            walletAppliedDetails={walletAppliedDetails}
          />
        </>
      )}
    </>
  );
}
