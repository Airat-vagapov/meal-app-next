import styles from './Step.module.sass'

const Step = ({ step }: { step: any }) => {
    console.log(step)

    return (
        <div className={styles.step}>
            {step.number}
            <br />
            {step.step}
            <br />
            {step.equipment.length > 0 && step.equipment.map((eq: any, indx: number) => {
                return (
                    <span key={indx}>{eq.name}</span>
                )
            })}
            <br />
            {step.ingredients.length > 0 && step.ingredients.map((ing: any, ind: number) => {
                return (
                    <span key={ind}>{ing.name}</span>
                )
            })}

        </div>
    )
}

export default Step;