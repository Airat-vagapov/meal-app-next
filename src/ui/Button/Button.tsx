import styles from './Button.module.sass'

const Button = ({ type, children, link }: { type?: "button" | "submit" | "reset", children: React.ReactNode, link?: string }) => {
    return (
        <>
            {link ? <a href={link} className={styles.button}>{children}</a> : <button type={type} className={styles.button}>{children}</button>}
        </>

    )
};

export default Button;
