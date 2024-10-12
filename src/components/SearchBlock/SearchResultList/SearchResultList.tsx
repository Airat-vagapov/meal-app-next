
import MealCard from "@/components/MealCard/MealCard"

import styles from '@/components/SearchBlock/SearchForm/SearchForm.module.sass'

interface ISearchResultList {
    data: any[] | undefined
}

const SearchResultList: React.FC<ISearchResultList> = ({ data }) => {
    return (
        <>
            <div className={styles.searchList}>
                {data && data.map((item, index) => (
                    <div key={index}>
                        <MealCard meal={item} />
                    </div>
                ))}
            </div>

        </>
    )
}

export default SearchResultList;