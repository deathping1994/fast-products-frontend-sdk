const ModernLogin = ({ themeDetailsData }) => {
    const handleLogin = ()=>{
        window.location.href = themeDetailsData?.data?.login_page || '/account/login'
    }
  return (
    <>
      <div className="modernWalletContainer">
        <div className="modernWalletIcon">
          <div className="wallet_icon"></div>
        </div>
        <div className="modernWalletMidContainer">
          <div className="modernWalletMidSection">
            <p>{themeDetailsData?.data?.coin_name}</p>
            <p>
            {themeDetailsData?.data?.cart_wallet_limit} of the Grand Total can be paid via
              {" " + themeDetailsData?.data?.coin_name}
            </p>
          </div>
        </div>
        <div className='modernLoginBox'>
            <button className='modernLoginButton' onClick={handleLogin}>Login Now</button>
        </div>
      </div>
    </>
  );
};

export default ModernLogin;
