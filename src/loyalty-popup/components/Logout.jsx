
const Logout = ({handleLogin}) => {
  return (
    <>
        <div class="logoutwalletCard">
            <div>
                <p class="walletCardText">My {window.
// @ts-ignore
                fc_loyalty_vars.coin_name} Coins</p>
                <div class="badgeCard">
                    <img src="https://media.farziengineer.co/farziwallet/silver-tier-icon.png" alt="" />
                    <p>Silver</p>
                </div>
            </div>
            <div onClick={handleLogin} class="coinCard">
                <div class="coinIcon"></div>
                <h1>Login</h1>
            </div>
            <img src="https://static.farziengineer.co/farziwallet/sparks.png" id='sparkImg' alt="" />
            <img src="https://static.farziengineer.co/farziwallet/sparks.png" id='sparkImg2' alt="" />
        </div>
    </>
  )
}

export default Logout