import { useEffect, useState } from "preact/hooks";

export function Main(props) {
  const [open, setOpen] = useState("")
  useEffect(()=>{
    let cartSvgButton = document.querySelector("#cart-icon-bubble")
    cartSvgButton.addEventListener("click",(event)=>{
      event.preventDefault();
       setOpen("open")
      
    })
  },[])

  
  function handleOutsideClick(event){
  if (event.target.closest('.cart-container')) {
    setOpen("open");
  }
  else{
    setOpen("")
  }
};
  return (
    <>
  <div class={`cart-overlay ${open !== "" ? "open" :""}`} onClick={handleOutsideClick}>
      <div class={`cart-container ${open !== "" ? "open" :""}`}>
        <h1 class="fc-cart-drawer-title">{props.title}</h1>
      </div>
      </div>
    </>
  );
}
