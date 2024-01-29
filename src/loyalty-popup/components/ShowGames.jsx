import { useEffect, useState } from "preact/hooks";
import GamesCard from "./GamesCard";
import fetchApi from "./Utils/FetchApi";
import axios from "axios";

const ShowGames = ({ fetchSpinWheelReward, handleOverlay, showPlayGameScreen }) => {
  const [availableTab, setAvailableTab] = useState(true);
  const [yourCouponTab, setYourCouponTab] = useState(false);
  const [unlockedTab, setUnlockedTab] = useState(true);
  const [redeemedTab, setRedeemedTab] = useState(false);
  const [gamesData, setGamesData] = useState([])
  useEffect(()=>{
    const fetchData = async ()=>{
        const response = await fetchApi('/get-featured-spin-wheels', 'post')
        setGamesData(response?.data?.data)
    }
    fetchData()
  },[])
  

  const handleMainTab = (mainTab) => {
    if (mainTab === "available") {
      setAvailableTab(true);
      setYourCouponTab(false);
    }
    if (mainTab === "yourcoupons") {
      setAvailableTab(false);
      setYourCouponTab(true);
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
  const showWheelOfFortune = () => {
    fetchSpinWheelReward()
    showPlayGameScreen();
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
          {gamesData.map((game, idx) => (
            <GamesCard
              key={idx}
              btnClick={showWheelOfFortune}
              gameDesc={game.description}
              gameTitle={game.title}
              cardImage={game.image}
              coinImage={"https://media.farziengineer.co/farziwallet/coin-icon.png"}
              btnText={"Explore"}
              gamePrice={game.amount}
            />
          ))}
        </div>
      )}
      {console.log(gamesData)}
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
          {unlockedTab && (
            <div class="yourCouponsCardContainer">
              <div class="youCouponCardLeft">
                <h5>&#x20B9;30</h5>
                <p>Voucher</p>
              </div>
              <div class="youCouponCardRight">
                <h4>Rs. 30 off on Striped Silk Blouse</h4>
                <p>
                  code: <span class="yourCouponCode">MQFETAJ9XBSK</span>
                </p>
                <p>created on 18th Jan,2024</p>
              </div>
            </div>
          )}
          {redeemedTab && (
            <div class="couponNotFound">
              <img
                src="https://earthrhythm-media.farziengineer.co/hosted/image_24-c96b6aaf23b2.png"
                alt=""
              />
              <h4>Uh-Oh!</h4>
              <p>Looks like you don't have any redeemed coupons</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ShowGames;
