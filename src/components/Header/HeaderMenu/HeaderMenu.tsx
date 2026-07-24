"use client";

import { HeaderMenuData } from "@/types/global";
import styles from "@/components/Header/Header.module.sass";
import Link from "next/link";
import Button from "@/ui/Button/Button";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/Container/Container";
import { usePathname } from "next/navigation";

interface HeaderMenuProps {
    menuData: HeaderMenuData[];
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ menuData }) => {
    const [burgerIsOpen, setBurgerIsOpen] = useState(false);

    const burgerMenuRef = useRef<HTMLDivElement>(null);
    const burgerButtonRef = useRef<HTMLButtonElement>(null);

    const pathnmame = usePathname();

    useEffect(() => {
        const handleClickOutside = (event: PointerEvent) => {
            const target = event.target as Node;

            const clickedInsideMenu = burgerMenuRef.current?.contains(target);
            const clickBurgerButton = burgerButtonRef.current?.contains(target);

            if (!clickedInsideMenu && !clickBurgerButton) {
                setBurgerIsOpen(false);
            }
        };

        document.addEventListener("pointerdown", handleClickOutside);

        return () => {
            document.removeEventListener("pointerdown", handleClickOutside);
        };
    }, [burgerIsOpen]);

    return (
        <>
            <div className={`${styles.headerMenu} ${styles.desktopHeaderMenu}`}>
                {menuData.map((item) => (
                    <Link
                        className={`
                            ${styles.headerMenuElem}
                            ${pathnmame === item.link ? `${styles.headerMenuElemActive}` : ""}
                            `}
                        key={item.link}
                        href={item.link}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
            <Button
                ref={burgerButtonRef}
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
                                onClick={() => setBurgerIsOpen(false)}
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
