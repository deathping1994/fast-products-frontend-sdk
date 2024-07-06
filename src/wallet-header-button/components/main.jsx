import { useEffect, useState } from "preact/hooks";
import fetchApi from "../../global/FetchApi";

const Main = ({themeDetailsData, shadowRoot}) => {
    const mainScript = document.querySelector("#fc-wallet-header-button-script-19212");
    const customer_id = mainScript.getAttribute("data-customer-id");
    const user_hash = mainScript.getAttribute("data-customer-tag")?.trim() || sessionStorage.getItem('fc_wallet_user_hash') ||  '' ;
    const client_id = mainScript.getAttribute("data-client-id");
    const showAtLogout = mainScript.getAttribute("data-show-at-logout")
    const redirectURL = mainScript.getAttribute("data-redirect-url")
    const [walletAmount, setWalletAmount] = useState("")
    const [loading, setLoading] = useState(false);
    const [showBtnAtLogout, setShowBtnAtLogout] = useState('false')
    const customerDetails = {
      client_id,
      customer_id,
      user_hash
    };
    useEffect(()=>{
      if(customerDetails.customer_id){
        setShowBtnAtLogout('true')
        const getWalletAmount = async ()=>{
          try {
            setLoading(true)
            const walletResponse = await fetchApi("/user-walletlogs","post",{
              ...customerDetails
            }
            );
            if(walletResponse?.status !== 'success'){
              console.log("Failed to get walletlog");
            }else{
              if(!isNaN(walletResponse?.data?.data?.wallet?.wallet?.amount)){
                setWalletAmount(`₹ ${walletResponse?.data?.data?.wallet?.wallet?.amount}`)
              }else{
                setWalletAmount(`₹ 0`)
              }
            }
  
          } catch (error) {
            const checkUser = await fetchApi('/sync-external-user', 'post', {...customerDetails})
            if(checkUser.status === 'success'){
              const walletResponse = await fetchApi("/user-walletlogs","post",{
                ...customerDetails
              })
              setWalletAmount(`₹ ${walletResponse?.data?.data?.wallet?.wallet?.amount}`)
            }else {
              setWalletAmount(`₹ 0`)
            }
          } finally {
            setLoading(false)
          }
        }
        getWalletAmount()
      }else{
        setShowBtnAtLogout(showAtLogout)
        setWalletAmount("Login")
      }
    },[customer_id])

// this is a global function by which we'll be able to modify the header button ka amount from anywhere
window.setHeaderButtonAmount = 
function (amt) {
  setWalletAmount(amt)
}


  return (
    showBtnAtLogout === 'true' && (
      <div id="fc-retainley-wallet-box">
          <a href={walletAmount === "Login" ? (themeDetailsData?.data?.login_page || '/account/login') : redirectURL} id="fc-retainley-wallet-btn">{loading ? <div className="loader"></div> : walletAmount || "Login"}</a>
          <span id="fc-wallet-amt-name">{themeDetailsData?.data?.coin_name}</span>
      </div>
    )
  )
}

export default Main