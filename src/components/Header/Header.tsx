import Container from "@/components/Container/Container";

import styles from './Header.module.sass'

const Header = () => {
    return (
        <div className={styles.header}>
            <Container>

                <p className={styles.headerTitle}>
                    <a href="/">
                        Mealler
                    </a>
                </p>
            </Container>
        </div>
    )
}

export default Header;