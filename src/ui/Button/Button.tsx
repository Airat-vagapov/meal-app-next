import styles from './Button.module.sass'

const Button = ({ children, type }: { children: React.ReactNode, type?: string }) => {
    return <button  className={styles.button}>{children}</button>;
};

export default Button;
