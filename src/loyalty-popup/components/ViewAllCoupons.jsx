
import { useEffect, useState } from "preact/hooks";
import CouponCard from "./CouponCard";
import CouponOverlay from "./Overlays/CouponOverlay";
import RedeemCoin from "./RedeemCoin";
import fetchApi from "./Utils/FetchApi";
import Overlay from "./Overlays/Overlay";
import YourCoupons from "./YourCoupons";
import Loading from "./Utils/Loading";

const ViewAllCoupons = ({couponCardResponse, customerDetails, shadowRoot}) => {
    const [availableTab, setAvailableTab] = useState(true)
    const [yourCouponTab, setYourCouponTab] = useState(false)
    const [exploreCoupon, setExploreCoupon] = useState([])
    const [exploreCouponIdx, setExploreCouponIdx] = useState(0)
    const [couponIdx, setCouponIdx] = useState(0)
    const [walletAmount, setWalletAmount] = useState(0)
    const [loading, setLoading] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState({
      overlay: "none",
      active: false,
    });
    const fetchWalletAmount = async ()=>{
      const walletAmountResponse = await fetchApi('/user-wallet-amount', 'post', customerDetails)
      setWalletAmount(walletAmountResponse?.data?.userWallet?.amount)
    }

    useEffect(()=>{
      const exploreCouponResp = async ()=>{
          try {
            setLoading(true)
            const resp = await fetchApi('/get-coupons-to-explore', 'post', customerDetails)
            setExploreCoupon(resp?.data?.data)
            const walletAmountResponse = await fetchApi('/user-wallet-amount', 'post', customerDetails)
            setWalletAmount(walletAmountResponse?.data?.userWallet?.amount)
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
          return <CouponOverlay updateWalletAmount={fetchWalletAmount} customerDetails={customerDetails} couponData={couponCardResponse[couponIdx]} onClick={closeOverlay} />;
        }
        if(overlayname === "explore"){
          return <CouponOverlay updateWalletAmount={fetchWalletAmount} customerDetails={customerDetails} couponData={exploreCoupon[exploreCouponIdx]} onClick={closeOverlay}/>
        }
        if(overlayname === "redeem"){
          return <RedeemCoin updateWalletAmount={fetchWalletAmount} customerDetails={customerDetails} closePopup={closeOverlay}/>
        }
      };
      const handleAndShowCouponOverlay = (idx)=>{
        changeOverlay('coupon')
        setCouponIdx(idx)
      }
      const changeOverlay = (overlayname) => {
        const mainPopup = shadowRoot.querySelector(".mainPopup")
        const scrolledTop = mainPopup.scrollTop
        mainPopup.style.overflowY = "hidden";
        const overlay = shadowRoot.querySelector(".overlay")
        overlay.style.display = "flex"
        overlay.style.justifyContent = "end"
        overlay.style.position = "absolute";
        overlay.style.top = `${scrolledTop}px`;
        overlay.style.height = "100%";
        overlay.style.width = "100%";
        setOverlayVisible({
          ...overlayVisible,
          overlay: overlayname,
          active: true,
        });
      };

      const closeOverlay = () => {
        const mainPopup = shadowRoot.querySelector(".mainPopup")
        const overlay = shadowRoot.querySelector(".overlay")
        overlay.style.display = "none"
        mainPopup.style.overflowY = "scroll";
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

     const handleExploreOverlayVisibility = (idx)=>{
        changeOverlay("explore")
        setExploreCouponIdx(idx)
     }

      const activeTabStyles = {
        color: "#373737",
        borderBottom: "2px solid #373737",
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
                    <div class="coinIcon"></div>
                    <p>{walletAmount}</p>
                </div>
            </div>
            { availableTab && (
              loading ? <div className="loader"><Loading/></div> :
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
                            />
                            ))}
                        </div>
                    </div>
                    <div class="reedemfcCoins">
                        <h3>Redeem {window.
// @ts-ignore
                        fc_loyalty_vars.coin_name} Coins</h3>
                        <div onClick={()=> changeOverlay("redeem")} class="reedemfcCoinsCard">
                            <div>
                                <img src="https://media.farziengineer.co/farziwallet/voucher-icon.png" alt="" />
                            </div>
                            <div>
                                <h5>100 {window.
// @ts-ignore
                                fc_loyalty_vars.coin_name} Coins = ₹100</h5>
                                <p>Use {window.
// @ts-ignore
                                fc_loyalty_vars.coin_name} Coins to create a custom discount coupon</p>
                            </div>
                            <div>
                                <img src="https://media.farziengineer.co/farziwallet/arrow.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="exploreCoupons">
                        <h5>Coupons to Explore</h5>
                            {
                                exploreCoupon && exploreCoupon.map((card, idx)=>(
                                <div onClick={()=> handleExploreOverlayVisibility(idx)} class="exploreCouponCard">
                                    <div class="shipImgBox">
                                        <img src={card.image} alt="" />
                                    </div>
                                    <div class="exploreCouponCardText">
                                        <p>{card.heading}</p>
                                        <p class="exploreCouponText">Unlock for <div class="coinIcon"></div> {card.amount}</p>
                                    </div>
                                </div>
                                ))
                            }
                    </div>
                </div>
            )}
            {/* {exploreCouponVisibilty && <div class="overlay"></div>} */}
            { yourCouponTab && (
                <YourCoupons customerDetails={customerDetails}/>
            )}
            <div class="overlay">
              {overlayVisible?.active ? (
                <>
                  <Overlay content={handleOverlay(overlayVisible?.overlay)} />
                </>
              ) : (
                <></>
              )}
            </div>
        </div>
    </>
  )
}

export default ViewAllCoupons