import Container from "@/components/Container/Container";

import styles from './Header.module.sass'

const Header = () => {
    return (
        <div className={styles.header}>
            <Container>
                <p className={styles.headerTitle}>meal app</p>
            </Container>
        </div>
    )
}

export default Header;