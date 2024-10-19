import Link from 'next/link'

import styles from './TextLink.module.sass'

const TextLink = () => {
    return (
        <>
            <Link href='/' legacyBehavior>
                <a href="" className={styles.link}>111</a>
            </Link>
        </>
    )
}

export default TextLink;