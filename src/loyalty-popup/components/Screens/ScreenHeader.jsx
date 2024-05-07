const ScreenHeader = ({ screenTitle, closeScreen, loyalty_theme, handleBackBtn, backBtnVisible }) => {
  return (
    <>
      <div className="screenHeader">
        <h2>{screenTitle}</h2>
        {loyalty_theme === 'popup' && <img
          onClick={closeScreen}
          src="https://media.farziengineer.co/farziwallet/cross.png"
          alt=""
        />}
        {backBtnVisible && <button class='screenHeaderBackBtn' onClick={handleBackBtn}>Back</button>}
      </div>
    </>
  );
};

export default ScreenHeader;
