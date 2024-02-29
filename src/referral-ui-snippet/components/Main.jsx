import { useState, useEffect } from 'preact/hooks';
import Alert from '../../global/Alert';
import fetchApi from '../../global/FetchApi';
import Loading from '../../global/Loading';

const Main = ({shadowRoot, themeDetailsData}) => {
  const [invitemsg, setInvitemsg] = useState("");
  const [whatsappmsg, setWhatsappmsg] = useState("");
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

  const mainScript = document.getElementById("fc-wallet-referral-snippet-ui-script-19212");
  const customer_id = mainScript.getAttribute("data-customer-id");
  if(customer_id){
    setLogin(true)
  }
  console.log("running referral ui ");
  const [referralData, setReferralData] = useState({
    referral_code: "",
    path: ""
  });

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
    }
  }


  const showError = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 3000);
  };

  useEffect(() => {
    const fetchReferralCode = async () => {
      try {
        setLoading(true);
        const customer_id = mainScript.getAttribute("data-customer-id");
        const user_hash = mainScript.getAttribute("data-customer-tag")?.trim();
        const client_id = mainScript.getAttribute("data-client-id");
        
        const resp = await fetchApi('/get-referral-code', 'post', {client_id, customer_id, user_hash});
        const response = await fetchApi('/get-referral-message', 'post', { client_id });
        const whatsappResp = await fetchApi('/get-referred-message', 'post', {client_id, customer_id, user_hash});
        console.log("all referral resp", resp,response, whatsappResp);
        if (response?.status !== "success") {
          setInvitemsg("Share with your friends to get rewards.");
          setWhatsappmsg("Share this with WhatsApp");
        } else {
          setInvitemsg(response?.data?.getReferralMessage);
          setWhatsappmsg(whatsappResp?.data?.getReferredMessage);
        }

        setReferralData(resp?.data);
      } catch (error) {
        showError();
      } finally {
        setLoading(false);
      }
    };

    fetchReferralCode();
  }, []);

  const copyReferralLinkFunc = () => {
    setShowCopied(true);
    navigator.clipboard.writeText(window.location.origin + (referralData?.path || "/account/register"));
    setTimeout(() => {
      setShowCopied(false);
    }, 1000);
  };

  return (
    login ? <>
    {loading ? (
      <div className="loader"><Loading /></div>
    ) : (
      <div className="referralContainer">
        <div className="inviteAndEarnContainer">
          <div className="inviteAndEarn">
            <img src="https://media.farziengineer.co/farziwallet/invite-earn.png" alt="" />
            <h2>Invite & Earn</h2>
          </div>
          <div className="inviteAndEarnMessage">
            <h4>{invitemsg}</h4>
          </div>
          <div className="inviteEarnTextContainer">
            <p>copy referral link</p>
          </div>
          {showCopied && <div className="copied">copied</div>}
          <div className="inviteLinkContainer">
            <p>{(`${window.location.origin}${referralData?.path || "/account/register"}`).substring(0,35)}...</p>
            <img onClick={copyReferralLinkFunc} src="https://media.farziengineer.co/farziwallet/copy-icon.png" alt="" />
          </div>
          <div>
            <hr className="dashedDivider" />
          </div>
          <div className="shareTextContainer">
            <p>or share with</p>
          </div>
          <div className="sendInvitesBtnContainer">
            <a href={`https://api.whatsapp.com/send?text=${whatsappmsg}`} target="_blank" className="inviteWhatsappBtn">
              <img src="https://media.farziengineer.co/farziwallet/whatsapp-icon.png" alt="" />
              <p>Send on WhatsApp</p>
            </a>
            <button onClick={()=> handleShareClick(whatsappmsg)} className="inviteRoundedBtn">
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

export default Main;