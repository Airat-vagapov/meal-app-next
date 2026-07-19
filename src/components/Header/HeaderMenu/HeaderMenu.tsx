import { HeaderMenuData } from "@/types/global";
import styles from '@/components/Header/Header.module.sass'
import Link from "next/link";

interface HeaderMenuProps {
    menuData: HeaderMenuData[]
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ menuData }) => {
    return (
        <div className={styles.headerMenu}>
            {menuData.map((item) => (
                <Link key={item.link} href={item.link}>
                    {item.name}
                </Link>
            ))}
        </div>
    )
}
export default HeaderMenu;
