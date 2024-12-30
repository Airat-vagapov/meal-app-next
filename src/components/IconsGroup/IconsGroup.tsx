import Icon from '@/UI/Icon/Icon'

import { IMealInfoElement } from '@/types/meal'

import styles from './IconsGroup.module.sass'

interface IIconsGroup {
    data: IMealInfoElement[]
}

const IconsGroup: React.FC<IIconsGroup> = ({ data }) => {
    return (
        <div className={styles.iconGroup}>
            {data && data.map(({ name, value }) => {
                return (
                    <>
                        <div key={name}>
                            <p>{name}</p>
                            <p>{value}</p>
                        </div>
                    </>
                )
            })}
            {/* <Icon name={'search'}></Icon> */}
        </div>
    )

}

export default IconsGroup;