import ScreenHeader from "./Screens/ScreenHeader";

const Screen = ({ screenTitle, closeOverlay, content }) => {
  return (
    <>
      <div class="showGamesOverlay screenContainer">
        <ScreenHeader screenTitle={screenTitle} closeOverlay={closeOverlay} />
        <div>{content}</div>
      </div>
    </>
  );
};

export default Screen;
