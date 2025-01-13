import styles from './MealMainBlock.module.sass'

import MealImageCard from '@/components/Meal/MealImageCard/MealImageCard';
import MealInfoCard from '@/components/Meal/MealInfoCard/MealInfoCard'

type MealMainBlockProps = {
    image: string;
};

const MealMainBlock = ({ image }: MealMainBlockProps) => {
    return (
        <div className={styles.meal}>
            <MealImageCard src={image} />
        </div>
    )
}

export default MealMainBlock;