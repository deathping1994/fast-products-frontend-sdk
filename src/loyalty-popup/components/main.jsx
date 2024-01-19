import { useEffect, useState } from "preact/hooks";
import { WALLET_API_URI } from "..";
import WalletCard from "./WalletCard";
import InviteCard from "./InviteCard";
import ShowCoupons from "./ShowCoupons";
import GamesArena from "./GamesArena";
import CouponOverlay from "./CouponOverlay";
import CouponCard from "./CouponCard";
import PointsActivity from "./PointsActivity"

export function Main({ themeDetailsData }) {
  const [visibilty, setVisibility] = useState(true)
  const handleViewPopup = ()=>{
      setVisibility(!visibilty)
  }
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
  const couponCardResp = [
    {
      couponPrice: 30,
      couponDesc: "Enjoy a 20% off on your next order!",
      couponImgLink: "https://media.farziengineer.co/farziwallet/coupon-image-top.png",
      coinImgLink: "https://media.farziengineer.co/farziwallet/coin-icon.png",
    },
    {
      couponPrice: 15,
      couponDesc: "Get a special gift with your next order!",
      couponImgLink: "https://media.farziengineer.co/farziwallet/coupon-image-top.png",
      coinImgLink: "https://media.farziengineer.co/farziwallet/coin-icon.png",
    },
    {
      couponPrice: 50,
      couponDesc: "Free shipping on orders over $50!",
      couponImgLink: "https://media.farziengineer.co/farziwallet/coupon-image-top.png",
      coinImgLink: "https://media.farziengineer.co/farziwallet/coin-icon.png",
    },
    {
      couponPrice: 50,
      couponDesc: "Free shipping on orders over $50!",
      couponImgLink: "https://media.farziengineer.co/farziwallet/coupon-image-top.png",
      coinImgLink: "https://media.farziengineer.co/farziwallet/coin-icon.png",
    },
    {
      couponPrice: 50,
      couponDesc: "Free shipping on orders over $50!",
      couponImgLink: "https://media.farziengineer.co/farziwallet/coupon-image-top.png",
      coinImgLink: "https://media.farziengineer.co/farziwallet/coin-icon.png",
    },
  ];
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
            <WalletCard/>
            <ShowCoupons/>
            <GamesArena/>
            <InviteCard/>
            <div class="pointsActivityClass">
              <h4>Points activity</h4>
              {
                PointsActivityArray.map((points, pointIndex)=>(<PointsActivity 
                  id={points.id} reason={points.reason} created={points.created} amount={points.amount} type={points.type}
                />))
              }
            </div>
          </div>
        </>
      )}
    </>
  );
}
