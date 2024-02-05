// @ts-nocheck
import { useState } from "preact/hooks"
import Loading from "./Utils/Loading"
import fetchApi from "./Utils/FetchApi"

const RedeemCoin = ({closePopup}) => {
    const [rangeValue, setRangeValue] = useState(10)
    const [loading, setLoading] = useState(false);
    const [redeemCoinCode, setRedeemCoinCode] = useState("")
    const handleChangeRange = (e)=>{
        const {value} = e.target
        setRangeValue(value)
    }

    const getRedeemCoin = async ()=>{
        try {
            setLoading(true)
            const response = await fetchApi(`/get-code`, 'post',
        {
            customer_id: "7734670819630",
            user_hash: "299037b6d401b25374f60cb316c24114",
            couponAmount: rangeValue,
            client_id: "Q2xpZW50OjY=",
            coupon_title: `Custom Discount: 64 ${window.fc_loyalty_vars.coin_name} Coins for ₹64 off`
        })
        setRedeemCoinCode(response?.data?.data?.coupon_code);
        } catch (error) {
            console.log("error in redeem coin");
        } finally {
            setLoading(false)
        }
    }
  return (
    loading ? <div className="loader"><Loading/></div> :
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
                        <h3>Use {window.fc_loyalty_vars.coin_name} Coins to create a Discount Coupon</h3>
                    </div>
                    <div class="redeemText">
                        <p>{rangeValue} {window.fc_loyalty_vars.coin_name} Coins for ₹{rangeValue} off</p>
                    </div>
                    <div class="redeemRangeContainer">
                        <input type="range" onChange={handleChangeRange} defaultValue={"10"} min={0} max={100} name="coinRange" />
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