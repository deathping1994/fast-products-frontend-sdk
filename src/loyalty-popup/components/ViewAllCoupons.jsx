import { useEffect, useState } from "preact/hooks";
import CouponCard from "./CouponCard";
import CouponOverlay from "./Overlays/CouponOverlay";
import RedeemCoin from "./RedeemCoin";
import fetchApi from "./Utils/FetchApi";
import Overlay from "./Overlays/Overlay";
import YourCoupons from "./YourCoupons";
import Loading from "./Utils/Loading";

const ViewAllCoupons = ({couponCardResponse, walletAmount}) => {
    const [availableTab, setAvailableTab] = useState(true)
    const [yourCouponTab, setYourCouponTab] = useState(false)
    const [exploreCouponVisibilty, setExploreCouponVisibilty] = useState(false)
    const [redeemCoinOverlay, setRedeemCoinOverlay] = useState(false)
    const [exploreCoupon, setExploreCoupon] = useState([])
    const [exploreCouponIdx, setExploreCouponIdx] = useState(0)
    const [couponIdx, setCouponIdx] = useState(0)
    const [loading, setLoading] = useState(true);
    const [overlayVisible, setOverlayVisible] = useState({
        overlay: "none",
        active: false,
      });

      useEffect(()=>{
        const exploreCouponResp = async ()=>{
            try {
              const resp = await fetchApi('/get-coupons-to-explore', 'post')
              setExploreCoupon(resp?.data?.data?.data)
            } catch (error) {
              console.log(error);
            } finally {
              setLoading(false)
            }
        }
        exploreCouponResp()
      },[])

      const handleOverlay = (overlayname) => {
        if (overlayname === "coupon") {
          return <CouponOverlay couponData={couponCardResponse[couponIdx]} onClick={closeOverlay} />;
        }
      };
      const handleAndShowCouponOverlay = (idx)=>{
        changeOverlay('coupon')
        setCouponIdx(idx)

      }
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

     const handleOverlayVisibility = (idx)=>{
        setExploreCouponVisibilty(!exploreCouponVisibilty)
        setExploreCouponIdx(idx)
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
                    <p>{walletAmount}</p>
                </div>
            </div>
            { availableTab && (
                <div>
                    <div class="viewAllFeaturedComponent">
                        <h3>Featured Components</h3>
                        <div class="showAllCouponsList">

                        {couponCardResponse.map((card, index)=>(
                            <CouponCard
                                onClick={()=> handleAndShowCouponOverlay(index)}
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
                </div>
            )}
            {exploreCouponVisibilty && <CouponOverlay couponData={exploreCoupon[exploreCouponIdx]} onClick={handleOverlayVisibility}/>}
            { yourCouponTab && (
                <YourCoupons yourCouponTab={yourCouponTab}/>
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
  )
}

export default ViewAllCoupons