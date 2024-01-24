import WalletPointsActivity from "./WalletPointsActivity"

const TransactionLog = () => {
    const  PointsActivityArray = [
        {
          "id": 1,
          "reason": "Test credit",
          "created": "2024-01-19",
          "amount": 100,
          "type": "ADD"
        },
        {
          "id": 2,
          "reason": "Test credit 200",
          "created": "2024-01-20",
          "amount": 150,
          "type": "ADD"
        },
        {
          "id": 3,
          "reason": "Test debite SUB",
          "created": "2024-01-20",
          "amount": 50,
          "type": "SUB"
        },
        {
          "id": 4,
          "reason": "Test debite 100" ,
          "created": "2024-01-21",
          "amount": 100,
          "type": "SUB"
        }
    ]
  return (
    <>
        <div class="pointsActivityClass">
            {
            PointsActivityArray.map((points, pointIndex)=>(
            <WalletPointsActivity id={points.id} reason={points.reason} created={points.created} amount={points.amount} type={points.type}
            />))
            }
        </div>
    </>
  )
}

export default TransactionLog