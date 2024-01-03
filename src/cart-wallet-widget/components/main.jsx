import { useEffect, useState } from "preact/hooks";
import { ApplyWallet } from "./applywallet";
import { Login } from "./login";
import { LoggedoutCartSummary } from "./loggedoutcartsummary";
import { ApplyDiscountCode } from "./applydiscountcode";
import { WALLET_API_URI } from "..";

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
  const [appliedDiscountsList, setAppliedDiscountsList] = useState(null);
  const [loadingCashbackDetails, setLoadingCashbackDetails] = useState(true);
  const [cashbackDetails, setCashbackDetails] = useState({
    amount: 0,
    type: null,
  });
  const [cashbackAmount, setCashbackAmount] = useState(0);

  const loadCartSummary = async () => {
    setLoadingWalletBal(true);
    const cartRes = await fetch(`/cart.json?v=${Date.now()}`);
    const cartDetails = await cartRes.json();

    const totalPrice = cartDetails?.total_price / 100;
    const totalDiscount = cartDetails?.total_discount / 100;
    const appliedDiscountCode =
      cartDetails?.cart_level_discount_applications?.find((item) => {
        return (
          item.type === "discount_code" && !item.title.includes("WALLETAPPLIED")
        );
      })?.title || "";

    setAppliedDiscountsList(cartDetails?.cart_level_discount_applications);
    setWalletAppliedDetails({
      currency: cartDetails?.currency,
      totalPayablePrice: Number(totalPrice),
      totalDiscount: Number(totalDiscount),
    });
    // @ts-ignore
    window.fc_cart_details = {
      totalPayablePrice: Number(totalPrice),
      totalDiscount: Number(totalDiscount),
    };
    setAppliedDiscountCode(appliedDiscountCode);
    calculateCashback({
      totalPrice: Number(totalPrice),
    });
    setLoadingWalletBal(false);
  };

  const syncCartSummary = async (walletAppliedDetails) => {
    const cartRes = await fetch(`/cart.json?v=${Date.now()}`);
    const cartDetails = await cartRes.json();

    const totalPrice = cartDetails?.total_price / 100;
    const totalDiscount = cartDetails?.total_discount / 100;

    if (
      totalPrice === walletAppliedDetails?.totalPayablePrice &&
      totalDiscount === walletAppliedDetails?.totalDiscount
    ) {
      //already updated
    } else {
      setRefetchSummary((prev) => !prev);
    }
  };

  const getCashbackDetails = async ({ customerID, customerTags, clientID }) => {
    setLoadingCashbackDetails(true);
    const cashbackRes = await fetch(
      `${WALLET_API_URI}/loyalty/cashback-detail`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer_id: customerID,
          user_hash: customerTags,
          client_id: clientID,
        }),
      }
    );
    const cashbackResDetails = await cashbackRes.json();
    setCashbackDetails({
      type: cashbackResDetails?.data?.cashback_data?.type,
      amount: Number(cashbackResDetails?.data?.cashback_data?.amount),
    });

    setLoadingCashbackDetails(false);
  };

  const calculateCashback = ({ totalPrice }) => {
    if (cashbackDetails?.type === "percent") {
      // @ts-ignore
      const cartAmount = window.fc_cart_details?.totalPayablePrice;
      const finalAmount =
        (cashbackDetails?.amount / 100) * (totalPrice || cartAmount);
      setCashbackAmount(finalAmount);
      return finalAmount;
    } else {
      setCashbackAmount(cashbackDetails?.amount);
      return cashbackDetails?.amount;
    }
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
      setInterval(() => {
        // @ts-ignore
        syncCartSummary(window.fc_cart_details || walletAppliedDetails);
      }, 10000);
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

    getCashbackDetails({
      customerID: customer_id,
      customerTags: customer_tags,
      clientID: client_id,
    });
  }, []);

  useEffect(() => {
    loadCartSummary();
  }, [refetchCartSummary, cashbackDetails?.type]);

  return (
    <>
      {renderApplyCouponCodeBox ? (
        <ApplyDiscountCode
          setRefetchSummary={setRefetchSummary}
          appliedDiscountCode={appliedDiscountCode}
          appliedDiscountsList={appliedDiscountsList}
        />
      ) : (
        <></>
      )}
      {!loadingCashbackDetails && cashbackAmount !== 0 && (
        <div class="cashback-strip-container">
          <p>
            You'll get&nbsp;<span>Rs. {parseFloat(`${cashbackAmount}`).toFixed(2)} cashback</span>
            &nbsp;with this order
          </p>
        </div>
      )}
      {customerDetails?.customerID ? (
        <ApplyWallet
          customerDetails={customerDetails}
          checkoutTarget={checkoutTarget}
          renderApplyCouponCodeBox={renderApplyCouponCodeBox}
          refetchCartSummary={refetchCartSummary}
          calculateCashback={calculateCashback}
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
