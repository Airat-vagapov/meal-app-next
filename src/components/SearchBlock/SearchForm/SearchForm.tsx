'use client'
import { useRef } from "react";

import { FormikProps, useFormik } from "formik";

import Input from "@/UI/Input/Input";

import { useGetMealsByNameMutation } from '@/services/mealApi'

import styles from './SearchForm.module.sass';
import classNames from "classnames";

interface FormValues {
    search: string;
}

interface ISearchForm {
    toUp: boolean
    setMealData: (value: any) => void,
    setIsDataReady: (value: boolean) => void
    setIsFetchError: (value: boolean) => void
}

const SearchForm: React.FC<ISearchForm> = ({ toUp, setMealData, setIsDataReady, setIsFetchError }) => {
    // Refs
    const searchInputRef = useRef<HTMLInputElement | null>(null)

    // API
    const [getMealsByName, { isLoading, isError }] = useGetMealsByNameMutation()

    // Formik
    const searchForm = useFormik({
        initialValues: {
            search: '',
        },
        onSubmit: (values) => {
            setIsFetchError(false)
            var res = getMealsByName(values.search)
            console.log(res)

            if (isError) {
                console.log(isError)
                setIsFetchError(true)
                return
            }

            res.then(({ data }) => {
                console.log(data)
                setMealData(data?.results)
                setIsDataReady(true)
                setIsFetchError(false)
            })
        }
    })

    function changeHandler(e: React.ChangeEvent<HTMLInputElement>, formik: FormikProps<FormValues>) {
        formik.handleChange(e)
        const value = searchInputRef.current?.value

        if (value && value?.length > 2) {
            formik.handleSubmit()
        }

        if (value && value?.length < 3) { setIsFetchError(false) }

        if (value && value?.length === 0) {
            // formik.handleSubmit()
            setMealData([])
            setIsDataReady(false)
        }
    }


    return (

        <form className={classNames(styles.searchForm,
            { [styles['searchForm--toUp']]: toUp },
        )
        } onSubmit={searchForm.handleSubmit} >
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


    )
}

export default SearchForm;