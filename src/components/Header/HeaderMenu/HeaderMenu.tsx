"use client";

import { HeaderMenuData } from "@/types/global";
import styles from "@/components/Header/Header.module.sass";
import Link from "next/link";
import Button from "@/ui/Button/Button";
import { useState } from "react";
import Container from "@/components/Container/Container";

interface HeaderMenuProps {
    menuData: HeaderMenuData[];
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ menuData }) => {
    const [burgerIsOpen, setBurgerIsOpen] = useState(false);

    return (
        <>
            <div className={`${styles.headerMenu} ${styles.desktopHeaderMenu}`}>
                {menuData.map((item) => (
                    <Link key={item.link} href={item.link}>
                        {item.name}
                    </Link>
                ))}
            </div>
            <Button
                btnStyle={"icon"}
                onClick={() => setBurgerIsOpen(!burgerIsOpen)}
            />

            <div
                className={`${styles.burgerMenu} ${burgerIsOpen ? styles.burgerMenuOpen : ""}`}
            >
                <Container>
                    <div className={styles.burgerMenuList}>
                        {menuData.map((item) => (
                            <Link key={item.link} href={item.link}>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </Container>
            </div>
        </>
    );
};
export default HeaderMenu;
