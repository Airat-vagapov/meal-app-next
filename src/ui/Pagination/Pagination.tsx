import Icon from '@/ui/Icon/Icon'

import styles from './Pagination.module.sass'
import Link from 'next/link';
import classNames from 'classnames';

interface PaginationProps {
    url: string;
    link?: string;
    page: number;
}

const Pagination: React.FC<PaginationProps> = ({ url, link, page }) => {
    let nextUrl = new URL(url)
    let prevUrl = new URL(url)

    nextUrl.searchParams.set('page', (page + 1).toString())
    page > 1 ? prevUrl.searchParams.set('page', (page - 1).toString()) : prevUrl.searchParams.set('page', '0')



    return (
        <div className={styles.pagination}>

            <Link href={prevUrl} className={classNames('link', {
                'disabled': page <= 1
            })}>
                <Icon name={'chevron_left'}></Icon>
            </Link>
            <Link href={nextUrl} className={'link'}>
                <Icon name={'chevron_right'}></Icon>
            </Link>
        </div>
    )
}

export default Pagination;