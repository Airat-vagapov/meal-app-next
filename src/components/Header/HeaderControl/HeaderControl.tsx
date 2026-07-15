import { HeaderControlItem } from '@/types/global'
import HeaderControlElem from '@/components/Header/HeaderControl/HeaderControlElem/HeaderControlElem'

import styles from '@/components/Header/Header.module.sass'

const HeaderControl = () => {
    const data: HeaderControlItem[] = [
        {
            name: 'Поиск',
            link: '/search',
            icon: 'search',
        },
        {
            name: 'Избранное',
            link: '/favorites',
            icon: 'favorite',
        }
    ]

    return (
        <div className={styles.headerControl}>
            {data.map((item) => (
                <HeaderControlElem
                    key={item.link}
                    control={item}
                />
            ))
            }
        </div >
    )
}

export default HeaderControl;