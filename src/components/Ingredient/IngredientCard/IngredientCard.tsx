

import styles from '@/components/Ingredient/Ingredient.module.sass'


const IngredientCard = ({ data }: { data: any }) => {
    console.log(data)
    return (
        <div className={styles.card}>
            <div className={styles.card__image}>
                <img src={`https://spoonacular.com/cdn/ingredients_100x100/${data.image}`} alt="" />
            </div>

            <div className={styles.card__content}>
                <p className={styles.card__title}>{data.originalName}</p>
                {data.measures.metric.unitShort ? `${data.measures.metric.amount + ' ' + data.measures.metric.unitShort}` : `${data.measures.metric.amount} pcs`}

                <br />
                {data.aisle}
            </div>


        </div>
    )
}

export default IngredientCard;