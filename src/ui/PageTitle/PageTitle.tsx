import styles from './PageTitle.module.sass';

const PageTitle = ({ children }: { children: React.ReactNode; }) => {
    return (
        <div>
            <h1 className={styles.title}>{children}</h1>
        </div>
    )
}

export default PageTitle;