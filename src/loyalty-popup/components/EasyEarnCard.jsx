const EasyEarnCard = ({btnClick, cardImage, gameTitle, gameDesc, btnText, gamePrice, isLoggedIn, handleLogin}) => {
    return (
      <>
          <div class="gamesMainContainer">
            <div class="gamesCardImg">
              <img src={cardImage} alt="" />
            </div>
            <div class="gamesCard">
                <p class="gamesCardTitle">{gameTitle}</p>
                <p class="gamesCardDesc">{gameDesc}</p>
              <div class="coinBox">
              <div class="coinIcon"></div>
                <p>{gamePrice}</p>
              </div>
              <button disabled={(btnText.toLowerCase() === "signup here" && isLoggedIn) ? true : false} onClick={isLoggedIn ? btnClick : handleLogin} class={(btnText.toLowerCase() === "signup here" && isLoggedIn) ? "easyEarnCardBtn" : "gamesCardBtn"}>{btnText.toLowerCase() === "signup here" && isLoggedIn ? "Claimed" : btnText}</button>
            </div>
          </div>
      </>
    )
  }
  
  export default EasyEarnCard