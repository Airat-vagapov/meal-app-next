import Image from 'next/image'
import TextLink from '@/UI/TextLink/TextLink'

import styles from './MealCard.module.sass'
import TagGroup from '@/components/TagGroup/TagGroup'
interface IMealCard {
    meal: any
    key?: string | number
}

const MealCard: React.FC<IMealCard> = ({ key, meal }) => {
    const dataArr: string[] = [];
    dataArr.push(meal?.strArea);
    dataArr.push(meal?.strCategory);


    return (
        <>
            {meal &&
                <div key={key} className={styles.mealCard}>

                    <Image src={meal?.strMealThumb} width={120} height={120} alt={meal?.strMeal} />

                    <div className={styles.mealCardContent}>
                        <p className={styles.mealTitle}>{meal?.strMeal}</p>
                        <TagGroup data={dataArr} />
                    </div>

                    <TextLink />
                </div>
            }
        </>
    )
}
export default MealCard;