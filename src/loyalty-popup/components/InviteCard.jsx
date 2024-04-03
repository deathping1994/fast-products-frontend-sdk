import { useEffect, useState } from "preact/hooks"
import fetchApi from "./Utils/FetchApi"

const InviteCard = ({onClick, customer_id, client_id, handleLogin, isLoggedIn}) => {
    const [cardMessage, setCardMessage] = useState("")
    useEffect(()=>{
        if(localStorage.getItem(`fc-invite-text-${customer_id}`)){
            setCardMessage(localStorage.getItem(`fc-invite-text-${customer_id}`))
        }else{
            const fetch = async ()=>{
                // @ts-ignore
                const resp = await fetchApi('/get-referrer-message', 'post', {client_id})
                if(resp?.status !== "success"){
                    setCardMessage("Invite your friends to get rewards")
                }else{
                    setCardMessage(resp?.data?.getReferrerMessage);
                    localStorage.setItem(`fc-invite-text-${customer_id}`,resp?.data?.getReferrerMessage)
                }
            }
            fetch()
        }
    },[])
  return (
    <>
        <div class="inviteCard">
            <div class="inviteTextSection">
                <div>
                    <img src="https://media.farziengineer.co/farziwallet/rupee-icon.png" alt="" />
                </div>
                <div class="inviteTextContainer">
                    <h2>Invite & Earn</h2>
                    <p>{localStorage.getItem(`fc-invite-text-${customer_id}`) || cardMessage}</p>
                </div>
            </div>
            <button onClick={isLoggedIn ? onClick : handleLogin} class="invitebtn">Share Invite</button>
        </div>
    </>
  )
}

export default InviteCard