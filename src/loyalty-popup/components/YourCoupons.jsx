import { useEffect, useState } from "preact/hooks"
import fetchApi from "./Utils/FetchApi"
import Loading from "./Utils/Loading"
// import Loading from "./Utils/Loading"


const YourCoupons = ({yourCouponTab, customerDetails}) => {
    const [unlockedTab, setUnlockedTab] = useState(true)
    const [redeemedTab, setRedeemedTab] = useState(false)
    const [yourUnlockedCoupon, setYourUnlockedCoupon] = useState([])
    const [yourRedeemedCoupon, setYourRedeemedCoupon] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const fetchUnlockCoupon = async ()=>{
            try {
                setLoading(true)
                const response = await fetchApi('/get-user-coupons', 'post', customerDetails)
                setYourUnlockedCoupon(response?.data?.unlocked);
                setYourRedeemedCoupon(response?.data?.redeemed)
            } catch (error) {
                console.log(error);
            } finally{
                setLoading(false)
            }
        }
        fetchUnlockCoupon()
    },[])


    const handleYourCouponsTab = (tab)=>{
        if(tab === "unlock"){
            setUnlockedTab(true)
            setRedeemedTab(false)
        }
        if(tab === "redeem"){
            setUnlockedTab(false)
            setRedeemedTab(true)
        }
     }

    const couponCardTabStyles = {
        borderRadius: "8px",
        padding: "8px",
        fontWeight: "700",
        fontSize: "14px",
        cursor: "pointer",
        backgroundColor: "#ff8f8f"
    }
  return (
    loading ? <div className="loader"><Loading/></div> : 
    <>
        { yourCouponTab && (
                <div class="yourCouponsCardMainContainer">
                    <div class="yourCouponsActiveTab">
                        <div style={unlockedTab && couponCardTabStyles} onClick={()=> handleYourCouponsTab("unlock")} class="unlockedTab">Unlocked</div>
                        <div style={redeemedTab && couponCardTabStyles} onClick={()=> handleYourCouponsTab("redeem")} class="redeemedTab">Redeemed</div>
                    </div>
                    {
                        unlockedTab && (
                            loading ? <Loading/> : 
                            yourUnlockedCoupon.map((ele, idx)=>(
                                <div key={idx} class="yourCouponsCardContainer">
                                    <div class="youCouponCardLeft">
                                        <h5>&#x20B9;{ele.amount}</h5>
                                        <p>Voucher</p>
                                    </div>
                                    <div class="youCouponCardRight">
                                        <h4>{ele.title}</h4>
                                        <p>code: <span class="yourCouponCode">{ele.coupon}</span></p>
                                        <p>{ele.date}</p>
                                    </div>
                                </div>
                            ))
                            
                        )
                    }
                    {
                        redeemedTab && (
                            yourRedeemedCoupon.length === 0 ? (
                                <div class="couponNotFound">
                                    <img src="https://earthrhythm-media.farziengineer.co/hosted/image_24-c96b6aaf23b2.png" alt="" />
                                    <h4>Uh-Oh!</h4>
                                    <p>Looks like you don't have any redeemed coupons</p>
                                </div>
                            ) : (
                                yourRedeemedCoupon.map((ele, idx)=>(
                                    <div key={idx} class="yourCouponsCardContainer">
                                        <div class="youCouponCardLeft">
                                            <h5>&#x20B9;{ele.amount}</h5>
                                            <p>Voucher</p>
                                        </div>
                                        <div class="youCouponCardRight">
                                            <h4>{ele.title}</h4>
                                            <p>code: <span class="yourCouponCode">{ele.coupon}</span></p>
                                            <p>{ele.date}</p>
                                        </div>
                                    </div>
                                ))
                            )
                        )
                    }
                </div>
            )}
    </>
  )
}

export default YourCoupons