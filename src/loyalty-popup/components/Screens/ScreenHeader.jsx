const ScreenHeader = ({ screenTitle, closeOverlay }) => {
  return (
    <>
      <div className="screenHeader">
        <h2>{screenTitle}</h2>
        <img
          onClick={closeOverlay}
          src="https://media.farziengineer.co/farziwallet/cross.png"
          alt=""
        />
      </div>
    </>
  );
};

export default ScreenHeader;
