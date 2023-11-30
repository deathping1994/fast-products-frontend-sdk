import { render } from "preact";
import style from "./shadow-style.css?inline";
import { Main } from "./components/main";

export function App() {
  return (
    <>
      <div class="widget-container">
        <Main/>
      </div>
      <div class="widget-styles"></div>
    </>
  );
}

export function AppCSS() {
  return <style>{style}</style>;
}

export const WALLET_API_URI = import.meta.env.VITE_APP_BASE_URL;

function renderwalletActivitySnippet() {
  const targetDiv = document.getElementById("fc-wallet-activity-snippet-19212");
  // Load the App content into the shadow DOM
  let shadowTarget = document.createElement("div");
  shadowTarget.className = "fc-wallet-activity-snippet-19212-target";
  shadowTarget.style.display = "block";
  targetDiv.appendChild(shadowTarget);
  let shadow = shadowTarget.attachShadow({ mode: "open" });
  let shadowRoot = document.createElement("div");
  shadowRoot.className = "fc-wallet-activity-snippet-19212--root";
  shadow.appendChild(shadowRoot);

  render(<App />, shadowRoot);
  render(<AppCSS />, shadowRoot?.querySelector(".widget-styles"));
}

// @ts-ignore
window.fc_render_wallet_activity_snippet = renderwalletActivitySnippet; //Exposing for external use
renderwalletActivitySnippet(); // Calling on first load
