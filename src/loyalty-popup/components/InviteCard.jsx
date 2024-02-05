const InviteCard = ({onClick}) => {

  return (
    <>
        <div class="inviteCard">
            <div class="inviteTextSection">
                <div>
                    <img src="https://media.farziengineer.co/farziwallet/rupee-icon.png" alt="" />
                </div>
                <div class="inviteTextContainer">
                    <h2>Invite & Earn</h2>
                    <p>Get 200 {window.
// @ts-ignore
                    fc_loyalty_vars.coin_name} coins every time you invite a friend to try loyalty</p>
                </div>
            </div>
            <button onClick={onClick} class="invitebtn">Share Invite</button>
        </div>
    </>
  )
}

export default InviteCard