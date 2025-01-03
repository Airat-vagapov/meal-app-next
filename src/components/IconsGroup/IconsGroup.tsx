import Icon from '@/UI/Icon/Icon'
import Score from '@/components/Score/Score'

import { IMealInfoElement } from '@/types/meal'

import styles from './IconsGroup.module.sass'

interface IIconsGroup {
    data: IMealInfoElement[]
}

const IconsGroup: React.FC<IIconsGroup> = ({ data }) => {
    return (
        <div className={styles.iconGroup}>
            {data && data.map(({ name, value, icon, type }, index) => {
                return (
                    <>
                        {type &&
                            <div>
                                <Score label={name} value={value} />
                            </div>
                        }

                        {!type &&
                            <div className={styles.content} key={index}>
                                {icon && <Icon name={icon} />}
                                {name}
                                {value}
                            </div>
                        }
                    </>
                )
            })}

        </div>
    )
}

export default IconsGroup;