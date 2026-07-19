import Container from "@/components/Container/Container";

import styles from "./Header.module.sass";
import Logo from "@/components/Logo/Logo";
import HeaderActions from "./HeaderActions/HeaderActions";

const Header = () => {
    return (
        <header className={styles.headerDivider}>
            <Container>
                <div className={styles.header}>
                    <Logo />
                    <HeaderActions />
                </div>
            </Container>
        </header>
    );
};

export default Header;
