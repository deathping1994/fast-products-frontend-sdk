import React from 'react'
import GamesCard from './GamesCard';
import EasyEarnCard from './EasyEarnCard';

const EasyEarn = ({walletAmount}) => {
    const gamesData = [
        {
          gameTitle: "Place an Order",
          gameDesc: `Earn Rs. 10% ${window.fc_loyalty_vars.coin_name} Cashback`,
          cardImage: "https://media.farziengineer.co/farziwallet/Place_order.png",
          gamePrice: "100",
          btnText: "Order Now",
          btnClick: ()=>{console.log("clicked")}
        },
        {
          gameTitle: "Signup",
          gameDesc: `Earn Rs. 100 ${window.fc_loyalty_vars.coin_name} Cashback`,
          cardImage: "https://media.farziengineer.co/farziwallet/Sign_up.png",
          gamePrice: "100",
          btnText: "Signup Here",
          btnClick: ()=>{console.log("clicked")}
        },
        {
          gameTitle: "Birthday",
          gameDesc: `Add birthday to get 100 ${window.fc_loyalty_vars.coin_name} points`,
          cardImage: "https://media.farziengineer.co/farziwallet/Birthday.png",
          gamePrice: "100",
          btnText: "Earn Now",
          btnClick: ()=>{console.log("clicked")}
        },
        {
          gameTitle: "Anniversary",
          gameDesc: `Add anniversary to get 100 ${window.fc_loyalty_vars.coin_name} points`,
          cardImage: "https://media.farziengineer.co/farziwallet/anniversary.png",
          gamePrice: "100",
          btnText: "Earn Now",
          btnClick: ()=>{console.log("clicked")}
        }
      ];
    
  return (
    <>
    <div className="easyEarnScreen">
        <p className="easyEarnScreenDesc">Earn Reward just by inputting your details</p>
        <div className="coinContainer">
            <div className="walletCoinsBox">
                <div class="coinIcon"></div>
                <p>{walletAmount}</p>
            </div>
        </div>
        <div className="easyEarnScreenContainer">
        {
            gamesData.map((game, index) => (
            <EasyEarnCard
                key={index}
                btnClick={game.btnClick}
                gameTitle={game.gameTitle}
                gameDesc={game.gameDesc}
                cardImage={game.cardImage}
                gamePrice={game.gamePrice}
                btnText={game.btnText}
                isLoggedIn={true}
                handleLogin={()=>{}}
            />
            ))
        }
        </div>
    </div>
    </>
  )
}

export default EasyEarn