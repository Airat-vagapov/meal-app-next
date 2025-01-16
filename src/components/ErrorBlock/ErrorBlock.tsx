import Icon from '@/ui/Icon/Icon';
import styles from './ErrorBlock.module.sass'

const ErrorBlock = ({ data }: any) => {
    return (
        <div className={styles.error}>
            <Icon name='error'/>
            <br></br>
            {data.status}
        </div>
    )
}

export default ErrorBlock;