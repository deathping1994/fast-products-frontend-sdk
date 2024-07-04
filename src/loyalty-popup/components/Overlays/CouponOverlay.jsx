
import { useEffect, useState } from "preact/hooks"
import Loading from "../Utils/Loading"
import fetchApi from "../Utils/FetchApi"
import Alert from "../Utils/Alert"

const CouponOverlay = ({couponData, onClick, customerDetails, updateWalletAmount, isLoggedIn, handleLogin, voucherDetails}) => {
    const [couponCode, setCouponCode] = useState("")
    const [isCouponUnlocked, setIsCouponUnlocked] = useState(false)
    const [showCopied, setShowCopied] = useState(false);
    const [error, setError] = useState({
        error:false,
        msg:""
    })
    const [loading, setLoading] = useState(false);
    const showError = (msg)=>{
        setError({
            error:true,
            msg:msg
        })
        setTimeout(()=>{
          setError({
            error:false,
            msg:""
        })
        },3000)
    }
    const copyReferralLinkFunc = ()=>{
        setShowCopied(true)
        navigator.clipboard.writeText(couponCode)
        setTimeout(()=>{
            setShowCopied(false)
        },1000)
    }
    const fetchCouponCode = async ()=>{
        try {
            setLoading(true)
            const voucher_category = voucherDetails?.voucherCategory;
            const category_id = voucherDetails?.categoryId;
            // console.log("coupon Overlay couponData", couponData);
            const response = await fetchApi('/get-code', 'post',
            {
                ...customerDetails,
                couponAmount: couponData?.amount,
                voucher_category,
                category_id
            })
            if(response?.status !== "success"){
                // console.log("failed overlay");
                showError(response?.error)
            }else{
                setCouponCode(response?.data?.coupon_code)
                setIsCouponUnlocked(true)
                updateWalletAmount()
            }
        } catch (error) {
            console.log("error in coupon card overlay", error);
        } finally {
            setLoading(false)
        }
    }
  return (
      loading ? <div className="loader"><Loading/></div> :
      <>
        <div class="unlockCouponContainer slide-in-bottom">
            <div class="couponContainer" id="couponOverlayId">
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
                    <h4>{!isCouponUnlocked ? `Unlock for ${couponData?.amount} ${window.
// @ts-ignore
                    fc_loyalty_vars.coin_name} Coins` : "Use this code at checkout"}</h4>
                </div>
                
                {!isCouponUnlocked && <div>
                    {!loading && <button onClick={isLoggedIn ? fetchCouponCode : handleLogin} class="couponUnlockBtn">Tap to Unlock</button>}
                </div>}
                {isCouponUnlocked && <div class="couponCodeContainer">
                    <p>{couponCode}</p>
                    <img onClick={copyReferralLinkFunc} src="https://media.farziengineer.co/farziwallet/copy-icon.png" alt="" />
                </div>}
            </div> 
        </div>
        {error.error && <Alert message={error?.msg}/>}
        {showCopied && <div class="copied">copied</div>}
    </>
  )
}

export default CouponOverlay