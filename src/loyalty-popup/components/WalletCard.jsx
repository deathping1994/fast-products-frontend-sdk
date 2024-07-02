import { useEffect, useState } from "preact/hooks";

const WalletCard = ({ walletAmount, onClick }) => {
  const [coinName,setCoinName]=useState(localStorage.getItem("coinName"))
  useEffect(() => {
    setTimeout(() => {
      const coinName = window.fc_loyalty_vars.coin_name;
      if (coinName) {
        localStorage.setItem("coinName",coinName)
        setCoinName(coinName)
      } 
    }, 500);
  }, []);
  return (
    <>
      <div onClick={onClick} class="walletCard">
        <div>
          <p class="walletCardText">
            My{" "}
            {coinName}
          </p>
          <div class="badgeCard">
            <img
              src="https://media.farziengineer.co/farziwallet/silver-tier-icon.png"
              alt=""
            />
            <p>Silver</p>
          </div>
        </div>
        <div class="coinCard">
          <div class="coinIcon"></div>
          <h1>{walletAmount}</h1>
        </div>
        <img
          src="https://static.farziengineer.co/farziwallet/sparks.png"
          id="sparkImg"
          alt=""
        />
        <img
          src="https://static.farziengineer.co/farziwallet/sparks.png"
          id="sparkImg2"
          alt=""
        />
      </div>
    </>
  );
};

export default WalletCard;
