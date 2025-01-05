const IngredientCard = ({ data }: { data: any }) => {
    console.log(data)
    return (
        <div>
            IngredientCard
            {data.id}
        </div>
    )
}

export default IngredientCard;