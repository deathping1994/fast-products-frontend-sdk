import ScreenHeader from "./Screens/ScreenHeader";

const Screen = ({ screenTitle, closeScreen, content }) => {
  return (
    <>
      <div class="screenContainer">
        <ScreenHeader screenTitle={screenTitle || "check title"} closeScreen={closeScreen} />
        <div class="screenContent">{content}</div>
      </div>
    </>
  );
};

export default Screen;
