import classNames from "classnames";
import "./heading.css";

export default function Heading({ children, level = 1, separator = false }) {
  const HeadingType = `h${level}`;

  return (
    <HeadingType className={classNames({ separator: separator }, "heading")}>
      {children}
    </HeadingType>
  );
}
