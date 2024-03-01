// @ts-nocheck
import { useEffect, useState } from "preact/hooks";
import CouponCard from "./CouponCard";
import CouponOverlay from "../../loyalty-popup/components/Overlays/CouponOverlay";
import RedeemCoin from "../../loyalty-popup/components/RedeemCoin";
import fetchApi from "../../global/FetchApi";
import Overlay from "../../loyalty-popup/components/Overlays/Overlay";
import YourCoupons from "./YourCoupons";
import Loading from "../../global/Loading";

const Main = ({shadowRoot, themeDetailsData}) => {
    const mainScript = document.querySelector("#fc-wallet-gifting-coupons-snippet-script-19212")
    
    const [availableTab, setAvailableTab] = useState(true)
    const [yourCouponTab, setYourCouponTab] = useState(false)
    const [login, setLogin] = useState(false)
    const [couponCardResponse, setCouponCardResponse] = useState([])
    const [exploreCoupon, setExploreCoupon] = useState([])
    const [exploreCouponIdx, setExploreCouponIdx] = useState(0)
    const [couponIdx, setCouponIdx] = useState(0)
    const [loading, setLoading] = useState(false);
    const [walletAmount, setWalletAmount] = useState(0);
    const [customerDetails, setCustomerDetails] = useState({
        client_id:"",
        customer_id:"",
        user_hash:""
    })
    const fetchWalletAmount = async ()=>{
      const walletAmountResponse = await fetchApi('/user-wallet-amount', 'post', customerDetails)
      setWalletAmount(walletAmountResponse?.data?.userWallet?.amount)
    }
    const [overlayVisible, setOverlayVisible] = useState({
      overlay: "none",
      active: false,
    });
    function setTheme({ themeDetails }) {
      var cssVariablesScope = shadowRoot.querySelector(".widget-container");
      console.log("theme details",themeDetails);
      if (cssVariablesScope && themeDetails?.data?.theme_color) {
        cssVariablesScope.style.setProperty(
          "--loyalty_popup_theme_background",
          themeDetails?.data?.theme_color
        );
  
        if (themeDetails?.data?.coin_icon) {
          cssVariablesScope.style.setProperty(
            "--coin-svg-url",
            `url("${themeDetails?.data?.coin_icon}")`
          );
          cssVariablesScope.style.setProperty(
            "--coin-svg-inverted-url",
            `url("${themeDetails?.data?.coin_icon}")`
          );
        } else {
          cssVariablesScope.style.setProperty(
            "--coin-svg-url",
            `url("https://media.farziengineer.co/farziwallet/coin-icon.png")`
          );
          cssVariablesScope.style.setProperty(
            "--coin-svg-inverted-url",
            `url("https://media.farziengineer.co/farziwallet/coin-icon.png")`
          );
        }
      }
  
      if (themeDetails?.data?.coin_name) {
        // @ts-ignore
        window.fc_loyalty_vars = {
          coin_name: themeDetails?.data?.coin_name,
        };
      } else {
        // @ts-ignore
        window.fc_loyalty_vars = {
          coin_name: "FC",
        };
      }
  
      // shadowRoot.querySelector(".floatingPopup").style.display = "flex"; //widget visible only after custom styles are applied
    }
    useEffect(() => {
      setTheme({ themeDetails: themeDetailsData });
      // console.log(themeDetailsData);
    }, [themeDetailsData]); 

    useEffect(()=>{
      (function loadfont() {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href =
          "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap";
        document.head.appendChild(link);
      })();
        const client_id = mainScript.getAttribute("data-client-id");
        const customer_id = mainScript.getAttribute("data-customer-id");
        const user_hash = mainScript.getAttribute("data-customer-tag")?.trim();
        setCustomerDetails({client_id, customer_id, user_hash})
        if(customer_id){
          setLogin(true)
        }
      const exploreCouponResp = async ()=>{
          try {
            setLoading(true)
            const resp = await fetchApi('/get-coupons-to-explore', 'post', {client_id, customer_id, user_hash})
            setExploreCoupon(resp?.data?.data)
            const walletAmtResp = await fetchApi('/user-wallet-amount', 'post', {client_id, customer_id})
            setWalletAmount(walletAmtResp?.data?.userWallet?.amount);
            const couponResp = await fetchApi('/get-featured-coupons', 'post', {client_id})
            setCouponCardResponse(couponResp?.data)
            console.log(couponResp);
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
        // mainPopup.style.overflowY = "hidden";
        const overlay = shadowRoot.querySelector(".overlay")
        overlay.style.display = "flex"
        // overlay.style.position = "absolute";
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
    login ?
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
                <div class="giftMainContainer">
                    <div class="viewAllFeaturedComponent">
                        <h3>Featured Coupons</h3>
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
                    <div className="gift-container">
                      <div class="reedemfcCoins">
                          <h3>Redeem {window.fc_loyalty_vars.coin_name} Coins</h3>
                          <div onClick={()=> changeOverlay("redeem")} class="reedemfcCoinsCard">
                              <div>
                                  <img src="https://media.farziengineer.co/farziwallet/voucher-icon.png" alt="" />
                              </div>
                              <div>
                                  <h5>100 {window.fc_loyalty_vars.coin_name} Coins = ₹100</h5>
                                  <p>Use {window.fc_loyalty_vars.coin_name} Coins to create a custom discount coupon</p>
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
                </div>
            )}
            {/* {exploreCouponVisibilty && <div class="overlay"></div>} */}
            { yourCouponTab && (
                <YourCoupons customerDetails={customerDetails} yourCouponTab={yourCouponTab}/>
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
    : <a class="loginbtn" href={`/account/login`}>Login to Continue</a>
  )
}

export default Main