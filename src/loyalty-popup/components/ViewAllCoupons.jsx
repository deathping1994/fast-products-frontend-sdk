import { useEffect, useState } from "preact/hooks";
import CouponCard from "./CouponCard";
import CouponOverlay from "./Overlays/CouponOverlay";
import RedeemCoin from "./RedeemCoin";
import fetchApi from "./Utils/FetchApi";
import Overlay from "./Overlays/Overlay";

const ViewAllCoupons = ({couponCardResponse, closeOverlay}) => {
    const [availableTab, setAvailableTab] = useState(true)
    const [yourCouponTab, setYourCouponTab] = useState(false)
    const [unlockedTab, setUnlockedTab] = useState(true)
    const [redeemedTab, setRedeemedTab] = useState(false)
    const [overlayVisibilty, setOverlayVisibilty] = useState(false)
    const [redeemCoinOverlay, setRedeemCoinOverlay] = useState(false)
    const [exploreCoupon, setExploreCoupon] = useState([])
    const [couponIdx, setCouponIdx] = useState(0)
    const [yourUnlockedCoupon, setYourUnlockedCoupon] = useState([])
    const [yourRedeemedCoupon, setYourRedeemedCoupon] = useState([])
    const [overlayVisible, setOverlayVisible] = useState({
        overlay: "none",
        active: false,
      });

      useEffect(()=>{
        const exploreCouponResp = async ()=>{
            const resp = await fetchApi('/get-coupons-to-explore', 'post')
            setExploreCoupon(resp.data.data.data)
        }
        exploreCouponResp()
      },[])

      const handleOverlay = (overlayname) => {
        if (overlayname === "coupon") {
          return <CouponOverlay couponData={couponCardResponse[0]} onClick={closeOverlay} />;
        }
      };
      const changeOverlay = (overlayname) => {
        setOverlayVisible({
          ...overlayVisible,
          overlay: overlayname,
          active: true,
        });
      };

      const fetchUnlockCoupon = async ()=>{
        const response = await fetchApi('/get-user-coupons', 'post')
        setYourUnlockedCoupon(response?.data?.data?.unlocked);
        setYourRedeemedCoupon(response?.data?.data?.redeemed)
      }

     const handleMainTab = (mainTab)=>{
        if(mainTab === "available") {
            setAvailableTab(true)
            setYourCouponTab(false)
        }
        if(mainTab === "yourcoupons") {
            setAvailableTab(false)
            setYourCouponTab(true)
            fetchUnlockCoupon()
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
     const handleOverlayVisibility = (idx)=>{
        setOverlayVisibilty(!overlayVisibilty)
        setCouponIdx(idx)
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

                        {couponCardResponse.map((card, index)=>(
                            <CouponCard
                                onClick={()=> changeOverlay('coupon')}
                                key={index}
                                couponPrice={card.amount}
                                couponDesc={card.title}
                                couponImgLink={card.image}
                                coinImgLink={"https://media.farziengineer.co/farziwallet/coin-icon.png"}
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
                    <div class="exploreCoupons">
                        <h5>Coupons to Explore</h5>
                            {
                                exploreCoupon.map((card, idx)=>(
                                <div onClick={()=> handleOverlayVisibility(idx)} class="exploreCouponCard">
                                    <div class="shipImgBox">
                                        <img src={card.image} alt="" />
                                    </div>
                                    <div class="exploreCouponCardText">
                                        <p>{card.heading}</p>
                                        <p>Unlock for <span><img src="https://media.farziengineer.co/farziwallet/coin-icon.png" alt="" /></span> {card.amount}</p>
                                    </div>
                                </div>
                                ))
                            }
                    </div>
                    {overlayVisibilty && <CouponOverlay couponData={exploreCoupon[couponIdx]} onClick={handleOverlayVisibility}/>}
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
                            yourUnlockedCoupon.map((ele, idx)=>(
                                <div key={idx} class="yourCouponsCardContainer">
                                    <div class="youCouponCardLeft">
                                        <h5>&#x20B9;{ele.amount}</h5>
                                        <p>Voucher</p>
                                    </div>
                                    <div class="youCouponCardRight">
                                        <h4>{ele.title}</h4>
                                        <p>code: <span class="yourCouponCode">{ele.coupon}</span></p>
                                        <p>{ele.date}</p>
                                    </div>
                                </div>
                            ))
                            
                        )
                    }
                    {
                        redeemedTab && (
                            yourRedeemedCoupon.length === 0 ? (
                                <div class="couponNotFound">
                                    <img src="https://earthrhythm-media.farziengineer.co/hosted/image_24-c96b6aaf23b2.png" alt="" />
                                    <h4>Uh-Oh!</h4>
                                    <p>Looks like you don't have any redeemed coupons</p>
                                </div>
                            ) : (
                                yourRedeemedCoupon.map((ele, idx)=>(
                                    <div key={idx} class="yourCouponsCardContainer">
                                        <div class="youCouponCardLeft">
                                            <h5>&#x20B9;{ele.amount}</h5>
                                            <p>Voucher</p>
                                        </div>
                                        <div class="youCouponCardRight">
                                            <h4>{ele.title}</h4>
                                            <p>code: <span class="yourCouponCode">{ele.coupon}</span></p>
                                            <p>{ele.date}</p>
                                        </div>
                                    </div>
                                ))
                            )
                        )
                    }
                </div>
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
  )
}

export default ViewAllCoupons