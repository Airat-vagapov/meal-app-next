import styles from './ContentBlock.module.sass'

const ContentBlock = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.contentBlock}>{children}</div>
    )
}

export default ContentBlock;