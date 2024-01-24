import ScreenHeader from "./Screens/ScreenHeader";

const Screen = ({ screenTitle, closeOverlay, content }) => {
  return (
    <>
      <div class="screenContainer">
        <ScreenHeader screenTitle={screenTitle || "check title"} closeOverlay={closeOverlay} />
        <div>{content}</div>
      </div>
    </>
  );
};

export default Screen;
