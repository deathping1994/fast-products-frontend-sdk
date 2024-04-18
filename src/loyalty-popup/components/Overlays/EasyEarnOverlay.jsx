const EasyEarnOverlay = ({easyEarnTitle, easyPoints, easyEarnDesc, easyEarnBtnText, easyEarnImg}) => {
  return (
    <div className='easyEarnOverlayContainer'>
        <img className='easyEarnImg' src="https://media.farziengineer.co/farziwallet/Birthday.png" alt="" />
        <h2 className='easyEarn'>Birthday</h2>
        <div className='easyEarnCoinBox'>
            <div className="coinIcon"></div>
            <p>100</p>
        </div>
        <p className='easyEarnDesc'>Earn Rs. 100 JH Cashback on your Birthday Date.</p>
        <div className='easyEarnDateContainer'>
            <input type="tel" name="" id="" />
            <input type="tel" name="" id="" />
            <input type="tel" name="" id="" />
        </div>
        <button className='gamesCardBtn'>Save</button>
    </div>
  )
}

export default EasyEarnOverlay