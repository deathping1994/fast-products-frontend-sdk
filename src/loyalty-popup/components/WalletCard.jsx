
const WalletCard = ({walletAmount, onClick}) => {
  return (
    <>
        <div onClick={onClick} class="walletCard">
            <div>
                <p class="walletCardText">My FC Coins</p>
                <div class="badgeCard">
                    <img src="https://media.farziengineer.co/farziwallet/silver-tier-icon.png" alt="" />
                    <p>Silver</p>
                </div>
            </div>
            <div class="coinCard">
                <img src="https://media.farziengineer.co/farziwallet/coin-icon.png" alt="" />
                <h1>{walletAmount}</h1>
            </div>
        </div>
    </>
  )
}

export default WalletCard