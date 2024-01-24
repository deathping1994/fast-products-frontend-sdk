import { useState } from "preact/hooks"

const RedeemCoin = ({closePopup}) => {
    const [rangeValue, setRangeValue] = useState(10)
    const handleChangeRange = (e)=>{
        const {value} = e.target
        setRangeValue(value)
    }
  return (
    <>
        <div className="redeemCoinMainContainer">
            <div class="redeemCoinContainer">
                <div class="redeemCloseContainer">
                    <img onClick={closePopup} class="closePopup" src="https://media.farziengineer.co/farziwallet/cross.png" alt="" />
                </div>
                <div class="redeemCoinBox">
                    <div class="redeemVoucherMain">
                        <img src="https://media.farziengineer.co/farziwallet/voucher-icon.png" alt="" />
                        <h2>Redeem Coins</h2>
                    </div>
                    <div class="redeemHeading">
                        <h3>Use FC Coins to create a Discount Coupon</h3>
                    </div>
                    <div class="redeemText">
                        <p>{rangeValue} FC Coins for ₹{rangeValue} off</p>
                    </div>
                    <div class="redeemRangeContainer">
                        <input type="range"onChange={handleChangeRange} min={0} max={100} name="coinRange" />
                    </div>
                    <button class="couponUnlockBtn">Redeem Coins</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default RedeemCoin