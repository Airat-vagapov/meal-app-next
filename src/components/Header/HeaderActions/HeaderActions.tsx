import HeaderControl from "../HeaderControl/HeaderControl";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

import { HeaderMenuData } from "@/types/global";

import styles from "@/components/Header/Header.module.sass";

const HeaderActions = () => {
    const menuData: HeaderMenuData[] = [
        {
            name: "Главная",
            link: "/",
        },
        {
            name: "Все рецепты",
            link: "/meals",
        },
        {
            name: "Избранное",
            link: "/favorites",
        },
        {
            name: "Подборки",
            link: "/meals",
        },
    ];
    return (
        <div className={styles.headerActions}>
            <HeaderMenu menuData={menuData}></HeaderMenu>
            <HeaderControl></HeaderControl>
        </div>
    );
};

export default HeaderActions;
