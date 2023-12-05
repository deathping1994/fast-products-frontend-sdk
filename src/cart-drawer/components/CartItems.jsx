import React, { useEffect, useState } from 'preact/hooks'
import { SingleItem } from './SingleItem'
export function CartItems(){
 const [listItem,setListItem] = useState([])
 const [subtotalPrice,setSubtotalPrice] = useState(10)

 async function GetDataAboutItem(){
   const response = await fetch('/cart.json')
   console.log("data",response)
   const data = await response.json()
   console.log("result",data)
   setListItem(data.items)
   setSubtotalPrice(data.total_price)

    // Fetch compare_at_price for each item
      const comparePricesPromises = data.items.map(async (item) => {
      const handle = item.handle;
      const compResponse = await fetch(`/products/${handle}.json`);
      const compData = await compResponse.json();
      const variant = compData.product.variants.find((v) => v.id === item.variant_id);
      return variant ? variant.compare_at_price : null;
    });
    Promise.all(comparePricesPromises)
     .then((comparePrices) => {
       // Update the state with compare_at_prices
       setListItem((prevItems) =>
         prevItems.map((item, index) => ({
           ...item,
           compare_at_price: comparePrices[index],
         }))
       );
       console.log("listItem",listItem)
     })
     .catch((error) => console.error('Error fetching compare_at_prices:', error));
 }
 
 function updateSubtotalPrice(newSubtotalPrice) {
  setSubtotalPrice(newSubtotalPrice);
}
 
 useEffect(()=>{
   GetDataAboutItem();
   const addToCartButton = document.querySelector(".product-form__submit")
   addToCartButton?.addEventListener("click",()=>{
      console.log("addtocart function chla")
      setTimeout(()=>{
         GetDataAboutItem();
      },500)
   })
 },[])
 
  return (
    <>
    <div class="cart-drawer-cart-items-container">
      {listItem.map((item,index)=>{
         return (
          <>
            <SingleItem 
            key={index} 
            details = {item} 
            subtotalPrice={subtotalPrice} 
            updateSubtotalPrice={updateSubtotalPrice}
            />
          </>
         );
      })}
    </div>
    <div class="cart-drawer-sticky-footer">
        <div class="footer-row"><strong class="flex">Subtotal</strong><strong class="slidecart-subtotal">{(subtotalPrice / 100).toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                })}</strong></div>
        <form id="slidecart-checkout-form" action="/cart" method="post"><button name="checkout" class="button full">Checkout</button></form>
    </div>
    </>
  )
}
