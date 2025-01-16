import Image from 'next/image'
import TextLink from '@/ui/TextLink/TextLink'

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

                    <img src={meal?.image} alt={meal?.title} />
                    {/* <Image src={meal?.image} width={120} height={120} alt={meal?.title} /> */}

                    <div className={styles.mealCardContent}>
                        <p className={styles.mealTitle}>{meal?.title}</p>
                        <TagGroup data={dataArr} />
                    </div>

                    <div className={styles.mealLink}>
                        <TextLink size={16} text="Show more" link={`/meals/${meal?.id}`} />
                    </div>
                </div>
            }
        </>
    )
}
export default MealCard;