import classNames from 'classnames';
import styles from './Icon.module.sass'

type IconProps = {
    name: string;
    size?: number;
    color?: string
}

const Icon = ({ name, size, color }: IconProps) => {
    return (
        <>
            <span className={classNames('material-symbols-outlined', 'icon', {
                [styles[`icon-s${size}`]]: size,
                [styles[`icon-color-${color}`]]: color,
            })}>{name}</span>
            {/* <span className='material-symbols-outlined icon'>{name}</span> */}
        </>
    )
}

export default Icon;