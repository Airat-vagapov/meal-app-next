import Link from "next/link";

import styles from "./TextLink.module.sass";

interface ITextLink {
    text: string;
}

const TextLink = ({ text }) => {
    return (
        <>
            <Link href="/" legacyBehavior>
                <a href="" className={styles.link}>
                    {text}
                </a>
            </Link>
        </>
    );
};

export default TextLink;
