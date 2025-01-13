import styles from './SubTitle.module.sass'

const SubTitle = ({ children }: { children: React.ReactNode }) => {
    return <p className={styles.subTitle}>{children}</p>
}

export default SubTitle;