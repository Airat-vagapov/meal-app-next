import styles from './MealInfoCard.module.sass';

type MealInfoCardProps = {
    healthScore: number;
}

const MealInfoCard = (
    { healthScore }:
        MealInfoCardProps
) => {
    return (
        <div className={styles.card}>
            info
            block
            don
            {healthScore}
        </div>
    )
}

export default MealInfoCard;