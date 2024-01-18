import GamesCard from "./GamesCard"

const GamesArena = () => {
    const gamesData = [
        {
            gameTitle: "Wheel of Fortune",
            cardImage: "https://media.farziengineer.co/farziwallet/spin-wheel.png",
            gamePrice: "10",
            coinImage: "https://media.farziengineer.co/farziwallet/coin-icon.png",
            btnText: "Explore"
        },
        {
            gameTitle: "Scratch Card",
            cardImage: "https://media.farziengineer.co/farziwallet/scratch-card.png",
            gamePrice: "20",
            coinImage: "https://media.farziengineer.co/farziwallet/coin-icon.png",
            btnText: "Explore"
        }
    ]
  return (
    <>
        <div class="gamesArenaContainer">
              <h1>Games Arena</h1>
              <p>Play games to win FC coins, coupons & rewards</p>
        </div>
        <div class="gamesHorizontalList">
            {
                gamesData.map((card, idx)=>(
                    <GamesCard key={idx} gameTitle={card.gameTitle} cardImage={card.cardImage} gamePrice={card.gamePrice} coinImage={card.coinImage} btnText={card.btnText}/>
                ))
            }
        </div>
    </>
  )
}

export default GamesArena