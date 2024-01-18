import GamesCard from "./GamesCard"

const GamesArena = () => {
  return (
    <>
        <div class="gamesArenaContainer">
              <h1>Games Arena</h1>
              <p>Play games to win FC coins, coupons & rewards</p>
        </div>
        <div class="gamesHorizontalList">
            <GamesCard btnText={`Explore`} gamePrice={`10`} gameTitle={`Wheel of Fortune`} cardImage={`https://media.farziengineer.co/farziwallet/spin-wheel.png`} coinImage={"https://media.farziengineer.co/farziwallet/coin-icon.png"}/>
            <GamesCard btnText={`Explore`} gamePrice={`10`} gameTitle={`Wheel of Fortune`} cardImage={`https://media.farziengineer.co/farziwallet/scratch-card.png`} coinImage={"https://media.farziengineer.co/farziwallet/coin-icon.png"}/>
        </div>
    </>
  )
}

export default GamesArena