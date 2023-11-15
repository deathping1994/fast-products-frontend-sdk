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

function renderCartDrawer() {
  const targetDiv = document.body;
  // Load the App content into the shadow DOM
  let shadowTarget = document.createElement("div");
  shadowTarget.className = "fc-cart-drawer-19212-target";
  shadowTarget.style.display = "block";
  targetDiv.appendChild(shadowTarget);
  let shadow = shadowTarget.attachShadow({ mode: "open" });
  let shadowRoot = document.createElement("div");
  shadowRoot.className = "fc-cart-drawer-19212--root";
  shadow.appendChild(shadowRoot);

  render(<App />, shadowRoot);
  render(<AppCSS />, shadowRoot?.querySelector(".widget-styles"));
}

// @ts-ignore
window.fc_render_cart_drawer = renderCartDrawer; //Exposing for external use
renderCartDrawer(); // Calling on first load
