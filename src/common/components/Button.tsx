import React from "react";
import Link from "next/link";

interface IButton {
  type: "button" | "submit" | "link";
  disabled?: boolean;
  title?: string;
  href?: string;
  key?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  wrapperClassName?: string;
  buttonClassName?: string;
}

const Button = (props: IButton) => {
  const {
    disabled,
    title,
    href,
    type,
    ariaLabel,
    children,
    onClick,
    wrapperClassName,
    buttonClassName,
  } = props;

  return (
    <div className={wrapperClassName}>
      {type === "link" ? (
        <Link
          href={String(href)}
          passHref
          title={title}
          className={buttonClassName}
          onClick={onClick}
        >
          {children || title}
        </Link>
      ) : (
        <button
          disabled={disabled}
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
