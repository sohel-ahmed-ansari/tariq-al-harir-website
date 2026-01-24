import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "outline";

interface BaseProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
    href?: never;
    to?: never;
  };

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
    to?: never;
  };

type ButtonAsLink = BaseProps & {
  as: "link";
  to: string;
  href?: never;
};

type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-[#1a5f2a] text-white hover:bg-[#0d3d16] hover:shadow-lg",
  secondary:
    "border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#1a5f2a]",
  outline:
    "border-2 border-[#1a5f2a] bg-transparent text-[#1a5f2a] hover:bg-[#1a5f2a] hover:text-white",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-lg px-6 py-2 font-semibold transition-all duration-300";

export const Button = ({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (props.as === "a") {
    const { as: _as, ...anchorProps } = props;
    void _as;
    return (
      <a className={combinedClassName} {...anchorProps}>
        {children}
      </a>
    );
  }

  if (props.as === "link") {
    const { as: _as, to, ...rest } = props;
    void _as;
    return (
      <Link to={to} className={combinedClassName} {...rest}>
        {children}
      </Link>
    );
  }

  const { as: _as, ...buttonProps } = props;
  void _as;
  return (
    <button className={combinedClassName} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
