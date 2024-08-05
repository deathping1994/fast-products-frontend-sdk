import { useEffect, useState } from "preact/hooks";
import { ApplyWallet } from "./applywallet";
import { Login } from "./login";
import { LoggedoutCartSummary } from "./loggedoutcartsummary";
import { WALLET_API_URI } from "..";
import ModernLogin from "./ModernUI/ModernLogin";

export function Main({ themeDetailsData, shadowRoot }) {
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
  const [renderCashbackStrip, setRenderCashbackStrip] = useState(false)
  const [renderWalletCredit, setRenderWalletCredit] = useState(false)
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
  const [modernUiTheme, setModernUiTheme] = useState('')
  const [cashbackAmount, setCashbackAmount] = useState(0);
  const [isCartEmpty, setIsCartEmpty] = useState(false)
  const[cartTotalAmt,setCartTotalAmt]=useState(0)
  const [applicableOn,setApplicableOn]=useState("")
  const setTheme = ({themeDetailsData})=>{
    var cssVariablesScope = shadowRoot.querySelector(".widget-container");
    if (cssVariablesScope && themeDetailsData?.data?.gradient_start_color) {
      cssVariablesScope.style.setProperty("--gradient_start_color",themeDetailsData?.data?.gradient_start_color);
    }
    if (cssVariablesScope && themeDetailsData?.data?.gradient_end_color) {
      cssVariablesScope.style.setProperty("--gradient_end_color",themeDetailsData?.data?.gradient_end_color);
    }
    if (cssVariablesScope && themeDetailsData?.data?.gradient_angle) {
      cssVariablesScope.style.setProperty("--gradient_angle",themeDetailsData?.data?.gradient_angle);
    }
    if (cssVariablesScope && themeDetailsData?.data?.discount_loading_icon) {
      cssVariablesScope.style.setProperty("--discount_loading_icon",`url("${themeDetailsData?.data?.discount_loading_icon}")`);
    }
  }

  const loadCartSummary = async () => {
    const cartRes = await fetch(`/cart.json?v=${Date.now()}`);
    const cartDetails = await cartRes.json();
    // console.log("cartDetails json loadCartSummary", cartDetails);
    setIsCartEmpty(cartDetails?.item_count === 0 ? true : false)
    const totalPrice = cartDetails?.total_price / 100;
    localStorage.setItem("totalCartPrice", `${totalPrice}`)
    setCartTotalAmt(totalPrice)
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
  };

  const syncCartSummary = async (walletAppliedDetails) => {
    const cartRes = await fetch(`/cart.json?v=${Date.now()}`);
    const cartDetails = await cartRes.json();
    const totalPrice = cartDetails?.total_price / 100;
 
    const totalDiscount = cartDetails?.total_discount / 100;
    window.fc_cart_details = {
      totalPayablePrice: Number(totalPrice),
      totalDiscount: Number(totalDiscount),
    };
    if (
      totalPrice === window.fc_cart_details?.totalPayablePrice &&
      totalDiscount === window.fc_cart_details?.totalDiscount
    ) {
      //already updated
    } else {
      setRefetchSummary((prev) => !prev);
    }
  };

  const getCashbackDetails = async ({ customerID, customerTags, clientID,cartAmount }) => {
    setLoadingCashbackDetails(true);
    const cashbackRes = await fetch(
      `${WALLET_API_URI}/get-order-cashback`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer_id: customerID,
          coupon:"",
          order_amount:cartAmount,
          client_id: clientID,
        }),
      }
    );
    const cashbackResDetails = await cashbackRes.json();
    setApplicableOn(cashbackResDetails?.data?.applicableOn)
    setCashbackAmount(Number(cashbackResDetails?.data?.cashbackAmount))
    setCashbackDetails({
      type: cashbackResDetails?.data?.cashbackType,
      amount: Number(cashbackResDetails?.data?.cashbackAmount),
    });

    setLoadingCashbackDetails(false);
  };

  const calculateCashback = ({ totalPrice }) => {
    if (cashbackDetails?.type === "percent") {
      // @ts-ignore
      const cartAmount = window.fc_cart_details?.totalPayablePrice;
      const finalAmount =
        (cashbackDetails?.amount / 100) * (totalPrice || cartAmount);
      // setCashbackAmount(finalAmount);
      return finalAmount;
    } else {
      return cashbackDetails?.amount;
    }
  };

  // this Below, a gloBal function is created so that if someone clicks on our checkBox, the total cart amount will oBviously update so amount on strip should also Be updated.
   window.updateStripAmount=(amount)=>{
    const mainScript = document.querySelector(
      "#fc-wallet-cart-widget-script-19212"
    );
    const customer_id = mainScript.getAttribute("data-customer-id");
    const customer_tags = mainScript.getAttribute("data-customer-tag")?.trim() ;
    const client_id = mainScript.getAttribute("data-client-id");
    getCashbackDetails({
      customerID: customer_id,
      customerTags: customer_tags,
      clientID: client_id,
      cartAmount:amount
    })
   }

  useEffect(() => {
    const mainScript = document.querySelector(
      "#fc-wallet-cart-widget-script-19212"
    );
    const customer_id = mainScript.getAttribute("data-customer-id");
    const customer_tags = mainScript.getAttribute("data-customer-tag")?.trim() ;
    const client_id = mainScript.getAttribute("data-client-id");

    const coupon_code_box = mainScript.getAttribute("data-coupon-code-box");
    const cashback_strip = mainScript.getAttribute("data-cashback-strip");
    const wallet_credit = mainScript.getAttribute("data-wallet-credit-box");
    const walletUiTheme = mainScript.getAttribute('wallet-theme')
    setModernUiTheme(walletUiTheme)
    if (coupon_code_box === 'true') {
      setRenderApplyCouponCodeBox(true);
    }
    if(cashback_strip === "true"){
      setRenderCashbackStrip(true)
    }
    if(wallet_credit === "true"){
      setRenderWalletCredit(true)
    }

    setCustomerDetails({
      customerID: customer_id,
      customerTags: customer_tags || sessionStorage.getItem("fc_wallet_user_hash") || '',
      clientID: client_id,
    });
if(cartTotalAmt !=0){
  getCashbackDetails({
    customerID: customer_id,
    customerTags: customer_tags,
    clientID: client_id,
    cartAmount:cartTotalAmt
  })
}

    setTheme({themeDetailsData})
  }, [cartTotalAmt]);

  useEffect(()=>{
    let interval;
    if(!window.state){
     interval= setInterval(() => {
        // @ts-ignore
        syncCartSummary(window.fc_cart_details || walletAppliedDetails);
      }, 20000);
      window.state=true;
    }
      setCheckoutTarget({
        enable: false,
        isSet: true,
      });

    return () => {
      clearInterval(interval);
      window.state=false;
    };
  },[])


  useEffect(() => {
    loadCartSummary();
  }, [refetchCartSummary, cashbackDetails?.type]);
  
  
  useEffect(() => {
    const mainScript = document.querySelector("#fc-wallet-cart-widget-script-19212");
    const customer_id = mainScript.getAttribute("data-customer-id");
    setCustomerDetails((prev)=>({
      ...prev,
      customerID: customer_id,
    }));

    if (!customer_id) {
      removeAppliedCouponCode();
    }

  }, []);

  const removeAppliedCouponCode = async () => {
    const clearDiscountCode = "FC_REMOVE_CODE";
    const walletAppliedCode = localStorage.getItem("fc-wallet-applied-code") || "";

    try {
      // First, remove the wallet coupon code if it was applied
      if (walletAppliedCode) {
        await fetch(`/discount/${clearDiscountCode}`);
        localStorage.removeItem("fc-wallet-applied-code");
      }

      // Next, remove any other applied discount code
      const appliedDiscountCode = localStorage.getItem("fc-coupon-applied-code");
      if (appliedDiscountCode) {
        await fetch(`/discount/${appliedDiscountCode}`);
        localStorage.removeItem("fc-coupon-applied-code");
      }
    } catch (error) {
      console.error("Error removing applied coupon code:", error);
    }
  };

  return (
    (!isCartEmpty && 
      <>
      {!loadingCashbackDetails && cashbackAmount !== 0 && (
        <>
        {renderCashbackStrip && <div class="cashback-strip-container">
          {  applicableOn =="PREPAID_ORDERS"  &&
          <p>
            You'll get&nbsp;<span>Rs. {parseFloat(`${cashbackAmount}`).toFixed(2)} cashback</span>
            &nbsp;on prepaid order.
          </p>}

          {  applicableOn =="COD_ORDERS"  &&
          <p>
            You'll get&nbsp;<span>Rs. {parseFloat(`${cashbackAmount}`).toFixed(2)} cashback</span>
            &nbsp;on COD order.
          </p>}

          {  applicableOn =="ALL_ORDERS"  &&
          <p>
            You'll get&nbsp;<span>Rs. {parseFloat(`${cashbackAmount}`).toFixed(2)} cashback</span>
            &nbsp;with this order.
          </p>}


        </div>}
        </>
      )}
      {customerDetails?.customerID ? (
        <div>
          <ApplyWallet
            customerDetails={customerDetails}
            checkoutTarget={checkoutTarget}
            renderApplyCouponCodeBox={renderApplyCouponCodeBox}
            refetchCartSummary={refetchCartSummary}
            calculateCashback={calculateCashback}
            setUserHash={setCustomerDetails}
            renderWalletCredit={renderWalletCredit}
            themeDetailsData={themeDetailsData}
          />
        </div>
      ) : (
        <>
          {modernUiTheme === "modern" ? <ModernLogin themeDetailsData={themeDetailsData} customerDetails={customerDetails}/> : 
          <>
          <Login themeDetails={themeDetailsData} />
          <LoggedoutCartSummary
            loadingWalletBal={loadingWalletBal}
            walletAppliedDetails={walletAppliedDetails}
            />
          </>
          }
        </>
      )}
    </>
    )
  );
}
