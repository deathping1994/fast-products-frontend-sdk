import { useEffect, useState } from "preact/hooks";
import { TransactionLog } from "./transactionlog";
import { WALLET_API_URI } from "..";
import { SkeletonLoader } from "../../global/skeletonloader";

export function WalletScreen({ customerDetails }) {
  const [totalWalletAmount, setTotalWalletAmount] = useState(null);
  const [walletLogs, setWalletLogs] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWalletdetails = async ({
    customer_id,
    customer_tags,
    client_id,
  }) => {
    const response = await fetch(`${WALLET_API_URI}/user-walletlogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer_id: customer_id,
        user_hash: customer_tags,
        client_id: client_id,
      }),
    });
    let walletData = await response.json();
    let walletAmount = walletData?.data?.data?.wallet?.wallet?.amount || 0;
    setTotalWalletAmount(walletAmount);
    setWalletLogs(
      walletData?.data?.data?.wallet?.wallet?.logs?.edges?.map((item) => {
        return item.node;
      })
    );
  };

  useEffect(() => {
    if (customerDetails?.customerID) {
      (async () => {
        await fetchWalletdetails({
          customer_id: customerDetails?.customerID,
          customer_tags: customerDetails?.customerTags,
          client_id: customerDetails?.clientID,
        });
        setLoading(false);
      })();
    }
  }, [customerDetails?.customerID]);

  return (
    <>
      {loading ? (
        <>
          <SkeletonLoader width="20%" height="50px" />
          <SkeletonLoader width="80%" height="100px" />
        </>
      ) : (
        <>
          <h1>Wallet Points</h1>

          <div class="total-points-wrapper">
            <div class="total-points-container">
              <div class="points-svg-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="none"
                  viewBox="0 0 58 57"
                >
                  <path
                    fill="#ffffff"
                    d="M31.881 51.541C14.523 56.615 1.854 38.046 5.642 23.722 9.928 7.503 24.254 2.195 39.504 6.507 47.408 8.74 53.302 19.502 52.89 27.633c-.644 12.486-9.98 22.994-21.009 23.908z"
                    style="
"
                  ></path>
                  <path
                    fill="#121212"
                    d="M34.909 16.739c.767-.137 1.566.42 1.703 1.188a1.478 1.478 0 01-1.188 1.703l-16.622 2.963c-.406.072-.658.49-.594.851a.725.725 0 00.852.594l16.622-2.963a2.957 2.957 0 013.406 2.376l1.803 10.117a2.927 2.927 0 01-2.375 3.406L21.17 40.066a2.899 2.899 0 01-3.406-2.376L15.19 23.237a2.927 2.927 0 012.375-3.406l17.345-3.092zm1.002 13.989a1.478 1.478 0 001.188-1.703c-.137-.768-.936-1.325-1.703-1.188a1.478 1.478 0 00-1.188 1.703 1.45 1.45 0 001.703 1.188z"
                    style="
"
                  ></path>
                </svg>
              </div>
              <p class="total-points">{` ${Number(
                totalWalletAmount
              ).toLocaleString("en-IN", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}`}</p>
            </div>
            <p>Total wallet points available</p>
          </div>

          <div class="transaction-logs-wrapper">
            <h2>Transactions Logs</h2>
            {walletLogs.map((log) => {
              return (
                <TransactionLog
                  amount={log.amount}
                  created={log.created}
                  id={log.id}
                  reason={log.reason}
                  type={log.type}
                  key={log.id}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
