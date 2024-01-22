import WheelOfFortune from "./WheelOfFortune"

const SpinWheel = () => {
  const data = [15, 20, 25, 30, 35, 40]
  
  return (
    <div class="spinWheel">
        <div class="walletCoinsBox">
            <img src="https://media.farziengineer.co/farziwallet/coin-icon.png" alt="" />
            <p>85</p>
        </div>
        <div>
            <h4>Spin and Win</h4>
        </div>
        <div id="spinwheelcomp" >
            <WheelOfFortune/>
        </div>
        <div></div>            
    </div>
  )
}

export default SpinWheel