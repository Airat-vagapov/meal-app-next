import Tag from '@/UI/Tag/Tag'
import styles from './TagGroup.module.sass'


interface ITagGroup {
    data: string[];
}

const TagGroup: React.FC<ITagGroup> = ({ data }) => {
    return (
        <div className={styles.tagGroup}>
            {data && data.map((item, index) => (
                <div key={index}>
                    <Tag text={item} />
                </div>
            ))}
        </div>
    )

}

export default TagGroup;