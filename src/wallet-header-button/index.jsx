import { render } from "preact";
import style from "./shadow-style.css?inline";
import Main from "./components/main";

export function App({ themeDetailsData, shadowRoot }) {
  return (
    <>
      <div class="widget-container">
        <Main themeDetailsData={themeDetailsData} shadowRoot={shadowRoot} />
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

async function renderWalletAmtHeaderButton() {
  try {
    const mainScript = document.querySelector("#fc-wallet-header-button-script-19212");
    const appendClass = mainScript?.getAttribute("data-append-class-name");
    const targetDiv = document.querySelector(`${appendClass}`);
    // Load the App content into the shadow DOM
    let shadowTarget = document.createElement("div");
    shadowTarget.className = "fc-wallet-amount-header-button-19212-target";
    shadowTarget.style.display = "block";
    targetDiv.appendChild(shadowTarget);
    let shadow = shadowTarget.attachShadow({ mode: "open" });
    let shadowRoot = document.createElement("div");
    shadowRoot.className = "fc-wallet-amount-header-button-19212-root";
    shadow.appendChild(shadowRoot);

    let themeDetailsData;
    // @ts-ignore
    if (window?.fc_loyalty_vars?.theme_details) {
      // @ts-ignore
      themeDetailsData = window?.fc_loyalty_vars?.theme_details;
    } else {
      const mainScript = document.querySelector("#fc-wallet-header-button-script-19212");
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
        // console.log("shadowroot",window.fc_loyalty_vars);
        
      }
      
    }
    
    const clientCustomStyleData =
      themeDetailsData?.data?.custom_css || "";

    render(<App themeDetailsData={themeDetailsData} shadowRoot={shadowRoot} />, shadowRoot);
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
window.fc_loyalty_render_wallet_box = renderWalletAmtHeaderButton; //Exposing for external use
renderWalletAmtHeaderButton(); // Calling on first load