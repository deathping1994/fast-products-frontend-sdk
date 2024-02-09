import { useEffect } from "preact/hooks"

const Referral = () => {
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
    
  return (
    <div></div>
  )
}

export default Referral