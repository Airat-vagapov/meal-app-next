

import styles from '@/components/Ingredient/Ingredient.module.sass'


const IngredientCard = ({ data }: { data: any }) => {
    console.log(data)
    return (
        <div className={styles.card}>
            <div className={styles.card__image}>
                <img src={`https://spoonacular.com/cdn/ingredients_100x100/${data.image}`} alt="" />
            </div>
            {data.original}
            {data.aisle}
            {data.amount}
            {data.consistency}
            {data.image}
            {data.unit}
        </div>
    )
}

export default IngredientCard;