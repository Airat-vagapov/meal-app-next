type IconProps = {
    name: string;
    children?: React.ReactNode
}

const Icon = ({ name, children }: IconProps) => {
    return (
        <>
            Icon
            <span className='material-symbols-outlined'>{name}</span>
        </>
    )
}

export default Icon;