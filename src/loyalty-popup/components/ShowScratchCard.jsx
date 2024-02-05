import { useEffect, useState } from "preact/hooks";
import GamesCard from "./GamesCard";
import fetchApi from "./Utils/FetchApi";
import YourCoupons from "./YourCoupons";
import Loading from "./Utils/Loading";

const ShowScratchCard = ({funcScratchCardAmount, handleOverlay, showScratchCardScreen, walletAmount, customerDetails }) => {
  const [availableTab, setAvailableTab] = useState(true);
  const [yourCouponTab, setYourCouponTab] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scratchCardData, setScratchCardData] = useState([])
  useEffect(()=>{
    const fetchScratchCard = async ()=>{
      try {
        setLoading(true)
        const response = await fetchApi('/get-featured-scratch-cards', 'post', customerDetails)
        console.log("showscratchCard",response);
        setScratchCardData(response?.data)
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false)
      }
    }
    fetchScratchCard()
  },[availableTab])


  const handleMainTab = (mainTab) => {
    if (mainTab === "available") {
      setAvailableTab(true);
      setYourCouponTab(false);
      setLoading(true)
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

  const showScratchCard = (amount) => {
    console.log("scratch card amount ======", amount);
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
        <div class="coinIcon"></div>
          <p>{walletAmount}</p>
        </div>
      </div>
      {availableTab && (
        loading ? <div className="loader"><Loading/></div> :
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
      { yourCouponTab && (
          <YourCoupons customerDetails={customerDetails} yourCouponTab={yourCouponTab}/>
      )}
    </>
  );
};

export default ShowScratchCard;
