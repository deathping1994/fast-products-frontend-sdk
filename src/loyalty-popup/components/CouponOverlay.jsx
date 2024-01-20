const CouponOverlay = ({onClick}) => {
  return (
    <>
        <div class="unlockCouponContainer">
            <div class="couponContainer">
                <div class="couponOverlayContainer">
                    <img src="https://media.farziengineer.co/farziwallet/voucher-icon.png" alt="" />
                    <h4>$30 Voucher</h4>
                    <img onClick={onClick} src="https://media.farziengineer.co/farziwallet/cross.png" alt="" />
                </div>
                <div>
                    <p>Rs. 30 off on Striped Silk Blouse</p>
                </div>
                <div>
                    <p>The management reserves the right to modify the coupon as they see fit and to adjust the customer's wallet if they determine the event.</p>
                </div>
                <div>
                    <hr class="dashedDivider" />
                </div>
                <div>
                    <h2>Unlock for 30 FC Coins</h2>
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