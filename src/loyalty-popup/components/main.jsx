import { useEffect, useState } from "preact/hooks";
import WalletCard from "../components/WalletCard";
import InviteCard from "../components/InviteCard";
import CouponOverlay from "./Overlays/CouponOverlay";
import InviteAndEarnOverlay from "./Overlays/InviteAndEarnOverlay";
import GamesCard from "./GamesCard";
import ShowGames from "./ShowGames";
import Screen from "./Screen";
import PlayGame from "./PlayGame";
import Overlay from "./Overlays/Overlay";
import TransactionLog from "./TransactionLog";
import ShowScratchCard from "./ShowScratchCard";
import ScratchCard from "./ScratchCard";
import ViewAllCoupons from "./ViewAllCoupons";
import fetchApi from "./Utils/FetchApi";
import CouponCard from "./CouponCard";
import Loading from "./Utils/Loading";
import Referral from "./Referral";
import Logout from "./Logout";
import Alert from "./Utils/Alert";
import ReferralPopup from "./ReferralPopup";

export function Main({ themeDetailsData, shadowRoot }) {
  const [visibilty, setVisibility] = useState(false);
  const [referralPopup, setReferralPopup] = useState(false)
  const [referedAmount, setReferedAmount] = useState(0)
  const [walletAmount, setWalletAmount] = useState(0);
  const [walletLogs, setWalletLogs] = useState([]);
  const [spinWheelAmount, setSpinWheelAmount] = useState(0);
  const [scratchCardAmount, setScratchCardAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState({
    error: false,
    msg: ""
  })
  const [featuredCoupons, setFeaturedCoupons] = useState([]);
  const [couponCardIdx, setCouponCardIdx] = useState(0);
  const [customerDetails, setCustomerDetails] = useState({
    customer_id: "",
    user_hash: "",
    client_id: "",
  });
  const [singleSpinWheel, setSingleSpinWheel] = useState({
    title: "",
    description: "",
    image: "",
    amount: "",
    btnText: "",
  })
  
  const [singleScratchCard, setSingleScratchCard] = useState({
    title: "",
    description: "",
    image: "",
    amount: "",
    btnText: "",
  })
  // console.log("customer details", customerDetails);
  const [screenDetails, setScreenDetails] = useState({
    screen: "home_screen",
    screenTitle: "",
    active: false,
  });
  const [overlayVisible, setOverlayVisible] = useState({
    overlay: "none",
    active: false,
  });
  // console.log("========== running on local pr ===========");
  const couponCardData = [
		{
			"heading": "₹ 10 Voucher",
			"title": "Rs. 10 off on Striped Silk Blouse",
			"description": "The management reserves the right to modify the coupon as they see fit and to adjust the customer's wallet if they determine the event.",
			"label": "₹ 10",
			"image": "https://media.farziengineer.co/farziwallet/coupon-image-top.png",
			"amount": 10
		},
		{
			"heading": "₹ 30 Voucher",
			"title": "Rs. 30 off on Striped Silk Blouse",
			"description": "The management reserves the right to modify the coupon as they see fit and to adjust the customer's wallet if they determine the event.",
			"label": "₹ 30",
			"image": "https://media.farziengineer.co/farziwallet/coupon-image-top.png",
			"amount": 30
		},
		{
			"heading": "₹ 50 Voucher",
			"title": "Rs. 50 off on Striped Silk Blouse",
			"description": "The management reserves the right to modify the coupon as they see fit and to adjust the customer's wallet if they determine the event.",
			"label": "₹ 50",
			"image": "https://media.farziengineer.co/farziwallet/coupon-image-top.png",
			"amount": 50
		}
	]
  const handleLogin = ()=>{
    if(!isLoggedIn){
      window.location.href = themeDetailsData?.data?.login_page
    }
  }
  const handleCloseReferralPopup = () => {
    setReferralPopup(false)
  }
  const showError = (msg)=>{
    setError({
      error:true,
      msg:msg
    })
    setTimeout(()=>{
      setError({
        error:false,
        msg:""
      })
    },3000)
  }
  const funcScratchCardAmount = (amount) => {
    // console.log("func scr card===", amount);
    setScratchCardAmount(amount);
  };
  async function redeemReferHash({ client_id, customer_id, user_hash }) {
    const fc_refer_hash = localStorage.getItem("fc_refer_hash");
    // console.log("fc refer", fc_refer_hash);
    if (fc_refer_hash) {
      try {
        // console.log("hitting redeem referral code");
        // @ts-ignore
        const response = await fetchApi('/redeem-referral-code', 'post', {
          client_id:client_id,
          customer_id: customer_id,
          // user_hash: user_hash,
          refer_hash: fc_refer_hash
        })
        if(response?.status === 'success'){
          setReferralPopup(true)
          setReferedAmount(response?.data?.referredReward)
          // console.log("fc_refer response", response);
          localStorage.removeItem("fc_refer_hash");
          return
        }
        // console.log("/////////  nhi huva    ///////");
      } catch (err) {
        console.log("error in redeemReferHash", err);
      } 
    }
  }
  function setTheme({ themeDetails }) {
    var cssVariablesScope = shadowRoot.querySelector(".mainPopup");

    if (cssVariablesScope && themeDetails?.data?.theme_color) {
      cssVariablesScope.style.setProperty(
        "--loyalty_popup_theme_background",
        themeDetails?.data?.theme_color
      );

      if (themeDetails?.data?.coin_icon) {
        cssVariablesScope.style.setProperty(
          "--coin-svg-url",
          `url("${themeDetails?.data?.coin_icon}")`
        );
        cssVariablesScope.style.setProperty(
          "--coin-svg-inverted-url",
          `url("${themeDetails?.data?.coin_icon}")`
        );
      } else {
        cssVariablesScope.style.setProperty(
          "--coin-svg-url",
          `url("https://media.farziengineer.co/farziwallet/coin-icon.png")`
        );
        cssVariablesScope.style.setProperty(
          "--coin-svg-inverted-url",
          `url("https://media.farziengineer.co/farziwallet/coin-icon.png")`
        );
      }
    }

    if (themeDetails?.data?.coin_name) {
      // @ts-ignore
      window.fc_loyalty_vars = {
        coin_name: themeDetails?.data?.coin_name,
      };
    } else {
      // @ts-ignore
      window.fc_loyalty_vars = {
        coin_name: "FC",
      };
    }

    shadowRoot.querySelector(".floatingPopup").style.display = "flex"; //widget visible only after custom styles are applied
  }
  useEffect(() => {
    setTheme({ themeDetails: themeDetailsData });
    // console.log(themeDetailsData);
  }, [visibilty]);

  useEffect(() => {
    (function loadfont() {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap";
      document.head.appendChild(link);
    })();

    (function loadGlobalStyles() {
      const styles = document.createElement("style");
      styles.innerHTML = `
          .fc-no-scroll {
              overflow: hidden;
          }
      `;
      document.body.appendChild(styles);
    })();

    const mainScript = document.querySelector("#fc-loyalty-popup-script-19212");
    const customer_id = mainScript.getAttribute("data-customer-id");
    const user_hash = mainScript.getAttribute("data-customer-tag")?.trim();
    const client_id = mainScript.getAttribute("data-client-id");
    setCustomerDetails({ client_id, customer_id, user_hash });
    // logged in
    if (customer_id) {
      setIsLoggedIn(true);
      // console.log("reddeem ke upar log custID", customer_id);
      // console.log("reddeem ke userHash", user_hash);
      redeemReferHash({ client_id, customer_id, user_hash });
    }
  }, []);

  useEffect(() => {
    if (customerDetails?.customer_id !== "") {
      const fetchData = async () => {
        try {
          setLoading(true);
          const walletResponse = await fetchApi("/user-walletlogs","post",{
            ...customerDetails
          }
          );
          // console.log("responsedata",walletResponse?.data?.data?.wallet?.wallet?.amount);
          if(walletResponse?.status !== 'success'){
            showError("Failed")
          }else{
            setWalletAmount(walletResponse?.data?.data?.wallet?.wallet?.amount);
            setWalletLogs(walletResponse?.data?.data?.wallet?.wallet?.logs?.edges);
          }

        } catch (error) {
          console.error("Error fetching wallet data:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [customerDetails, screenDetails?.screen, referralPopup]);

  useEffect(()=>{
    const mainScript = document.querySelector("#fc-loyalty-popup-script-19212");
    const client_id = mainScript.getAttribute("data-client-id");
    console.log(client_id);
    const fetch = async ()=>{
      const couponResponse = await fetchApi(
        "/get-featured-coupons",
        "post",
        {client_id}
      );
      if(couponResponse?.status !== "success"){
        showError(couponResponse?.error)
      }else{
        // console.log("========",couponResponse?.data);
        setFeaturedCoupons(couponResponse?.data);
      }
      const spinWheelResponse = await fetchApi('/get-featured-spin-wheels', 'post', {client_id});
      setSingleSpinWheel(spinWheelResponse?.data[0]);
      const scratchCardResponse = await fetchApi('/get-featured-scratch-cards', 'post', {client_id})
      setSingleScratchCard(scratchCardResponse?.data[0])
    }
    fetch()
  },[])
  const btnClick = (idx) => {
    changeOverlay("coupon");
    setCouponCardIdx(idx);
  };

  const funcSetSpinWheelAmount = (amount) => {
    setSpinWheelAmount(amount);
  };
  const handleViewPopup = () => {
    setVisibility(!visibilty);
  };
  const changeOverlay = (overlayname) => {
    const mainPopup = shadowRoot.querySelector(".mainPopup")
    const scrolledTop = mainPopup.scrollTop
    mainPopup.style.overflowY = "hidden";
    const overlay = shadowRoot.querySelector(".overlay")
    overlay.style.display = "flex"
    overlay.style.position = "absolute";
    overlay.style.top = `${scrolledTop}px`;
    overlay.style.height = "100%";
    overlay.style.width = "100%";
    setOverlayVisible({
      ...overlayVisible,
      overlay: overlayname,
      active: true,
    });
  };

  const closeOverlay = () => {
    const mainPopup = shadowRoot.querySelector(".mainPopup")
    const overlay = shadowRoot.querySelector(".overlay")
    overlay.style.display = "none"
    mainPopup.style.overflowY = "scroll";
      setOverlayVisible({
        ...overlayVisible,
        overlay: "none",
        active: false,
      });
  };

  const handleOverlay = (overlayname) => {
    if (overlayname === "coupon") {
      return (
        <CouponOverlay
          customerDetails={customerDetails}
          couponData={featuredCoupons[couponCardIdx]}
          onClick={closeOverlay}
        />
      );
    }
    if (overlayname === "invite_and_earn") {
      return (
        <InviteAndEarnOverlay
          customerDetails={customerDetails}
          closeOverlay={closeOverlay}
        />
      );
    }
  };
  const gamesData = [
    {
      name: "show_spin_wheel",
      gameTitle: "Wheel of Fortune",
      gameDesc: "Start at",
      cardImage: "https://media.farziengineer.co/farziwallet/spin-wheel.png",
      gamePrice: "10",
      btnText: "Explore",
    },
    {
      name: "show_scratch_card",
      gameTitle: "Scratch Card",
      gameDesc: "Start at",
      cardImage: "https://media.farziengineer.co/farziwallet/scratch-card.png",
      gamePrice: "10",
      btnText: "Explore",
    },
  ];

  useEffect(() => {
    if (visibilty) {
      document.body.classList.add("fc-no-scroll");
    } else {
      document.body.classList.remove("fc-no-scroll");
    }
  }, [visibilty]);

  const showPlayGameScreen = () => {
    setScreenDetails({
      ...screenDetails,
      screen: "play_spin_wheel",
      screenTitle: "Play Wheel of Fortune",
      active: true,
    });
  };
  const showScratchCardScreen = () => {
    setScreenDetails({
      ...screenDetails,
      screen: "play_scratch_card",
      screenTitle: "Scratch Your Card",
      active: true,
    });
  };

  const closeScreen = () => {
    setScreenDetails({
      ...screenDetails,
      screen: "home_screen",
      screenTitle: "",
      active: false,
    });
  };

  const handleScreenComponent = (screenname, screenTitle) => {
    setScreenDetails({
      ...screenDetails,
      screen: screenname,
      screenTitle: screenTitle,
      active: true,
    });
  };



  const getScreenComponent = (screenname) => {
    switch (screenname) {
      case "play_spin_wheel":
        return (
          <PlayGame
            customerDetails={customerDetails}
            showSpinGameScreen={handleScreenComponent}
            walletAmount={walletAmount}
            spinWheelAmount={spinWheelAmount}
            shadowRoot={shadowRoot}
          />
        );
      case "show_spin_wheel":
        return (
          <ShowGames
            customerDetails={customerDetails}
            walletAmount={walletAmount}
            funcSetSpinWheelAmount={funcSetSpinWheelAmount}
            showPlayGameScreen={showPlayGameScreen}
            screenDetails={screenDetails}
          />
        );
      case "transaction_log":
        return <TransactionLog walletLogs={walletLogs} />;
      case "play_scratch_card":
        return (
          <ScratchCard
            customerDetails={customerDetails}
            showScratchCardScreen={handleScreenComponent}
            scratchCardAmount={scratchCardAmount}
            walletAmount={walletAmount}
            shadowRoot={shadowRoot}
          />
        );
      case "show_scratch_card":
        return (
          <ShowScratchCard
            customerDetails={customerDetails}
            walletAmount={walletAmount}
            funcScratchCardAmount={funcScratchCardAmount}
            showScratchCardScreen={showScratchCardScreen}
          />
        );
      case "show_all_coupons":
        return (
          <ViewAllCoupons
          shadowRoot={shadowRoot}
            walletAmount={walletAmount}
            couponCardResponse={featuredCoupons}
            customerDetails={customerDetails}
          />
        );
      default:
        console.warn("Unknown screen:", screenname);
    }
  };

  return (
    <>
      <Referral />
      <img
        onClick={handleViewPopup}
        class="floatingPopup"
        src="https://media.farziengineer.co/farziwallet/gift-icon.png"
        width={30}
        height={30}
        alt="gift icon"
      />
      {visibilty && (
        <>
          <div onClick={handleLogin} class="mainPopup">
            {screenDetails?.active ? (
              <Screen
                closeScreen={closeScreen}
                screenTitle={screenDetails?.screenTitle || "screentitle"}
                content={getScreenComponent(screenDetails?.screen)}
              />
            ) : loading ? (
              <div className="loader">
                <Loading />
              </div>
            ) : (
              <>
                <div class="header">
                  <div class="leftHeader">
                    <p>Welcome to</p>
                    <h6>Loyalty</h6>
                  </div>
                  <div class="rightHeader">
                    <img
                      class="closePopup"
                      onClick={handleViewPopup}
                      src="https://media.farziengineer.co/farziwallet/cross.png"
                      alt=""
                    />
                  </div>
                </div>
                {
                  isLoggedIn ? 
                  <WalletCard
                    walletAmount={walletAmount}
                    onClick={() => handleScreenComponent("transaction_log", "Points activity")}
                /> : <Logout/>
                }
                <div class="viewAllCouponsContainer">
                  <h1>Coupons</h1>
                  <a onClick={() => handleScreenComponent("show_all_coupons", "Coupons")}>
                    View All
                  </a>
                </div>
                <div class="showAllCouponsList">
                  {featuredCoupons.length !== 0 && featuredCoupons.map((card, index) => (
                    <CouponCard
                      onClick={() => btnClick(index)}
                      key={index}
                      couponPrice={card.amount}
                      couponDesc={card.title}
                      couponImgLink={card.image}
                    />
                  ))
                }
                </div>

                <div>
                  <div class="gamesArenaContainer">
                    <h1>Games Arena</h1>
                    <p>
                      Play games to win {window.
// @ts-ignore
                      fc_loyalty_vars.coin_name}{" "}
                      coins, coupons & rewards
                    </p>
                  </div>
                  <div class="gamesHorizontalList">
                      <GamesCard 
                        btnClick={() => (isLoggedIn && handleScreenComponent("show_spin_wheel", "Wheel of Fortune"))}
                        gameTitle={singleSpinWheel?.title || "Spin and Win"}
                        gameDesc={singleSpinWheel?.description || "Spin and win coins"}
                        cardImage={singleSpinWheel?.image || "https://media.farziengineer.co/farziwallet/spin-wheel.png"}
                        gamePrice={singleSpinWheel?.amount || "10"}
                        btnText={singleSpinWheel?.btnText || "Explore"}
                      />
                      <GamesCard 
                        btnClick={() => (isLoggedIn && handleScreenComponent("show_scratch_card", "Scratch Card"))}
                        gameTitle={singleScratchCard?.title || "Scratch and Win"}
                        gameDesc={singleScratchCard?.description || "Scratch and win coins"}
                        cardImage={singleScratchCard?.image || "https://media.farziengineer.co/farziwallet/scratch-card.png"}
                        gamePrice={singleScratchCard?.amount || "10"}
                        btnText={singleScratchCard?.btnText || "Explore"}
                      />
                  </div>
                  <InviteCard
                    onClick={() => (isLoggedIn && changeOverlay("invite_and_earn"))}
                  />
                </div>
              </>
            )}
            <div class="overlay">
            {overlayVisible?.active ? (
              <>
                <Overlay content={handleOverlay(overlayVisible?.overlay)} />
              </>
            ) : (
              <></>
            )}
            </div>
            
            {error?.error && <Alert message={error?.msg}/>}
          </div>
        </>
      )}
      {(referralPopup && customerDetails?.client_id) && <ReferralPopup referedAmount={referedAmount} walletAmount={walletAmount} closeReferralPopup={handleCloseReferralPopup}/>}
    </>
  );
}
// @ts-ignore
function async(arg0) {
  throw new Error("Function not implemented.");
}
