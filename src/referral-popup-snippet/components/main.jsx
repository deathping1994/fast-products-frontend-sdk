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
        const urlSearchParams = new URLSearchParams(window.location.search);
        const referHash = urlSearchParams.get("fc_refer_hash");
        if (referHash) {
            try {
                localStorage.setItem("fc_refer_hash", referHash);
            } catch (error) {
                console.log("error in storeReferHash", error);
            }
        }
    }
  , [])
  async function redeemReferHash({ client_id, customer_id,fc_refer_hash }) {
        try {
          // storing time for current API call
          const currentDate=new Date().toISOString()
          localStorage.setItem("referralApiTime",currentDate)
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
  }


  useEffect(()=>{
    const fc_refer_hash = localStorage.getItem("fc_refer_hash");
    // sabse pehle ye dekho ki customer id aur refer-hash hai ki nahin
    if(customer_id && fc_refer_hash){
      // check karo ki pehle API call hui hai ki nahin 
      const storedApiCallTime=localStorage.getItem("referralApiTime")
    if (storedApiCallTime) {
      // means referal wali api ek baari chal chuki hai
      const storedDate = new Date(storedApiCallTime);
      const currentDate=new Date()
      const differenceInMilliseconds = Math.abs(storedDate - currentDate);
      const differenceInSeconds = differenceInMilliseconds / 1000;
     
      // agar calls me difference 60 sec ke upar hoga toh call kara do api warna nahin.
      if(differenceInSeconds>60){
        redeemReferHash({client_id, customer_id,fc_refer_hash})
      }

    }else{
      // matlab API call nahin hui hai toh chala do
      redeemReferHash({client_id, customer_id,fc_refer_hash})
    }
  }
  },[referralPopup])

  const handleCloseReferralPopup = () => {
    setReferralPopup(false)
    location.reload()
  }
  return (
    <>
      {(referralPopup && customer_id) && 
        <div class="referralPopupParent">
        <div class="referralPopupContainer">
            <img onClick={handleCloseReferralPopup} src="https://media.farziengineer.co/farziwallet/cross.png" alt="" />
            <h2>Welcome to {clientName}</h2>
            <p>You have received {referedAmount} points into your {clientName} wallet for signing up with us.</p>
        </div>
        </div>
      }
    </>
  )
}

export default main