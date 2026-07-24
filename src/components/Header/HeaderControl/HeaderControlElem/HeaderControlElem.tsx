import { HeaderControlItem } from "@/types/global"
import Icon from "@/ui/Icon/Icon"
import Link from "next/link"

import styles from '@/components/Header/Header.module.sass'


type HeaderControlElemProps = {
    control: HeaderControlItem
}


const HeaderControlElem: React.FC<HeaderControlElemProps> = ({ control }) => {
    return (
        <div className={styles.headerControlElem}>
            <Link href={control.link}>
                <Icon name={control.icon}></Icon>
            </Link>
        </div>
    )
}

export default HeaderControlElem;