import styles from './List.module.sass';

const List = ({ key, children }: { key?: number, children: React.ReactNode }) => {
    return (
        <div key={key} className={styles.list}>
            {children}
        </div>
    )
}

export default List;