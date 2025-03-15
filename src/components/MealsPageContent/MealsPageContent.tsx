import MealList from '@/components/MealList/MealList'
import PageTitle from '@/ui/PageTitle/PageTitle'
import Content from '@/ui/Content/Content'

import { useSearchParams } from "next/navigation";

const MealsPageContent = () => {
    const searchParams = useSearchParams()
    const searchQuery = searchParams.get("query") ?? ''
    return (
        <Content>
            <PageTitle title="Meals" desc={'Search result by "' + searchQuery + '"'} />
            <MealList searchParams={searchParams} />
        </Content>
    )
}

export default MealsPageContent;