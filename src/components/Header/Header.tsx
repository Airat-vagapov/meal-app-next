import Container from "@/components/Container/Container";
import HeaderMenu from "@/components/Header/HeaderMenu/HeaderMenu";

import { HeaderMenuData } from "@/types/global"

import styles from './Header.module.sass'
import HeaderControl from "./HeaderControl/HeaderControl";

const Header = () => {
    const menuData: HeaderMenuData[] = [
        {
            name: 'Главная',
            link: '/'
        },
        {
            name: 'Все рецепты',
            link: '/meals'
        },
        {
            name: 'Избранное',
            link: '/favorites'
        }
        ,
        {
            name: 'Подборки',
            link: '/meals'
        }
    ]

    return (
        <Container>
            <div className={styles.header}>
                <p className={styles.headerTitle}>
                    <a href="/">
                        Mealler
                    </a>
                </p>

                <div className={styles.headerMenu}>
                    <HeaderMenu menuData={menuData}></HeaderMenu>
                </div>

                <HeaderControl></HeaderControl>
            </div>
        </Container>
    )
}

export default Header;
