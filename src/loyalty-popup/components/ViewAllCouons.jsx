import CouponCard from "./CouponCard";

const ViewAllCouons = ({closePopup}) => {

    const couponCardResp = [
        {
          couponPrice: 30,
          couponDesc: "Enjoy a 20% off on your next order!",
          couponImgLink: "https://media.farziengineer.co/farziwallet/coupon-image-top.png",
          coinImgLink: "https://media.farziengineer.co/farziwallet/coin-icon.png",
        },
        {
          couponPrice: 15,
          couponDesc: "Get a special gift with your next order!",
          couponImgLink: "https://media.farziengineer.co/farziwallet/coupon-image-top.png",
          coinImgLink: "https://media.farziengineer.co/farziwallet/coin-icon.png",
        },
        {
          couponPrice: 50,
          couponDesc: "Free shipping on orders over $50!",
          couponImgLink: "https://media.farziengineer.co/farziwallet/coupon-image-top.png",
          coinImgLink: "https://media.farziengineer.co/farziwallet/coin-icon.png",
        },
      ];

      const btnClick = ()=>{
        console.log("clicked");
      }
  return (
    <>
        <div class="viewAllCoupons">
            <div class="viewAllCouponsHeader">
                <h4>Coupons</h4>
                <img onClick={closePopup} src="https://media.farziengineer.co/farziwallet/cross.png" alt="" />
            </div>
            <div class="viewAllCouponsTab">
                <div class="viewAllCouponTabText">
                    <h4>Available</h4>
                    <h4>Your Coupons</h4>
                </div>
                <div class="walletCoinsBox">
                    <img src="https://media.farziengineer.co/farziwallet/coin-icon.png" alt="" />
                    <p>100</p>
                </div>
            </div>
            <div class="viewAllFeaturedComponent">
                <h3>Featured Components</h3>
                <div class="showAllCouponsList">

                {couponCardResp.map((card, index)=>(
                    <CouponCard
                        onClick={btnClick}
                        key={index}
                        couponPrice={card.couponPrice}
                        couponDesc={card.couponDesc}
                        couponImgLink={card.couponImgLink}
                        coinImgLink={card.coinImgLink}
                        />
                    ))}
                </div>
            </div>
            <div class="reedemfcCoins">
                <h3>Redeem FC Coins</h3>
                <div class="reedemfcCoinsCard">
                    <div>
                        <img src="https://media.farziengineer.co/farziwallet/voucher-icon.png" alt="" />
                    </div>
                    <div>
                        <h5>100 FC Coins = ₹100</h5>
                        <p>Use FC Coins to create a custom discount coupon</p>
                    </div>
                    <div>
                        <img src="https://media.farziengineer.co/farziwallet/arrow.png" alt="" />
                    </div>
                </div>
            </div>
            <div class="exploreCoupons">
                <h5>Coupons to Explore</h5>
                <div class="exploreCouponCard">
                    <div class="shipImgBox">
                        <img src="https://media.farziengineer.co/farziwallet/free-shipping.png" alt="" />
                    </div>
                    <div class="exploreCouponCardText">
                        <p>Free Delivery</p>
                        <p>Unlock for <span><img src="https://media.farziengineer.co/farziwallet/coin-icon.png" alt="" /></span> 35</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ViewAllCouons