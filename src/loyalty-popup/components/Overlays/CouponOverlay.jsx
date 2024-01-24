const CouponOverlay = ({onClick}) => {
  return (
    <>
        <div class="unlockCouponContainer">
            <div class="couponContainer">
                <div class="crossImg">
                    <img onClick={onClick} src="https://media.farziengineer.co/farziwallet/cross.png" alt="" />
                </div>
                <div class="couponOverlayContainer">
                    <img src="https://media.farziengineer.co/farziwallet/voucher-icon.png" alt="" />
                    <h2>$30 Voucher</h2>
                </div>
                <div class="unlockText">
                    <h5>Rs. 30 off on Striped Silk Blouse</h5>
                </div>
                <div class="unlockDesc">
                    <p>The management reserves the right to modify the coupon as they see fit and to adjust the customer's wallet if they determine the event.</p>
                </div>
                <div>
                    <hr class="dashedDivider" />
                </div>
                <div class="unlockTextContainer">
                    <h4>Unlock for 30 FC Coins</h4>
                </div>
                <div>
                    <button class="couponUnlockBtn">Tap to Unlock</button>
                </div>   
            </div> 
        </div>
    </>
  )
}

export default CouponOverlay