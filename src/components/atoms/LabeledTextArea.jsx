import classNames from "classnames";
import "./labeledTextArea.css";

export default function LabeledTextArea({
  name,
  label,
  placeholder,
  flow,
  glow,
  className,
}) {
  return (
    <div className="labeled-text-area">
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        className={classNames(
          {
            "labeled-text-area--flow": flow,
            "labeled-text-area__text-area--glow": glow,
          },
          "labeled-text-area__text-area",
          className
        )}
      ></textarea>
    </div>
  );
}
