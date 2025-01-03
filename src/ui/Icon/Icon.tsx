type IconProps = {
    name: string;
}

const Icon = ({ name }: IconProps) => {
    return (
        <>
            <span className='material-symbols'>{name}</span>
        </>
    )
}

export default Icon;