import axios from "axios"
import { useEffect, useState } from "preact/hooks"

const RedeemCoin = ({closePopup}) => {
    const [rangeValue, setRangeValue] = useState(0)
    const [redeemCoinCode, setRedeemCoinCode] = useState("")
    const handleChangeRange = (e)=>{
        const {value} = e.target
        setRangeValue(value)
    }

    const getRedeemCoin = async ()=>{
        const response = await axios.post('https://fastloyaltyapi.farziengineer.co/get-code',
        {
            customer_id: "7734670819630",
            user_hash: "299037b6d401b25374f60cb316c24114",
            couponAmount: rangeValue,
            client_id: "Q2xpZW50OjY=",
            coupon_title: "Custom Discount: 64 FC Coins for ₹64 off"
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setRedeemCoinCode(response?.data?.data?.coupon_code);
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
                        <input type="range" onChange={handleChangeRange} min={0} max={100} name="coinRange" />
                    </div>
                    {
                        redeemCoinCode === "" 
                        ?   <button onClick={getRedeemCoin} class="couponUnlockBtn">Redeem Coins</button> 
                        :   <div class="couponCodeContainer">
                                <p>{redeemCoinCode}</p>
                                <img src="https://media.farziengineer.co/farziwallet/copy-icon.png" alt="" />
                            </div>
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default RedeemCoin