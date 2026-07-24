import Link from "next/link";
import Icon from "../Icon/Icon";
import styles from "./Button.module.sass";
import { forwardRef } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    btnStyle?: string;
    type?: "button" | "submit" | "reset";
    children?: React.ReactNode;
    link?: string;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            btnStyle,
            type,
            children,
            link,
            ...buttonProps
        },
        ref,
    ) => {
        return (
            <>
                {link ? (
                    <Link href={link} className={styles.button}>
                        {children}
                    </Link>
                ) : (
                    <button
                        ref={ref}
                        {...buttonProps}
                        type={type}
                        className={`
                            ${btnStyle === "icon" ? styles.iconButton : styles.button} 
                            ${className || ""}`}
                    >
                        {btnStyle === "icon" && <Icon name="menu" />}
                        {children}
                    </button>
                )}
            </>
        );
    },
);

Button.displayName = "Button";

export default Button;
