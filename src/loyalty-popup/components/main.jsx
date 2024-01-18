import { useEffect, useState } from "preact/hooks";
import { WALLET_API_URI } from "..";
import WalletCard from "./WalletCard";
import InviteCard from "./InviteCard";
import ShowCoupons from "./ShowCoupons";
import GamesArena from "./GamesArena";
import CouponOverlay from "./CouponOverlay";

export function Main({ themeDetailsData }) {
  const [visibilty, setVisibility] = useState(true)
  const handleViewPopup = ()=>{
      setVisibility(!visibilty)
  }
  
  return (
    <>
      <img onClick={handleViewPopup} class="floatingPopup" src="https://media.farziengineer.co/farziwallet/gift-icon.png" width={30} height={30} alt="gift icon" />
      {visibilty && (
        <>  
          <div class="mainPopup">
            <div class="header">
                <div class="leftHeader">
                    <p>Welcome to</p>
                    <h6>Loyality</h6>
                </div>
                <div class="rightHeader">
                    <img class="closePopup" onClick={handleViewPopup} src="https://media.farziengineer.co/farziwallet/cross.png" alt="" />
                </div>
            </div>
            <div class="mainContent">
              <WalletCard/>
              <ShowCoupons/>
              <GamesArena/>
              <InviteCard/>
              {/* <CouponOverlay/> */}
            </div>
          </div>
        </>
      )}
    </>
  );
}
