import { render } from "preact";
import style from "./shadow-style.css?inline";
import { Main } from "./components/main";

export function App() {
  return (
    <>
      <div class="widget-container">
        <Main />
      </div>
      <div class="widget-styles"></div>
    </>
  );
}

export function AppCSS() {
  return <style>{style}</style>;
}

export const WALLET_API_URI = import.meta.env.VITE_APP_BASE_URL;

function renderWalletBox(){
// Load the App content into the shadow DOM
let shadowTarget = document.createElement("div");
shadowTarget.className = "fc-wallet-cart-widget-19212-target";
shadowTarget.style.display = "block";
document
  .getElementById("fc-wallet-cart-widget-19212")
  .appendChild(shadowTarget);
let shadow = shadowTarget.attachShadow({ mode: "open" });
let shadowRoot = document.createElement("div");
shadowRoot.className = "fc-wallet-cart-widget-19212-root";
shadow.appendChild(shadowRoot);

render(<App />, shadowRoot);
render(<AppCSS />, shadowRoot?.querySelector(".widget-styles"));
}

window.fc_loyalty_render_wallet_box = renderWalletBox; //Exposing for external use
renderWalletBox(); // Calling on first load
