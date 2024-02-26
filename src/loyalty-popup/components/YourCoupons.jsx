import { useEffect, useState } from "preact/hooks"
import fetchApi from "./Utils/FetchApi"
import Loading from "./Utils/Loading"


const YourCoupons = ({customerDetails}) => {
    const [activeTab, setActiveTab] = useState("")
    const [yourUnlockedCoupon, setYourUnlockedCoupon] = useState([])
    const [yourRedeemedCoupon, setYourRedeemedCoupon] = useState([])
    const [loading, setLoading] = useState(false);
    // forced rendering
    if(activeTab === ""){
        setActiveTab("unlock")
    }
    useEffect(() => {
        const fetchUnlockCoupon = async () => {
            try {
                setLoading(true);
                const response = await fetchApi('/get-user-coupons', 'post', customerDetails);
                setYourUnlockedCoupon(response?.data?.unlocked);
                setYourRedeemedCoupon(response?.data?.redeemed);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchUnlockCoupon();
    }, [customerDetails, activeTab]);
    


    const handleTab = (tab) => {
        setActiveTab(tab)
    };
    

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
        <div class="yourCouponsCardMainContainer">
            <div class="yourCouponsActiveTab">
                <div style={activeTab === "unlock" && couponCardTabStyles} onClick={()=> handleTab("unlock")} class="unlockedTab">Unlocked</div>
                <div style={activeTab === "redeem" && couponCardTabStyles} onClick={()=> handleTab("redeem")} class="redeemedTab">Redeemed</div>
            </div>
            {
                activeTab === "unlock" && (
                    yourUnlockedCoupon.length !== 0 ? 
                    yourUnlockedCoupon.map((ele, idx)=>(
                        <div key={idx} class="yourCouponsCardContainer">
                            <div class="youCouponCardLeft">
                                <h5>&#x20B9;{ele.amount}</h5>
                                <p>Voucher</p>
                            </div>
                            <div class="youCouponCardRight">
                                <p>code: <span class="yourCouponCode">{ele.coupon}</span></p>
                                <p>{ele.date}</p>
                            </div>
                        </div>
                    )) : (
                        <div class="couponNotFound">
                            <img src="https://earthrhythm-media.farziengineer.co/hosted/image_24-c96b6aaf23b2.png" alt="" />
                            <h4>Uh-Oh!</h4>
                            <p>Looks like you don't have any redeemed coupons</p>
                        </div>
                    )
                )
            }
            {
                activeTab === "redeem" && (
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
    </>
  )
}

export default YourCoupons