import { Checkbox } from "./checkbox";

export function ApplyWallet(props) {
  return (
    <>
      <div class="checkbox-container">
        <p style="display:flex;">
          {" "}
          <Checkbox /> <span>Use Wallet Credit</span>
        </p>
        <p>
          Avl Bal <strong>120</strong>
        </p>
      </div>
    </>
  );
}
