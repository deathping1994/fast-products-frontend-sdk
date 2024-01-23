import { useState } from "preact/hooks";
import CouponCard from "./CouponCard";
import ViewAllCoupons from "./ViewAllCoupons";

const ShowCoupons = ({btnClick, viewAll, isVisible}) => {
    
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
      ];
  return (
    <>
        <div class="viewAllCouponsContainer">
          <h1>Coupons</h1>
          <a onClick={viewAll}>View All</a>
        </div>
        <div class="showAllCouponsList">
          {couponCardResp.map((card, index)=>(
          <CouponCard
            onClick={btnClick}
            key={index}
            couponPrice={card.couponPrice}
            couponDesc={card.couponDesc}
            couponImgLink={card.couponImgLink}
            coinImgLink={card.coinImgLink}
          />
          ))}
        </div>
        {
          isVisible && (
            <ViewAllCoupons closePopup={viewAll}/>
          )
        }
    </>
  )
}

export default ShowCoupons