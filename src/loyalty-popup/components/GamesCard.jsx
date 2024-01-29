const GamesCard = ({btnClick, cardImage, coinImage, gameTitle, gameDesc, btnText, gamePrice}) => {
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
              <img src={coinImage} alt="" />
              <p>{gamePrice}</p>
            </div>
            <button onClick={btnClick} class="gamesCardBtn">{btnText}</button>
          </div>
        </div>
    </>
  )
}

export default GamesCard