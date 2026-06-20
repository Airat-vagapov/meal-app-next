import Icon from '@/ui/Icon/Icon';
import styles from './InfoBlock.module.sass'

interface InfoBlockProps {
    title?: string;
    text?: string
}

const InfoBlock: React.FC<InfoBlockProps> = ({ title, text }) => {
    return (
        <div className={styles.infoBlock}>
            <Icon name={'error'} size={40} color={'red'} />
            <p className={styles.infoBlockTitle}>{title ?? 'Not found'}</p>
            <p className={styles.infoBlockText}>{text ?? 'Try another request'}</p>
        </div>
    )
}

export default InfoBlock;