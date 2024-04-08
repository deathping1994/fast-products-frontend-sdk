import { useEffect, useState } from "preact/hooks";
import fetchApi from "../../global/FetchApi";

const main = ({themeDetailsData, shadowRoot}) => {
  const mainScript = document.querySelector("#fc-referral-popup-script-19212");
  const client_id = mainScript.getAttribute("data-client-id");
  const customer_id = mainScript.getAttribute("data-customer-id");
  const clientName = mainScript.getAttribute("client-name");
  const [referralPopup, setReferralPopup] = useState(false)
  const [referedAmount, setReferedAmount] = useState(0)
  useEffect(() => {
    (function storeReferHash() {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const referHash = urlSearchParams.get("fc_refer_hash");
        if (referHash) {
            try {
                localStorage.setItem("fc_refer_hash", referHash);
            } catch (error) {
                console.log("error in storeReferHash", error);
            }
        }
    })();
  }, [])
  async function redeemReferHash({ client_id, customer_id }) {
    const fc_refer_hash = localStorage.getItem("fc_refer_hash");
    if (fc_refer_hash) {
      setTimeout(async () => {
        try {
          const user_hash = mainScript.getAttribute("data-customer-tag")?.trim();
          if(!localStorage.getItem(`fc-referral-code-${customer_id}`)){
            try {
              const resp = await fetchApi("/get-referral-code", "post", {client_id, customer_id, user_hash})
              if(resp?.status === "success"){
                if(!resp?.data?.path.includes('undefined')){
                  localStorage.setItem(`fc-referral-code-${customer_id}`, resp?.data?.path)
                }
              }
            } catch (error) {
              console.log("error in referral code");
            }
          }
          
          const response = await fetchApi('/redeem-referral-code', 'post', {
            client_id: client_id,
            customer_id: customer_id,
            refer_hash: fc_refer_hash
          });
  
          if (response?.status === 'success') {
            setReferralPopup(true);
            setReferedAmount(response?.data?.referredReward);
            localStorage.removeItem("fc_refer_hash");
            return;
          }
        } catch (err) {
          console.log("error in redeemReferHash", err);
        }
      }, 2000);
    }
  }
  useEffect(()=>{
    redeemReferHash({client_id, customer_id})
  },[referralPopup])

  const handleCloseReferralPopup = () => {
    setReferralPopup(false)
    location.reload()
  }
  return (
    <>
      {(referralPopup && customer_id) && 
        <div class="referralPopupContainer">
            <img onClick={handleCloseReferralPopup} src="https://media.farziengineer.co/farziwallet/cross.png" alt="" />
            <h2>Welcome to {clientName}</h2>
            <p>You have received {referedAmount} points into your {clientName} wallet for signing up with us.</p>
        </div>
      }
    </>
  )
}

export default main