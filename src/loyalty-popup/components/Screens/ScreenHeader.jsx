const ScreenHeader = ({ screenTitle, closeScreen }) => {
  return (
    <>
      <div className="screenHeader">
        <h2>{screenTitle}</h2>
        <img
          onClick={closeScreen}
          src="https://media.farziengineer.co/farziwallet/cross.png"
          alt=""
        />
      </div>
    </>
  );
};

export default ScreenHeader;
