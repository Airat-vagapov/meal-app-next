import Icon from '@/ui/Icon/Icon'

import styles from './Pagination.module.sass'
import Link from 'next/link';

interface PaginationProps {
    link: string;
    page: number;
}

const Pagination: React.FC<PaginationProps> = ({ link, page }) => {
    return (
        <div className={styles.pagination}>
            {page > 1 &&
                <Link href={link + `&page=${page - 1}`} className={'link'}>
                    <Icon name={'chevron_left'}></Icon>
                </Link>
            }
            <Link href={link + `&page=${page + 1}`} className={'link'}>
                <Icon name={'chevron_right'}></Icon>
            </Link>
        </div>
    )
}

export default Pagination;