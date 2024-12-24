import styles from "./Content.module.sass";

const Content = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.content}>
            {children}
        </div>
    )
}

export default Content;