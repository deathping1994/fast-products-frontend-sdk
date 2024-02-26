import { render } from "preact";
import style from "./shadow-styles.css?inline";
import Main from "./components/Main";

export function App({shadowRoot}) {
  return (
    <>
      <div class="widget-container">
        <Main shadowRoot={shadowRoot}/>
      </div>
      <div class="widget-styles"></div>
      <div class="widget-custom-styles"></div>
    </>
  );
}

export function AppCSS() {
  return <style>{style}</style>;
}

export function AppCustomCSS({ customStyles }) {
  return <style>{customStyles}</style>;
}

export const WALLET_API_URI = import.meta.env.VITE_APP_BASE_URL;

async function renderReferralSnippet() {
  try {
    const targetDiv = document.getElementById("MainContent");
    const ele = targetDiv.querySelector(".fc-scratch-card-snippet-19212-target")
    targetDiv.removeChild(ele)
    // Load the App content into the shadow DOM
    let shadowTarget = document.createElement("div");
    shadowTarget.className = "fc-referral-ui-snippet-19212-target";
    shadowTarget.style.display = "block";
    targetDiv.appendChild(shadowTarget);
    let shadow = shadowTarget.attachShadow({ mode: "open" });
    let shadowRoot = document.createElement("div");
    shadowRoot.className = "fc-referral-ui-snippet-19212-root";
    shadow.appendChild(shadowRoot);

    let themeDetailsData;
    // @ts-ignore
    if (window?.fc_loyalty_vars?.theme_details) {
      // @ts-ignore
      themeDetailsData = window?.fc_loyalty_vars?.theme_details;
    } else {
      const mainScript = document.querySelector("#fc-wallet-referral-snippet-ui-script-19212");
      console.log("mainScript",mainScript);
      const client_id = mainScript?.getAttribute("data-client-id");
      if(client_id){
        const themeDetailsRes = await fetch(
          `${WALLET_API_URI}/get-theme-details`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              client_id: client_id,
            }),
          }
        );
        themeDetailsData = await themeDetailsRes.json();
        // @ts-ignore
        window.fc_loyalty_vars = {
          // @ts-ignore
          ...window.fc_loyalty_vars, 
          theme_details: themeDetailsData
        }
        // @ts-ignore
        console.log("shadowroot",window.fc_loyalty_vars);
        
      }
      
    }
    
    const clientCustomStyleData = themeDetailsData?.data?.custom_css || "";

    render(<App shadowRoot={shadowRoot}/>, shadowRoot);
    render(<AppCSS />, shadowRoot?.querySelector(".widget-styles"));
    render(
      <AppCustomCSS customStyles={clientCustomStyleData} />,
      shadowRoot?.querySelector(".widget-custom-styles")
    );
  } catch (err) {
    console.log("error", err);
  }
}

// @ts-ignore
window.fc_loyalty_render_wallet_box = renderReferralSnippet; //Exposing for external use
renderReferralSnippet(); // Calling on first load