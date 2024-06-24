import { render } from "preact";
import style from "./shadow-style.css?inline";
import Main from "./components/Main";

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

async function renderWalletStrip() {
  try {
    const targetDiv = document.getElementById("fc-wallet-cart-strip-19212");
    targetDiv.innerHTML = "";
    // Load the App content into the shadow DOM
    let shadowTarget = document.createElement("div");
    shadowTarget.className = "fc-wallet-cart-strip-19212-target";
    shadowTarget.style.display = "block";
    targetDiv.appendChild(shadowTarget);
    let shadow = shadowTarget.attachShadow({ mode: "open" });
    let shadowRoot = document.createElement("div");
    shadowRoot.className = "fc-wallet-cart-strip-19212-root";
    shadow.appendChild(shadowRoot);

    let themeDetailsData;
    // @ts-ignore
    if (window?.fc_loyalty_vars?.theme_details) {
      // @ts-ignore
      themeDetailsData = window.fc_loyalty_vars.theme_details;
    } else {
      const mainScript = document.querySelector(
        "#fc-wallet-cart-strip-script-19212"
      );
      const client_id = mainScript.getAttribute("data-client-id");
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
      window.fc_loyalty_vars = { theme_details: themeDetailsData };
    }
    const clientCustomStyleData =
      themeDetailsData?.data?.apply_wallet_snippet_css || "";

    render(<App themeDetailsData={themeDetailsData} shadowRoot={shadowRoot} />, shadowRoot);
    render(<AppCSS />, shadowRoot?.querySelector(".widget-styles"));
    render(
      <AppCustomCSS customStyles={clientCustomStyleData} />,
      shadowRoot?.querySelector(".widget-custom-styles")
    );
  } catch (err) {
    // console.log("error", err);
  }
}

function checkWalletStrip() {
    setInterval(() => {
      if (
        document.querySelector(
          "#fc-wallet-cart-strip-19212 .fc-wallet-cart-strip-19212-target"
        )
      ) {
        //already rendered
      } else {
        //trigger render
        renderWalletStrip();
      }
    }, 300);
  }
  // @ts-ignore
  window.fc_loyalty_check_wallet_box = checkWalletStrip;
  checkWalletStrip();
// @ts-ignore
window.fc_loyalty_render_wallet_box = renderWalletStrip; //Exposing for external use
renderWalletStrip(); // Calling on first load