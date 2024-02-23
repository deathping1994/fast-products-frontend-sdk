const ReferralPopup = ({referedAmount, walletAmount, closeReferralPopup}) => {

  const mainScript = document.querySelector("#fc-loyalty-popup-script-19212");
  const clientName = mainScript.getAttribute("client-name");
  return (
    <>
        <div class="referralPopupContainer">
            <img onClick={closeReferralPopup} src="https://media.farziengineer.co/farziwallet/cross.png" alt="" />
            <h2>Welcome to {clientName}</h2>
            <p>You have received {referedAmount} points into your {clientName} wallet for signing up with us. Your total wallet balance is {parseInt(walletAmount) + parseInt(referedAmount)}.</p>
        </div>
    </>
  )
}

export default ReferralPopup