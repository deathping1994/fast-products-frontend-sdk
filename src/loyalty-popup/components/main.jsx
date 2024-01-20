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

export function Main({ themeDetailsData }) {
  const [visibilty, setVisibility] = useState(true)
  const [overlayVisibility, setOverlayVisibility] = useState(false)
  const [transactionLogs, setTransactionLogs] = useState(false)
  const [couponVisibility, setCouponVisibility] = useState(false)
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
          <div style={overlayVisibility && stopScroll} class="mainPopup">
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
            <ShowCoupons onClick={handleCouponVisibility}/>
            {
              couponVisibility && (
                <CouponOverlay onClick={handleCouponVisibility}/>
              )
            }

            <div style={transactionLogs || couponVisibility ? hideElement : ""}>
              <GamesArena/>
              <InviteCard onClick={handleOverlayVisibility}/>
            </div>
            
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
