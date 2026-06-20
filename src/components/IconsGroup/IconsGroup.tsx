import Icon from '@/ui/Icon/Icon'
import Score from '@/components/Score/Score'

import { MealInfoElement } from '@/types/meal'

import styles from './IconsGroup.module.sass'

interface IconsGroupProps {
    data: MealInfoElement[]
}

const IconsGroup: React.FC<IconsGroupProps> = ({ data }) => {
    return (
        <div className={styles.iconGroup}>
            {data && data.map(({ name, value, icon, type }, index) => {
                return (
                    <div key={index}>
                        {type &&
                            <div>
                                <Score label={name} value={value} />
                            </div>
                        }

                        {!type &&
                            <div className={styles.content} key={index}>
                                {icon && <Icon name={icon} />}
                                <div className={styles.content__inner}>
                                    <span>{name}</span>
                                    <span>{value}</span>
                                </div>
                            </div>
                        }
                    </div>
                )
            })}

        </div>
    )
}

export default IconsGroup;