const ScreenHeader = ({
  screenTitle,
  closeScreen,
  activePage,
  handleBackBtn,
  backBtnVisible,
}) => {
  return (
    <>
      <div className="screenHeader">
        <h2>{screenTitle}</h2>
        {backBtnVisible ? (
          <button class="screenHeaderBackBtn" onClick={handleBackBtn}>
            Back
          </button>
        ) : (
          <>
            {!(activePage === 'coupon' || activePage === 'spinwheel' || activePage === 'scratchcard') && <img
              onClick={closeScreen}
              src="https://media.farziengineer.co/farziwallet/cross.png"
              alt=""
            />}
          </>
        )}
      </div>
    </>
  );
};

export default ScreenHeader;
