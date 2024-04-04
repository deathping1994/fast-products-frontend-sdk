import WalletPointsActivity from "./WalletPointsActivity"

const TransactionLog = ({walletLogs}) => {
    
  return (
    <>
        <div class="pointsActivityClass">
            {walletLogs.length > 0 ?
            walletLogs.map((log)=>(
              <WalletPointsActivity id={log.node.id} reason={log.node.reason} created={log.node.created} amount={log.node.amount} type={log.node.type}
            />)) : <h3>No Logs Found</h3>
            }
        </div>
    </>
  )
}

export default TransactionLog