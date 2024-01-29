import { useEffect, useState } from "preact/hooks";
import { WALLET_API_URI } from "..";
import WalletCard from "../components/WalletCard";
import InviteCard from "../components/InviteCard";
import ShowCoupons from "../components/ShowCoupons";
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
import axios from "axios";

export function Main({ themeDetailsData, shadowRoot }) {
  const [visibilty, setVisibility] = useState(true);
  const [gamesVisibility, setGamesVisibility] = useState(false);
  const [walletAmount, setWalletAmount] = useState(0)
  const [walletLogs, setWalletLogs] = useState([])
  const [spinWheelRewardData, setSpinWheelRewardData] = useState([])
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
  const fetchSpinWheelReward = async ()=>{
    const response = await axios.post('https://fastloyaltyapi.farziengineer.co/get-spin-wheel-rewards',
      {
        client_id : "Q2xpZW50OjY=",
        couponAmount:10,
        customer_id: "7734670819630",
        user_hash: "299037b6d401b25374f60cb316c24114"
      },
      {
        headers: {
          'Content-Type': 'application/json'
      }
    })
    setSpinWheelRewardData(response?.data?.data)
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
      return <CouponOverlay onClick={closeOverlay} />;
    }
    if (overlayname === "invite_and_earn") {
      return <InviteAndEarnOverlay closeOverlay={closeOverlay} />;
    }
  };

  // get wallet amount and logs
  useEffect(() => {
    const fetchData = async ()=>{
      const response = await fetchApi('/user-walletlogs', 'post')
      console.log("responsedata", response?.data?.data?.data?.wallet?.wallet?.logs?.edges);
      setWalletAmount(response?.data?.data?.data?.wallet?.wallet?.amount)
      setWalletLogs(response?.data?.data?.data?.wallet?.wallet?.logs?.edges)
    }
    fetchData()
  }, []);

  const gamesData = [
    {
      gameTitle: "Wheel of Fortune",
      gameDesc: "Start at",
      cardImage: "https://media.farziengineer.co/farziwallet/spin-wheel.png",
      gamePrice: "10",
      coinImage: "https://media.farziengineer.co/farziwallet/coin-icon.png",
      btnText: "Explore",
    },
    {
      gameTitle: "Scratch Card",
      gameDesc: "Start at",
      cardImage: "https://media.farziengineer.co/farziwallet/scratch-card.png",
      gamePrice: "20",
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
        return <PlayGame spinWheelRewardData={spinWheelRewardData} shadowRoot={shadowRoot} />;
      case "show_spin_wheel":
        return (
          <ShowGames
            fetchSpinWheelReward={fetchSpinWheelReward}
            handleOverlay={handleShowGames}
            showPlayGameScreen={showPlayGameScreen}
          />
        );
      case "transaction_log":
        return <TransactionLog walletLogs={walletLogs} />;
      case "play_scratch_card":
        return <ScratchCard shadowRoot={shadowRoot} />;
      case "show_scratch_card":
        return (
          <ShowScratchCard
            handleOverlay={handleShowGames}
            showScratchCardScreen={showScratchCardScreen}
          />
        );
      case "show_all_coupons":
        return <ViewAllCoupons />;
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
                <ShowCoupons
                  btnClick={() => changeOverlay("coupon")}
                  viewAll={()=> handleScreenComponent("show_all_coupons")}
                />

                <div>
                  <div class="gamesArenaContainer">
                    <h1>Games Arena</h1>
                    <p>Play games to win FC coins, coupons & rewards</p>
                  </div>
                  <div class="gamesHorizontalList">
                    {gamesData.map((card, idx) => (
                      <GamesCard
                        key={idx}
                        btnClick={() =>
                          idx === 0
                            ? handleScreenComponent("show_spin_wheel")
                            : handleScreenComponent("show_scratch_card")
                        }
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
                closeOverlay={closeOverlay}
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
