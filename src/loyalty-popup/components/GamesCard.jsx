const GamesCard = ({btnClick, cardImage, gameTitle, gameDesc, btnText, gamePrice, isLoggedIn, handleLogin}) => {
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
            <button onClick={isLoggedIn ? btnClick : handleLogin} class="gamesCardBtn">{btnText}</button>
          </div>
        </div>
    </>
  )
}

export default GamesCard