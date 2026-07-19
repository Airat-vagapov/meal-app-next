import HeaderControl from "../HeaderControl/HeaderControl";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

import { HeaderMenuData } from "@/types/global";

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
        <>
            <HeaderMenu menuData={menuData}></HeaderMenu>
            <HeaderControl></HeaderControl>
        </>
    );
};

export default HeaderActions;
