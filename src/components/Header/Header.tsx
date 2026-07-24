import Container from "@/components/Container/Container";

import styles from "./Header.module.sass";
import Logo from "@/components/Logo/Logo";
import HeaderActions from "./HeaderActions/HeaderActions";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header}>
                <Container>
                    <div className={styles.headerInner}>
                        <Logo />
                        <HeaderActions />
                    </div>
                </Container>
            </div>
            {/* </div> */}
        </header>
    );
};

export default Header;
