import RandomSearch from '@/components/RandomSearch/RandomSearch'
import SearchResultList from '@/components/SearchBlock/SearchResultList/SearchResultList'
import { useState } from 'react'

import styles from '../RandomSearch.module.sass'

const RandomSearchBlock = () => {
    // States
    const [meals, setMeals] = useState<any[]>()
    return (
        <div className={styles.formBlock}>
            <RandomSearch setMealData={(v) => setMeals(v)}/>
        <hr />
            {meals?.length && <SearchResultList data={meals} />}
        </div>
    )
}

export default RandomSearchBlock;