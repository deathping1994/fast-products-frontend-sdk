const ScreenHeader = ({ screenTitle, closeScreen, loyalty_theme }) => {
  return (
    <>
      <div className="screenHeader">
        <h2>{loyalty_theme === 'popup' && screenTitle}</h2>
        {loyalty_theme === 'popup' && <img
          onClick={closeScreen}
          src="https://media.farziengineer.co/farziwallet/cross.png"
          alt=""
        />}
      </div>
    </>
  );
};

export default ScreenHeader;
