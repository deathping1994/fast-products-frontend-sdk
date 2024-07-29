import { useEffect, useRef, useState } from "preact/hooks";
import WalletCard from "../components/WalletCard";
import InviteCard from "../components/InviteCard";
import CouponOverlay from "./Overlays/CouponOverlay";
import InviteAndEarnOverlay from "./Overlays/InviteAndEarnOverlay";
import GamesCard from "./GamesCard";
import ShowGames from "./ShowGames";
import Screen from "./Screen";
import PlayGame from "./PlayGame";
import Overlay from "./Overlays/Overlay";
import TransactionLog from "./TransactionLog";
import ShowScratchCard from "./ShowScratchCard";
import ScratchCard from "./ScratchCard";
import ViewAllCoupons from "./ViewAllCoupons";
import fetchApi from "./Utils/FetchApi";
import CouponCard from "./CouponCard";
import Loading from "./Utils/Loading";
import Referral from "./Referral";
import Logout from "./Logout";
import Alert from "./Utils/Alert";
// import ReferralPopup from "./ReferralPopup";
import EasyEarn from "./EasyEarn";
import EasyEarnCard from "./EasyEarnCard";
import EasyEarnOverlay from "./Overlays/EasyEarnOverlay";
import ReferralPage from "./ReferralUi";

