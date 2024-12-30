import IconsGroup from '@/components/IconsGroup/IconsGroup';
import styles from './MealInfoCard.module.sass';

import { IMealInfoElement } from '@/types/meal'

type MealInfoCardProps = {
    healthScore: number;
    readyInMinutes: number;
    vegan: boolean;
    veryHealthy: boolean;
    veryPopular: boolean;
    spoonacularScore: number;
}

const MealInfoCard = (
    {
        healthScore,
        readyInMinutes,
        vegan,
        veryHealthy,
        veryPopular,
        spoonacularScore
    }:
        MealInfoCardProps
) => {
    // Create info data array
    let infoData: IMealInfoElement[] = []

    healthScore && infoData.push({
        'name': 'Health Score',
        'value': healthScore,
    })
    readyInMinutes && infoData.push({
        'name': 'Ready in',
        'value': readyInMinutes,
    })
    vegan && infoData.push({
        'name': 'Vegan',
        'value': vegan,
    })
    veryHealthy && infoData.push({
        'name': 'Very healthy',
        'value': veryHealthy,
    })
    veryPopular && infoData.push({
        'name': 'Very popular',
        'value': veryPopular,
    })
    spoonacularScore && infoData.push({
        'name': 'Overall score',
        'value': Math.round(spoonacularScore),
    })


    return (
        <div className={styles.card}>
            info
            block
            don
            {healthScore}
            <IconsGroup data={infoData} />
        </div>
    )
}

export default MealInfoCard;