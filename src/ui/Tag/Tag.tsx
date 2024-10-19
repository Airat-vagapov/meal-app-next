import styles from './Tag.module.sass'

interface Tag {
    text: string;
}

const Tag: React.FC<Tag> = ({ text }) => {
    return (
        <div className={styles.tag}>
            {text}
        </div>
    )
}

export default Tag;