export function Main({ themeDetailsData, shadowRoot, loyalty_theme }) {
  const mainScript = document.querySelector("#fc-loyalty-popup-script-19212");
  const client_id = mainScript.getAttribute("data-client-id");
  const customer_id = mainScript.getAttribute("data-customer-id");
  const client_name = mainScript.getAttribute("client-name")
  const activePage = mainScript.getAttribute("data-active-page")
  const [visibilty, setVisibility] = useState(false);
  // const [referralPopup, setReferralPopup] = useState(false)
  const [referedAmount, setReferedAmount] = useState(0)
  const [walletAmount, setWalletAmount] = useState(0);
  const [walletLogs, setWalletLogs] = useState([]);
  const [spinWheelAmount, setSpinWheelAmount] = useState(0);
  const [scratchCardAmount, setScratchCardAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState({
    error: false,
    msg: ""
  })
  const [featuredCoupons, setFeaturedCoupons] = useState([]);
  const [couponCardIdx, setCouponCardIdx] = useState(0);
  const [customerDetails, setCustomerDetails] = useState({
    customer_id: "",
    user_hash: "",
    client_id: "",
  });
  const [voucherDetails, setVoucherDetails] = useState({
    voucherCategory: "",
    categoryId:""
  });
  const [singleSpinWheel, setSingleSpinWheel] = useState({
    title: "",
    description: "",
    image: "",
    amount: "",
    btnText: "",
  })
  
  const [singleScratchCard, setSingleScratchCard] = useState({
    title: "",
    description: "",
    image: "",
    amount: "",
    btnText: "",
  })
  //console.log("running local pc");
  const [screenDetails, setScreenDetails] = useState({
    screen: "home_screen",
    screenTitle: "",
    active: false,
  });
  const [overlayVisible, setOverlayVisible] = useState({
    overlay: "none",
    active: false,
  });

  const handleLogin = ()=>{
    if(!isLoggedIn){
      window.location.href = themeDetailsData?.data?.login_page
    }
  }
  // const handleCloseReferralPopup = () => {
  //   setReferralPopup(false)
  //   location.reload()
  // }
  const showError = (msg)=>{
    setError({
      error:true,
      msg:msg
    })
    setTimeout(()=>{
      setError({
        error:false,
        msg:""
      })
    },3000)
  }
  const funcScratchCardAmount = (amount) => {
    // console.log("func scr card===", amount);
    setScratchCardAmount(amount);
  };
  // async function redeemReferHash({ client_id, customer_id }) {
  //   const fc_refer_hash = localStorage.getItem("fc_refer_hash");
  //   if (fc_refer_hash) {
  //     setTimeout(async () => {
  //       try {
  //         const user_hash = mainScript.getAttribute("data-customer-tag")?.trim();
  //         if(!localStorage.getItem(`fc-referral-code-${customer_id}`)){
  //           try {
  //             const resp = await fetchApi("/get-referral-code", "post", {client_id, customer_id, user_hash})
  //             if(resp?.status === "success"){
  //               localStorage.setItem(`fc-referral-code-${customer_id}`, resp?.data?.path)
  //             }
  //           } catch (error) {
  //             console.log("error", error);
  //           }
  //         }
          
  //         const response = await fetchApi('/redeem-referral-code', 'post', {
  //           client_id: client_id,
  //           customer_id: customer_id,
  //           refer_hash: fc_refer_hash
  //         });
  
  //         if (response?.status === 'success') {
  //           setReferralPopup(true);
  //           setReferedAmount(response?.data?.referredReward);
  //           localStorage.removeItem("fc_refer_hash");
  //           return;
  //         }
  //       } catch (err) {
  //         console.log("error in redeemReferHash", err);
  //       }
  //     }, 2000);
  //   }
  // }  

  // useEffect(()=>{
  //   redeemReferHash({client_id, customer_id})
  // },[referralPopup])
  function setTheme({ themeDetails }) {

    let cssVariablesScope;
    if(loyalty_theme === 'page'){
      cssVariablesScope = shadowRoot.querySelector(".loyaltyMainPage");
    }else{
      cssVariablesScope = shadowRoot.querySelector(".mainPopup");
    }
    let floatingPopupPos;
    if(loyalty_theme === 'popup'){
       floatingPopupPos = shadowRoot.querySelector('.floatingPopup')
    }
    

    if(loyalty_theme === 'popup' && floatingPopupPos){
      if(themeDetails?.data?.icon_position === 'left'){
        const leftOffset = themeDetails?.data?.icon_offset?.left || 0
        const bottomOffset = themeDetails?.data?.icon_offset?.bottom || 0
        floatingPopupPos.style.left = `calc(2% + ${leftOffset})`
        floatingPopupPos.style.top = `calc(86% - ${bottomOffset})`
        // popup styling
        if(cssVariablesScope){
          cssVariablesScope.style.left = `calc(8% + ${leftOffset})`
          cssVariablesScope.style.top = `calc(9% - ${leftOffset})`
        }
      }else {
        const leftOffset = themeDetails?.data?.icon_offset?.left || 0
        const bottomOffset = themeDetails?.data?.icon_offset?.bottom || 0
        floatingPopupPos.style.left = `calc(93% - ${leftOffset})`
        floatingPopupPos.style.top = `calc(86% - ${bottomOffset})`
        //popup styling
        if(cssVariablesScope){
          cssVariablesScope.style.left = `calc(65% - ${leftOffset})`
          cssVariablesScope.style.top = `calc(9% - ${leftOffset})`
        }
      }
    }
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

    if(loyalty_theme === 'popup'){
      shadowRoot.querySelector(".floatingPopup").style.display = "flex";
    } //widget visible only after custom styles are applied
  }
  useEffect(() => {
    setTheme({ themeDetails: themeDetailsData });
    // console.log(themeDetailsData);
  }, [visibilty]);

  useEffect(() => {
    (function loadfont() {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap";
      document.head.appendChild(link);
    })();

    (function loadGlobalStyles() {
      const styles = document.createElement("style");
      styles.innerHTML = `
          .fc-no-scroll {
              // overflow: hidden;
          }
      `;
      document.body.appendChild(styles);
    })();

    const user_hash = mainScript.getAttribute("data-customer-tag")?.trim();
    setCustomerDetails({ client_id, customer_id, user_hash });
    // logged in
    if (customer_id) {
      setIsLoggedIn(true);
    }
    if(loyalty_theme === 'page'){
      setVisibility(true);
    }
    if(loyalty_theme === 'page'){
      switch (activePage) {
        case "coupon":
          setScreenDetails({
            screen: "show_all_coupons",
            screenTitle: "Coupons",
            active: true,
          });
          break;
        case "spinwheel":
          setScreenDetails({
            screen: "show_spin_wheel",
            screenTitle: "Play Wheel of Fortune",
            active: true,
          });
          break;
        case "scratchcard":
          setScreenDetails({
            screen: "show_scratch_card",
            screenTitle: "Play Scratch Card",
            active: true,
          });
          break;
        case "referral":
          setScreenDetails({
            screen:"referral",
            screenTitle:"Referral",
            active:true
          })
          break;
        default:
          setScreenDetails({
            screen: "home_screen",
            screenTitle: "",
            active: false,
          });
      }
    }
    // console.log("screenDetails", activePage);
  }, []);

  useEffect(() => {
    if (customerDetails?.customer_id !== "") {
      const fetchData = async () => {
        try {
          setLoading(true);
          const walletResponse = await fetchApi("/user-walletlogs","post",{
            ...customerDetails
          }
          );
          // console.log("responsedata",walletResponse?.data?.data?.wallet?.wallet?.amount);
          if(walletResponse?.status !== 'success'){
            showError("Failed")
          }else{
            setWalletLogs(walletResponse?.data?.data?.wallet?.wallet?.logs?.edges);
          }

        } catch (error) {
          const checkUser = await fetchApi('/sync-external-user', 'post', {...customerDetails})
          if(checkUser.status === 'success'){
            const walletResponse = await fetchApi("/user-walletlogs","post",{
              ...customerDetails
            })
            setWalletAmount(walletResponse?.data?.data?.wallet?.wallet?.amount)
          }
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [customerDetails, screenDetails?.screen]);

  useEffect(()=>{

    const fetch = async ()=>{
      if(localStorage.getItem(`fc-coupon-card-${client_id}`)){
        let coupons = localStorage.getItem(`fc-coupon-card-${client_id}`)
        setFeaturedCoupons(JSON.parse(coupons))
      }else{
        const couponResponse = await fetchApi(
          "/get-featured-coupons",
          "post",
          {client_id}
        );
        if(couponResponse?.status !== "success"){
          showError(couponResponse?.error)
        }else{
          if(couponResponse?.data){
            setFeaturedCoupons(couponResponse?.data);
            localStorage.setItem(`fc-coupon-card-${client_id}`, JSON.stringify(couponResponse?.data))
          }else{
            showError("No coupons found")
          }
        }
      }
      const spinWheelResponse = await fetchApi('/get-featured-spin-wheels', 'post', {client_id});
      setSingleSpinWheel(spinWheelResponse?.data[0]);
      const scratchCardResponse = await fetchApi('/get-featured-scratch-cards', 'post', {client_id})
      setSingleScratchCard(scratchCardResponse?.data[0])
    }
    fetch()
  },[])
  const fetchWalletAmount = async ()=>{
    const walletAmountResponse = await fetchApi('/user-wallet-amount', 'post', {client_id, customer_id})
    setWalletAmount(walletAmountResponse?.data?.userWallet?.amount)
  }
  useEffect(()=>{
    const user_hash = mainScript.getAttribute("data-customer-tag")?.trim();
    const fetchData = async ()=>{
      if(!localStorage.getItem(`fc-referral-code-${customer_id}`)){
        const resp = await fetchApi("/get-referral-code", "post", {client_id, customer_id, user_hash})
        if(resp?.status === "success"){
          if(!resp?.data?.path.includes('undefined')){
            localStorage.setItem(`fc-referral-code-${customer_id}`, resp?.data?.path)
          }
        }
      }
    }
    fetchData()
  },[])
  useEffect(()=>{

    const fetchWalletAmount = async ()=>{
      const walletAmountResponse = await fetchApi('/user-wallet-amount', 'post', {client_id, customer_id})
      setWalletAmount(walletAmountResponse?.data?.userWallet?.amount)
    }
    fetchWalletAmount()
  },[screenDetails, overlayVisible])
  const btnClick = (idx, category, id) => {
    setVoucherDetails({voucherCategory: category, categoryId: id});
    changeOverlay("coupon");
    setCouponCardIdx(idx);
  };

  const funcSetSpinWheelAmount = (amount) => {
    setSpinWheelAmount(amount);
  };
  const handleViewPopup = () => {
    setVisibility(!visibilty);
  };
  const changeOverlay = (overlayname) => {
    let mainPopup;
    if(loyalty_theme === 'page'){
      mainPopup = document.body;
    }
    if(loyalty_theme === 'popup'){
      mainPopup = shadowRoot.querySelector('.mainPopup')
    }
    const scrolledTop = mainPopup.scrollTop
    // console.log("scrolledTop", scrolledTop);
    if(loyalty_theme === 'popup'){
      mainPopup.style.overflowY = "hidden";
    }
    const overlay = shadowRoot.querySelector(".overlay")
    overlay.style.display = "flex"
    overlay.style.justifyContent = `${loyalty_theme === 'popup' ? 'end' : 'center'}`
    if(loyalty_theme === 'page'){
      overlay.style.alignItems = "center";
      window.scrollTo({
        top: window.innerHeight * 0.6,
        behavior: 'smooth'
      });
    }
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
    let mainPopup;
    if(loyalty_theme === 'page'){
      mainPopup = document.body;
    }
    if(loyalty_theme === 'popup'){
      mainPopup = shadowRoot.querySelector('.mainPopup')
    }
    const overlay = shadowRoot.querySelector(".overlay")
    overlay.style.display = "none"
    mainPopup.style.overflowY = "scroll";
      setOverlayVisible({
        ...overlayVisible,
        overlay: "none",
        active: false,
      });
  };

  const handleOverlay = (overlayname) => {
    if (overlayname === "coupon") {
      return (
        <CouponOverlay
          isLoggedIn={isLoggedIn}
          handleLogin={handleLogin}
          updateWalletAmount={fetchWalletAmount}
          customerDetails={customerDetails}
          couponData={featuredCoupons[couponCardIdx]}
          onClick={closeOverlay}
          voucherDetails={voucherDetails}
        />
      );
    }
    if (overlayname === "invite_and_earn") {
      return (
        <InviteAndEarnOverlay
          customerDetails={customerDetails}
          closeOverlay={closeOverlay}
        />
      );
    }
    if(overlayname === "easy_earn"){
      return (
        <EasyEarnOverlay easyEarnBtnText={''} easyEarnDesc={''} easyEarnTitle={''} easyEarnImg={''} easyPoints={''}/>
      )
    }
  };

  useEffect(() => {
      if(loyalty_theme !== 'page'){
        if (visibilty) {
          document.body.classList.add("fc-no-scroll");
        } else {
          document.body.classList.remove("fc-no-scroll");
        }
      }
  }, [visibilty]);

  const showPlayGameScreen = () => {
    setScreenDetails({
      ...screenDetails,
      screen: "play_spin_wheel",
      screenTitle: "Play Wheel of Fortune",
      active: true,
    });
  };
  const showScratchCardScreen = () => {
    setScreenDetails({
      ...screenDetails,
      screen: "play_scratch_card",
      screenTitle: "Scratch Your Card",
      active: true,
    });
  };

  const closeScreen = () => {
    setScreenDetails({
      ...screenDetails,
      screen: "home_screen",
      screenTitle: "",
      active: false,
    });
  };

  const handleScreenComponent = (screenname, screenTitle) => {
    setScreenDetails({
      ...screenDetails,
      screen: screenname,
      screenTitle: screenTitle,
      active: true,
    });
  };
  const easyEarnData = [
    {
      gameTitle: "Place an Order",
      gameDesc: `Earn Rs. 10% ${window.fc_loyalty_vars.coin_name} Cashback`,
      cardImage: "https://media.farziengineer.co/farziwallet/Place_order.png",
      gamePrice: "100",
      btnText: "Order Now"
    },
    {
      gameTitle: "Signup",
      gameDesc: `Earn Rs. 100 ${window.fc_loyalty_vars.coin_name} Cashback`,
      cardImage: "https://media.farziengineer.co/farziwallet/Sign_up.png",
      gamePrice: "100",
      btnText: "Signup Here"
    },
    {
      gameTitle: "Birthday",
      gameDesc: `Add birthday to get 100 ${window.fc_loyalty_vars.coin_name} points`,
      cardImage: "https://media.farziengineer.co/farziwallet/Birthday.png",
      gamePrice: "100",
      btnText: "Earn Now"
    },
    {
      gameTitle: "Anniversary",
      gameDesc: `Add anniversary to get 100 ${window.fc_loyalty_vars.coin_name} points`,
      cardImage: "https://media.farziengineer.co/farziwallet/anniversary.png",
      gamePrice: "100",
      btnText: "Earn Now"
    }
  ];


  const getScreenComponent = (screenname) => {
    switch (screenname) {
      case "play_spin_wheel":
        return (
          <PlayGame
            customerDetails={customerDetails}
            showSpinGameScreen={handleScreenComponent}
            spinWheelAmount={spinWheelAmount}
            shadowRoot={shadowRoot}
          />
        );
      case "show_spin_wheel":
        return (
          <ShowGames
            customerDetails={customerDetails}
            funcSetSpinWheelAmount={funcSetSpinWheelAmount}
            showPlayGameScreen={showPlayGameScreen}
            screenDetails={screenDetails}
          />
        );
      case "transaction_log":
        return <TransactionLog walletLogs={walletLogs} />;
      case "play_scratch_card":
        return (
          <ScratchCard
            customerDetails={customerDetails}
            showScratchCardScreen={handleScreenComponent}
            scratchCardAmount={scratchCardAmount}
            shadowRoot={shadowRoot}
          />
        );
      case "show_scratch_card":
        return (
          <ShowScratchCard
            customerDetails={customerDetails}
            funcScratchCardAmount={funcScratchCardAmount}
            showScratchCardScreen={showScratchCardScreen}
          />
        );
      case "show_all_coupons":
        return (
          <ViewAllCoupons
            loyalty_theme={loyalty_theme}
            shadowRoot={shadowRoot}
            couponCardResponse={featuredCoupons}
            customerDetails={customerDetails}
          />
        );
      case "easy_earn":
        return (
          <EasyEarn walletAmount={walletAmount}/>
        );
      case "referral":
        return (
          <ReferralPage shadowRoot={shadowRoot} themeDetailsData={themeDetailsData}/>
        );
      default:
        console.warn("Unknown screen:", screenname);
    }
  };

  const sliderRef = useRef(null);
  const easyEarnSliderRef = useRef(null);
  const [prevBtn, setPrevBtn] = useState(false);
  const [nextBtn, setNextBtn] = useState(true);
  const [easyEarnPrevBtn, seteasyEarnPrevBtn] = useState(false);
  const [easyEarnNextBtn, setEasyEarnNextBtn] = useState(true);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
    if (sliderRef.current.scrollLeft - 200 <= 5) {
      setPrevBtn(false);
      setNextBtn(true);
    } else {
      setPrevBtn(true);
      setNextBtn(true);
    }
  };
  const easyEarnScrollLeft = () => {
    easyEarnSliderRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
    if (easyEarnSliderRef.current.scrollLeft - 200 <= 5) {
      seteasyEarnPrevBtn(false);
      setEasyEarnNextBtn(true);
    } else {
      seteasyEarnPrevBtn(true);
      setEasyEarnNextBtn(true);
    }
  };

  const easyEarnScrollRight = () => {
    easyEarnSliderRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
    if (easyEarnSliderRef.current.scrollLeft + easyEarnSliderRef.current.offsetWidth + 200 >= easyEarnSliderRef.current.scrollWidth - 5) {
      seteasyEarnPrevBtn(true);
      setEasyEarnNextBtn(false);
    } else {
      seteasyEarnPrevBtn(true);
      setEasyEarnNextBtn(true);
    }
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
    if (sliderRef.current.scrollLeft + sliderRef.current.offsetWidth + 200 >= sliderRef.current.scrollWidth - 5) {
      setPrevBtn(true);
      setNextBtn(false);
    } else {
      setPrevBtn(true);
      setNextBtn(true);
    }
  };
 return (   
    <>
      <Referral />
      {loyalty_theme === 'popup' && <img
        onClick={handleViewPopup}
        style={{backgroundColor: themeDetailsData?.data?.theme_color}}
        class="floatingPopup"
        src="https://media.farziengineer.co/farziwallet/gift-icon.png"
        width={30}
        height={30}
        alt="gift icon"
        />}
      {( visibilty) && (
        <>
          <div onClick={()=>{ if (visibilty) setVisibility(false)}} className={visibilty ? "popup-parent":""}>
          <div onClick={(e) => {e.stopPropagation();
          // preventing event bubbling for popup.
          return null;
            }}
          className={loyalty_theme === 'page'? 'loyaltyMainPage' : 'mainPopup'}>
            {screenDetails?.active ? (
              <Screen
                loyalty_theme={loyalty_theme}
                closeScreen={closeScreen}
                screenTitle={screenDetails?.screenTitle || "screentitle"}
                content={getScreenComponent(screenDetails?.screen)}
                isLoggedIn={isLoggedIn}
                loginURL={themeDetailsData?.data?.login_page}
                handleScreenComponent={handleScreenComponent}
                activePage={activePage}
                screenDetails={screenDetails}
              />
            ) : loading ? (
              <div className="loader">
                <Loading />
              </div>
            ) : (
              <>
                <div class="header">
                  <div class="leftHeader">
                    <p>Welcome to</p>
                    <h6>{client_name}</h6>
                  </div>
                  <div class="rightHeader">
                    {loyalty_theme === 'popup' && <img
                      class="closePopup"
                      onClick={handleViewPopup}
                      src="https://media.farziengineer.co/farziwallet/cross.png"
                      alt=""
                    />}
                  </div>
                </div>
                {
                  isLoggedIn ? 
                  <WalletCard
                    walletAmount={walletAmount}
                    onClick={() => handleScreenComponent("transaction_log", "Points activity")}
                /> : <Logout handleLogin={handleLogin}/>
                }
                <div class='couponMainContainer'>
                  <div class="viewAllCouponsContainer">
                    <h1>Redeem with Coupons</h1>
                    <div class='viewAllBtn'>
                    <a onClick={isLoggedIn ? () => handleScreenComponent("show_all_coupons", "Coupons") : handleLogin}>
                      View All
                    </a>
                    <img width={6} src="https://media.farziengineer.co/farziwallet/arrow.png" alt="" />
                    </div>
                  </div>
                  <div class="showAllCouponsList" ref={sliderRef}>
                    {featuredCoupons.length !== 0 && featuredCoupons.map((card, index) => (
                        <CouponCard
                          onClick={() => {
                            const imgUrl = card.image;
                            const imgUrlObj = new URL(imgUrl);
                            const params = new URLSearchParams(imgUrlObj.search);
                            const category = params.get('type');
                            const id = params.get('id');
                            btnClick(index, category, id);
                          }}
                          key={index}
                          couponPrice={card.amount}
                          couponDesc={card.title}
                          couponImgLink={card.image}
                        />
                      ))
                    }
                      {featuredCoupons.length > (loyalty_theme === 'popup' ? 2 : 10) && 
                        <>
                          {prevBtn && <div className="scrollBtnPrev" onClick={scrollLeft}><img src="https://media.farziengineer.co/farziwallet/arrow.png" alt="" /></div>}
                          {nextBtn && <div className="scrollBtnNext" onClick={scrollRight}><img src="https://media.farziengineer.co/farziwallet/arrow.png" alt="" /></div>}
                        </>
                      }
                    </div>
                </div>
                <div className="easyEarnMainContainer">
                  <div class="gamesArenaContainer">
                    <div className="easyEarnTitleBox">
                      <h1>Easy Earn</h1>
                      <a onClick={() => handleScreenComponent("easy_earn", "Easy Earn")}>
                        View All
                      </a>
                    </div>
                    <p>Earn Reward just by inputting your details</p>
                  </div>
                  <div class="gamesHorizontalList" ref={easyEarnSliderRef}>
                  {  
                      easyEarnData.map((game, index) => (
                        <EasyEarnCard
                          key={index}
                          btnClick={() => (isLoggedIn && changeOverlay("easy_earn"))}
                          gameTitle={game.gameTitle}
                          gameDesc={game.gameDesc}
                          cardImage={game.cardImage}
                          gamePrice={game.gamePrice}
                          btnText={game.btnText}
                          isLoggedIn={isLoggedIn}
                          handleLogin={handleLogin}
                        />
                      ))
                    }
                    {featuredCoupons.length > (loyalty_theme === 'popup' ? 2 : 10) && 
                        <>
                          {easyEarnPrevBtn && <div className="scrollBtnPrev" onClick={easyEarnScrollLeft}><img src="https://media.farziengineer.co/farziwallet/arrow.png" alt="" /></div>}
                          {easyEarnNextBtn && <div className="scrollBtnNext" onClick={easyEarnScrollRight}><img src="https://media.farziengineer.co/farziwallet/arrow.png" alt="" /></div>}
                        </>
                    }
                  </div>
                </div>
                <div>
                  <div class="gamesArenaContainer">
                    <h1>Games Arena</h1>
                    <p>
                      Play games to win {window.
// @ts-ignore
                      fc_loyalty_vars.coin_name}{" "}
                      coins, coupons & rewards
                    </p>
                  </div>
                  <div class="gamesHorizontalList">
                      <GamesCard 
                        btnClick={() => (isLoggedIn && handleScreenComponent("show_spin_wheel", "Wheel of Fortune"))}
                        gameTitle={singleSpinWheel?.title || "Spin and Win"}
                        gameDesc={singleSpinWheel?.description || "Spin and win coins"}
                        cardImage={singleSpinWheel?.image || "https://media.farziengineer.co/farziwallet/spin-wheel.png"}
                        gamePrice={singleSpinWheel?.amount || "10"}
                        btnText={singleSpinWheel?.btnText || "Explore"}
                        isLoggedIn={isLoggedIn}
                        handleLogin={handleLogin}
                      />
                      <GamesCard 
                        btnClick={() => (isLoggedIn && handleScreenComponent("show_scratch_card", "Scratch Card"))}
                        gameTitle={singleScratchCard?.title || "Scratch and Win"}
                        gameDesc={singleScratchCard?.description || "Scratch and win coins"}
                        cardImage={singleScratchCard?.image || "https://media.farziengineer.co/farziwallet/scratch-card.png"}
                        gamePrice={singleScratchCard?.amount || "10"}
                        btnText={singleScratchCard?.btnText || "Explore"}
                        isLoggedIn={isLoggedIn}
                        handleLogin={handleLogin}
                      />
                  </div>
                  <InviteCard
                    isLoggedIn={isLoggedIn}
                    handleLogin={handleLogin}
                    client_id={client_id}
                    customer_id={customer_id}
                    onClick={() => (changeOverlay("invite_and_earn"))}
                  />
                </div>
                <p id="watermarkContainer"><a href='https://retainley.com/' target="_blank">Powered by Retainley</a></p>
              </>
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
            
            {error?.error && <Alert message={error?.msg}/>}
          </div>
          </div>
        </>
      )}
      {/* {(referralPopup && customer_id) && <ReferralPopup referedAmount={referedAmount} closeReferralPopup={handleCloseReferralPopup}/>} */}
   
    </>
  );
}
// @ts-ignore
function async(arg0) {
  throw new Error("Function not implemented.");
}
