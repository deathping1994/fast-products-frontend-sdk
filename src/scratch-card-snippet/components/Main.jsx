import { useState, useEffect } from 'preact/hooks';
import Alert from '../../global/Alert';
import fetchApi from '../../global/FetchApi';
import Loading from '../../global/Loading';
import ViewAllCoupons from '../../loyalty-popup/components/ViewAllCoupons';
import ShowScratchCard from '../../loyalty-popup/components/ShowScratchCard';
import WalletCard from '../../loyalty-popup/components/WalletCard';
import GamesCard from '../../loyalty-popup/components/GamesCard';
import YourCoupons from '../../loyalty-popup/components/YourCoupons';
import ScratchCard from './ScratchCard';

const Main = ({ themeDetailsData, shadowRoot }) => {
  const mainScript = document.querySelector("#fc-wallet-scratch-card-snippet-script-19212");
  const [screen, setScreen] = useState(false)
  const [customerDetails, setCustomerDetails] = useState({
    client_id: "",
    customer_id: "",
    user_hash: ""
  });
  useEffect(() => {
    const client_id = mainScript.getAttribute("data-client-id");
    const customer_id = mainScript.getAttribute("data-customer-id");
    const user_hash = mainScript.getAttribute("data-customer-tag")?.trim();
    console.log({ client_id, customer_id, user_hash });
    setCustomerDetails({ client_id, customer_id, user_hash });

    const fetch = async ()=>{
      const resp = await fetchApi('/user-wallet-amount', 'post', {client_id, customer_id, user_hash})
      // setWalletAmount(resp?.data?.userWallet)
      setWalletAmount(resp?.data?.userWallet?.amount)
    }
    fetch()
  }, []);

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
  }
  useEffect(() => {
    setTheme({ themeDetails: themeDetailsData });
    // console.log(themeDetailsData);
  }, [themeDetailsData]);
  
  const [walletAmount, setWalletAmount] = useState(0);
  const [scratchCardAmount, setScratchCardAmount] = useState(0);
  const [activeTab, setActiveTab] = useState("");
  const [loading, setLoading] = useState(false);
  const [scratchCardData, setScratchCardData] = useState([])
  // forced rendering
  if(activeTab === ""){
      setActiveTab("available")
  }
  useEffect(()=>{
    const fetchScratchCard = async ()=>{
      try {
        setLoading(true)
        const client_id = mainScript.getAttribute("data-client-id");
        const response = await fetchApi('/get-featured-scratch-cards', 'post', {client_id})
        // console.log("showscratchCard",response);
        setScratchCardData(response?.data)
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false)
      }
    }
    fetchScratchCard()
  },[activeTab])

  const scratchCardStyles = {
    justifyContent: "start"
  }

  const handleMainTab = (mainTab) => {
    setActiveTab(mainTab);
  };

  const activeTabStyles = {
    color: "#373737",
    borderBottom: "2px solid #373737",
  };

  const showScratchCard = (amount) => {
    setScreen(true)
    setScratchCardAmount(amount)
  };

  const showScratchCardScreen = ()=>{
    setScreen(false)
  }
  return (
    <>
      {screen ? <ScratchCard showScratchCardScreen={showScratchCardScreen} customerDetails={customerDetails} shadowRoot={shadowRoot} walletAmount={walletAmount} scratchCardAmount={scratchCardAmount} /> 
      : 
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
        <div class="showGamesCards" style={scratchCardData.length > 3 && scratchCardStyles}>
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
      </>}
    </>
  );
};

export default Main;
