import { useState } from "preact/hooks";
import CouponCard from "./CouponCard";
import CouponOverlay from "./CouponOverlay";
import RedeemCoin from "./RedeemCoin";

const ViewAllCoupons = ({closePopup}) => {
    const [availableTab, setAvailableTab] = useState(true)
    const [yourCouponTab, setYourCouponTab] = useState(false)
    const [unlockedTab, setUnlockedTab] = useState(true)
    const [redeemedTab, setRedeemedTab] = useState(false)
    const [overlayVisibilty, setOverlayVisibilty] = useState(false)
    const [redeemCoinOverlay, setRedeemCoinOverlay] = useState(false)
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

      const btnClick = ()=>{
        console.log("clicked");
      }

     const handleMainTab = (mainTab)=>{
        if(mainTab === "available") {
            setAvailableTab(true)
            setYourCouponTab(false)
        }
        if(mainTab === "yourcoupons") {
            setAvailableTab(false)
            setYourCouponTab(true)
        }
    }

     const handleYourCouponsTab = (tab)=>{
        if(tab === "unlock"){
            setUnlockedTab(true)
            setRedeemedTab(false)
        }
        if(tab === "redeem"){
            setUnlockedTab(false)
            setRedeemedTab(true)
        }
     }
     const handleOverlayVisibility = ()=>{
        setOverlayVisibilty(!overlayVisibilty)
     }

     const handleRedeemFCCoin = ()=>{
        setRedeemCoinOverlay(!redeemCoinOverlay)
     }

      const activeTabStyles = {
        color: "#373737",
        borderBottom: "2px solid #373737",
    }

    const couponCardTabStyles = {
        borderRadius: "8px",
        padding: "8px",
        fontWeight: "700",
        fontSize: "14px",
        cursor: "pointer",
        backgroundColor: "#ff8f8f"
    }

    const hideElement = {
        display: "none"
    }
    
  return (
    <>
        <div class="viewAllCoupons">
            <div class="viewAllCouponsHeader">
                <h4>Coupons</h4>
                <img onClick={closePopup} src="https://media.farziengineer.co/farziwallet/cross.png" alt="" />
            </div>
            <div class="viewAllCouponsTab">
                <div class="viewAllCouponTabText">
                    <h4 style={availableTab && activeTabStyles} onClick={()=> handleMainTab("available")}>Available</h4>
                    <h4 style={yourCouponTab && activeTabStyles} onClick={()=> handleMainTab("yourcoupons")} >Your Coupons</h4>
                </div>
                <div class="walletCoinsBox">
                    <img src="https://media.farziengineer.co/farziwallet/coin-icon.png" alt="" />
                    <p>100</p>
                </div>
            </div>
            { availableTab && (
                <div>
                    <div class="viewAllFeaturedComponent">
                        <h3>Featured Components</h3>
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
                    </div>
                    <div class="reedemfcCoins">
                        <h3>Redeem FC Coins</h3>
                        <div onClick={handleRedeemFCCoin} class="reedemfcCoinsCard">
                            <div>
                                <img src="https://media.farziengineer.co/farziwallet/voucher-icon.png" alt="" />
                            </div>
                            <div>
                                <h5>100 FC Coins = ₹100</h5>
                                <p>Use FC Coins to create a custom discount coupon</p>
                            </div>
                            <div>
                                <img src="https://media.farziengineer.co/farziwallet/arrow.png" alt="" />
                            </div>
                        </div>
                    </div>
                    {redeemCoinOverlay && <RedeemCoin closePopup={handleRedeemFCCoin}/>}
                    <div style={(overlayVisibilty || redeemCoinOverlay) && hideElement} class="exploreCoupons">
                        <h5>Coupons to Explore</h5>
                        <div onClick={handleOverlayVisibility} class="exploreCouponCard">
                            <div class="shipImgBox">
                                <img src="https://media.farziengineer.co/farziwallet/free-shipping.png" alt="" />
                            </div>
                            <div class="exploreCouponCardText">
                                <p>Free Delivery</p>
                                <p>Unlock for <span><img src="https://media.farziengineer.co/farziwallet/coin-icon.png" alt="" /></span> 35</p>
                            </div>
                        </div>
                    </div>
                    {overlayVisibilty && <CouponOverlay onClick={handleOverlayVisibility}/>}
                </div>
            )}
            { yourCouponTab && (
                <div class="yourCouponsCardMainContainer">
                    <div class="yourCouponsActiveTab">
                        <div style={unlockedTab && couponCardTabStyles} onClick={()=> handleYourCouponsTab("unlock")} class="unlockedTab">Unlocked</div>
                        <div style={redeemedTab && couponCardTabStyles} onClick={()=> handleYourCouponsTab("redeem")} class="redeemedTab">Redeemed</div>
                    </div>
                    {
                        unlockedTab && (
                            <div class="yourCouponsCardContainer">
                                <div class="youCouponCardLeft">
                                    <h5>&#x20B9;30</h5>
                                    <p>Voucher</p>
                                </div>
                                <div class="youCouponCardRight">
                                    <h4>Rs. 30 off on Striped Silk Blouse</h4>
                                    <p>code: <span class="yourCouponCode">MQFETAJ9XBSK</span></p>
                                    <p>created on 18th Jan,2024</p>
                                </div>
                            </div>
                        )
                    }
                    {
                        redeemedTab && (
                            <div class="couponNotFound">
                                <img src="https://earthrhythm-media.farziengineer.co/hosted/image_24-c96b6aaf23b2.png" alt="" />
                                <h4>Uh-Oh!</h4>
                                <p>Looks like you don't have any redeemed coupons</p>
                            </div>
                        )
                    }
                </div>
            )}
        </div>
    </>
  )
}

export default ViewAllCoupons