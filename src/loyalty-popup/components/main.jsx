import { useEffect, useState } from "preact/hooks";
import { WALLET_API_URI } from "..";
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

export function Main({ themeDetailsData, shadowRoot }) {
  const [visibilty, setVisibility] = useState(true);
  const [gamesVisibility, setGamesVisibility] = useState(false);
  const [walletAmount, setWalletAmount] = useState(0)
  const [walletLogs, setWalletLogs] = useState([])
  const [spinWheelAmount, setSpinWheelAmount] = useState(0)
  const [scratchCardAmount, setScratchCardAmount] = useState(0)
  const [loading, setLoading] = useState(true);
  const [featuredCoupons, setFeaturedCoupons] = useState([])
  const [couponCardIdx, setCouponCardIdx] = useState(0)
  const funcScratchCardAmount = (amount)=>{
    console.log("func scr card===", amount);
    setScratchCardAmount(amount)
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const walletResponse = await fetchApi('/user-walletlogs', 'post');
        console.log("responsedata", walletResponse?.data?.data?.data?.wallet?.wallet?.logs?.edges);
        setWalletAmount(walletResponse?.data?.data?.data?.wallet?.wallet?.amount);
        setWalletLogs(walletResponse?.data?.data?.data?.wallet?.wallet?.logs?.edges);

        const couponResponse = await fetchApi('/get-featured-coupons', 'post');
        console.log(couponResponse?.data?.data);
        setFeaturedCoupons(couponResponse?.data?.data);
      } catch (error) {
        console.error("Error fetching wallet data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  const btnClick = (idx)=>{
    changeOverlay("coupon")
    setCouponCardIdx(idx)
  }
  // screen
  const [screenDetails, setScreenDetails] = useState({
    screen: "home_screen",
    active: false,
  });

  // overlay
  const [overlayVisible, setOverlayVisible] = useState({
    overlay: "none",
    active: false,
  });

  const funcSetSpinWheelAmount = (amount)=>{
    setSpinWheelAmount(amount)
  }
  const handleViewPopup = () => {
    setVisibility(!visibilty);
  };
  const changeOverlay = (overlayname) => {
    setOverlayVisible({
      ...overlayVisible,
      overlay: overlayname,
      active: true,
    });
  };

  const closeOverlay = () => {
    setOverlayVisible({
      ...overlayVisible,
      overlay: "none",
      active: false,
    });
  };

  const handleOverlay = (overlayname) => {
    if (overlayname === "coupon") {
      return <CouponOverlay couponData={featuredCoupons[couponCardIdx]} onClick={closeOverlay} />;
    }
    if (overlayname === "invite_and_earn") {
      return <InviteAndEarnOverlay closeOverlay={closeOverlay} />;
    }
  };
  const gamesData = [
    {
      name:"show_spin_wheel",
      gameTitle: "Wheel of Fortune",
      gameDesc: "Start at",
      cardImage: "https://media.farziengineer.co/farziwallet/spin-wheel.png",
      gamePrice: "10",
      coinImage: "https://media.farziengineer.co/farziwallet/coin-icon.png",
      btnText: "Explore",
    },
    {
      name:"show_scratch_card",
      gameTitle: "Scratch Card",
      gameDesc: "Start at",
      cardImage: "https://media.farziengineer.co/farziwallet/scratch-card.png",
      gamePrice: "10",
      coinImage: "https://media.farziengineer.co/farziwallet/coin-icon.png",
      btnText: "Explore",
    },
  ];

  const showPlayGameScreen = () => {
    setScreenDetails({
      ...screenDetails,
      screen: "play_spin_wheel",
      active: true,
    });
  };
  const showScratchCardScreen = () => {
    setScreenDetails({
      ...screenDetails,
      screen: "play_scratch_card",
      active: true,
    });
  };

  const closeScreen = () => {
    setScreenDetails({
      ...screenDetails,
      screen: "home_screen",
      active: false,
    });
  };

  const handleShowGames = () => {
    setGamesVisibility(!gamesVisibility);
    console.log(" handle show games log ");
  };
  

  const handleScreenComponent = (screenname) => {
    setScreenDetails({
      ...screenDetails,
      screen: screenname,
      active: true,
    });
  };

  const getScreenComponent = (screenname) => {
    console.log("screen changed", screenname);

    switch (screenname) {
      case "play_spin_wheel":
        return <PlayGame walletAmount={walletAmount} spinWheelAmount={spinWheelAmount} shadowRoot={shadowRoot} />;
      case "show_spin_wheel":
        return (
          <ShowGames
            walletAmount={walletAmount}
            funcSetSpinWheelAmount={funcSetSpinWheelAmount}
            handleOverlay={handleShowGames}
            showPlayGameScreen={showPlayGameScreen}
          />
        );
      case "transaction_log":
        return <TransactionLog walletLogs={walletLogs} />;
      case "play_scratch_card":
        return <ScratchCard scratchCardAmount={scratchCardAmount} walletAmount={walletAmount} shadowRoot={shadowRoot} />;
      case "show_scratch_card":
        return (
          <ShowScratchCard
            walletAmount={walletAmount}
            funcScratchCardAmount={funcScratchCardAmount}
            handleOverlay={handleShowGames}
            showScratchCardScreen={showScratchCardScreen}
          />
        );
      case "show_all_coupons":
        return <ViewAllCoupons walletAmount={walletAmount} couponCardResponse={featuredCoupons} />;
      default:
        console.warn("Unknown screen:", screenname);
    }
  };

  return (
    <>
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
          <div class="mainPopup">
            {screenDetails?.active ? (
              <Screen
                closeScreen={closeScreen}
                screenTitle={screenDetails?.screen || "screentitle"}
                content={getScreenComponent(screenDetails?.screen)}
              />
            ) : (
              loading ? <div className="loader"><Loading/></div> : 
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
                <WalletCard
                  walletAmount={walletAmount}
                  onClick={() => handleScreenComponent("transaction_log")}
                />
                {/* <ShowCoupons
                  btnClick={()=> btnClick(index)}
                  viewAll={()=> handleScreenComponent("show_all_coupons")}
                /> */}
                <div class="viewAllCouponsContainer">
                  <h1>Coupons</h1>
                  <a onClick={()=> handleScreenComponent("show_all_coupons")}>View All</a>
                </div>
                <div class="showAllCouponsList">
                  {featuredCoupons.map((card, index)=>(
                  <CouponCard
                    onClick={()=> btnClick(index)}
                    key={index}
                    couponPrice={card.amount}
                    couponDesc={card.title}
                    couponImgLink={card.image}
                    coinImgLink={"https://media.farziengineer.co/farziwallet/coin-icon.png"}
                  />
                  ))}
                </div>

                <div>
                  <div class="gamesArenaContainer">
                    <h1>Games Arena</h1>
                    <p>Play games to win FC coins, coupons & rewards</p>
                  </div>
                  <div class="gamesHorizontalList">
                    {gamesData.map((card, idx) => (
                      <GamesCard
                        key={idx}
                        btnClick={() => handleScreenComponent(card.name)}
                        gameTitle={card.gameTitle}
                        gameDesc={card.gameDesc}
                        cardImage={card.cardImage}
                        gamePrice={card.gamePrice}
                        coinImage={card.coinImage}
                        btnText={card.btnText}
                        
                      />
                    ))}
                  </div>
                  <InviteCard
                    onClick={() => changeOverlay("invite_and_earn")}
                  />
                </div>
              </>
            )}
            {overlayVisible?.active ? (
              <Overlay
                content={handleOverlay(overlayVisible?.overlay)}
              />
            ) : (
              <></>
            )}
          </div>
        </>
      )}
    </>
  );
}
function async(arg0) {
  throw new Error("Function not implemented.");
}

