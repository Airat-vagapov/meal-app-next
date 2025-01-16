'use client'
import { useRef } from "react";

import { FormikProps, useFormik } from "formik";

import Input from "@/ui/Input/Input";

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
    setIsFetchError: (value: boolean) => void,
    setFetchErrorData: (value: any) => void
}

const SearchForm: React.FC<ISearchForm> = ({
    toUp,
    setMealData,
    setIsDataReady,
    setIsFetchError,
    setFetchErrorData
}) => {
    // Refs
    const searchInputRef = useRef<HTMLInputElement | null>(null)

    // API
    const [getMealsByName, { isLoading, isError, error }] = useGetMealsByNameMutation()

    // Formik
    const searchForm = useFormik({
        initialValues: {
            search: '',
        },
        onSubmit: async (values) => {
            setIsFetchError(false)

            try {
                const data = await getMealsByName(values.search).unwrap()
                setMealData(data?.results)
                setIsDataReady(true)
                setIsFetchError(false)

            } catch (err) {
                console.error(err)
                setIsFetchError(isError)
                setFetchErrorData(error)
            }
        }
    })

    function changeHandler(e: React.ChangeEvent<HTMLInputElement>, formik: FormikProps<FormValues>) {
        formik.handleChange(e)
        const value = searchInputRef.current?.value

        if (value && value?.length > 2) {
            formik.handleSubmit()
        }

        if (value && value?.length < 2) { setIsFetchError(false) }

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