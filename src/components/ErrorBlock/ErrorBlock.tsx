import styles from './ErrorBlock.module.sass'

const ErrorBlock = ({ data }: any) => {
    return (
        <div className={styles.error}>
            ERROR
            {data.status}
        </div>
    )
}

export default ErrorBlock;