import { useEffect, useState } from "preact/hooks";
import { WALLET_API_URI } from "..";
import WalletPointsActivity from "./WalletPointsActivity";
import WalletCard from "../components/WalletCard";
import InviteCard from "../components/InviteCard";
import ShowCoupons from "../components/ShowCoupons";
import GamesArena from "../components/GamesArena";
import CouponOverlay from "../components/CouponOverlay";
import CouponCard from "../components/CouponCard";
import PointsActivity from "../components/WalletPointsActivity"
import InviteAndEarnOverlay from "../components/InviteAndEarnOverlay";
import GamesCard from "./GamesCard";
import ShowGames from "./ShowGames";

export function Main({ themeDetailsData }) {
  const [visibilty, setVisibility] = useState(true)
  const [overlayVisibility, setOverlayVisibility] = useState(false)
  const [transactionLogs, setTransactionLogs] = useState(false)
  const [couponVisibility, setCouponVisibility] = useState(false)
  const [gamesVisibility, setGamesVisibility] = useState(false)
  const [allCouponVisibility, setAllCouponVisibility] = useState(false)
    const handleAllCouponVisibility = ()=>{
      setAllCouponVisibility(!allCouponVisibility)
    }
  
  const gamesData = [
    {
        gameTitle: "Wheel of Fortune",
        cardImage: "https://media.farziengineer.co/farziwallet/spin-wheel.png",
        gamePrice: "10",
        coinImage: "https://media.farziengineer.co/farziwallet/coin-icon.png",
        btnText: "Explore"
    },
    {
        gameTitle: "Scratch Card",
        cardImage: "https://media.farziengineer.co/farziwallet/scratch-card.png",
        gamePrice: "20",
        coinImage: "https://media.farziengineer.co/farziwallet/coin-icon.png",
        btnText: "Explore"
    }
]
  const handleViewPopup = ()=>{
      setVisibility(!visibilty)
  }
  const handleOverlayVisibility = ()=>{
    setOverlayVisibility(!overlayVisibility)
  }

  const closeOverlay = ()=>{
    setOverlayVisibility(!overlayVisibility)
  }
  const handleTransactionLogs = () => {
    setTransactionLogs(!transactionLogs);
  };
  const handleCouponVisibility = () => {
    setCouponVisibility(!couponVisibility);
  };
  const handleGamesVisibility = () => {
    setGamesVisibility(!gamesVisibility);
  };

  const handleShowGames = ()=>{
    setGamesVisibility(!gamesVisibility)
  }
  
  const hideElement = {
    display: "none"
  }

  const stopScroll = {
    overflowY: 'hidden'
  };
  
  // const selectShadowDom = document.querySelector('.fc-loyalty-popup-19212-root')
  // selectShadowDom.style.overflowY = "hidden"

  const  PointsActivityArray = [
    {
      "id": 1,
      "reason": "Test credit",
      "created": "2024-01-19",
      "amount": 100,
      "type": "ADD"
    },
    {
      "id": 2,
      "reason": "Test credit 200",
      "created": "2024-01-20",
      "amount": 150,
      "type": "ADD"
    },
    {
      "id": 3,
      "reason": "Test debite SUB",
      "created": "2024-01-20",
      "amount": 50,
      "type": "SUB"
    },
    {
      "id": 4,
      "reason": "Test debite 100" ,
      "created": "2024-01-21",
      "amount": 100,
      "type": "SUB"
    }
]
  
  return (
    <>
      <img onClick={handleViewPopup} class="floatingPopup" src="https://media.farziengineer.co/farziwallet/gift-icon.png" width={30} height={30} alt="gift icon" />
      {visibilty && (
        <>  
          <div class="mainPopup">
            <div class="header">
                <div class="leftHeader">
                    <p>Welcome to</p>
                    <h6>Loyality</h6>
                </div>
                <div class="rightHeader">
                    <img class="closePopup" onClick={handleViewPopup} src="https://media.farziengineer.co/farziwallet/cross.png" alt="" />
                </div>
            </div>
            <WalletCard onClick={handleTransactionLogs}/>
            <ShowCoupons btnClick={handleCouponVisibility} viewAll={handleAllCouponVisibility} isVisible={allCouponVisibility}/>
            {
              couponVisibility && (
                <CouponOverlay onClick={handleCouponVisibility}/>
              )
            }

            <div style={transactionLogs || couponVisibility || gamesVisibility || allCouponVisibility ? hideElement : ""}>
              <div class="gamesArenaContainer">
                    <h1>Games Arena</h1>
                    <p>Play games to win FC coins, coupons & rewards</p>
              </div>
              <div class="gamesHorizontalList">
                  {
                      gamesData.map((card, idx)=>(
                          <GamesCard key={idx} btnClick={handleGamesVisibility} gameTitle={card.gameTitle} cardImage={card.cardImage} gamePrice={card.gamePrice} coinImage={card.coinImage} btnText={card.btnText}/>
                      ))
                  }
              </div>
              <InviteCard onClick={handleOverlayVisibility}/>
            </div>
            {gamesVisibility && (
              <ShowGames handleOverlay={handleShowGames} />
            )}
            
            {
              overlayVisibility && (
                  <InviteAndEarnOverlay closeOverlay={closeOverlay}/>
              )
            }
            {
              transactionLogs && (
                <div class="pointsActivityClass">
                  <div class="pointsActivityHeader">
                    <h4>Points activity</h4>
                    <img onClick={handleTransactionLogs} src="https://media.farziengineer.co/farziwallet/cross.png" alt="" />
                  </div>
                  {
                    PointsActivityArray.map((points, pointIndex)=>(<PointsActivity 
                      id={points.id} reason={points.reason} created={points.created} amount={points.amount} type={points.type}
                    />))
                  }
                </div>
              )
            }
            
          </div>
        </>
      )}
    </>
  );
}
