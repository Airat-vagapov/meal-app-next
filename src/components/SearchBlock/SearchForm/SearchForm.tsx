'use client'
import { useRef } from "react";

import { FormikProps, useFormik } from "formik";

import Input from "@/ui/Input/Input";

import { useGetMealsByNameMutation } from '@/services/mealApi'

import styles from './SearchForm.module.sass';

interface FormValues {
    search: string;
}

const SearchForm = () => {
    // Refs
    const searchInputRef = useRef<HTMLInputElement | null>(null)

    // API
    const [getMealsByName] = useGetMealsByNameMutation()

    // Formik
    const searchForm = useFormik({
        initialValues: {
            search: '',
        },
        onSubmit: (values) => {
            console.log('SUBMIT')
            console.log(values)

            var res = getMealsByName(values.search)
            res.then(({ data }) => {
                console.log(data.meals)
            })
        }
    })

    function changeHandler(e: React.ChangeEvent<HTMLInputElement>, formik: FormikProps<FormValues>) {
        formik.handleChange(e)
        const value = searchInputRef.current?.value

        if (value && value?.length > 2) {
            formik.handleSubmit()
        }
    }

    return (
        <div className={styles.searchFromBlock}>
            <form className={styles.searchForm} onSubmit={searchForm.handleSubmit}>
                <Input
                    ref={searchInputRef}
                    name="search"
                    id="search"
                    placeholder="Enter meal name"
                    onChange={(e) => {
                        changeHandler(e, searchForm)
                    }
                    }
                    value={searchForm.values.search} />
            </form>
        </div>
    )
}

export default SearchForm;