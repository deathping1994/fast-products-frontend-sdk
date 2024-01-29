import { useEffect, useState } from "preact/hooks";
import CouponCard from "./CouponCard";
import fetchApi from "./Utils/FetchApi";

const ShowCoupons = ({btnClick, viewAll}) => {
    const [featuredCoupons, setFeaturedCoupons] = useState([])
    useEffect(()=>{
      const fetchFetaturedCoupons = async ()=>{
        const response = await fetchApi('/get-featured-coupons', 'post')
        setFeaturedCoupons(response?.data?.data)
      }
      fetchFetaturedCoupons()
    },[])
    
  return (
    <>
        <div class="viewAllCouponsContainer">
          <h1>Coupons</h1>
          <a onClick={viewAll}>View All</a>
        </div>
        <div class="showAllCouponsList">
          {featuredCoupons.map((card, index)=>(
          <CouponCard
            onClick={btnClick}
            key={index}
            couponPrice={card.amount}
            couponDesc={card.title}
            couponImgLink={card.image}
            coinImgLink={"https://media.farziengineer.co/farziwallet/coin-icon.png"}
          />
          ))}
        </div>
    </>
  )
}

export default ShowCoupons