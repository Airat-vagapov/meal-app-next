import Link from "next/link";
import styles from "./Logo.module.sass";

const Logo = () => {
    return (
        <Link href="/" className={styles.logo}>
            Mealler.
        </Link>
    );
};

export default Logo;
