import classNames from "classnames";
import "./labeledTextInput.css";

export default function LabeledTextInput({
  name,
  placeholder,
  label,
  flow,
  glow,
  className,
}) {
  return (
    <div className="labeled-text-input">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        className={classNames(
          {
            "labeled-text-input--flow": flow,
            "labeled-text-input--glow": glow,
          },
          className
        )}
      ></input>
    </div>
  );
}
