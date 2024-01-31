import { useEffect, useState } from "preact/hooks";
import GamesCard from "./GamesCard";
import fetchApi from "./Utils/FetchApi";

const ShowScratchCard = ({funcScratchCardAmount, handleOverlay, showScratchCardScreen }) => {
  const [availableTab, setAvailableTab] = useState(true);
  const [yourCouponTab, setYourCouponTab] = useState(false);
  const [unlockedTab, setUnlockedTab] = useState(true);
  const [redeemedTab, setRedeemedTab] = useState(false);
  const [scratchCardData, setScratchCardData] = useState([])
  const [yourUnlockedCoupon, setYourUnlockedCoupon] = useState([])
  const [yourRedeemedCoupon, setYourRedeemedCoupon] = useState([])
  useEffect(()=>{
    const fetchScratchCard = async ()=>{
      const response = await fetchApi('/get-featured-scratch-cards', 'post')
      setScratchCardData(response?.data?.data)
    }
    fetchScratchCard()
  },[])

  const fetchUnlockCoupon = async ()=>{
    const response = await fetchApi('/get-user-coupons', 'post')
    setYourUnlockedCoupon(response?.data?.data?.unlocked);
    setYourRedeemedCoupon(response?.data?.data?.redeemed)
  }

  const handleMainTab = (mainTab) => {
    if (mainTab === "available") {
      setAvailableTab(true);
      setYourCouponTab(false);
    }
    if (mainTab === "yourcoupons") {
      setAvailableTab(false);
      setYourCouponTab(true);
      fetchUnlockCoupon()
    }
  };

  const activeTabStyles = {
    color: "#373737",
    borderBottom: "2px solid #373737",
  };
  const handleYourCouponsTab = (tab) => {
    if (tab === "unlock") {
      setUnlockedTab(true);
      setRedeemedTab(false);
    }
    if (tab === "redeem") {
      setUnlockedTab(false);
      setRedeemedTab(true);
    }
  };

  const couponCardTabStyles = {
    borderRadius: "8px",
    padding: "8px",
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    backgroundColor: "#ff8f8f",
  };
  const showScratchCard = (amount) => {
    funcScratchCardAmount(amount)
    showScratchCardScreen();
    handleOverlay();
  };
  return (
    <>
      <div class="showGamesTab">
        <div class="viewAllCouponTabText">
          <h4
            style={availableTab && activeTabStyles}
            onClick={() => handleMainTab("available")}
          >
            Available
          </h4>
          <h4
            style={yourCouponTab && activeTabStyles}
            onClick={() => handleMainTab("yourcoupons")}
          >
            Your Coupons
          </h4>
        </div>
        <div class="walletCoinsBox">
          <img
            src="https://media.farziengineer.co/farziwallet/coin-icon.png"
            alt=""
          />
          <p>85</p>
        </div>
      </div>
      {availableTab && (
        <div class="showGamesCards">
          {scratchCardData.map((game, idx) => (
            <GamesCard
              key={idx}
              btnClick={()=> showScratchCard(game.amount)}
              gameTitle={game.title}
              gameDesc={game.description}
              cardImage={game.image}
              coinImage={"https://media.farziengineer.co/farziwallet/coin-icon.png"}
              btnText={"Scratch"}
              gamePrice={game.amount}
            />
          ))}
        </div>
      )}
      {yourCouponTab && (
        <div class="yourCouponsCardMainContainer">
          <div class="yourCouponsActiveTab">
            <div
              style={unlockedTab && couponCardTabStyles}
              onClick={() => handleYourCouponsTab("unlock")}
              class="unlockedTab"
            >
              Unlocked
            </div>
            <div
              style={redeemedTab && couponCardTabStyles}
              onClick={() => handleYourCouponsTab("redeem")}
              class="redeemedTab"
            >
              Redeemed
            </div>
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
    </>
  );
};

export default ShowScratchCard;
