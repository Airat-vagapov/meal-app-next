
import Image from 'next/image'

import styles from './MealImageCard.module.sass'

type MealImageCardProps = {
    src: string;
};


const MealImageCard = ({ src }: MealImageCardProps) => {
    return (
        <>
            <div className={styles.mealImage}>
                <Image src={src} fill={true} alt={"meals"} />
            </div>
        </>
    )
}

export default MealImageCard;