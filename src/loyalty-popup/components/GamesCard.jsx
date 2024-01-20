const GamesCard = ({btnClick, cardImage, coinImage, gameTitle, btnText, gamePrice}) => {
  return (
    <>
        <div class="gamesMainContainer">
          <div class="gamesCardImg">
            <img src={cardImage} alt="" />
          </div>
          <div class="gamesCard">
              <p class="gamesCardTitle">{gameTitle}</p>
              <p class="gamesCardDesc">Start at</p>
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