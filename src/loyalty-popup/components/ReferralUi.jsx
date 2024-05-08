import { useState, useEffect } from 'preact/hooks';
import Alert from '../../global/Alert';
import fetchApi from '../../global/FetchApi';
import Loading from '../../global/Loading';

const ReferralPage = ({shadowRoot, themeDetailsData}) => {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const [inviteMsg, setInviteMsg] = useState("")
  const mainScript = document.getElementById("fc-loyalty-popup-script-19212");
  const customer_id = mainScript.getAttribute("data-customer-id");
  const user_hash = mainScript.getAttribute("data-customer-tag")?.trim();
  const client_id = mainScript.getAttribute("data-client-id");
  if(customer_id){
    setLogin(true)
  }
  console.log("running referral ui ");
  useEffect(()=>{
    const fetch = async ()=>{
      try {
        const walletResponse = await fetchApi("/user-walletlogs","post",{client_id, customer_id, user_hash})
      } catch (error) {
        const checkUser = await fetchApi('/sync-external-user', 'post', {client_id, customer_id})
        if(checkUser.status === 'success'){
          console.log("user mil gya");
        }else{
          
        }
      }
    }
    fetch()
  },[])
  const handleShareClick = async ()=>{
    if(!localStorage.getItem(`fc-whatsapp-msg-${customer_id}`)){
      const whatsappResp = await fetchApi('/get-referred-message', 'post', {client_id, customer_id, user_hash})
      if (whatsappResp?.status === "success") {
          const message = whatsappResp?.data?.getReferredMessage;
          localStorage.setItem(`fc-whatsapp-msg-${customer_id}`, message);
      } else {
          showError();
      }
    }else{
        if(navigator.share){
          navigator.share({
            title: 'Invite your friend to get rewards',
            text: localStorage.getItem(`fc-whatsapp-msg-${customer_id}`),
          })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
        }else{
            navigator.clipboard.writeText(localStorage.getItem(`fc-whatsapp-msg-${customer_id}`))
            setShowCopied(true)
            setTimeout(()=>{
                setShowCopied(false)
            },1000)
        }
    }
}
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if(!localStorage.getItem(`fc-referral-code-${customer_id}`)){
          const resp = await fetchApi('/get-referral-code', 'post', { client_id, customer_id, user_hash });
          if(resp?.status === "success"){
            if(!resp?.data?.path.includes('undefined')){
              localStorage.setItem(`fc-referral-code-${customer_id}`, resp?.data?.path)
            }
          }else{
            showError()
          }
        }
        
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
        if(!localStorage.getItem(`fc-invite-text-${customer_id}`)){
          const resp = await fetchApi('/get-referrer-message', 'post', {client_id})
          if(resp?.status === "success"){
            localStorage.setItem(`fc-invite-text-${customer_id}`, resp?.data?.getReferrerMessage)
            setInviteMsg(resp?.data?.getReferrerMessage)
          }else{
            showError()
          }
        }else{
          setInviteMsg(localStorage.getItem(`fc-invite-text-${customer_id}`))
        }
    }
    fetchData()
  },[])

  const showError = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 3000);
  };


  const copyReferralLinkFunc = ()=>{
    console.log("referral copy func",localStorage.getItem(`fc-referral-code-${customer_id}`));
    setShowCopied(true)
    navigator.clipboard.writeText(window.location.origin + (localStorage.getItem(`fc-referral-code-${customer_id}`) || "/account/register"))
    setTimeout(()=>{
        setShowCopied(false)
    },1000)
}

  const hanldeWhatsappClick = async () => {
    if (localStorage.getItem(`fc-whatsapp-msg-${client_id}`)) {
        window.open(`https://api.whatsapp.com/send?text=${localStorage.getItem(`fc-whatsapp-msg-${client_id}`)}`, "_blank")
    } else {
        try {
            const whatsappResp = await fetchApi('/get-referred-message', 'post', {client_id, customer_id, user_hash})
            if (whatsappResp?.status === "success") {
                const message = whatsappResp?.data?.getReferredMessage;
                localStorage.setItem(`fc-whatsapp-msg-${client_id}`, message);
                window.open(`https://api.whatsapp.com/send?text=${message}`, "_blank");
            } else {
                showError();
            }
        } catch (error) {
            showError();
        }
    }
  }

  return (
    login ? <>
    {loading ? (
      <div className="loader"><Loading /></div>
    ) : (
      <div className="referralContainer">
        <div className="inviteAndEarnContainerPage">
          <div className="inviteAndEarn">
            <img src="https://media.farziengineer.co/farziwallet/invite-earn.png" alt="" />
            <h2>Invite & Earn</h2>
          </div>
          <div className="inviteAndEarnMessage">
            <h4>{inviteMsg}</h4>
          </div>
          <div className="inviteEarnTextContainer">
            <p>copy referral link</p>
          </div>
          {showCopied && <div className="copied">copied</div>}
          <div className="inviteLinkContainer">
            <p className="ellipsis-text">
              {`${window.location.origin}${localStorage.getItem(`fc-referral-code-${customer_id}`) || "/account/register"}`}
            </p>
            <img onClick={copyReferralLinkFunc} src="https://media.farziengineer.co/farziwallet/copy-icon.png" alt="" />
          </div>
          <div>
            <hr className="dashedDivider" />
          </div>
          <div className="shareTextContainer">
            <p>or share with</p>
          </div>
          <div className="sendInvitesBtnContainer">
            <button onClick={()=> hanldeWhatsappClick()} className="inviteWhatsappBtn">
              <img src="https://media.farziengineer.co/farziwallet/whatsapp-icon.png" alt="" />
              <p>Send on WhatsApp</p>
            </button>
            <button onClick={()=> handleShareClick()} className="inviteRoundedBtn">
              <img  src="https://media.farziengineer.co/farziwallet/share_arrow.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    )}
    {error && <Alert message={`Something went wrong`}/>}
  </> : <a class="loginbtn" href={`/account/login`}>Login to Continue</a>
  );
};

export default ReferralPage;