import Link from "next/link";
import Icon from "../Icon/Icon";
import styles from "./Button.module.sass";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    btnStyle?: string;
    type?: "button" | "submit" | "reset";
    children?: React.ReactNode;
    link?: string;
};

const Button: React.FC<ButtonProps> = ({
    btnStyle,
    type,
    children,
    link,
    ...buttonProps
}) => {
    return (
        <>
            {link ? (
                <Link href={link} className={styles.button}>
                    {children}
                </Link>
            ) : (
                <button
                    {...buttonProps}
                    type={type}
                    className={
                        btnStyle === "icon" ? styles.iconButton : styles.button
                    }
                >
                    {btnStyle === "icon" && <Icon name="menu" />}
                    {children}
                </button>
            )}
        </>
    );
};

export default Button;
