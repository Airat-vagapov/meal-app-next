type IconProps = {
    name: string;
}

const Icon = ({ name }: IconProps) => {
    return (
        <>
            <span className='material-symbols-outlined icon'>{name}</span>
        </>
    )
}

export default Icon;