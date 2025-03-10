
import MealCard from "@/components/MealCard/MealCard"
import InfoBlock from '@/components/InfoBlock/InfoBlock'
import TextLink from "@/ui/TextLink/TextLink";

import styles from '@/components/SearchBlock/SearchForm/SearchForm.module.sass'
import Button from "@/ui/Button/Button";

interface ISearchResultList {
    data: any[] | undefined,
    searchQuery: string,
}

const SearchResultList: React.FC<ISearchResultList> = ({ data, searchQuery }) => {
    return (
        <>
            {data?.length
                ?
                <>
                    <div className={styles.searchList}>
                        {data && data.map((item, index) => (
                            <MealCard key={index} meal={item} />
                        ))}
                    </div>
                    <div className={styles.searchList__link}>
                        <Button link={`/meals/?query=${searchQuery}`}>Show all</Button>
                    </div>
                </>
                : <InfoBlock />
            }
        </>
    )
}

export default SearchResultList;