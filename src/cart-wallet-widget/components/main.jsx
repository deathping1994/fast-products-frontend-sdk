import { useEffect, useState } from "preact/hooks";
import { ApplyWallet } from "./applywallet";
import { Login } from "./login";
import { WALLET_API_URI } from "..";

export function Main(props) {
  const [customerDetails, setCustomerDetails] = useState({
    customerID: "",
    customerTags: "",
    clientID: "",
  });
  const [themeDetails, setThemeDetails] = useState(null);

  const getThemedetails = async ({ client_id }) => {
    const themeDetailsRes = await fetch(`${WALLET_API_URI}/get-theme-details`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: client_id,
      }),
    });
    const themeDetailsData = await themeDetailsRes.json();
    setThemeDetails(themeDetailsData);
  };

  useEffect(() => {
    const mainScript = document.querySelector(
      "#fc-wallet-cart-widget-script-19212"
    );
    const customer_id = mainScript.getAttribute("data-customer-id");
    const customer_tags = mainScript.getAttribute("data-customer-tag")?.trim();
    const client_id = mainScript.getAttribute("data-client-id");

    setCustomerDetails({
      customerID: customer_id,
      customerTags: customer_tags,
      clientID: client_id,
    });

    getThemedetails({ client_id: client_id });
  }, []);

  return (
    <>
      {customerDetails?.customerID ? (
        <ApplyWallet customerDetails={customerDetails} />
      ) : (
        <Login themeDetails={themeDetails} />
      )}
    </>
  );
}
