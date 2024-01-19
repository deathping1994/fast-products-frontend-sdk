const InviteAndEarnOverlay = () => {
    
    const referralLink = "https://0b92a5.myshopify.com/account/register?fc_refer_hash=83a24c"

  return (
    <>
        <div class="inviteAndEarnContainer">
            <div class="closeInviteContainer">
                <img width={30} src="https://media.farziengineer.co/farziwallet/cross.png" alt="" />
            </div>
            <div class="inviteAndEarn">
                <img src="https://media.farziengineer.co/farziwallet/invite-earn.png" alt="" />
                <h2>Invite & Earn</h2>
            </div>
            <div class="inviteAndEarnMessage">
                <h4>Every time you successfully refer friend. You get 200 FC Coins & they get 100 FC Coins</h4>
            </div>
            <div class="inviteEarnTextContainer">
                <p>copy referral link</p>
            </div>
            <div class="inviteLinkContainer">
                <p>{referralLink.substring(0,29)}...</p>
                <img src="https://media.farziengineer.co/farziwallet/copy-icon.png" alt="" />
            </div>
            <div>
                <hr class="dashedDivider" />
            </div>
            <div class="inviteTextContainer">
                <p>or share with</p>
            </div>
            <div class="sendInvitesBtnContainer">
                <button class="inviteWhatsappBtn">
                    <img src="https://media.farziengineer.co/farziwallet/whatsapp-icon.png" alt="" />
                    <p>Send on whatsapp</p>
                </button>
                <button class="inviteRoundedBtn">
                    <img src="https://media.farziengineer.co/farziwallet/share-icon.png" alt="" />
                </button>
            </div>
        </div>
    </>
  )
}

export default InviteAndEarnOverlay