import Tag from '@/ui/Tag/Tag'
import styles from './TagGroup.module.sass'


interface TagGroupProps {
    data: string[];
}

const TagGroup: React.FC<TagGroupProps> = ({ data }) => {
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