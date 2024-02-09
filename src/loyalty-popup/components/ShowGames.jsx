import { useEffect, useState } from "preact/hooks";
import GamesCard from "./GamesCard";
import fetchApi from "./Utils/FetchApi";
import YourCoupons from "./YourCoupons";
import Loading from "./Utils/Loading";

const ShowGames = ({ funcSetSpinWheelAmount, handleOverlay, showPlayGameScreen, walletAmount, customerDetails, screenDetails }) => {
  const [availableTab, setAvailableTab] = useState(true);
  const [yourCouponTab, setYourCouponTab] = useState(false);
  const [loading, setLoading] = useState(false);
  const [gamesData, setGamesData] = useState([])
  
  useEffect(()=>{
    const fetchData = async ()=>{
        try {
          // setAvailableTab(true)
            setLoading(true)
            const response = await fetchApi('/get-featured-spin-wheels', 'post', customerDetails)
            setGamesData(response?.data)
            console.log("spin card data", response?.data);
        } catch (error) {
          console.error("Error fetching wallet data:", error);
        } finally {
          setLoading(false);
        }
    }
    fetchData()
  },[availableTab])
  

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
  const showWheelOfFortune = (amount) => {
    funcSetSpinWheelAmount(amount)
    showPlayGameScreen();
    handleOverlay();
    setAvailableTab(false)
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
            class="coinIcon"
            src="https://media.farziengineer.co/farziwallet/coin-icon.png"
            alt=""
          />
          <p>{walletAmount}</p>
        </div>
      </div>
      {availableTab && (
        loading ? <div className="loader"><Loading/></div> :
        <div class="showGamesCards">
          {gamesData.map((game, idx) => (
            <GamesCard
              key={idx}
              btnClick={()=> showWheelOfFortune(game.amount)}
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
      { yourCouponTab && (
                <YourCoupons customerDetails={customerDetails} yourCouponTab={yourCouponTab}/>
      )}
    </>
  );
};

export default ShowGames;
