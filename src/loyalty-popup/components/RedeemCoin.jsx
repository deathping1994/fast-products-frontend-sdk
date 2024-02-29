
import { useState } from "preact/hooks"
import Loading from "./Utils/Loading"
import fetchApi from "./Utils/FetchApi"
import Alert from "./Utils/Alert"

const RedeemCoin = ({customerDetails, closePopup, updateWalletAmount}) => {
    const [showCopied, setShowCopied] = useState(false)
    const copyFunc = (code)=>{
        setShowCopied(true)
        navigator.clipboard.writeText(code)
        setTimeout(()=>{
            setShowCopied(false)
        },1000)
    }
    const [rangeValue, setRangeValue] = useState(10)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
    const [redeemCoinCode, setRedeemCoinCode] = useState("")
    const handleChangeRange = (e)=>{
        const {value} = e.target
        setRangeValue(value)
    }
    const showError = ()=>{
        setError(true)
        setTimeout(()=>{
          setError(false)
        },3000)
    }
    const getRedeemCoin = async ()=>{
        try {
            setLoading(true)
            const response = await fetchApi(`/get-code`, 'post',
            {
                ...customerDetails,
                couponAmount: rangeValue,
                // @ts-ignore
                coupon_title: `Custom Discount: ${rangeValue} ${window.fc_loyalty_vars.coin_name} Coins for ₹${rangeValue} off`
            })
            if(response?.status !== "success"){
                // console.log("failed overlay");
                showError()
                return
            }
            setRedeemCoinCode(response?.data?.coupon_code);
            updateWalletAmount()
        } catch (error) {
            console.log("error in redeem coin", error);
        } finally {
            setLoading(false)
        }
    }
  return (
    loading ? <div class="loader"><Loading/></div> :
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
                        <h3>Use {window.
// @ts-ignore
                        fc_loyalty_vars.coin_name} Coins to create a Discount Coupon</h3>
                    </div>
                    <div class="redeemText">
                        <p>{rangeValue} {window.
// @ts-ignore
                        fc_loyalty_vars.coin_name} Coins for ₹{rangeValue} off</p>
                    </div>
                    <div class="redeemRangeContainer">
                        {redeemCoinCode ? <p>Use this code at checkout</p> :<input type="range" onChange={handleChangeRange} defaultValue={"10"} min={0} max={100} name="coinRange" />}
                    </div>
                    {
                        redeemCoinCode === "" ? <button onClick={getRedeemCoin} class="couponUnlockBtn">Redeem Coins</button> :
                        <>
                            <div class="couponCodeContainer">
                                <p>{redeemCoinCode}</p>
                                <img onClick={()=> copyFunc(redeemCoinCode)} src="https://media.farziengineer.co/farziwallet/copy-icon.png" alt="" />
                            </div>
                        </>
                    }
                    {showCopied && <div class="copied">copied</div>}
                </div>
            </div>
            {error && <Alert message={`Something went wrong`}/>}
        </div>
    </>
  )
}

export default RedeemCoin