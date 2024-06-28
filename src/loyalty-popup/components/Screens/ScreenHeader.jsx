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
            {!(
              activePage === "coupon" || activePage === "spinwheel" || activePage === "scratchcard" || activePage === "referral"
            ) && (
              <p class="screenHeaderBackBtn" onClick={closeScreen}>
                {"Back"}
              </p>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ScreenHeader;
