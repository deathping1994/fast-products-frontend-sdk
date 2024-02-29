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
    const [invitemsg, setInvitemsg] = useState("")
    const [whatsappmsg, setWhatsappmsg] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const showError = ()=>{
        setError(true)
        setTimeout(()=>{
          setError(false)
        },3000)
      }
    const [showCopied, setShowCopied] = useState(false);
    useEffect(() => {
        const fetchReferralCode = async () => {
            try {
                setLoading(true);
                const resp = await fetchApi('/get-referral-code', 'post', customerDetails);
                const response = await fetchApi('/get-referral-message','post', {client_id: customerDetails?.client_id})
                const whatsappResp = await fetchApi('/get-referred-message', 'post', customerDetails)
                
                if(response?.status !== "success"){
                    setInvitemsg("Share with you friends to get rewards.")
                    setWhatsappmsg("Share this with whatsapp")
                }else{
                    setInvitemsg(response?.data?.getReferralMessage)
                    setWhatsappmsg(whatsappResp?.data?.getReferredMessage)
                }
                // setInvitemsg(response)
                setReferralData(resp?.data);
            } catch (error) {
                showError();
            } finally {
                setLoading(false);
            }
        };
    
        fetchReferralCode();
    }, []);

    const handleShareClick = (msg)=>{
        if(navigator.share){
          navigator.share({
            title: 'Invite your friend to get rewards',
            text: msg,
          })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
        }else{
            navigator.clipboard.writeText(msg)
            setShowCopied(true)
            setTimeout(()=>{
                setShowCopied(false)
            },1000)
        }
      }
    
    const copyReferralLinkFunc = ()=>{
        setShowCopied(true)
        navigator.clipboard.writeText(window.location.origin + (referralData?.path || "/account/register"))
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
                <h4>{invitemsg}</h4>
            </div>
            <div class="inviteEarnTextContainer">
                <p>copy referral link</p>
            </div>
            {showCopied && <div class="copied">copied</div>}
            <div class="inviteLinkContainer">
                <p>{(`${window.location.origin}${referralData?.path || "/account/register"}`).substring(0,29)}...</p>
                <img onClick={copyReferralLinkFunc} src="https://media.farziengineer.co/farziwallet/copy-icon.png" alt="" />
            </div>
            <div>
                <hr class="dashedDivider" />
            </div>
            <div class="shareTextContainer">
                <p>or share with</p>
            </div>
            <div class="sendInvitesBtnContainer">
                <a href={`https://api.whatsapp.com/send?text=${whatsappmsg}`} target="_blank" class="inviteWhatsappBtn">
                    <img src="https://media.farziengineer.co/farziwallet/whatsapp-icon.png" alt="" />
                    <p>Send on whatsapp</p>
                </a>
                <button onClick={()=> handleShareClick(whatsappmsg)} class="inviteRoundedBtn">
                    <img src="https://media.farziengineer.co/farziwallet/share_arrow.png" alt="" />
                </button>
            </div>
        </div>
    }
        {error && <Alert/>}
        
    </>
    
  )
}

export default InviteAndEarnOverlay