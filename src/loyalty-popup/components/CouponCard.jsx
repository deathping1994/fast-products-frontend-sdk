const CouponCard = ({couponImgLink, couponPrice, couponDesc,onClick}) => {
  
  return (
    <>
        <div onClick={onClick} class="couponCard">
          <img class="couponImg" src={couponImgLink} alt="" />
            <div class="couponCardDesc">
                <div class="couponFloatingLabel">
                  &#8377; {couponPrice}
                </div>
                <p class="couponText">{couponDesc}</p>
                <div className="couponCardPrice">
                  <div class="coinIcon"></div>
                  <p>{couponPrice}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default CouponCard