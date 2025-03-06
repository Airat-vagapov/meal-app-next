'use client'

import { useSearchParams } from "next/navigation";


const MealsPage = () => {
    const searchParams = useSearchParams()
    const searchQuery = searchParams.get("query")

    
    return (
        <div>
            <h1>Meals Page</h1>

        </div>
    )
}

export default MealsPage;