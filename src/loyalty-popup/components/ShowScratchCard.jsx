import { useEffect, useState } from "preact/hooks";
import GamesCard from "./GamesCard";
import fetchApi from "./Utils/FetchApi";
import YourCoupons from "./YourCoupons";
import Loading from "./Utils/Loading";

const ShowScratchCard = ({funcScratchCardAmount, showScratchCardScreen, customerDetails }) => {
  const [activeTab, setActiveTab] = useState("");
  const [loading, setLoading] = useState(false);
  const [walletAmount, setWalletAmount] = useState(0);
  const [scratchCardData, setScratchCardData] = useState([])
  // forced rendering
  if(activeTab === ""){
      setActiveTab("available")
  }
  
  useEffect(()=>{
    const fetchScratchCard = async ()=>{
      try {
        setLoading(true)
        const response = await fetchApi('/get-featured-scratch-cards', 'post', customerDetails)
        // console.log("showscratchCard",response);
        setScratchCardData(response?.data)
        const amountResp = await fetchApi("/user-wallet-amount", 'post', {...customerDetails})
        setWalletAmount(amountResp?.data?.userWallet?.amount)
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false)
      }
    }
    fetchScratchCard()
  },[customerDetails, activeTab])


  const handleMainTab = (mainTab) => {
    setActiveTab(mainTab);
  };

  const activeTabStyles = {
    color: "#373737",
    borderBottom: "2px solid #373737",
  };

  const showScratchCard = (amount) => {
    // console.log("scratch card amount ======", amount);
    funcScratchCardAmount(amount)
    showScratchCardScreen("show_scratch_card", "Scratch Card");
  };
  return (
    <>
      <div class="showGamesTab">
        <div class="viewAllCouponTabText">
          <h4
            style={activeTab === "available" && activeTabStyles}
            onClick={() => handleMainTab("available")}
          >
            Available
          </h4>
          <h4
            style={activeTab === "yourcoupons" && activeTabStyles}
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
      {activeTab === "available" && (
        loading ? <div className="loader"><Loading/></div> :
        <div class="showGamesCards">
          {scratchCardData.map((game, idx) => (
            <GamesCard
              key={idx}
              btnClick={()=> showScratchCard(game.amount)}
              gameTitle={game.title}
              gameDesc={game.description}
              cardImage={game.image}
              btnText={"Scratch"}
              gamePrice={game.amount}
            />
          ))}
        </div>
      )}
      { activeTab === "yourcoupons" && (
          <YourCoupons customerDetails={customerDetails} />
      )}
    </>
  );
};

export default ShowScratchCard;
