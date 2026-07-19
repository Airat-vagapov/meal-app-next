import Container from "@/components/Container/Container";
import HeaderMenu from "@/components/Header/HeaderMenu/HeaderMenu";

import { HeaderMenuData } from "@/types/global";

import styles from "./Header.module.sass";
import HeaderControl from "./HeaderControl/HeaderControl";

const Header = () => {
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
        <div className={styles.headerDivider}>
            <Container>
                <div className={styles.header}>
                    <p className={styles.headerTitle}>
                        <a href="/">Mealler.</a>
                    </p>

                    <HeaderMenu menuData={menuData}></HeaderMenu>

                    <HeaderControl></HeaderControl>
                </div>
            </Container>
        </div>
    );
};

export default Header;
