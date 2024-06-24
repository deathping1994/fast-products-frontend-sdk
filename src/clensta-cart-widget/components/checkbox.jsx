// checkbox.jsx
export function Checkbox({ walletApplied, setWalletApplied }) {
  return (
    <>
      <div class="checkbox-container">
        <label class="container">
          <input
            checked={walletApplied}
            type="checkbox"
            onClick={() => {
              setWalletApplied((prev) => !prev);
            }}
          />
          <div class="checkmark"></div>
        </label>
      </div>
    </>
  );
}