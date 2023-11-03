import { useEffect, useState } from "preact/hooks";
import { Checkbox } from "./checkbox";
import { WALLET_API_URI } from "..";
import { CircularLoader } from "./circularloader";
import { SkeletonLoader } from "./skeletonloader";

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function ApplyWallet({ customerDetails }) {
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

  const getUserPoints = async () => {
    setLoadingWalletBal(true);
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
    setLoadingWalletBal(false);
  };

  const toggleUserWalletApplied = async (prevWalletApplied) => {
    setLoadingWalletBal(true);
    if (prevWalletApplied) {
      const walletCouponCode = "WALLET_REMOVED19212";

      fetch(`/discount/${walletCouponCode}`);
      const checkoutResponse = await fetch(
        `/checkout/?discount=${walletCouponCode}`,
        {
          method: "POST",
        }
      );
    } else {
      const cartRes = await fetch(`/cart.json`);
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
      const walletPointsToApply = Math.min(
        Number(userPoints),
        Number(totalPrice)
      );

      //TODO: sending walletPointsToApply to backend api to get the couponcode
      await timeout(1300); //TODO: REMOVE, DONE FOR TESTING

      const walletCouponCode = "WALLETAPPLIED_HAGAKBSK";

      fetch(`/discount/${walletCouponCode}`);
      const checkoutResponse = await fetch(
        `/checkout/?discount=${walletCouponCode}`,
        {
          method: "POST",
        }
      );
      const checkoutURL = checkoutResponse?.url;

      //TODO: check if discount was indeed applied by fetching checkoutURL

      const cartResUpdated = await fetch(`/cart.json`);
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
    setLoadingWalletBal(false);
  };

  const toggleUserWallet = () => {
    setWalletApplied((prev) => {
      toggleUserWalletApplied(prev);
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
  }, []);

  useEffect(() => {
    if (userPoints !== null) {
      toggleUserWalletApplied(!walletApplied);
    }
  }, [userPoints]);

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

      {walletApplied ? (
        <div class="wallet-applied-details-container">
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
                  {"- "}&#8377;
                  {` ${walletAppliedDetails?.walletDiscountApplied}`}
                </>
              ) : (
                0
              )}
            </p>
          </div>

          <div class="wallet-applied-details">
            <p>Total Payable Amount</p>
            <p class="point-details">
              {loadingWalletBal ? (
                <SkeletonLoader width="50px" height="16px" />
              ) : (
                <>&#8377;{` ${walletAppliedDetails?.totalPayablePrice}`}</>
              )}
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
