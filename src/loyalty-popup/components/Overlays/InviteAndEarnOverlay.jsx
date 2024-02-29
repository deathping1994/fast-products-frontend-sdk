// @ts-nocheck
import { useEffect, useState } from "preact/hooks"
import fetchApi from "../Utils/FetchApi"
import Alert from "../Utils/Alert";
import Loading from "../Utils/Loading";

const InviteAndEarnOverlay = ({closeOverlay, customerDetails}) => {
    const [referralData, setReferralData] = useState({
        referral_code:"",
        path: ""
    })
    // const [invitemsg, setInvitemsg] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const showError = ()=>{
        setError(true)
        setTimeout(()=>{
          setError(false)
        },3000)
    }
    const [showCopied, setShowCopied] = useState(false);

    const handleShareClick = ()=>{
        if(navigator.share){
          navigator.share({
            title: 'Invite your friend to get rewards',
            text: localStorage.getItem("fc-whatsapp-msg"),
          })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
        }else{
            navigator.clipboard.writeText(localStorage.getItem("fc-whatsapp-msg"))
            setShowCopied(true)
            setTimeout(()=>{
                setShowCopied(false)
            },1000)
        }
    }
    const hanldeWhatsappClick = async () => {
        if (localStorage.getItem("fc-whatsapp-msg")) {
            window.open(`https://api.whatsapp.com/send?text=${localStorage.getItem("fc-whatsapp-msg")}`, "_blank")
        } else {
            try {
                const whatsappResp = await fetchApi('/get-referred-message', 'post', customerDetails)
                if (whatsappResp?.status === "success") {
                    const message = whatsappResp?.data?.getReferredMessage;
                    localStorage.setItem("fc-whatsapp-msg", message);
                    window.open(`https://api.whatsapp.com/send?text=${message}`, "_blank");
                } else {
                    showError();
                }
            } catch (error) {
                showError();
            }
        }
    }
    
    
    const copyReferralLinkFunc = ()=>{
        setShowCopied(true)
        navigator.clipboard.writeText(window.location.origin + (localStorage.getItem("fc-referral-code") || "/account/register"))
        setTimeout(()=>{
            setShowCopied(false)
        },1000)
    }
  return (
    <>
        {loading ? <div className="loader"><Loading/></div> :
        <div class="inviteAndEarnContainer">
            <div onClick={closeOverlay} class="closeInviteContainer">
                <img width={30} src="https://media.farziengineer.co/farziwallet/cross.png" alt="" />
            </div>
            <div class="inviteAndEarn">
                <img src="https://media.farziengineer.co/farziwallet/invite-earn.png" alt="" />
                <h2>Invite & Earn</h2>
            </div>
            <div class="inviteAndEarnMessage">
                <h4>{localStorage.getItem("fc-invite-overlay-text")}</h4>
            </div>
            <div class="inviteEarnTextContainer">
                <p>copy referral link</p>
            </div>
            {showCopied && <div class="copied">copied</div>}
            <div class="inviteLinkContainer">
                <p>{(`${window.location.origin}${localStorage.getItem("fc-referral-code") || "/account/register"}`).substring(0,29)}...</p>
                <img onClick={copyReferralLinkFunc} src="https://media.farziengineer.co/farziwallet/copy-icon.png" alt="" />
            </div>
            <div>
                <hr class="dashedDivider" />
            </div>
            <div class="shareTextContainer">
                <p>or share with</p>
            </div>
            <div class="sendInvitesBtnContainer">
                <button onClick={()=> hanldeWhatsappClick()} class="inviteWhatsappBtn">
                    <img src="https://media.farziengineer.co/farziwallet/whatsapp-icon.png" alt="" />
                    <p>Send on whatsapp</p>
                </button>
                <button onClick={()=> handleShareClick(whatsappmsg)} class="inviteRoundedBtn">
                    <img src="https://media.farziengineer.co/farziwallet/share_arrow.png" alt="" />
                </button>
            </div>
        </div>
    }
        {error && <Alert/>}
        
    </>
    // const whatsappResp = await fetchApi('/get-referred-message', 'post', customerDetails)
  )
}

export default InviteAndEarnOverlay