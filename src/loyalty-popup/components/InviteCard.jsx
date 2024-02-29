import { useEffect, useState } from "preact/hooks"
import fetchApi from "./Utils/FetchApi"

const InviteCard = ({onClick, client_id}) => {
    const [cardMessage, setCardMessage] = useState("")
    useEffect(()=>{
        if(localStorage.getItem("fc-invite-text")){
            setCardMessage(localStorage.getItem("fc-invite-text"))
        }else{
            const fetch = async ()=>{
                const resp = await fetchApi('/get-referrer-message', 'post', {client_id})
                if(resp?.status !== "success"){
                    setCardMessage("Invite your friends to get rewards")
                }else{
                    setCardMessage(resp?.data?.getReferrerMessage);
                    localStorage.setItem("fc-invite-text",resp?.data?.getReferrerMessage)
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
                    <p>{cardMessage}</p>
                </div>
            </div>
            <button onClick={onClick} class="invitebtn">Share Invite</button>
        </div>
    </>
  )
}

export default InviteCard