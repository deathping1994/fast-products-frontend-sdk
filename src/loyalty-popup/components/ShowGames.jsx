import { useState } from "preact/hooks"
import GamesCard from "./GamesCard"
import SpinWheel from "./SpinWheel"

const ShowGames = ({handleOverlay}) => {
  const [spinWheelOverlay, setSpinWheelOverlay] = useState(false)
  const gamesData = [
    {
        gameTitle: "Spin and Win",
        cardImage: "https://media.farziengineer.co/farziwallet/spin-wheel.png",
        gamePrice: "10",
        coinImage: "https://media.farziengineer.co/farziwallet/coin-icon.png",
        btnText: "Explore"
    },
    {
        gameTitle: "Spin and Win",
        cardImage: "https://media.farziengineer.co/farziwallet/spin-wheel.png",
        gamePrice: "30",
        coinImage: "https://media.farziengineer.co/farziwallet/coin-icon.png",
        btnText: "Explore"
    },
  ]

  const showWheelOfFortune = ()=>{
    setSpinWheelOverlay(!spinWheelOverlay)
  }
  return (
    <>
        <div class="showGamesOverlay">
            <div className="showGamesHeader">
              <h2>Wheel of Fortune</h2>
              <img onClick={handleOverlay} src="https://media.farziengineer.co/farziwallet/cross.png" alt="" />
            </div>
            <div class="showGamesTab">
                <div className="gamesTab">
                  <h2>Available</h2>
                  <h2>Your Coupons</h2>
                </div>
                <div class="walletCoinsBox">
                  <img src="https://media.farziengineer.co/farziwallet/coin-icon.png" alt="" />
                  <p>85</p>
                </div>
            </div>
            <div class="showGamesCards">
              {
                gamesData.map((game, idx)=>(
                    <GamesCard key={idx} btnClick={showWheelOfFortune} gameTitle={game.gameTitle} cardImage={game.cardImage} coinImage={game.coinImage} btnText={game.btnText} gamePrice={game.gamePrice} />
                ))
              }
            </div>
            {spinWheelOverlay && (
              <SpinWheel/>
            )}
        </div>
    </>
  )
}

export default ShowGames