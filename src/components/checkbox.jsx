export function Checkbox(props) {
  return (
    <>
      <div class="checkbox-container">
        <label class="container">
          <input checked={true} type="checkbox" />
          <div class="checkmark"></div>
        </label>
      </div>
    </>
  );
}
