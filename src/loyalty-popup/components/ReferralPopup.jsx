const ReferralPopup = ({closeReferralPopup}) => {

  const mainScript = document.querySelector("#fc-loyalty-popup-script-19212");
  const clientName = mainScript.getAttribute("client-name");
  return (
    <>
        <div class="referralPopupContainer">
            <img onClick={closeReferralPopup} src="https://media.farziengineer.co/farziwallet/cross.png" alt="" />
            <h2>Welcome to {clientName}</h2>
            <p>You have received 100 points into your {clientName} wallet for signing up with us. Your total wallet balance is 100. <span class="referralPopupHashtag">#LiveYourBrilliance</span> </p>
        </div>
    </>
  )
}

export default ReferralPopup