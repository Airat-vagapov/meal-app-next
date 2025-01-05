import styles from './ContentTable.module.sass'

interface IContentTableData {
    name: string,
    data: string[]
}

const ContentTable = ({ data }: { data: IContentTableData[] }) => {
    return (
        <div className={styles.table}>
            {data &&
                data.map((item, index) => {
                    return (
                        <div key={index}>
                            {
                                item.data && item.data.length > 0 &&
                                <div key={index} className={styles.tableRow}>
                                    <div className={styles.titleCol}>{item.name}</div>
                                    <div className={styles.contentCol}>
                                        {item.data.map((val: string, indx: number) => {
                                            return (
                                                <div key={indx}>
                                                    <p>{val.toUpperCase()}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            }
                        </div>
                    );
                })}
        </div>
    );
};

export default ContentTable;
