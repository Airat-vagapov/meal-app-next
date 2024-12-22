import { useRouter } from "next/router";

interface MealPageProps {
    params: { id: string }
}

const MealPage = ({ params }: MealPageProps) => {
    // const router = useRouter()
    // const { id } = router?.query;

    console.log(params.id);
    // console.log(id);
    return (
        <div>Meal Pag 111e {params.id}</div>
    )
}

export default MealPage;    