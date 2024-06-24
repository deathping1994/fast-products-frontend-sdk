import { useEffect, useState } from "preact/hooks";
import { WALLET_API_URI } from "..";

const Main = ({themeDetailsData, shadowRoot}) => {
    const [cashbackDetails, setCashbackDetails] = useState({
        amount: 0,
        type: null,
    });
    const [walletAppliedDetails, setWalletAppliedDetails] = useState({
        currency: null,
        totalPayablePrice: 0,
        totalDiscount: 0,
    });
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
    const [cashbackAmount, setCashbackAmount] = useState(0);
    const [loadingCashbackDetails, setLoadingCashbackDetails] = useState(true);
    const [appliedDiscountsList, setAppliedDiscountsList] = useState(null);
    const [appliedDiscountCode, setAppliedDiscountCode] = useState("");
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
    const loadCartSummary = async () => {
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
          console.log("ELSE synccart");
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
      useEffect(() => {
        const mainScript = document.querySelector(
          "#fc-wallet-cart-strip-script-19212"
        );
        const customer_id = mainScript.getAttribute("data-customer-id");
        const customer_tags = mainScript.getAttribute("data-customer-tag")?.trim() ;
        const client_id = mainScript.getAttribute("data-client-id");
    
        const checkout_target = mainScript.getAttribute("data-checkout-target");
        const coupon_code_box = mainScript.getAttribute("data-coupon-code-box");
        const cashback_strip = mainScript.getAttribute("data-cashback-strip");
        const wallet_credit = mainScript.getAttribute("data-wallet-credit-box");
        const walletUiTheme = mainScript.getAttribute('wallet-theme')
        const polling = themeDetailsData?.data?.polling?.toLowerCase() !== "false";
    
        if (checkout_target) {
          setCheckoutTarget({
            enable: true,
            isSet: true,
          });
        } else if(polling){
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
          customerTags: customer_tags || sessionStorage.getItem("fc_wallet_user_hash") || '',
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
        {!loadingCashbackDetails && cashbackAmount !== 0 && (
        <>
        <div class="cashback-strip-container">
          <p>
            You'll get&nbsp;<span>Rs. {parseFloat(`${cashbackAmount}`).toFixed(2)} cashback</span>
            &nbsp;with this order
          </p>
        </div>
        </>
      )}
    </>
  )
}

export default Main