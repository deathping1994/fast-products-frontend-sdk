import { useEffect, useState } from "preact/hooks";
import { CartItems } from "./CartItems"
export function Main(props) {
  const [open, setOpen] = useState("")
  useEffect(()=>{
    let cartSvgButton = document.querySelector("#cart-icon-bubble")
    const addToCartButton = document.querySelector(".product-form__submit")
    function openSlider(event){
      event.preventDefault();
       setOpen("open")
    }
    function openSliderAtc(event){
      // event.preventDefault();
      const hideDefaultCart = document.getElementById("cart-notification")
      hideDefaultCart.style.display = "none"
       setOpen("open")
    }
    cartSvgButton?.addEventListener("click",openSlider)
    addToCartButton?.addEventListener("click",openSliderAtc)
  },[])

  
  function handleOutsideClick(event){
  if (event.target.closest('.cart-container')) {
    setOpen("open");
  }
  else{
    setOpen("")
  }
};
function handleCloseSlider(event){
  // event.preventDefault()
  setOpen("")
}
  return (
    <>
      <div class={`cart-overlay ${open !== "" ? "open" :""}`} onClick={handleOutsideClick}>
        <div class={`cart-container ${open !== "" ? "open" :""}`}>
          <h1 class="fc-cart-drawer-title">{props.title}</h1>
          <CartItems/>
        </div>
      </div>
      <button class={`fc-close-slider ${open !== "" ? "open" :""}`} onClick={handleCloseSlider}>
        <svg width="12" viewBox="0 0 10 10"><path d="M9.677 8.118a1.102 1.102 0 11-1.559 1.56L5 6.558 1.882 9.677a1.102 1.102 0 11-1.56-1.559L3.442 5 .323 1.882A1.102 1.102 0 111.882.322L5 3.442 8.118.323a1.102 1.102 0 111.56 1.559L6.558 5l3.118 3.118z" fill="#000" fill-rule="nonzero"></path></svg>
        </button>
        
    </>
  );
}
