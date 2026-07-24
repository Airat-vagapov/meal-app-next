"use client";

import { HeaderMenuData } from "@/types/global";
import styles from "@/components/Header/Header.module.sass";
import Link from "next/link";
import Button from "@/ui/Button/Button";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/Container/Container";

interface HeaderMenuProps {
    menuData: HeaderMenuData[];
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ menuData }) => {
    const [burgerIsOpen, setBurgerIsOpen] = useState(false);

    const burgerMenuRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: PointerEvent) => {
            const target = event.target as Node;
            console.log("target", target);

            const clickedInsideMenu = burgerMenuRef.current?.contains(target);
            
            console.log("clickedInsideMenu", clickedInsideMenu);

            if (!clickedInsideMenu) {
                setBurgerIsOpen(false);
            }
        };

        document.addEventListener("pointerdown", handleClickOutside);

        return () => {
            document.removeEventListener("pointerdown", handleClickOutside);
        };
    }, [burgerIsOpen]);

    console.log(burgerMenuRef.current);

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
                className={`showMobile ${styles.headerControlElem}`}
                btnStyle={"icon"}
                onClick={() => setBurgerIsOpen((prev) => !prev)}
            />

            <div
                className={`${styles.burgerMenu} ${burgerIsOpen ? styles.burgerMenuOpen : ""}`}
                ref={burgerMenuRef}
            >
                <Container>
                    <div className={styles.burgerMenuList}>
                        {menuData.map((item) => (
                            <Link
                                className={styles.burgerMenuItem}
                                key={item.link}
                                href={item.link}
                            >
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
