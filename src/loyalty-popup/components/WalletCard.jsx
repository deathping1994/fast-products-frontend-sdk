// @ts-nocheck

const WalletCard = ({walletAmount, onClick}) => {
  return (
    <>
        <div onClick={onClick} class="walletCard">
            <div>
                <p class="walletCardText">My {window.fc_loyalty_vars.coin_name} Coins</p>
                <div class="badgeCard">
                    <img src="https://media.farziengineer.co/farziwallet/silver-tier-icon.png" alt="" />
                    <p>Silver</p>
                </div>
            </div>
            <div class="coinCard">
                <div class="coinIcon"></div>
                <h1>{walletAmount}</h1>
            </div>
        </div>
    </>
  )
}

export default WalletCard