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

export function Main({ themeDetailsData, shadowRoot }) {
  const [visibilty, setVisibility] = useState(true);
  const [gamesVisibility, setGamesVisibility] = useState(false);
  const [allCouponVisibility, setAllCouponVisibility] = useState(false);
  //
  const [screenDetails, setScreenDetails] = useState({
    screen: "home_screen",
    active: false,
  });
  const handleAllCouponVisibility = () => {
    setAllCouponVisibility(!allCouponVisibility);
  };
  // overlay
  const [overlayVisible, setOverlayVisible] = useState({
    overlay: "none",
    active: false,
  });
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

  const close = () => {
    setOverlayVisible({
      ...overlayVisible,
      overlay: "none",
      active: false,
    });
  };
  const handleOverlay = (overlayname) => {
    if (overlayname === "coupon") {
      return <CouponOverlay onClick={close} />;
    }
    if (overlayname === "invite_and_earn") {
      return <InviteAndEarnOverlay closeOverlay={close} />;
    }
  };

  const closeOverlayContainer = () => {
    setOverlayVisible({
      ...overlayVisible,
      overlay: "none",
      active: false,
    });
  };

  const gamesData = [
    {
      gameTitle: "Wheel of Fortune",
      cardImage: "https://media.farziengineer.co/farziwallet/spin-wheel.png",
      gamePrice: "10",
      coinImage: "https://media.farziengineer.co/farziwallet/coin-icon.png",
      btnText: "Explore",
    },
    {
      gameTitle: "Scratch Card",
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
        return <PlayGame shadowRoot={shadowRoot} />;
      case "show_spin_wheel":
        return (
          <ShowGames
            handleOverlay={handleShowGames}
            showPlayGameScreen={showPlayGameScreen}
          />
        );
      case "transaction_log":
        return <TransactionLog />;
      case "play_scratch_card":
        return <ScratchCard shadowRoot={shadowRoot} />;
      case "show_scratch_card":
        return (
          <ShowScratchCard
            handleOverlay={handleShowGames}
            showScratchCardScreen={showScratchCardScreen}
          />
        );
      default:
        console.warn("Unknown screen:", screenname)
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
                closeOverlay={closeScreen}
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
                  onClick={() => handleScreenComponent("transaction_log")}
                />
                <ShowCoupons
                  btnClick={() => changeOverlay("coupon")}
                  viewAll={handleAllCouponVisibility}
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
                closeOverlay={closeOverlayContainer}
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
