// @ts-nocheck
import { useEffect, useState } from "preact/hooks"
import fetchApi from "../Utils/FetchApi"

const InviteAndEarnOverlay = ({closeOverlay, customerDetails}) => {
    const [referralData, setReferralData] = useState({
        referral_code:"",
        path: ""
    })
    const [showCopied, setShowCopied] = useState(false);
    useEffect(()=>{
        try {
            const fetchReferralCode = async ()=>{
                const resp = await fetchApi('/get-referral-code', 'post', customerDetails)
                console.log(resp?.data);
                setReferralData(resp?.data)
            }
            fetchReferralCode()
        } catch (error) {
            console.log("error in inviteEarn");
        }
    },[])
    const copyReferralLinkFunc = ()=>{
        setShowCopied(true)
        navigator.clipboard.writeText(window.location.href.slice(0, -1) + referralData.path)
        setTimeout(()=>{
            setShowCopied(false)
        },1000)
    }
  return (
    <>
        <div class="inviteAndEarnContainer">
            <div onClick={closeOverlay} class="closeInviteContainer">
                <img width={30} src="https://media.farziengineer.co/farziwallet/cross.png" alt="" />
            </div>
            <div class="inviteAndEarn">
                <img src="https://media.farziengineer.co/farziwallet/invite-earn.png" alt="" />
                <h2>Invite & Earn</h2>
            </div>
            <div class="inviteAndEarnMessage">
                <h4>Every time you successfully refer friend. You get 200 {window.fc_loyalty_vars.coin_name} Coins & they get 100 {window.fc_loyalty_vars.coin_name} Coins</h4>
            </div>
            <div class="inviteEarnTextContainer">
                <p>copy referral link</p>
            </div>
            {showCopied && <div class="copied">copied</div>}
            <div class="inviteLinkContainer">
                <p>{(window.location.href.slice(0, -1) + referralData.path).substring(0,29)}...</p>
                <img onClick={copyReferralLinkFunc} src="https://media.farziengineer.co/farziwallet/copy-icon.png" alt="" />
            </div>
            <div>
                <hr class="dashedDivider" />
            </div>
            <div class="shareTextContainer">
                <p>or share with</p>
            </div>
            <div class="sendInvitesBtnContainer">
                <a href={`https://api.whatsapp.com/send?text=Click%20on%20the%20referral%20link%20below%20and%20get%20rewarded%20with%20100%20FC%20Coins.%20${window.location.href.slice(0, -1) + referralData.path}`} class="inviteWhatsappBtn">
                    <img src="https://media.farziengineer.co/farziwallet/whatsapp-icon.png" alt="" />
                    <p>Send on whatsapp</p>
                </a>
                <a href={`sms://18005555555/?body=Click%20on%20the%20referral%20link%20below%20and%20get%20rewarded%20with%20100%20FC%20Coins.%20${window.location.href.slice(0, -1) + referralData.path}`} class="inviteRoundedBtn">
                    <img src="https://media.farziengineer.co/farziwallet/share-icon.png" alt="" />
                </a>
            </div>
        </div>
    </>
  )
}

export default InviteAndEarnOverlay