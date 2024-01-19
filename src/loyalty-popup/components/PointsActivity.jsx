export function PointsActivity({ id, reason, created, amount, type }) {
    return (
      <>
        <div class="transaction-log-container">
          <div class="log-header">
            <div class="log-date">{created?.split("T")[0]}</div>
            <div class={`log-type ${type === "ADD" ? "credited" : "debited"}`}>
              {type === "ADD" ? "Credited" : "Debited"}
            </div>
          </div>
          <div class="log-body">
            <p class="amount">
              <span>{type === "ADD" ? "+" : "-"}</span>
              <span>{` ${Number(amount).toLocaleString("en-IN", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}`}</span>
            </p>
            <p class="reason">{reason}</p>
          </div>
        </div>
      </>
    );
  }