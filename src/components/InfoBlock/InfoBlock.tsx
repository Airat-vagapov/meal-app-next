import Icon from '@/ui/Icon/Icon';
import styles from './InfoBlock.module.sass'

const InfoBlock = () => {
    return (
        <div className={styles.infoBlock}>
            <Icon name={'error'} size={40} color={'red'} />
            <p className={styles.infoBlockTitle}>Not found</p>
            <p className={styles.infoBlockText}>Try another request</p>
        </div>
    )
}

export default InfoBlock;