import { useEffect, useState } from "preact/hooks";

export function SingleItem({ details,subtotalPrice,updateSubtotalPrice }) {
  console.log("props me aaya kya", details);
  const [CurrentQuantity, setCurrentQuantity] = useState(details.quantity);
  const [removeItem , setRemoveItem] = useState("")
  let updatedQuantity;
  function updateCartItemsApiCall(){
    const payload = {
      updates: {
        [details.variant_id]: updatedQuantity,
      },
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    fetch("/cart/update.js", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response data
        console.log("Cart updated successfully:", data);
        updateSubtotalPrice(data.total_price)
      })
      .catch((error) => {
        // Handle errors during the fetch
        console.error("Error updating cart:", error);
      });
  }

  function QuantityHandler(operation) {
    updatedQuantity =
      operation === "plus" ? CurrentQuantity + 1 : CurrentQuantity - 1;
    if (updatedQuantity >= 1) {
      setCurrentQuantity(updatedQuantity);
    }
    updateCartItemsApiCall();
    
  }

  function updateQuantityOnChangingInput(event){
   console.log("event.target.value",event.target.value)
   setCurrentQuantity(event.target.value)
   updatedQuantity = event.target.value;
   updateCartItemsApiCall();
   
  }
  function removeItemFromList(){
    updatedQuantity = 0;
    setRemoveItem("make_none")
    updateCartItemsApiCall();
  }

  useEffect(() => {
    console.log("details?.quantity =", details?.quantity)
    setCurrentQuantity(details?.quantity);
    // setSubtotalPrice()
  }, [details?.quantity]);

  console.log("state", CurrentQuantity);
  return (
    <>
      <div className={`single-item-box ${removeItem !== "" ? "make_none" : ""}`}>
        <div className="image-containing-div">
          <img class="cart-item-image" src={details.featured_image.url} />
        </div>
        <div className="item-details-containing-div">
          <div className="item-details-top">
            <div class="prodcut-title-variant-wrapper">
              <p className="item-title-cart-drawer">{details.product_title}</p>
              <p className="item-variant-cart-drawer">
                {details.variant_title}
              </p>
            </div>
            <button onClick={removeItemFromList} class="item-remove-button">
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
              <button
                className="minusBtn"
                onClick={() => QuantityHandler("minus")}
              >
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
                onChange={updateQuantityOnChangingInput}
                type="text"
                className="current-quantity"
                value={CurrentQuantity}
              />
              <button
                className="plusBtn"
                onClick={() => QuantityHandler("plus")}
              >
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
                &#8377;
                {details.compare_at_price}
              </span>
              <span className="original-price">
                {(details.final_price / 100).toLocaleString("en-IN", {
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
}
