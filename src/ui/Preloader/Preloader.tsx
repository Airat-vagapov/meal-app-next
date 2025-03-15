import { useEffect } from 'react';
import styles from './Preloader.module.sass'

const Preloader = () => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [])
    return (
        <div className={styles.preloader}>
            <div className={styles.preloaderContent}>
                <div className={styles.lds_roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    )
}

export default Preloader;