import List from '@/UI/List/List'
import IngredientCard from '@/components/Ingredient/IngredientCard/IngredientCard'

const IngredientList = ({ data }: { data: any[] }) => {
    console.log(data)
    return (
        <List>
            {data && data.map((item: any, index: number) => {
                return (
                    <div key={index}>
                        <IngredientCard data={item} />
                    </div>
                )

            })}
        </List>
    )
}

export default IngredientList;