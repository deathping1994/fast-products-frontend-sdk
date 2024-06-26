import { useEffect, useState } from "preact/hooks";
import ScreenHeader from "./Screens/ScreenHeader";

const Screen = ({ screenTitle, closeScreen, content, loyalty_theme, isLoggedIn, loginURL, handleScreenComponent, activePage, screenDetails }) => {
  const [backBtnVisible, setBackBtnVisible] = useState(false);
  useEffect(()=>{
    if(loyalty_theme === 'page'){
      if(screenDetails?.screen === 'play_spin_wheel' || screenDetails?.screen === 'play_scratch_card'){
        setBackBtnVisible(true);
      }
      if(activePage === 'all'){
        setBackBtnVisible(false);
      }
    }
  },[screenDetails?.screen])
  const handleBackBtn = ()=>{
    if(activePage === 'coupon'){
      handleScreenComponent('show_all_coupons', 'Coupons')
    }else if(activePage === 'spinwheel'){
      handleScreenComponent("show_spin_wheel", "Play Wheel of Fortune")
    }else if(activePage === 'scratchcard'){
      handleScreenComponent("show_scratch_card", "Scratch Card")
    }
    setBackBtnVisible(false)
  }
  return (
    <>
      <div class="screenContainer">
        <ScreenHeader handleBackBtn={handleBackBtn} backBtnVisible={backBtnVisible} activePage={activePage} screenTitle={screenTitle || "check title"} closeScreen={closeScreen} />
        {loyalty_theme === 'page' && !isLoggedIn && <div className="loginBtnWrapper"><a class="loginbtn" href={`${loginURL}`}>Login to Continue</a></div>}
        {loyalty_theme === 'page' && isLoggedIn && <div class="screenContent">{content}</div>}
        {loyalty_theme === 'popup' && <div class="screenContent">{content}</div>}
      </div>
    </>
  );
};

export default Screen;
