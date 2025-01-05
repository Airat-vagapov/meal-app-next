import classNames from 'classnames';
import styles from './Tab.module.sass'

interface ITab {
    children: React.ReactNode,
    onClick: () => void,
    index: number,
    activeTab: number
}

const Tab: React.FC<ITab> = ({ children, onClick, index, activeTab }) => {
    return (
        <div onClick={onClick} className={
            classNames(styles.tab, {
                [styles.activeTab]: index === activeTab,
            })}>
            {children}
        </div >
    )
}

export default Tab;