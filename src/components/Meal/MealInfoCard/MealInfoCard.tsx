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
    weightWatcherSmartPoints: number;
}

const MealInfoCard = (
    {
        healthScore,
        readyInMinutes,
        vegan,
        veryHealthy,
        veryPopular,
        spoonacularScore,
        weightWatcherSmartPoints
    }:
        MealInfoCardProps
) => {
    // Create info data array
    let infoData: IMealInfoElement[] = []

    const scoresArr: IMealInfoElement[] = []
    healthScore && scoresArr.push({
        'name': 'Health Score',
        'value': healthScore,
        'type': 'score'
    })
    spoonacularScore && scoresArr.push({
        'name': 'Overall score',
        'value': Math.round(spoonacularScore),
        'type': 'score'
    })
    weightWatcherSmartPoints && scoresArr.push({
        'name': 'Weight Watcher',
        'value': weightWatcherSmartPoints,
        'type': 'score'
    })

    const timesArr: IMealInfoElement[] = []
    readyInMinutes && timesArr.push({
        'name': 'Ready in',
        'value': `${readyInMinutes} min`,
        'icon': 'timer',
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

    return (
        <div className={styles.card}>
            <span className={styles.card__title}>Recipe information</span>
            <IconsGroup data={scoresArr} />
            <IconsGroup data={timesArr} />
            <IconsGroup data={infoData} />
        </div>
    )
}

export default MealInfoCard;