import IconsGroup from '@/components/IconsGroup/IconsGroup';
import styles from './MealInfoCard.module.sass';

import { IMealInfoElement } from '@/types/meal'

type MealInfoCardProps = {
    healthScore: number;
    readyInMinutes: number;
    cookingMinutes: number;
    preparationMinutes: number;
    vegan: boolean;
    cheap: boolean;
    veryHealthy: boolean;
    veryPopular: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    spoonacularScore: number;
    weightWatcherSmartPoints: number;
}

const MealInfoCard = (
    {
        healthScore,
        readyInMinutes,
        cookingMinutes,
        preparationMinutes,
        vegan,
        cheap,
        veryHealthy,
        veryPopular,
        glutenFree,
        dairyFree,
        spoonacularScore,
        weightWatcherSmartPoints
    }:
        MealInfoCardProps
) => {
    
    // Create info data array
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
    cookingMinutes && timesArr.push({
        'name': 'Cooking time',
        'value': `${cookingMinutes} min`,
        'icon': 'timer',
    })
    preparationMinutes && timesArr.push({
        'name': 'Cooking time',
        'value': `${preparationMinutes} min`,
        'icon': 'timer',
    })

    const infoData: IMealInfoElement[] = []
    vegan && infoData.push({
        'name': 'Vegan',
        'value': vegan,
        'icon': 'nature',
    })
    veryHealthy && infoData.push({
        'name': 'Very healthy',
        'value': veryHealthy,
        'icon': 'nature',
    })
    veryPopular && infoData.push({
        'name': 'Very popular',
        'value': veryPopular,
        'icon': 'nature',
    })
    glutenFree && infoData.push({
        'name': 'Gluten free',
        'value': glutenFree,
        'icon': 'nature',
    })
    dairyFree && infoData.push({
        'name': 'Dairy free',
        'value': dairyFree,
        'icon': 'nature',
    })
    cheap && infoData.push({
        'name': 'Cheap dish',
        'value': cheap,
        'icon': 'nature',
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