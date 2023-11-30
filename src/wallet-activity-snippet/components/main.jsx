import { useEffect, useState } from "preact/hooks";
import { WalletScreen } from "./walletscreen";
import { WALLET_API_URI } from "..";
import { Login } from "./login";
import { SkeletonLoader } from "../../global/skeletonloader";

export function Main(props) {
  const [customerDetails, setCustomerDetails] = useState({
    customerID: "",
    customerTags: "",
    clientID: "",
  });

  const [loading, setLoading] = useState(true);

  const [themeDetailsData, setThemeDetailsData] = useState({});

  const getThemeDetails = async ({ client_id }) => {
    const themeDetailsRes = await fetch(`${WALLET_API_URI}/get-theme-details`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: client_id,
      }),
    });
    const themeDetailsResData = await themeDetailsRes.json();
    setThemeDetailsData(themeDetailsResData);
  };

  useEffect(() => {
    const mainScript = document.querySelector(
      "#fc-wallet-activity-snippet-script-19212"
    );
    const customer_id = mainScript.getAttribute("data-customer-id");
    const customer_tags = mainScript.getAttribute("data-customer-tag")?.trim();
    const client_id = mainScript.getAttribute("data-client-id");

    (async () => {
      await getThemeDetails({ client_id });
      setCustomerDetails({
        customerID: customer_id,
        customerTags: customer_tags,
        clientID: client_id,
      });
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <div class="snippet-container">
        {loading ? (
          <div class="skeleton-loader-container">
            <SkeletonLoader
              width="22%"
              height="35px"
              styles={{ marginLeft: 0 }}
            />
            <SkeletonLoader width="100%" height="100px" />
            <SkeletonLoader
              width="28%"
              height="30px"
              styles={{ marginLeft: 0, marginTop: "36px" }}
            />
            <SkeletonLoader width="100%" height="100px" />
            <SkeletonLoader width="100%" height="100px" />
            <SkeletonLoader width="100%" height="100px" />
          </div>
        ) : (
          <>
            {customerDetails?.customerID ? (
              <WalletScreen customerDetails={customerDetails} />
            ) : (
              <Login themeDetails={themeDetailsData} />
            )}
          </>
        )}
      </div>
    </>
  );
}
