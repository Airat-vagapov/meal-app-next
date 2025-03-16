'use client';
import Icon from '@/ui/Icon/Icon'

import { useRouter } from 'next/navigation';
import classNames from 'classnames';

import styles from './BackButton.module.sass'

const BackButton = () => {
    const router = useRouter();

    // Back page return handler
    const historyLength = window.history.length
    console.log(window.history)
    console.log(historyLength)
    const goToBackPage = () => {
        if (historyLength > 1) {
            router.back()
        } else {
            router.push('/')
        }
    }

    return (
        <>
            {historyLength && historyLength > 1 &&
                <div className={classNames('link', styles.backBtn)} onClick={goToBackPage} >
                    <Icon name={'chevron_left'}></Icon>
                    <p>Back</p>
                </div >}
        </>
    )
}

export default BackButton;