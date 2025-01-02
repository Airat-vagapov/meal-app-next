import Icon from '@/UI/Icon/Icon'

import { IMealInfoElement } from '@/types/meal'

import styles from './IconsGroup.module.sass'

interface IIconsGroup {
    data: IMealInfoElement[]
}

const IconsGroup: React.FC<IIconsGroup> = ({ data }) => {
    return (
        <div className={styles.iconGroup}>
            {data && data.map(({ name, value, icon }) => {
                return (
                    <>
                        <div key={name}>
                            {icon && <Icon name={icon} />}
                            {name}
                            {value}
                        </div>
                    </>
                )
            })}
            
        </div>
    )

}

export default IconsGroup;