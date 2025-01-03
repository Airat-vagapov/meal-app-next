type IconProps = {
    name: string;
}

const Icon = ({ name }: IconProps) => {
    return (
        <>
            <span className='material-symbols-outlined'>{name}</span>
        </>
    )
}

export default Icon;