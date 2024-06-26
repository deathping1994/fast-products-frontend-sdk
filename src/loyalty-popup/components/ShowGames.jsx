import { useEffect, useState } from "preact/hooks";
import GamesCard from "./GamesCard";
import fetchApi from "./Utils/FetchApi";
import YourCoupons from "./YourCoupons";
import Loading from "./Utils/Loading";

const ShowGames = ({ funcSetSpinWheelAmount, showPlayGameScreen, customerDetails, screenDetails }) => {
  const [activeTab, setActiveTab] = useState("");
  const [loading, setLoading] = useState(false);
  const [walletAmount, setWalletAmount] = useState(0);
  const [gamesData, setGamesData] = useState([]);

  // forced rendering
  if(activeTab === ""){
      setActiveTab("available")
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetchApi('/get-featured-spin-wheels', 'post', customerDetails);
        const amountResp = await fetchApi("/user-wallet-amount", 'post', {...customerDetails})
        setGamesData(response?.data);
        setWalletAmount(amountResp?.data?.userWallet?.amount)
        // console.log("spin card data", response?.data);
      } catch (error) {
        console.error("Error fetching wallet data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [customerDetails, activeTab]);

  const handleTab = (mainTab) => {
    setActiveTab(mainTab);
  };

  const activeTabStyles = {
    color: "#373737",
    borderBottom: "2px solid #373737",
  };

  const showWheelOfFortune = (amount) => {
    funcSetSpinWheelAmount(amount);
    showPlayGameScreen();
    
  };

  return (
    <>
      <div class="showGamesTab">
        <div class="viewAllCouponTabText">
          <h4
            style={activeTab === "available" && activeTabStyles}
            onClick={() => handleTab("available")}
          >
            Available
          </h4>
          <h4
            style={activeTab === "yourcoupons" && activeTabStyles}
            onClick={() => handleTab("yourcoupons")}
          >
            Your Coupons
          </h4>
        </div>
        <div class="walletCoinsBox">
          <div className="coinIcon"></div>
          <p>{walletAmount}</p>
        </div>
      </div>
      {activeTab === "available" && (
        loading ? <div className="loader"><Loading/></div> :
        <div class="showGamesCards">
          {gamesData.map((game, idx) => (
            <GamesCard
              isLoggedIn={true}
              handleLogin={()=>{}}
              key={idx}
              btnClick={() => showWheelOfFortune(game.amount)}
              gameDesc={game.description}
              gameTitle={game.title}
              cardImage={game.image}
              btnText={"Explore"}
              gamePrice={game.amount}
            />
          ))}
        </div>
      )}

      {activeTab === "yourcoupons" && (
        <YourCoupons customerDetails={customerDetails} />
      )}
    </>
  );
};

export default ShowGames;
