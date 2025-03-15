'use client'

import { Provider } from "react-redux";
import { store } from '@/store/store'

import Container from '@/components/Container/Container'
import MealsPageContent from "@/components/MealsPageContent/MealsPageContent";

import { Suspense } from "react";

const MealsPage = () => {


    return (
        <Provider store={store}>
            <Container>
                <Suspense fallback={<div>Loading...</div>}>
                    <MealsPageContent />
                </Suspense>
            </Container>
        </Provider >
    )
}

export default MealsPage;