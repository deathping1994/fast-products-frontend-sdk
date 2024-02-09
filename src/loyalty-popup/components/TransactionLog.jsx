import WalletPointsActivity from "./WalletPointsActivity"

const TransactionLog = ({walletLogs}) => {
    
  return (
    <>
        <div class="pointsActivityClass">
            {
            walletLogs.map((log)=>(
            <WalletPointsActivity id={log.node.id} reason={log.node.reason} created={log.node.created} amount={log.node.amount} type={log.node.type}
            />))
            }
        </div>
    </>
  )
}

export default TransactionLog