import classNames from "classnames";
import "./button.css";

export default function Button({ label, type = "button", flow, className }) {
  return (
    <button
      className={classNames("button", { "button--flow": flow }, className)}
      type={type}
    >
      {label}
    </button>
  );
}
