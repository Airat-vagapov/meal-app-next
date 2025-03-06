'use client'
import { useRef } from "react";

import { FormikProps, useFormik } from "formik";

import Input from "@/ui/Input/Input";

import { useGetMealsByNameMutation } from '@/services/mealApi'

import styles from './SearchForm.module.sass';
import classNames from "classnames";

interface FormValues {
    search: string;
    number: number;
    offset: number;
}

interface ISearchForm {
    toUp: boolean
    setMealData: (value: any) => void,
    setIsDataReady: (value: boolean) => void
    setIsFetchError: (value: boolean) => void,
    setFetchErrorData: (value: any) => void,
    setSearchQuery: (value: string) => void,
}

const SearchForm: React.FC<ISearchForm> = ({
    toUp,
    setMealData,
    setIsDataReady,
    setIsFetchError,
    setFetchErrorData,
    setSearchQuery
}) => {
    // Refs
    const searchInputRef = useRef<HTMLInputElement | null>(null)

    // API
    const [getMealsByName, { isLoading, isError, error }] = useGetMealsByNameMutation()

    // Formik
    const searchForm = useFormik({
        initialValues: {
            search: '',
            number: 0,
            offset: 0,
        },
        onSubmit: async (values) => {
            setIsFetchError(false)
            values.offset = 0
            values.number = 5
            try {
                const data = await getMealsByName(values).unwrap()
                setMealData(data?.results)
                setIsDataReady(true)
                setIsFetchError(false)

            } catch (err) {
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
                    console.log(e.target.value)
                    setSearchQuery(e.target.value)
                }
                }
                value={searchForm.values.search} />
            {/* <Input
                inputType='hidden'
                name='number'
                id='number'
                value={'10'}
                onChange={(e) => {
                    changeHandler(e, searchForm)
                }}
            />
            <Input
                inputType='hidden'
                name='offset'
                id='number'
                value={'10'}
                onChange={(e) => {
                    changeHandler(e, searchForm)
                }}

            /> */}
        </form>
    )
}

export default SearchForm;