import styles from './Button.module.sass'

const Button = ({ children, link }: { children: React.ReactNode, type?: string, link: string }) => {
    return (
        <>
            {link ? <a href={link} className={styles.button}>{children}</a> : <button className={styles.button}>{children}</button>}
        </>

    )
};

export default Button;
