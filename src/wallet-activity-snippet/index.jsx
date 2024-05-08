import { render } from "preact";
import style from "./shadow-style.css?inline";
import { Main } from "./components/main";
import { parseJson } from "../global/utils";

export function App({themeDetailsData}) {
  return (
    <>
      <div class="widget-container">
        <Main walletThemeDetailsData={themeDetailsData}/>
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

async function renderwalletActivitySnippet() {
  const targetDiv = document.getElementById("fc-wallet-activity-snippet-19212");
  targetDiv.innerHTML = "";
  // Load the App content into the shadow DOM
  let shadowTarget = document.createElement("div");
  shadowTarget.className = "fc-wallet-activity-snippet-19212-target";
  shadowTarget.style.display = "block";
  targetDiv.appendChild(shadowTarget);
  let shadow = shadowTarget.attachShadow({ mode: "open" });
  let shadowRoot = document.createElement("div");
  shadowRoot.className = "fc-wallet-activity-snippet-19212--root";
  shadow.appendChild(shadowRoot);

  let themeDetailsData;
  // @ts-ignore
  if (window?.fc_loyalty_vars?.wallet_snippet_theme_details) {
    // @ts-ignore
    themeDetailsData = window.fc_loyalty_vars.wallet_snippet_theme_details;
  } else {
    const mainScript = document.querySelector(
      "#fc-wallet-activity-snippet-script-19212"
    );
    const client_id = mainScript.getAttribute("data-client-id");
    const themeDetailsRes = await fetch(
      `${WALLET_API_URI}/wallet-page-theme-details`,
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
    const themeData = await themeDetailsRes.json();
    themeDetailsData = parseJson(themeData?.data?.theme_data);
    // @ts-ignore
    if (window.fc_loyalty_vars) {
      // @ts-ignore
      window.fc_loyalty_vars = {
        // @ts-ignore
        ...window.fc_loyalty_vars,
        wallet_snippet_theme_details: themeDetailsData,
      };
    } else {
      // @ts-ignore
      window.fc_loyalty_vars = {
        wallet_snippet_theme_details: themeDetailsData,
      };
    }
  }
  const clientCustomStyleData = themeDetailsData?.custom_css || "";

  render(<App themeDetailsData={themeDetailsData}/>, shadowRoot);
  render(<AppCSS />, shadowRoot?.querySelector(".widget-styles"));
  render(
    <AppCustomCSS customStyles={clientCustomStyleData} />,
    shadowRoot?.querySelector(".widget-custom-styles")
  );
}

// @ts-ignore
window.fc_render_wallet_activity_snippet = renderwalletActivitySnippet; //Exposing for external use
renderwalletActivitySnippet(); // Calling on first load
