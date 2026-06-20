import Container from "@/components/Container/Container";
import HeaderMenu from "@/components/Header/HeaderMenu/HeaderMenu";

import { HeaderMenuData } from "@/types/global"

import styles from './Header.module.sass'

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
        <div className={styles.header}>
            <Container>

                <p className={styles.headerTitle}>
                    <a href="/">
                        Mealler
                    </a>
                </p>

                <HeaderMenu menuData={menuData}></HeaderMenu>
            </Container>
        </div>
    )
}

export default Header;
