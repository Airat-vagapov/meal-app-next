const IngredientCard = ({ data }: { data: any }) => {
    console.log(data)
    return (
        <>
            IngredientCard
            {data.id}
        </>
    )
}

export default IngredientCard;