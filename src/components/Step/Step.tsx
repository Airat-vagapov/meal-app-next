import List from '@/UI/List/List'
import styles from './Step.module.sass'

const Step = ({ step }: { step: any }) => {
    console.log(step)

    return (
        <div className={styles.stepBlock} >
            <div className={styles.step__numberBlock}>
                <p className={styles.step__numberTitle}>Step</p>
                <div className={styles.step__number}>
                    {step.number}
                </div>
            </div>

            <div className={styles.step__contentBlock}>
                <div>
                    <p className={styles.step__subName}>What needs to do</p>
                    {step.step}
                </div>

                {step.equipment.length > 0 &&
                    <div>
                        <p className={styles.step__subName}>Equipment</p>
                        {step.equipment.length > 0 && step.equipment.map((eq: any, indx: number) => {
                            return (
                                <List key={indx}>
                                    <span key={indx}>{eq.name}</span>
                                </List>
                            )
                        })}
                    </div>
                }


                {step.ingredients.length > 0 &&
                    <div>
                        <p className={styles.step__subName}>Ingredients</p>
                        {step.ingredients.length > 0 && step.ingredients.map((ing: any, ind: number) => {
                            return (
                                <List key={ind}>
                                    <span>{ing.name}</span>
                                </List>
                            )
                        })}
                    </div>
                }

            </div>

        </div>
    )
}

export default Step;