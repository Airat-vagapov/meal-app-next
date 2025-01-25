import Icon from '@/ui/Icon/Icon';
import styles from './ErrorBlock.module.sass'

const ErrorBlock = ({ data }: any) => {
    return (
        <div className={styles.error}>
            <Icon name='error' color={'red'} size={40} />
            <p className={styles.errorTitle}>Error</p>
            <p className={styles.errorText}>Error status is {data.status}
                <br />
                Message: {data.data.message}
            </p>
            <p></p>
        </div>
    )
}

export default ErrorBlock;