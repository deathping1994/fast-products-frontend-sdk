import { useState, useEffect } from 'preact/hooks';
import Alert from '../../global/Alert';
import fetchApi from '../../global/FetchApi';
import Loading from '../../global/Loading';
import GamesCard from '../../loyalty-popup/components/GamesCard';
import YourCoupons from '../../loyalty-popup/components/YourCoupons';
import SpinWheel from './SpinWheel';

const Main = ({ themeDetailsData, shadowRoot }) => {
  console.log("spin wheel snippet");
  const mainScript = document.querySelector("#fc-wallet-spin-wheel-snippet-script-19212");
  const [customerDetails, setCustomerDetails] = useState({
    client_id: "",
    customer_id: "",
    user_hash: ""
  });
  const [spinWheelAmount, setSpinWheelAmount] = useState(0);
  const [screen, setScreen] = useState(false)
  const [login, setLogin] = useState(false)
  useEffect(() => {
    const client_id = mainScript.getAttribute("data-client-id");
    const customer_id = mainScript.getAttribute("data-customer-id");
    const user_hash = mainScript.getAttribute("data-customer-tag")?.trim();
    console.log({ client_id, customer_id, user_hash });
    setCustomerDetails({ client_id, customer_id, user_hash });
    if(customer_id){
      setLogin(true)
    }
  }, []);

  useEffect(()=>{
    const client_id = mainScript.getAttribute("data-client-id");
    const customer_id = mainScript.getAttribute("data-customer-id");
    const user_hash = mainScript.getAttribute("data-customer-tag")?.trim();
    const fetchWalletAmount = async ()=>{
      try {
        const amountResp = await fetchApi("/user-walletlogs", 'post', {customer_id, client_id, user_hash})
        setWalletAmount(amountResp?.data?.data?.wallet?.wallet?.amount)
      } catch (error) {
        const checkUser = await fetchApi('/sync-external-user', 'post', {customer_id, client_id})
          if(checkUser.status === 'success'){
            const walletResponse = await fetchApi("/user-wallet-amount","post",{customer_id, client_id, user_hash})
            setWalletAmount(walletResponse?.data?.userWallet?.amount)
          }
      }
    }
    fetchWalletAmount()
  },[screen])

  const scratchCardStyles = {
    justifyContent: "start",
    paddingLeft: "4em"
  }

  function setTheme({ themeDetails }) {
    var cssVariablesScope = shadowRoot.querySelector(".widget-container");
    // console.log("theme details",themeDetails);
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
        ...window.fc_loyalty_vars,
        coin_name: themeDetails?.data?.coin_name,
      };
    } else {
      // @ts-ignore
      window.fc_loyalty_vars = {
        ...window.fc_loyalty_vars,
        coin_name: "FC",
      };
    }
  }
  
  useEffect(() => {
    setTheme({ themeDetails: themeDetailsData });
    // console.log(themeDetailsData);
  }, [themeDetailsData]);

  const [walletAmount, setWalletAmount] = useState(0);
  const [activeTab, setActiveTab] = useState("");
  const [loading, setLoading] = useState(false);
  const [scratchCardData, setScratchCardData] = useState([])
  // forced rendering
  if(activeTab === ""){
      setActiveTab("available")
  }

  const showSpinWheel = (amount) => {
    setScreen(true)
    setSpinWheelAmount(amount)
  };
  
  useEffect(()=>{
    const fetchScratchCard = async ()=>{
      try {
        setLoading(true)
        const client_id = mainScript.getAttribute("data-client-id");
        const response = await fetchApi('/get-featured-spin-wheels', 'post', {client_id})
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


  const handleMainTab = (mainTab) => {
    setActiveTab(mainTab);
  };

  const activeTabStyles = {
    color: "#373737",
    borderBottom: "2px solid #373737",
  };

  const closeScreen = ()=>{
    setScreen(false)
  }

  return (
    login ? 
    <>
    {screen ? <SpinWheel showSpinGameScreen={closeScreen} spinWheelAmount={spinWheelAmount} customerDetails={customerDetails} shadowRoot={shadowRoot}/> :
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
              btnClick={()=> showSpinWheel(game.amount)}
              gameTitle={game.title}
              gameDesc={game.description}
              cardImage={game.image}
              btnText={"Spin"}
              gamePrice={game.amount}
              isLoggedIn={login}
              handleLogin={setLogin}
            />
          ))}
        </div>
      )}
      { activeTab === "yourcoupons" && (
          <YourCoupons customerDetails={customerDetails} />
      )}
      </>
      }
    </>
    : <a class="loginbtn" href={`/account/login`}>Login to Continue</a>
  );
};

export default Main;
