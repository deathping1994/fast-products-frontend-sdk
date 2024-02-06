// @ts-nocheck
import { useState } from "preact/hooks"
import Loading from "../Utils/Loading"
import fetchApi from "../Utils/FetchApi"

const CouponOverlay = ({couponData, onClick, customerDetails}) => {
    const [couponCode, setCouponCode] = useState("")
    const [isCouponUnlocked, setIsCouponUnlocked] = useState(false)
    const [loading, setLoading] = useState(false);
    const fetchCouponCode = async ()=>{
        try {
            setLoading(true)
            console.log("coupon Overlay couponData", couponData);
        const response = await fetchApi('/get-code', 'post',
        {   
            ...customerDetails,
            couponAmount: couponData?.amount,
        })
        setCouponCode(response?.data?.coupon_code)
        setIsCouponUnlocked(true)
        } catch (error) {
            console.log("error in coupon card overlay");
        } finally {
            setLoading(false)
        }
    }
  return (
    <>
        <div class="unlockCouponContainer slide-in-bottom">
            <div class="couponContainer">
                <div class="crossImg">
                    <img onClick={onClick} src="https://media.farziengineer.co/farziwallet/cross.png" alt="" />
                </div>
                <div class="couponOverlayContainer">
                    <img src="https://media.farziengineer.co/farziwallet/voucher-icon.png" alt="" />
                    <h2>{couponData?.heading}</h2>
                </div>
                <div class="unlockText">
                    <h5>{couponData?.title}</h5>
                </div>
                <div class="unlockDesc">
                    <p>{couponData?.description}</p>
                </div>
                <div>
                    <hr class="dashedDivider" />
                </div>
                <div class="unlockTextContainer">
                    <h4>{!isCouponUnlocked ? `Unlock for ${couponData?.amount} ${window.fc_loyalty_vars.coin_name} Coins` : "Use this code at checkout"}</h4>
                </div>
                
                {!isCouponUnlocked && <div>
                    {loading ? <Loading/> : <button onClick={fetchCouponCode} class="couponUnlockBtn">Tap to Unlock</button>}
                </div>}
                {isCouponUnlocked && <div class="couponCodeContainer">
                    <p>{couponCode}</p>
                    <img src="https://media.farziengineer.co/farziwallet/copy-icon.png" alt="" />
                </div>}
            </div> 
        </div>
    </>
  )
}

export default CouponOverlay