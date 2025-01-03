import classNames from 'classnames';
import styles from './Score.module.sass'

type ScoreProps = {
    label: string;
    value: number | string | boolean;
}

const Score = ({ label, value }: ScoreProps) => {
    const isScore = typeof value === 'number';
    return (
        <div className={styles.score}>
            <span className={styles.score__label}>{label}</span>
            <span className={classNames(styles.score__value, {
                [styles.score__valueRed]: isScore && value > 0 && value < 40,
                [styles.score__valueYellow]: isScore && value > 39 && value < 75,
                [styles.score__valueGreen]: isScore && value > 74 && value < 101,
            })}> {value}</span >
        </div >
    )
}

export default Score;