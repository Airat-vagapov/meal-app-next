'use client'

import { Provider } from "react-redux";
import { store } from '@/store/store'

import Container from '@/components/Container/Container'
import MealsPageContent from "@/components/MealsPageContent/MealsPageContent";

import { Suspense } from "react";
import Preloader from "@/ui/Preloader/Preloader";

const MealsPage = () => {


    return (
        <Provider store={store}>
            <Container>
                <Suspense fallback={<Preloader />}>
                    <MealsPageContent />
                </Suspense>
            </Container>
        </Provider >
    )
}

export default MealsPage;