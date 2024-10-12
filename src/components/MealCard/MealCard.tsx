import styles from './MealCard.module.sass'
interface IMealCard {
    meal: any
    key?: string | number
}

const MealCard: React.FC<IMealCard> = ({ key, meal }) => {
    return (
        <>
            {meal &&
                <div className={styles.mealCard}>
                    <p key={key} className={styles.mealTitle}>{meal?.strMeal}</p>
                </div>
            }
        </>
    )
}
export default MealCard;