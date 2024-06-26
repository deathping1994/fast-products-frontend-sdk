import { useEffect } from "preact/hooks";

const WalletCard = ({ walletAmount, onClick }) => {
  useEffect(() => {
    const coinName = window.fc_loyalty_vars.coin_name;
    if (coinName) {
      sessionStorage.setItem("coinName", coinName);
    }
  }, []);
  return (
    <>
      <div onClick={onClick} class="walletCard">
        <div>
          <p class="walletCardText">
            My
            {
              // @ts-ignore
              sessionStorage.getItem("coinName")
                ? sessionStorage.getItem("coinName")
                : window.fc_loyalty_vars.coin_name
            }
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
