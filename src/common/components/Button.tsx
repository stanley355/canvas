import React from "react";
import Link from "next/link";

interface IButton {
  type: "button" | "submit" | "link";
  title?: string;
  href?: string;
  key?: string;
  ariaLabel?: string;
  children?: any;
  onClick?: () => void;
  wrapperClassName: string;
  buttonClassName: string;
}

const Button = (props: IButton) => {
  const {
    title,
    href,
    type,
    key,
    ariaLabel,
    children,
    onClick,
    wrapperClassName,
    buttonClassName,
  } = props;

  return (
    <div key={key} className={wrapperClassName}>
      {type === "link" ? (
        <Link
          href={String(href)}
          passHref
          title={title}
          className={buttonClassName}
        >
          {children || title}
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          aria-label={ariaLabel}
          className={buttonClassName}
        >
          {children || title}
        </button>
      )}
    </div>
  );
};

export default Button;