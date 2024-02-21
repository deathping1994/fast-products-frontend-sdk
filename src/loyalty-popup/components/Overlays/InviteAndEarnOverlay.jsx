// @ts-nocheck
import { useEffect, useState } from "preact/hooks"
import fetchApi from "../Utils/FetchApi"
import Alert from "../Utils/Alert";

const InviteAndEarnOverlay = ({closeOverlay, customerDetails}) => {
    const [referralData, setReferralData] = useState({
        referral_code:"",
        path: ""
    })
    const [error, setError] = useState(false)
    const showError = ()=>{
        setError(true)
        setTimeout(()=>{
          setError(false)
        },3000)
      }
    const [showCopied, setShowCopied] = useState(false);
    useEffect(()=>{
        try {
            const fetchReferralCode = async ()=>{
                const resp = await fetchApi('/get-referral-code', 'post', customerDetails)
                // console.log(resp?.data);
                setReferralData(resp?.data)
            }
            fetchReferralCode()
        } catch (error) {
            showError()
        }
    },[])
    const copyReferralLinkFunc = ()=>{
        setShowCopied(true)
        navigator.clipboard.writeText(window.location.origin + "/account/register" + referralData.path)
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
                <p>{(`${window.location.origin}/account/register${referralData.path}`).substring(0,29)}...</p>
                <img onClick={copyReferralLinkFunc} src="https://media.farziengineer.co/farziwallet/copy-icon.png" alt="" />
            </div>
            <div>
                <hr class="dashedDivider" />
            </div>
            <div class="shareTextContainer">
                <p>or share with</p>
            </div>
            <div class="sendInvitesBtnContainer">
                <a href={`https://api.whatsapp.com/send?text=SOHNAA offers an exclusive range of gold and diamond jewellery designs online. Your ultimate destination for a premium collection of jewellery. Checkout the exclusive discount offer - ${window.location.origin + referralData.path}`} target="_blank" class="inviteWhatsappBtn">
                    <img src="https://media.farziengineer.co/farziwallet/whatsapp-icon.png" alt="" />
                    <p>Send on whatsapp</p>
                </a>
                <a href={`sms://18005555555/?body=SOHNAA offers an exclusive range of gold and diamond jewellery designs online. Your ultimate destination for a premium collection of jewellery. Checkout the exclusive discount offer - ${window.location.origin + referralData.path}`} target="_blank" class="inviteRoundedBtn">
                    <img src="https://media.farziengineer.co/farziwallet/share_arrow.png" alt="" />
                </a>
            </div>
        </div>
        {error && <Alert/>}
    </>
  )
}

export default InviteAndEarnOverlay