import React, { useEffect, useState } from 'preact/hooks'

export function CartItems(){
 const [listItem,setListItem] = useState([])
 useEffect(()=>{
   async function GetDataAboutItem(){
      const response = await fetch('https://farziteststore.myshopify.com/cart.json')
      console.log("data",response)
      const data = await response.json()
      console.log("result",data.items)
      setListItem(data.items)

       // Fetch compare_at_price for each item
         const comparePricesPromises = data.items.map(async (item) => {
         const handle = item.handle;
         const compResponse = await fetch(`https://farziteststore.myshopify.com/products/${handle}.json`);
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
        })
        .catch((error) => console.error('Error fetching compare_at_prices:', error));
    }
   
   GetDataAboutItem();
 },[])


  return (
    <div class="cart-drawer-cart-items-container">
      {listItem.map((item)=>{
         return (
           <>
             <div className="single-item-box" data-variant-id={item.variant_id}>
               <div className="image-containing-div">
                 <img class="cart-item-image" src={item.featured_image.url} />
               </div>
               <div className="item-details-containing-div">
                 <div className="item-details-top">
                   <p className="item-title-cart-drawer">
                     {item.product_title}
                   </p>
                   <button class="item-remove-button">
                     <svg width="10" viewBox="0 0 10 10">
                       <path
                         d="M9.677 8.118a1.102 1.102 0 11-1.559 1.56L5 6.558 1.882 9.677a1.102 1.102 0 11-1.56-1.559L3.442 5 .323 1.882A1.102 1.102 0 111.882.322L5 3.442 8.118.323a1.102 1.102 0 111.56 1.559L6.558 5l3.118 3.118z"
                         fill="#A1A1A1"
                         fill-rule="nonzero"
                       ></path>
                     </svg>
                   </button>
                 </div>
                 <div className="item-details-bottom">
                   <div className="item-quantity-tracking">
                     <button className="minusBtn">
                       <svg
                         width="10"
                         viewBox="0 0 12 2"
                         xmlns="http://www.w3.org/2000/svg"
                       >
                         <path
                           d="M11.25 0H.75C.3 0 0 .4 0 1s.3 1 .75 1h10.5c.45 0 .75-.4.75-1s-.3-1-.75-1z"
                           fill="#7A7A7A"
                           fill-rule="nonzero"
                         ></path>
                       </svg>
                     </button>
                     <input
                       type="text"
                       className="current-quantity"
                       value={item.quantity}
                     />
                     <button className="plusBtn">
                       <svg
                         width="10"
                         viewBox="0 0 12 12"
                         xmlns="http://www.w3.org/2000/svg"
                       >
                         <path
                           d="M11 5H7V1a1 1 0 00-2 0v4H1a1 1 0 000 2h4v4a1 1 0 002 0V7h4a1 1 0 000-2z"
                           fill="currentColor"
                           fill-rule="nonzero"
                         ></path>
                       </svg>
                     </button>
                   </div>
                   <div className="item-price-wrapper">
                     <span className="compare-at-price">
                       {item.compare_at_price}
                     </span>
                     <span className="original-price">
                       {(item.final_price / 100).toLocaleString("en-IN", {
                         style: "currency",
                         currency: "INR",
                       })}
                     </span>
                   </div>
                 </div>
               </div>
             </div>
           </>
         );
      })}
       
    </div>
  )
}
