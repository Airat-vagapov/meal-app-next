import styles from './List.module.sass';

const List = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.list}>
            {children}
        </div>
    )
}

export default List;